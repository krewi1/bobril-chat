import * as b from "bobril";

interface IData {
    author: string;
    time: Date;
    fromCurrentUser?: boolean;
    children: string
}

b.injectCss("@keyframes fadeIn { from {opacity: 0; transform: translateY(100%);} to {opacity: 1;}}");

export function Message(data: IData) {
    const { author, children, time, fromCurrentUser = false } = data;

    return (
        <div key="chat-message" style={messageStyle}>
            <div>
                {author}, {time.toDateString()}
            </div>
            <div style={WrapperStyle}>
                <div style={[BaseStyle, fromCurrentUser ? FromCurrent : FromAnother]}>
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

const WrapperStyle = b.styleDef({
    flexGrow: 1,
    display: "flex"
});

const BaseStyle = b.styleDef({
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

const FromCurrent = b.styleDef({
    backgroundColor: "#72bf44"
});

const FromAnother = b.styleDef({
    backgroundColor: "gray"
});

const messageStyle = b.styleDef({
    display: "flex",
    alignItems: "center",
    animation: "fadeIn .5s linear",
    marginBottom: "5px"
});
