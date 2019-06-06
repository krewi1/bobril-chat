import * as b from "bobril";
import Socket = SocketIOClient.Socket;
import { ChatPage } from "./src/index";

b.asset("./node_modules/socket.io-client/dist/socket.io.js");

interface ISocketContext {
    socket: Socket | null
}

export const SocketContext = b.createContext<ISocketContext>({
    socket: null
});


b.init(() => {
    return (
        <App/>
    )
});

function App() {
    b.useProvideContext(SocketContext, {
        socket: io("http://localhost:3000")
    });
    return (
        <ChatPage/>
    )
}

declare global {
    interface Window {
        io: SocketIOClientStatic;
    }
}