import "./App.css";
import { useContext } from "react";
import{Routes, Route, Navigate } from 'react-router-dom'
import Messenger from "./pages/Messenger";
import Home from "./pages/Home";
import { AuthContext } from "./contex/AuthContex";

function App() {
  const { user } = useContext(AuthContext);
return (
      <>
        <div>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/messenger" element= {user ? <Navigate to="/" /> : <Messenger />}/>
  </Routes>
  </div>
  </>
)}


 /* {const [message, setMessage] = useState('')
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage =()=> {
    console.log("Button clicked");
    socket.emit("send_message", { message: message });
  }
  
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <div className="App">
      <input
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <button onClick={sendMessage}>Send message</button>
      <h1>
        Message: {messageReceived}</h1>
    </div>
  );
}}*/



export default App;

