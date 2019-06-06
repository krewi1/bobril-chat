import * as b from "bobril";

interface IData {
    children: b.IBobrilChildren;
}

export function InteractionRow(data: IData) {
    return (
        <div style={{display: "flex", flexBasis: "100px", paddingBottom: "10px"}}>
            {data.children}
        </div>
    )
}
