import * as b from "react";

export function InteractionRow(data: b.PropsWithChildren<{}>) {
    return <div style={{ display: "flex", flexBasis: "100px", paddingBottom: "10px" }}>{data.children}</div>;
}
