import Nav from "./Nav.js";
import "./forgot.css";

function Forgot(){
  return (
    <div className="Header">
      <div className="tank">
              <div className="room">
                <div className="heading">
                  <h1>Forgot Password</h1>
                
                </div>
                <form action="" className="login">
                  <div className="pass1">
                    <label htmlFor="mypass">Email:</label>
                      <input type="email"  id="mypass"/>
                  </div>
                  <div className="pass1">
                    <label htmlFor="newpass">OTP: </label>
                    <input type="number"  id="newpass"/>
                  </div>
                  <div className="button">
                    <button className="btn">Submit</button>
                  </div>
                </form>
              </div>
      </div>

    </div>
  )
}

export default Forgot