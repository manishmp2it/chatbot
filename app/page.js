'use client'
import Image from 'next/image'
import { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import MessageParser from './components/MessageParser';
import ActionProvider from './components/ActionProvider';
import config from './components/Config';
import { BsChatDotsFill } from "react-icons/bs"

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen)
  }

  const validateInput = (props) => {
    let previou_question = '';
    let val = localStorage.getItem("chat_messages")
    if (val != undefined && val != null && val != "undefined") {
      const messages = JSON.parse(val);
      previou_question = messages.message
      // return messages;
    }

    if (previou_question == "Please Provide your mobile no.") {
      if (props.length >= 10) {
        return true;
      }
    }

    console.log(previou_question)
  }

  const saveMessages = (messages) => {
    console.log("saved")
    if (messages != undefined) {
      localStorage.setItem("chat_messages", JSON.stringify(messages));
    }
  };

  const loadMessages = () => {
    let val = localStorage.getItem("chat_messages")
    if (val != undefined && val != null && val != "undefined") {
      const messages = JSON.parse(val);
      console.log(messages)
      return messages;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow">
        <div className="container mx-auto py-4 px-8">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </div>
      <div className="container mx-auto py-4 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Dashboard cards or widgets */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card 1</h2>
            {/* Card content */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card 2</h2>
            {/* Card content */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card 3</h2>
            {/* Card content */}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card 4</h2>
            {/* Card content */}
          </div>
        </div>
      </div>
      <div className='absolute bottom-14 right-0 pb-1 transition'>
        {isChatbotOpen ? (
          <Chatbot
            config={config}

            actionProvider={ActionProvider}
            headerText='Webhopers Infotech'
            validator={validateInput}
            // runInitialMessagesWithHistory
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            // saveMessages={saveMessages}
          />
        ) : null}

      </div>
      <button className='bg-[#2898ec] text-white p-4 right-0 bottom-1 absolute rounded-full ' onClick={toggleChatbot}><BsChatDotsFill size={24} /></button>
    </div>
  )
}
