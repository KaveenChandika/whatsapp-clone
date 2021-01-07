import React, { useEffect, useState } from 'react';
import './App.css';
import Siddebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import axios from './axios';
function App() {
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    axios.get('/messages/sync')
      .then(response=>{
        setMessages(response.data);
      })
  },[]);  

  console.log(messages);

  useEffect(()=>{
      const pusher = new Pusher('bab4eaf3e8a2591d1b5e', {
        cluster: 'eu'
      });

      const channel = pusher.subscribe('messages');
      channel.bind('inserted', function(newMessage) {
        setMessages([...messages,newMessage])
      });

      return () =>{
        channel.unbind_all();
        channel.unsubscribe();
      }      
  },[messages])

  return (
    <div className="app">
      <div className="app__body">
          <Siddebar />
          <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
