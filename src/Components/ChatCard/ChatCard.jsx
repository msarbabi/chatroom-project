import React, { Fragment, Component } from "react";

import SendImput from "./SendInput";
import ChatBox from "./ChatBox";
import DeleteBTN from "./DeleteBTN";

class ChatCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
    }

    render() {
        const style = {
            opacity: "0.1 !important",
            width: "45%",
        };

        return (
            <Fragment>
                <div className='card text-right card-style' style={style}>
                    <DeleteBTN id={this.props.id} />
                    <div
                        className='card-header bg-success text-center'
                        style={{ color: "white" }}
                    >
                        {this.props.name}
                    </div>
                    <ChatBox name={this.props.name} />

                    <SendImput name={this.props.name} />
                </div>
            </Fragment>
        );
    }
}

export default ChatCard;
