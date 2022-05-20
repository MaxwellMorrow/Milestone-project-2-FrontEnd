import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditBug() {
  let { bugId } = useParams();
 
  const [FoundBug, setFoundBug] = useState(null);
  const [bugName, setbugName] = useState("");
  const [bugPriority, setbugPriority] = useState("");
  const [bugDetails, setbugDetails] = useState("");
  const [userAssigned, setuserAssigned] = useState("");
  const [Users, setUsers] = useState("");

  // fetch for the bug that was clicked
  useEffect(() => {
    fetch(`http://localhost:3000/bugs/${bugId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoundBug(data);
        setbugName(data.name);
        setbugPriority(data.priority);
        setbugDetails(data.details);
      });
  }, []);

  // fetch for users
  useEffect(() => {
    fetch(`http://localhost:3000/users`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/bugs/" + bugId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: bugName,
        priority: bugPriority,
        details: bugDetails,
        user: userAssigned,
      }),
    });
  };

  //   this prevents our component from trying to render the below before the data comes in
  if (FoundBug === null || Users === null) {
    return <p>Loading Stuff!</p>;
  }

  console.log(FoundBug.user)

  return (
    <div id="editbug">
      <h1>Edit Bug</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Bug Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={bugName}
            onChange={(e) => setbugName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Priority</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setbugPriority(e.target.value)}
          >
            <option>{bugPriority}</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            defaultValue={bugDetails}
            onChange={(e) => setbugDetails(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>User Assigned</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setuserAssigned(e.target.value)}

          >
          {Users.map((user)=>{
            return (
              <option value={user._id} key={user._id}>{user.name}</option>
            )
          })}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
