import * as b from "react";
import { ChatWindow } from "./chatWindow";
import { InteractionRow } from "./interactionRow";
import { Layout } from "./layout";
import { Message } from "./message";
import { useRoomEmitter } from "./socketHooks/emitter";
import { useRoomListener } from "./socketHooks/listener";

export function ChatPage() {
    const [userName, setUserName] = b.useState("anonymous");
    const [text, setText, submit] = useRoomEmitter("message", userName);
    const messages = useRoomListener("message");
    return (
        <Layout>
            <div>
                <label>UserName</label>
                <input onChange={(event: b.ChangeEvent<HTMLInputElement>) => setUserName(event.target.value)}/>
            </div>
            <ChatWindow>
                {messages.map(({message, author, created}, index) => <Message key={`${index}`} content={message}
                                                                           author={author}
                                                                           time={created}
                                                                           fromCurrentUser={author === userName}/>)}
            </ChatWindow>
            <InteractionRow>
                <textarea value={text} onChange={(event: b.ChangeEvent<HTMLTextAreaElement>) => setText(event.target.value)} style={{display: "block", flexGrow: 1, marginRight: "10px"}}/>
                <button onClick={() => {
                    setText("");
                    submit();
                    return true;
                }} style={{width: "100px", paddingRight: "15px"}}>Odeslat</button>
            </InteractionRow>
        </Layout>
    )
}

