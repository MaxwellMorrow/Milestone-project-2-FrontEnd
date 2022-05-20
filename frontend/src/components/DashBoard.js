import React from "react";
import { Card, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div>
      <h1 className="page-header">Overview</h1>

      <div className="bug-cards">
        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total Bugs</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: "96px", textAlign: "center" }}>
              1234
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>

        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total High Priority Bugs</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: "96px", textAlign: "center" }}>
              1234
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>

        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total Medium Priority Bugs</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: "96px", textAlign: "center" }}>
              1234
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>

        <Card style={{ width: "40rem", height: "40rem", margin: "10px" }}>
          <Card.Header>Total Low Priority Bugs</Card.Header>
          <Card.Body>
            <Card.Title style={{ fontSize: "96px", textAlign: "center" }}>
              1234
            </Card.Title>
          </Card.Body>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                View Bugs
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}
