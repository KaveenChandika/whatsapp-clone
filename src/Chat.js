import { Avatar,IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import React,{ useState} from 'react'
import "./Chat.css";
import MicIcon from '@material-ui/icons/Mic'
import { InsertEmoticon } from '@material-ui/icons';
import axios from './axios';
function Chat({messages}) {
    const [input,setInput] = useState("");

    const sendMessages = async (e) =>{
        e.preventDefault();
        if(input){
            await axios.post('/messages/new',{
                message:input,
                name:"DEMO APP",
                timestamp:"JUST NOW!",
                received:true
            });
        }else{
            alert("Please set you message");
        }

        setInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerinfo" >
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>
          
                <div className="chat_headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            
            <div className="chat__body">
                {messages.map((message)=>(
                    <p className={`chat__message ${message.received && "chat__receiver" }`}>
                        <span className="chat__name">{message.name}</span>    
                        {message.message}
                        <span className="chat_timestamp" >
                            {message.timestamp}
                        </span>
                    </p>
                ))} 
            </div>

            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input 
                        value={input}
                        placeholder="Type a message"
                        type="text"
                        onChange={e=> setInput(e.target.value)}
                    />
                    <button onClick={sendMessages} >
                        Send a message
                    </button>
                </form>
                <MicIcon/>
            </div>

        </div>
    )
}

export default Chat
