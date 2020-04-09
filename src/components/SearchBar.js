import React, { useState, useEffect } from "react";

export default function SearchBar({ filterData }) {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    filterData(searchTerm);
  }, [searchTerm, filterData]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Type your keyword here..."
      value={searchTerm}
      onChange={handleChange}
    />
  );
}
