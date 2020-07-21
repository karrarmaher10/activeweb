import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="padd container">
      <h1 className="abouttitle">welcome to my Website</h1>
      <div className="boxsection ">
        <div className="box ltr-effect ">
          <i className="icon fa fa-cogs"></i>
          <h3 className="title">Fully Customizible</h3>
          <p>
            Mecanse tempus telles eget condemmentum rehucas sem quam semper
            libro sem sit amer.
          </p>
          <a href="./abou">read more</a>
        </div>
        <div className="box ltr-effect">
          <i className="icon fa fa-magic"></i>
          <h3 className="title">Awesome Features</h3>
          <p>
            Mecanse tempus telles eget condemmentum rehucas sem quam semper
            libro sem sit amer.
          </p>
          <a href="./abou">read more</a>
        </div>
        <div className="box ltr-effect">
          <i className="icon fa fa-mobile"></i>
          <h3 className="title">Fully Responsive</h3>
          <p>
            Mecanse tempus telles eget condemmentum rehucas sem quam semper
            libro sem sit amer.
          </p>
          <a href="./about">read more</a>
        </div>
      </div>
    </div>
  );
};
export default About;
