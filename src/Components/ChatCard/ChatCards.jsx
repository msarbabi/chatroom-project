import React, { Fragment } from "react";

import ChatCard from "./ChatCard";

const chatCards = ({ users }) => {
    return (
        <Fragment>
            <div>
                {users.map((user) => (
                    <ChatCard id={user.id} name={user.name} key={user.id} />
                ))}
            </div>
        </Fragment>
    );
};

export default chatCards;
