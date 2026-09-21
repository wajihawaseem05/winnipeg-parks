//    Assignment 4
//    Name: Wajiha Waseem
//    Date: Nov 19, 2023
//    Description: Interactive webpage lets you search, download results

import React, { useEffect, useState } from "react";
import Header from "./Header";
import SearchForm from "./SearchForm";

import "./styles.css";
import "mvp.css";

const ParkSearch = () => {
  const [fetchedData, setFetchedData] = useState([]); // State to hold fetched data

  const displayResults = (districtName) => {
    const apiUrl = `https://data.winnipeg.ca/resource/tx3d-pfxq.json?$where=lower(District)='${districtName}'&$limit=100`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setFetchedData(data); // Set fetched data to state

        const output = document.getElementById("output");
        output.innerHTML = "";

        output.innerHTML += `
          <tr>
            <th>District</th>
            <th>Park Name</th>
            <th>Location Description</th>
            <th>Classification Type</th>
            <th>Neighbourhood</th>
          </tr>
        `;

        data.forEach((item) => {
          output.innerHTML += `
            <tr>
              <td>${item.district}</td>
              <td>${item.park_name}</td>
              <td>${item.location_description}</td>
              <td>${item.classification_type}</td>
              <td>${item.neighbourhood}</td>
            </tr>
          `;
        });

        const searchResults = document.getElementById("searchResults");
        searchResults.textContent = `${data.length} parks match your search criteria`;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const districtName = document
      .getElementById("districtname")
      .value.toLowerCase();
    displayResults(districtName);
  };

  return (
    <div className="container">
      <Header />
      <section>
        <SearchForm handleSubmit={handleSubmit} fetchedData={fetchedData} />{" "}
        {/* Pass fetchedData as prop */}
        <br />
        <p id="searchResults"></p>
        <br />
        <table>
          <tbody id="output"></tbody>
        </table>
      </section>
    </div>
  );
};

export default ParkSearch;
