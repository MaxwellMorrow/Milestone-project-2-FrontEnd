import React, { useState, useEffect } from "react";
// import Dashboard from "./layouts/Dashboard";
// import Teams from "./layouts/Teams";
// import Employees from "./layouts/Employees";
// import NewEmployee from "./layouts/NewEmployee";
// import EditEmployee from "./layouts/EditEmployee";
// import NotFound from "./layouts/NotFound";
import { Route, Switch } from "react-router-dom";

export default function App() {
  const [employees, setEmployees] = useState([]);

  // const [teams, setTeams] = useState([
  //   { TeamName: "Executive", Employees: 5, Budget: 50000, Actual: 40000 },
  //   { TeamName: "Marketing", Employees: 5, Budget: 50000, Actual: 40000 },
  //   { TeamName: "Technology", Employees: 5, Budget: 100000, Actual: 40000 },
  //   { TeamName: "Accounting", Employees: 5, Budget: 50000, Actual: 40000 },
  // ]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Switch>
      <Route exact path='/' render={() => <Dashboard teams={teams} employees={employees} />} />
      <Route exact path='/Teams' render={() => <Teams employees={employees} teams={teams} />} />
      <Route exact path='/Employees' render={() => <Employees employees={employees} />} />
      <Route exact path='/NewEmployee' render={() => <NewEmployee />} />
      <Route exact path='/EditEmployee' render={() => <EditEmployee />} />
      <Route render={() => <NotFound />} />
    </Switch>
  );
}