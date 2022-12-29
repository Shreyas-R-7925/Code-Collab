import React, {useState} from "react" 
import {v4 as uuidv4} from 'uuid'; 
import toast from 'react-hot-toast';  
import {useNavigate } from 'react-router-dom'; 

const Login = () => { 

    const navigate = useNavigate(); 
    const [roomId, setRoomId] = useState(''); 
    const [username, setUsername] = useState('');

    const createNewRoom = (ele) => {
        ele.preventDefault();
        const id = uuidv4(); 
        setRoomId(id);  
        toast.success('Created a new room!!');
    } 

    const joinRoom = () => {
        if(!roomId || !username){
            toast.error('Username & Room Id are required');
            return;
        }

        // Redirect
        navigate('/colab/${roomId}',
        {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        // console.log('event',e.code);  
        if(e.code === 'Enter'){
            joinRoom(); 
        }
    }; 

    return(
        <div className="homePageWrapper">
            <div className="formWrapper"> 
                <div className="top">
                    <img className = "CClogo" src ="/codecolab.jpg" alt = "code-colab-logo"/>  
                    <div className="wel">
                        <h3 className="wel1">Welcome !!</h3>
                    </div>
                    
                </div>
                
                <h4 className="mainLabel">Login Credentials</h4> 
                <div className="inputGroup">
                <input type= "text" className = "inputBox" placeholder = "USERNAME" onChange = { (e) => setUsername(e.target.value)} value = {username} onKeyUp = {handleInputEnter}/> 
                <input type= "text" className = "inputBox" placeholder = "ROOM ID" onChange = { (e) => setRoomId(e.target.value)} value={roomId} onKeyUp = {handleInputEnter}/>
                    
                    <button className="btn loginbtn" onClick={joinRoom}>JOIN</button>
                    <span className="createinfo">
                        If you don't have an invite then create a &nbsp;
                        <a onClick = {createNewRoom} href="" className="createNewBtn">new room.</a>
                    </span>
                </div>
            </div>
            <footer> 
                <h4> Built with ❤️ by &nbsp; <a href="https://github.com/Shreyas-R-7925">REY</a></h4>
            </footer>
        </div>
    )
}

export default Login;