import React from "react";
import "./us.css";
const US = () => {
  return (
    <div className="container">
      <div className="ussection">
        <div className="leftdiv">
          <h3 className="ustitle"> why choose us</h3>
          <p>
            Prograph is a visual, object-oriented, dataflow, multiparadigm
            programming language that uses iconic symbols to represent actions
            to be taken on data. Commercial Prograph software development
            environments such as Prograph Classic and Prograph CPX were
            available for the Apple Macintosh and Windows platforms for many
            years but were eventually withdrawn from the market in the late
            1990s. Support for the Prograph language on macOS has recently
            reappeared with the release of the Marten software development
            environment.[1]
          </p>
          <ul className="listleft">
            <li>
              <i className="fa fa-check fa*lg"></i>
              available for the Apple Macintosh and Windows platforms for many
            </li>
            <li>
              <i className="fa fa-check fa*lg"></i>
              available for the Apple Macintosh and Windows platforms for many
            </li>
            <li>
              <i className="fa fa-check fa*lg"></i>
              available for the Apple Macintosh and Windows platforms for many
            </li>
            <li>
              <i className="fa fa-check fa*lg"></i>
              available for the Apple Macintosh and Windows platforms for many
            </li>
          </ul>
        </div>
        <div className="rightdiv">
          <div className="photo">
            <img src="images/about/about1.webp" alt="no pic" />
          </div>
          <div className="listright">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default US;
