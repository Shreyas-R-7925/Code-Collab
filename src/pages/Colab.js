import React from "react" 

const Colab = () => { 
    const [clients, setClients] = useState([{socketId:1, username: 'Rey'},{socketId:2, username: 'ullas'}]); 
    return(
        <div className="mainWrap"> 
            <div className="lside"> 
                <div className="lsideInner"> 
                    <div className="logo">
                        <img src = '/codecolab.jpg' alt = "logo" />
                    </div>
                    <h3>Connected</h3>
                    <div className="clientsList">
                        {clients.map(client => (<Client username = {client.username}/>))}
                    </div>
                </div>
            </div>
            <div className="colabspace">
                Editor goes here ...
            </div>
        </div>
    )
}

export default Colab;