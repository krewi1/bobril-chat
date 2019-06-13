import * as b from "react";
import "./chat.css";

interface IData {
    author: string;
    time: Date;
    fromCurrentUser?: boolean;
    children: string;
}

export function Message(data: IData) {
    const { author, children, time, fromCurrentUser = false } = data;

    return (
        <div key="chat-message" style={messageStyle}>
            <div>
                {author}, {time.toDateString()}
            </div>
            <div style={{ flexGrow: 1, display: "flex" }}>
                <div style={fromCurrentUser ? FromCurrent : FromAnother}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

const Base = {
    borderRadius: "5px",
    minWidth: "250px",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginBottom: "5px",
    marginLeft: "auto",
    minHeight: "50px",
    display: "flex",
    justifyContent: "flex-end"
};

const FromCurrent = {
    backgroundColor: "#72bf44",
    ...Base
};

const FromAnother = {
    backgroundColor: "gray",
    ...Base
};

const messageStyle = {
    display: "flex",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginBottom: "5px"
};
