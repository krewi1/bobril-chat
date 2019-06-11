import * as b from "bobril";

interface IData {
    children: b.IBobrilChildren;
}

export function Layout(data: IData) {
    return <div style={LayoutStyle}>{data.children}</div>;
}

const LayoutStyle = b.styleDef({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "25px",
    boxSizing: "border-box"
});
