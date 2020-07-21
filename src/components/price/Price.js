import React from "react";
import "./price.css";
const Price = () => {
  return (
    <div className="pricesection container">
      <h3 className="pricetitle"> pricing section</h3>
      <div className="pricecont">
        <div className="pricebox">
          <h5 className="boxtitle"> baisc plan</h5>
          <div className="sale">
            $9 <br />
            <p>/month</p>
          </div>
          <ul className="list">
            <li>1GB cloud </li>
            <li>100 email acouunt </li>
            <li>7/24 support </li>
          </ul>
          <button className="pricebtn">get it now</button>
        </div>
        <div className="pricebox">
          <h5 className="boxtitle"> silver plan</h5>
          <div className="sale">
            $15 <br />
            <p>/month</p>
          </div>
          <ul className="list">
            <li>4GB cloud </li>
            <li>250 email acouunt </li>
            <li>7/24 support </li>
          </ul>
          <button className="pricebtn">get it now</button>
        </div>
        <div className="pricebox">
          <h5 className="boxtitle"> gold plan</h5>
          <div className="sale">
            $25 <br />
            <p>/month</p>
          </div>
          <ul className="list">
            <li>8GB cloud </li>
            <li>500 email acouunt </li>
            <li>7/24 support </li>
          </ul>
          <button className="pricebtn">get it now</button>
        </div>
      </div>
    </div>
  );
};
export default Price;
