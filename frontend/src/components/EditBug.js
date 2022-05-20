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

  let handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/bugs/" + bugId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: bugName,
        priority: bugPriority,
        details: bugDetails,
      }),
    });
  };

  //   this prevents our component from trying to render the below before the data comes in
  if (FoundBug === null) {
    return <p>Loading Bug!</p>;
  }

  return (
    <div>
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
          <Form.Control
            type="text"
            defaultValue={bugPriority}
            onChange={(e) => setbugPriority(e.target.value)}
          />
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

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
