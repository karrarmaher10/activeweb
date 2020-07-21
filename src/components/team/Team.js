import React from "react";
import "./team.css";
const Team = () => {
  return (
    <div className="teamsection">
      <h2 className="teamtitle ">my team</h2>
      <div className="container">
        <div className="teamboxs">
          <div className="teambox">
            <div className="teamlay">
              <div className="imglay">
                <img src="/images/team/team1.webp" alt="nothing" />
                <div className="imgitem">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-instagram"></i>
                </div>
              </div>
              <h5> karrar</h5>
              <p>im one of awesome team ...</p>
            </div>
          </div>
          <div className="teambox">
            <div className="teamlay">
              <div className="imglay">
                <img src="/images/team/team2.webp" alt="nothing" />
                <div className="imgitem">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-instagram"></i>
                </div>
              </div>
              <h5> karrar</h5>
              <p>im one of awesome team ...</p>
            </div>
          </div>
          <div className="teambox">
            <div className="teamlay">
              <div className="imglay">
                <img src="/images/team/team3.webp" alt="nothing" />
                <div className="imgitem">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-instagram"></i>
                </div>
              </div>
              <h5> karrar</h5>
              <p>im one of awesome team ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
