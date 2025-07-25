'use client'
import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div>
      <div className="flex h-screen">
        
        <Sidebar expand={expand} setExpand={setExpand}/>

        <div className="flex flex-col flex-1 h-full items-center justify-center px-4 pb-8 text-white relative bg-[#292a2d]">
          <div className="md:hidden px-4 absolute top-6 flex items-center justify-between w-full">
            <Image onClick={() => (expand ? setExpand(false): setExpand(true))} className="rotate-180" src={assets.menu_icon} width={24} height={24} alt="sidebar_icon"/>
            <Image className="opacity-70" src={assets.chat_icon} width={24} height={24} alt="sidebar_icon"/>
          </div>

          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="logo_icon" className="h-16"/>
                <p className="text-2xl font-medium">Hi, I'm Promptify</p>
              </div>
              <p className="text-sm mt-2">How can I help you today</p>
            </>
          ) : (
            <div>
              <Message role={'user'} content={'What is next js'}/>
            </div>
          )}

          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading}/>
          <p className="text-xs absolute bottom-1 text-gray-500">AI-generated, for reference only</p>
        </div>
      </div>
    </div>
  );
}
