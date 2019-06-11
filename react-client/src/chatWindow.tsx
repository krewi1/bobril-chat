import * as b from "react";

export function ChatWindow(data: b.PropsWithChildren<{}>) {
    return (
        <div
            style={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                overflowY: "auto"
            }}
        >
            {data.children}
        </div>
    );
}
