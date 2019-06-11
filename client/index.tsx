import * as b from "bobril";
import { App } from "./src/app";

b.asset("./node_modules/socket.io-client/dist/socket.io.js");

b.init(() => {
    return <App />;
});

declare global {
    interface Window {
        io: SocketIOClientStatic;
    }
}
