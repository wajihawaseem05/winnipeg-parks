//    Assignment 4
//    Name: Wajiha Waseem
//    Date: Nov 19, 2023
//    Description: Interactive webpage lets you search, download results

import React, { useState } from "react";
import "./styles.css";
import "mvp.css";

const SearchForm = ({ handleSubmit, fetchedData }) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
  };

  const handleDownload = () => {
    const results = fetchedData.reduce((acc, item) => {
      return (
        acc +
        `${item.district}, ${item.park_name}, ${item.location_description}, ${item.classification_type}, ${item.neighbourhood}\n`
      );
    }, "");

    const blob = new Blob([results], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "results.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <form className="searchBox" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="label">Search for Parks by District:</label>
        <br />
        <input
          type="text"
          id="districtname"
          placeholder="Try North, South, East, North Downtown"
        />
        <button
          type="submit"
          id="button"
          className={clicked ? "clickedButton" : ""}
          onClick={handleButtonClick}
        >
          Search
        </button>
        <button onClick={handleDownload}>Download Results</button>
      </div>
    </form>
  );
};

export default SearchForm;
