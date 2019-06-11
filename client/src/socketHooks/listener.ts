import * as b from "bobril";
import { SocketContext } from "../app";

interface IMessage {
    message: string;
    author: string;
    created: Date;
}

interface IMessageIncome {
    message: string;
    author: string;
    created: string;
}

export function useRoomListener(room: string): IMessage[] {
    const { socket } = b.useContext(SocketContext);

    if (!socket) {
        throw "No socket found in context";
    }

    const [messages, setMessages] = b.useState<IMessage[]>([]);

    b.useEffect(() => {
        socket.on(room, ({ author, created, message }: IMessageIncome) => {
            debugger;
            setMessages(messages => [
                ...messages,
                {
                    author,
                    message,
                    created: new Date(created)
                }
            ]);
        });
        return () => {
            socket.off(room);
        };
    }, [room, socket]);

    return messages;
}
