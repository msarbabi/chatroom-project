import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addUser } from "../Redux/action/user";
import { errorMessege, successMessage } from "../utils/toastMessage";

const AddBTN = () => {
    const [user, setUser] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (user) {
            dispatch(addUser(user));
            setUser("");
            successMessage("کاربر با موفقیت ذخیره شد.");
        } else {
            errorMessege("خدا وکیلی اسمو چی ذخیره کنم؟! یه اسم بده جانم");
        }
    };

    return (
        <div className='bt'>
            <form onSubmit={handleSubmit} className='form-inline'>
                <div className='form-group'>
                    <input
                        type='text'
                        className='form-control text-center'
                        placeholder='افزودن کاربر'
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>

                <button className='btn btn-primary btn-ms btn-block'>
                    اضافه کن
                </button>
            </form>
        </div>
    );
};

export default AddBTN;
