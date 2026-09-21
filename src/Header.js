//    Assignment 4
//    Name: Wajiha Waseem
//    Date: Nov 19, 2023
//    Description: Interactive webpage lets you search, download results

import React from "react";

import "./styles.css";
import "mvp.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">Winnipeg's Parks and Open Spaces</h1>
      <h2 className="subtitle">
        Data representing all parks and open spaces in Winnipeg
      </h2>
      <p className="dataDisplay">
        Search for over one thousand of City of Winnipeg's licensed parks
      </p>
    </header>
  );
};

export default Header;
