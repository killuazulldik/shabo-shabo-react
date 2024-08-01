import React, { useState } from "react";
import Citizens from "./Citizens";
import "./Citizen.css"; // Import the CSS file

function Citizen() {
  const [citizens, setCitizens] = useState(Citizens());
  const [searchQuery, setSearchQuery] = useState("");

  const toggleStatus = (index) => {
    const newCitizens = citizens.map((citizen, i) => {
      if (i === index) {
        return {
          ...citizen,
          status: citizen.status === "Active" ? "Inactive" : "Active",
        };
      }
      return citizen;
    });
    setCitizens(newCitizens);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCitizens = citizens.filter(
    (citizen) =>
      citizen.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      citizen.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      citizen.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Citizens List</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Here"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="cet-table">
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((cit, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cit.name}</td>
              <td>{cit.age}</td>
              <td>{cit.address}</td>
              <td>{cit.status}</td>
              <td>
                <button onClick={() => toggleStatus(index)}>
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Citizen;
