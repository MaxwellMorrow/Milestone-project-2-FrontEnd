import React, { useState, useEffect } from "react";
import { Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import CreateBugs from "./components/CreateBugs";
import ViewBugs from "./components/ViewBugs";


export default function App() {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setBugs(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (

    <div>{bugs}


      <NavBar />
      <DashBoard />
      <CreateBugs />
      <ViewBugs />









    </div>
    // <Routes>
    //   {/* WE WILL BE ADDING OUR ROUTES HERE */}

    //   {/* <Route exact path='/' render={() => <Dashboard teams={teams} employees={employees} />} />
    //   <Route exact path='/Teams' render={() => <Teams employees={employees} teams={teams} />} />
    //   <Route exact path='/Employees' render={() => <Employees employees={employees} />} />
    //   <Route exact path='/NewEmployee' render={() => <NewEmployee />} />
    //   <Route exact path='/EditEmployee' render={() => <EditEmployee />} />
    //   <Route render={() => <NotFound />} /> */}
    // </Routes>
  );
}