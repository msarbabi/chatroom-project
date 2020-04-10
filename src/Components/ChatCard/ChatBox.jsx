import React from "react";
import { useSelector } from "react-redux";

const ChatBox = ({ name }) => {
    const messages = useSelector((state) => state.messages);
    return (
        <div className='card-body'>
            <div className='chat'>
                <div className='container'>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={
                                message.name === name
                                    ? "message-orange"
                                    : "message-blue"
                            }
                        >
                            <p className='message-content'>
                                <b>
                                    <i>{message.name}</i>
                                </b>
                                : {message.message}
                            </p>
                            <div className='message-timestamp'>{`${message.date[1]} : ${message.date[0]}`}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
