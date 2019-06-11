import * as b from "bobril";
import { SocketContext } from "../app";

export type RoomEmitter = [string, (value: string) => void, () => void];

export function useRoomEmitter(room: string, userName: string): RoomEmitter {
    const {socket} = b.useContext(SocketContext);

    if (!socket) {
        throw "No socket found in context";
    }

    const [text, setText] = b.useState("");
    return [
        text,
        setText,
        () => {
            socket.emit(room, {
                message: text,
                author: userName,
                created: new Date()
            })
        }
    ]
}