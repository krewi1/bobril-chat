import * as b from "react";


export function Layout(data: b.PropsWithChildren<{}>) {
    return (
        <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "25px", boxSizing: "border-box"}}>
            {data.children}
        </div>
    )
}