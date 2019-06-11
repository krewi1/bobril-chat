import * as b from "bobril";

interface IData {
    children: b.IBobrilChildren;
}

export function InteractionRow(data: IData) {
    return <div style={InteractionRowStyle}>{data.children}</div>;
}

const InteractionRowStyle = b.styleDef({
    display: "flex",
    flexBasis: "100px",
    paddingBottom: "10px"
});
