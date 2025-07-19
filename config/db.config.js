import mongoose from 'mongoose'

let catched = global.mongoose || {conn: null, promise: null}

export const connectDB = async () => {
    try {
        if (catched.conn) {
            return catched.promise
        }
        if(!catched.promise) {
            catched.promise = mongoose.connect(process.env.MONGODB_URL).then(mongoose => mongoose)
        }
        catched.conn = await catched.promise
    } catch (error) {
        console.log("MongoDB connection Failed: ", error)
    }
    return catched.conn
}