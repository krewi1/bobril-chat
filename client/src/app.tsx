import * as b from "bobril/index";
import { ChatPage } from "./index";
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
    render() {
        b.useProvideContext(SocketContext, {
            socket: this.socket
        });
        return (
            <ChatPage/>
        )
    }

}