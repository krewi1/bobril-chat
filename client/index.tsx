import * as b from "bobril";
import io from "socket.io-client";

const socket = io("localhost:3000");
socket.emit("message", {text: "hello"});

b.init(() => {
    return (
        <div>
            Hello world
        </div>
    )
});