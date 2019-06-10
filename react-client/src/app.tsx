import * as b from "react";
import * as io from "socket.io-client";
import { ChatPage } from "./chatPage";
import Socket = SocketIOClient.Socket;

interface ISocketContext {
    socket: Socket | null
}

export const SocketContext = b.createContext<ISocketContext>({
    socket: null
});


export class App extends b.Component {
    public socket: Socket;
    constructor(props: never) {
        super(props);
        this.socket = io("http://localhost:3001");
    }
    public componentWillUnmount(): void {
        this.socket.close();
    }

    public render() {
        debugger;
        return (
            <SocketContext.Provider value={{
                socket: this.socket
            }}>
                <ChatPage/>
            </SocketContext.Provider>
        )
    }

}