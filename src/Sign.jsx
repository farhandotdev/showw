import "./sign.css";
import Nav from "./Nav.js";

function Sign() {
  return (
    <div className="header">
      {/* <Nav /> */}
      <div className="huge">
        <div className="huge2">
          <div className="heading">
            <h1>Signup</h1>
          </div>
          <form action="" className="signup">
            <div className="name">
              <label htmlFor="myname">Name:</label>
              <input type="text" id="myname" className="input"/>
            </div>
            <div className="name">
              <label htmlFor="myemail">Email:</label>
              <input type="text" id="myemail" className="input"/>
            </div>
            <div className="name">
              <label htmlFor="myphone">Phone:</label>
              <input type="number" id="myphone" className="input"/>
            </div>
            <div className="name">
              <label htmlFor="mypassword">Password:</label>
              <input type="password" id="mypassword" className="input"/>
            </div>
            <div className="name">
              <label htmlFor="conpassword"> confirm password:</label>
              <input type="password" id="conpassword" className="input" />
            </div>
            <div className="gender">
              <label htmlFor="">GENDER:</label>
              <br />
              <div className="main">
              <input type="radio" id="mygender" name="gender" value="MALE"className="radio" />
              <label htmlFor="mygender" className="radio">MALE:</label>
              <input type="radio" id="mygender" name="gender" value="female" className="radio"/>
              <label htmlFor="mygender" className="radio">FEMALE:</label>
              </div>
             

              
            </div>
            <div className="button">
              <button className="btn">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
