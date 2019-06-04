import * as b from "bobril";

interface IData {
    content: string;
    author: string;
    time: Date;
    fromCurrentUser?: boolean;
}

b.injectCss("@keyframes fadeIn { from {opacity: 0; transform: translateY(100%);} to {opacity: 1;}}");

export function Message(data: IData) {
    const {
        author,
        content,
        time,
        fromCurrentUser = false
    } = data;

    return (
        <div key="chat-message" style={messageStyle}>
            <div>{author}, {time.toDateString()}</div>
            <div style={{flexGrow: 1, display: "flex"}}>
                <div style={fromCurrentUser ? FromCurrent : FromAnother}>
                    <div>
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

const FromCurrent = b.styleDef({
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
});

const FromAnother = b.styleDef({
    backgroundColor: "gray",
    borderRadius: "5px",
    minWidth: "250px",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginLeft: "auto",
    minHeight: "50px",
    display: "flex",
    justifyContent: "flex-end"
});

const messageStyle = b.styleDef({
    display: "flex",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginBottom: "5px"
});