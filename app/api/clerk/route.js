import { Webhook } from "svix";
import { connectDB } from "@/config/db.config";
import { User } from "@/models/user.model";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const wh = new Webhook(process.env.SIGNING_SECRET);
    const headerPayload = await headers()
    const svixHeaders = {
        "svix-id": headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature"),
        "svix-timestamp": headerPayload.get("svix-timestamp")
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);
    const {data, type} = wh.verify(body, svixHeaders)

    const userData = {
        _id: data.id,
        name: `${data.first_name} ${data.last_name}`,
        email: data.email_addresses[0].email_address,
        image: data.image_url
        
    }

    await connectDB()

    switch(type) {
        case "user.created":
            await User.create(userData)
            break;
        case "user.updated":
            await User.findOneAndUpdate(data.id, userData)
            break;
        case "user.deleted":
            await User.findOneAndDelete(data.id)
            break;
        default:
            break;
    }

    return NextResponse.json({message: "Event Received"})
};