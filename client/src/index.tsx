import * as b from "bobril";
import { EventResult, useRef } from "bobril";
import { Layout } from "./layout";
import { ChatWindow } from "./chatWindow";
import { InteractionRow } from "./interactionRow";
import { Message } from "./message";
import {connect} from "socket.io-client";
import Socket = SocketIOClient.Socket;

interface MessageData {
    message: string;
    author: string;
    time: Date;
}

let callback: (value: string, user: string) => void;

function backDoor(messages: MessageData[], setMessages: (messages: MessageData[]) => void) {
    const m = [...messages];
    callback = (value: string, user: string) => {
        const item: MessageData = {
            author: user,
            message: value,
            time: new Date()
        };
        m.push(item);
        setMessages([...m]);
    }
}

function useSocketClient(url) {
    let client = b.useRef(undefined);
    b.useEffect(() => {
        //make subscription
        client.current = connect(url);

        return () => client.current.close();
    }, []);
    return client;
}

function useMesageSubscription(client?: Socket) {
    const [messages, setMessaged] = b.useState<MessageData[]>([]);
    b.useEffect(() => {
        if (client) {
            client.on("message", (message: MessageData) => setMessaged([...messages, message]))
        }
    }, [client]);
    return messages;
}

function useMessageSender(client?: Socket) {
    const [text, setText] = b.useState("");
    const [userName, setUserName] = b.useState("anonymous");
    const submit = b.useRef(() => undefined);
    b.useEffect(() => {
        if (client) {
            submit.current = () => {
                client.send("send-message", {
                    text,
                    userName,
                    createdAt: new Date()
                })
            }
        }
    }, [client]);
    return {
        text,
        setText,
        userName,
        setUserName,
        submit
    }
}

function postMessage(value: string, user: string): b.GenericEventResult {
    // socket post message
    callback(value, user);
    return EventResult.HandledPreventDefault;
}

export function ChatPage() {
    const client = useSocketClient("http://localhost");
    const {

    } = useMessageSender(client);
    return (
        <Layout>
            <div>

            </div>
            <ChatWindow>
                {messages.map(({message, author, time}) => <Message content={message}
                                                                           author={author}
                                                                           time={time}
                                                                           fromCurrentUser={author === userName}/>)}
            </ChatWindow>
            <InteractionRow>
                <textarea value={text} onChange={setText} style={{display: "block", flexGrow: 1, marginRight: "10px"}}/>
                <button onClick={() => {
                    setText("");
                    return sendMessage.current(text, userName);
                }} style={{width: "100px", paddingRight: "15px"}}>Odeslat</button>
            </InteractionRow>
        </Layout>
    )
}

