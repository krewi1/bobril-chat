import * as b from "bobril";
import { ChatPage } from "./chatPage";
import io from "socket.io-client";
import Socket = SocketIOClient.Socket;

interface ISocketContext {
    socket: Socket | null;
}

export const SocketContext = b.createContext<ISocketContext>({
    socket: null
});

export class App extends b.Component {
    socket: Socket;
    constructor() {
        super();
        this.socket = io("http://localhost:3001");
        b.addDisposable(this, () => this.socket.close());
    }
    render() {
        b.useProvideContext(SocketContext, {
            socket: this.socket
        });
        return <ChatPage />;
    }
}
