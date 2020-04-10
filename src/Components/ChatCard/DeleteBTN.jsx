import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../Redux/action/user";
import { successMessage } from "../../utils/toastMessage";

const DeleteBTN = ({ id }) => {
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(removeUser(id));
        successMessage("کاربر حذف شد.");
    };

    return (
        <form onSubmit={handleSubmit}>
            <button
                name='deletUser'
                className='btn btn-danger btn-block'
                style={{ cursor: "pointer" }}
                type='submit'
            >
                حذف کاربر
            </button>
        </form>
    );
};

export default DeleteBTN;
