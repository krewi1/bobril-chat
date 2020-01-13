import * as b from "bobril";
import { App } from "./src/app";

b.init(() => {
    return <App />;
});

declare global {
    interface Window {
        io: SocketIOClientStatic;
    }
}
