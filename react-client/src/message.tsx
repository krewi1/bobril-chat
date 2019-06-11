import * as b from "react";
import "./chat.css";

interface IData {
    content: string;
    author: string;
    time: Date;
    fromCurrentUser?: boolean;
}

export function Message(data: IData) {
    const { author, content, time, fromCurrentUser = false } = data;

    return (
        <div key="chat-message" style={messageStyle}>
            <div>
                {author}, {time.toDateString()}
            </div>
            <div style={{ flexGrow: 1, display: "flex" }}>
                <div style={fromCurrentUser ? FromCurrent : FromAnother}>
                    <div>{content}</div>
                </div>
            </div>
        </div>
    );
}

const FromCurrent = {
    backgroundColor: "#72bf44",
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

const FromAnother = {
    backgroundColor: "gray",
    borderRadius: "5px",
    minWidth: "250px",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginLeft: "auto",
    minHeight: "50px",
    display: "flex",
    justifyContent: "flex-end"
};

const messageStyle = {
    display: "flex",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginBottom: "5px"
};
