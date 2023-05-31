import Image from 'next/image';
import { createChatBotMessage } from 'react-chatbot-kit';


const config = {
  initialMessages: [createChatBotMessage(`welcome to Webhopers`)],
  customComponents: {
   
   botAvatar: (props) => <Image src={require('@/public/images/bot.png')} alt='webhopers' className='' style={{objectFit:'contain'}} width={35} height={25} {...props} />,
  
 },
   
};

export default config;