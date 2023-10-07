import React, {useState, useEffect } from 'react'
import { connect, sendMsg } from '../api/index';
import OldMessages from "../components/OldMessages";

export interface Isend {
    send: () => void
}

export interface Message {
    data: string;
}

const Home: React.FC = () => {

    const [MessagesHistory, setMessagesHistory] = useState<Message[]>([]);

    // const send = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === "Enter") {
    //       sendMsg((event.target as HTMLInputElement).value);
    //       (event.target as HTMLInputElement).value = "";
    //     }
    // };

    const send = () => {
        sendMsg("test");
    };
    
    useEffect(() => {
        connect((msg: Message) => {
          console.log("New Message");
          setMessagesHistory(prevHistory => [...prevHistory, msg]);
        });
      }, []);


    return (
        
        <div className="h-full bg-blue-300 flex flex-col justify-center items-center">
            <OldMessages MessagesHistory={MessagesHistory} />
            <button className="bg-blue-500 hover:bg-transparent border-2 border-blue-500 
                            hover:text-blue-500 hover:font-bold text-white py-2 px-5 rounded" 
                            onClick={send}>
                Envoyer
            </button>
        </div>

    )

}

export default Home

