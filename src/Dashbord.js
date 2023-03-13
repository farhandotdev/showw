import React from 'react';
import "./Dashbord.css"
import logo from './images/The Showw.png';
import profile from "./images/p777.png"
function Dashbord() {
  function myWatch(){
    var box =document.getElementById("watched");
    if(box.style.display=="none")
    {
      box.style.display="block";
    }
    else{
      box.style.display="none";
    }
    document.getElementById("watch-list").style = "display:none";
  }  
 
  function myWatchlist(){
    var box =document.getElementById("watch-list");
    if(box.style.display=="none")
    {
      box.style.display="block";
    }
    else{
      box.style.display="none";
    }
    document.getElementById("watched").style = "display:none";
  }      

  return (
      <div className="container">
        <div className="Dheading"><h2>User-Dashbord</h2></div>
        <div className="profile"id='profile-1'>
            <div className="profile-child" id='profchild1'>
              <div className="image"><img src={profile} alt="./images/p777.png" /></div>
            </div>
            <div className="profile-child"id='profchild2'>
             <div className="profgrid">
              <img src={logo} alt="./images/The Showw.png" />
             </div>
             <div className="profgrid">
             <button type='text' className="edit">Edit Profile</button>
             </div>
             <div className="profgrid">Name</div>
             <div className="profgrid">Alen Parker</div>
             <div className="profgrid">Gender</div>
             <div className="profgrid">Male</div>
             <div className="profgrid">Email- Id</div>
             <div className="profgrid">alenparker3443@gmail.com</div>
             <div className="profgrid">Interest Zone</div>
             <div className="profgrid">Action, Comedy</div>
          
            </div>
        </div>
            <div  id='profile-2'>
                <button onClick={myWatch}>Watched</button>
                <button onClick={myWatchlist}>Watch-list </button>
            </div>
        <div className="profile" id='profile-3'>
            <div className="watch" id='watched'>
                 <div className="surface">
                    <div className="watchchild">11</div>
                    <div className="watchchild">21</div>
                    <div className="watchchild">31</div>
                    <div className="watchchild">41</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">11</div>
                    <div className="watchchild">21</div>
                    <div className="watchchild">12</div>
                    <div className="watchchild">41</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                  </div>
            </div>
            <div className="watch" id='watch-list'>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                 </div>
                 <div className="surface">
                    <div className="watchchild">1</div>
                    <div className="watchchild">2</div>
                    <div className="watchchild">3</div>
                    <div className="watchchild">4</div>
                  </div>
            </div>
        </div>
         <div className="back-btn">
        <div><a href="/">Back To Top</a></div>
         </div>
      </div>
  );
}

export default Dashbord;
