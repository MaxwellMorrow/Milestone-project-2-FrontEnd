import React, { useState } from "react";

export default function CreateBugs() {
  // useState
  const [id, setId] = useState("");
  const [priority, setPriority] = useState("");
  const [details, setDetails] = useState("");
  const [name, setName] = useState("");

  // functions
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3000/bugs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          priority: priority,
          details: details,
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
    } catch (err) {
      console.log(err);
    }
    window.location.reload(true);
  };

  return (
    <div id="formcontainer">
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
          id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Priority:</label>
          <input
          id="priority"
            type="text"
            name="priority"
            placeholder="Priority"
            onChange={(e) => setPriority(e.target.value)}
          />
        </div>
        <div>
          <label>Details:</label>
          <input
          id="details"
            type="text"
            name="details"
            placeholder="Details"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <input id="addticket" type="submit" value="Add Ticket"></input>
      </form>
    </div>
  );
}
