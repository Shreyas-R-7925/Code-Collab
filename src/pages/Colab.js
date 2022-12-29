import React, {useState} from "react" ;
import Client from "../components/Client"; 
import Editor from '../components/Editor'; 

const Colab = () => { 
    const [clients, setClients] = useState([
        {socketId:1, username: 'Rey'},
        {socketId:2, username: 'Ullas'},
        {socketId:3, username: 'John'},
        {socketId:4, username: 'Mark'},
        {socketId:5, username: 'Pepe'},
    ]); 
    return(
        <div className="mainWrap"> 
            <div className="lside"> 
                <div className="lsideInner"> 
                    <div className="logo">
                        <img className = "lsideImg" src = '/codecolab.jpg' alt = "logo" />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map(client => (
                            <Client key = {client.socketId} username = {client.username}/>
                            ))
                        }
                    </div>
                </div>
            <button className="btn copyBtn">Copy Room ID</button>
            <button className="btn leaveBtn">Leave Room</button>
            </div>
            <div className="colabspace">
                <Editor />
            </div>
        </div>
    )
}

export default Colab;