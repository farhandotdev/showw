import "./form.css";

function Form() {
  return (
    <div className="header">
      <div className="container">
        <div className="content">
          <div className="heading">
            <h1>LogIn</h1>
          </div>
          <form action="non.php" className="login">
            <div className="email">
              <label htmlFor="Myemail">Email:</label>
              <input type="text" id="Myemail" />
            </div>
            <div className="email">
              <label htmlFor="Mypassword">Password:</label>
              <input
                type="password"
                id="Mypassword"
                className="pass"
                minLength="8"
                required
                u
              />
            </div>
            <div className="side">
              <a href="#Header">Forgot Password?</a>
              <a href="#Header">Create Your Account</a>
            </div>
          </form>
          <div className="button">
            <button className="btn">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
