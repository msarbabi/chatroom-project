import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../Redux/action/message";
import { errorMessege } from "../../utils/toastMessage";

const SendImput = ({ name }) => {
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (message) {
            dispatch(addMessage(name, message));
            setMessage("");
        } else {
            errorMessege("عزیزم آخه چی نوشتی که من ارسالش کنم؟");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-group p-2'>
                <div className='input-group-btn'>
                    <button className='btn btn-outline-primary' type='submit'>
                        <i className='fa fa-paper-plane' aria-hidden='true'></i>
                    </button>
                </div>
                <input
                    type='text'
                    name='message'
                    className='form-control'
                    placeholder=''
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
        </form>
    );
};
export default SendImput;
