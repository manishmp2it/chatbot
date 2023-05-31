import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage1 = createChatBotMessage('Hello. Nice to meet you.');
        const botMessage2 = createChatBotMessage('Please Provide your mobile no.',{delay:1000,});

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage1,botMessage2],
        }));
        localStorage.setItem("chat_messages", JSON.stringify(botMessage2));
    };

    const handleAny=()=>{
        const botMessage = createChatBotMessage('Please ask another query!');

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        handleHello,
                        handleAny
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;