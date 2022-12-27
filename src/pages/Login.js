import React from "react" 

const Login = () => {
    return(
        <div className="homePageWrapper">
            <div className="formWrapper">
                <img className = "CClogo" src ="/codecolab.jpg" alt = "code-colab-logo"/> 
                <h4 className="mainLabel">LOGIN</h4> 
                <div className="inputGroup">
                <input type= "text" className = "inputBox" placeholder = "USERNAME" /> 
                    <input type= "text" className = "inputBox" placeholder = "ROOM ID" />
                    
                    <button className="btn loginbtn">JOIN</button>
                    <span className="createinfo">
                        If you don't have an invite then create a &nbsp;
                        <a href="" className="createNewBtn">new room</a>
                    </span>
                </div>
            </div>
            <footer> 
                <h4> Built with ❤️ by <a href="https://github.com/Shreyas-R-7925">REY</a></h4>
            </footer>
        </div>
    )
}

export default Login;