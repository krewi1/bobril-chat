import * as b from "bobril";

interface IData {
    children: b.IBobrilChildren;
}

export function ChatWindow(data: IData) {
    return (
        <div style={ChatWindowStyle}>
            {data.children}
        </div>
    )
}

const ChatWindowStyle = b.styleDef({
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    overflowY: "auto"
});