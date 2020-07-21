import React from "react";
import { Navsection, Title, Ullist, Litem } from "./navstyle.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Navsection>
      <div className="container">
        <Title> LOGO</Title>
        <Ullist>
          <Litem>
            <Link className="link active" to="">
              Home
            </Link>
          </Litem>
          <Litem>
            <Link className="link " to="">
              About
            </Link>
          </Litem>
          <Litem>
            <Link className="link" to="">
              portfolio
            </Link>
          </Litem>
          <Litem>
            <Link className="link" to="">
              service
            </Link>
          </Litem>
          <Litem>
            <Link className="link" to="">
              prices
            </Link>
          </Litem>
          <Litem>
            <Link className="link" to="">
              team
            </Link>
          </Litem>
          <Litem>
            <Link className="link" to="">
              Blog
            </Link>
          </Litem>
          <Litem>
            <Link className="link" to="">
              contact
            </Link>
          </Litem>
        </Ullist>
      </div>
    </Navsection>
  );
};

export default Navbar;
