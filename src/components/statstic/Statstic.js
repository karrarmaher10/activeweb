import React from "react";
import "./statstic.css";
const Statstic = () => {
  return (
    <div className="statsticsection">
      <div className="statoverlay">
        <div className="boxs">
          <div className="statbox">
            <i className=" icon fa fa-users fa-2x"></i>
            <h4>512</h4>
            <p> welcome</p>
          </div>
          <div className="statbox">
            <i className=" icon fa fa-trophy fa-2x"></i>
            <h4>511</h4>
            <p>you win</p>
          </div>
          <div className="statbox">
            <i className=" icon fa fa-coffee fa-2x"></i>
            <h4>510</h4>
            <p> drink</p>
          </div>
          <div className="statbox">
            <i className=" icon fa fa-file fa-2x"></i>
            <h4>510</h4>
            <p>read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statstic;
