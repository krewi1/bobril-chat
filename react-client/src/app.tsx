import * as b from "react";
import { ChatPage } from "./index";
import * as io from "socket.io-client";
import Socket = SocketIOClient.Socket;

interface ISocketContext {
    socket: Socket | null
}

export const SocketContext = b.createContext<ISocketContext>({
    socket: null
});


export class App extends b.Component {
    socket: Socket;
    constructor() {
        super();
        this.socket = io("/");
        b.addDisposable(this, () => this.socket.close());
    }
    componentWillUnmount(): void {
        this.socket.close();
    }

    render() {
        b.useProvideContext(SocketContext, {
            socket: this.socket
        });
        return (
            <ChatPage/>
        )
    }

}