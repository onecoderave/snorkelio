import React, { useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import { data } from "../data";

export default function DataViewer() {
  const [sentences, setSentences] = useState(data);

  const filterData = useCallback((term) => {
    let filteredData = sentences.filter((s) =>
      s.data.toLowerCase().includes(term)
    );
    setSentences(filteredData);
  }, []);
  return (
    <div
      className="container"
      style={{ border: "4px solid blue", margin: "100px" }}
    >
      <div className="row mt-5" style={{ marginLeft: "-35px" }}>
        <div className="col-md-6 offset-md-3">
          <SearchBar filterData={filterData} />
        </div>
      </div>
      <div className="row mt-5">
        <ul className="list-group col-md-6 offset-md-3 mb-5">
          {sentences.map((s) => (
            <li
              className="list-group-item bg-primary text-white mb-2"
              key={s.id}
            >
              {s.data}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
