import * as r from "react";
import { SocketContext } from "../app";

export type RoomEmitter = [string, (value: string) => void, () => void];

export function useRoomEmitter(room: string, userName: string): RoomEmitter {
    const {socket} = r.useContext(SocketContext);

    if (!socket) {
        throw "No socket found in context";
    }

    const [text, setText] = r.useState("");
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