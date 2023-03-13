import image1 from "./images/logo.png";
import "./nav.css";

function Nav() {
  return (
    <div className="navigation">
      <div className="right">
        <img src={image1} alt="logo.png" />
      </div>
      
    </div>
  );
}

export default Nav;
