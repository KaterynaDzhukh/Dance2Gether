import { useEffect, useState,useContext } from "react";
import Conversation from '../components/Conversation'
import Message from "../components/Message";
import { AuthContext } from "../contex/AuthContex";
import axios from "axios";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3000");

 const Messenger=() => {
  const [conversations, setConversations] = useState([]);

  const{user}=useContext(AuthContext)
  console.log(user)

  
  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/conversation/${user._id}`);
        console.log(res.data)
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  return (
    <>
   <h1>hello</h1>
   <div>
   <Conversation/>
   <Conversation/>
   <Conversation/>
   <Conversation/>
   </div>
   <div>
    <Message own={true}/>
    <Message/>
    <Message/>
    <Message/>
   </div>
  </>
  );
}

export default Messenger