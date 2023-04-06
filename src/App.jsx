// import { useState } from "react";
// import { GitHubUser } from "./components/GitHubUser";
// import useUserData from "./hooks/useUserData";
// const users = ["spacefill", "flexe-inc","ware2go","stord"];

// const App = () => {
//   const [username, setUsername] = useState("stord")
//   const gitProfile = useUserData(username);
 
//   const handleClick = (username)=>{
//     setUsername(username)
//   }
//   return (
//     <div>
    
//       {gitProfile.isLoading?<h1>Loading...</h1>:<GitHubUser {...gitProfile.data} />}
//       <div>{users.map((user)=><button key={user} onClick={()=>handleClick(user)}>{user}</button>)}</div>
//     </div>
//   );
// };
// export default App;
 
import { useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8080/', 'echo-protocol');

 
const App = () => {

const [number, setNumber] = useState("")
client.onerror = function() {
    console.log('Connection Error');
};

client.onopen = function() {
    console.log('WebSocket Client Connected');
 
};

client.onclose = function() {
    console.log('echo-protocol Client Closed');
};

client.onmessage = function(e) {
    if (typeof e.data === 'string') {
        setNumber(e.data)
    }
};
  return <div>{number}</div>
}

export default App;