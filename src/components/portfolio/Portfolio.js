import React from "react";
import "./portstyle.css";
const Portfolio = () => {
  return (
    <div className="container portfolio">
      <h3 className="portfoliotitle">portofolio</h3>
      <div className="imgs">
        <div className="imgbox">
          <img src="/images/work/work1.webp" alt="no thing"></img>
          <div className="layer">
            <div className="layerinfo">
              <h5>picture</h5>
              <p>more info</p>
              <i className="fa fa-edit "></i>
              <i className="fa fa-search "></i>
            </div>
          </div>
        </div>
        <div className="imgbox">
          <img src="/images/work/work2.webp" alt="no thing"></img>
          <div className="layer">
            <div className="layerinfo">
              <h5>picture</h5>
              <p>more info</p>
              <i className="fa fa-edit "></i>
              <i className="fa fa-search "></i>
            </div>
          </div>
        </div>
        <div className="imgbox">
          <img src="/images/work/work3.webp" alt="no thing"></img>
          <div className="layer">
            <div className="layerinfo">
              <h5>picture</h5>
              <p>more info</p>
              <i className="fa fa-edit "></i>
              <i className="fa fa-search "></i>
            </div>
          </div>
        </div>
      </div>
      <div className="imgs">
        <div className="imgbox">
          <img src="/images/work/work4.webp" alt="no thing"></img>
          <div className="layer">
            <div className="layerinfo">
              <h5>picture</h5>
              <p>more info</p>
              <i className="fa fa-edit "></i>
              <i className="fa fa-search "></i>
            </div>
          </div>
        </div>
        <div className="imgbox">
          <img src="/images/work/work5.webp" alt="no thing"></img>
          <div className="layer">
            <div className="layerinfo">
              <h5>picture</h5>
              <p>more info</p>
              <i className="fa fa-edit "></i>
              <i className="fa fa-search "></i>
            </div>
          </div>
        </div>
        <div className="imgbox">
          <img src="/images/work/work6.webp" alt="no thing"></img>
          <div className="layer">
            <div className="layerinfo">
              <h5>picture</h5>
              <p>more info</p>
              <i className="fa fa-edit fa-lg"></i>
              <i className="fa fa-search fa-lg"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
