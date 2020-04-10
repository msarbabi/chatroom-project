import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ChatCards from "../Components/ChatCard/ChatCards";
import Header from "../Components/Header";
import AddBTN from "../Components/AddBTN";
import { ToastContainer } from "react-toastify";

const App = () => {
    const users = useSelector((state) => state.users);
    return (
        <Fragment>
            <div className='container align-middle'>
                <Header />
                <AddBTN />
                <ChatCards users={users} />
            </div>
            <ToastContainer autoClose={8000} />
        </Fragment>
    );
};

export default App;
