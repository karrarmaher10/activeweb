import React from "react";
import "./homestyle.css";
const Home = () => {
  return (
    <div className="homesection">
      <div className="overlay">
        <h2 className="hometitle">Eng.Karrar</h2>
        <p className="prog">
          Im computer engineer (web developer <span>front-end</span>)
        </p>
        <div className="btnbox">
          <button className="btn first opacity">let's learn</button>
          <button className="btn snd opacity">let's go</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
