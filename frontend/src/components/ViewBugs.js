import React from 'react'
import { useEffect,useState } from 'react';
import Table from "react-bootstrap/Table";
import { useNavigate } from 'react-router-dom';

export default function ViewBugs() {

     const [bugs, setBugs] = useState([]);

    useEffect(() => {
    const fetchBugs = async () => {
        try{
             const data = await fetch("http://localhost:3000/bugs");
      const json = await data.json();
      setBugs(json)
        } catch(err){console.log(err)}
     
    }
    
    fetchBugs();
    }, []);

  const deleteBug = async (id) => {
    await fetch(`http://localhost:3000/bugs/delete/${id}`, {
      method: "DELETE",
    });
  };


    let navigate = useNavigate();
  

    return (
        <div>VewBugs
           <Table>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Name</th>
                    <th>Priority</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {bugs.map((bug,index)=>{

                    return (
                      <tr key={bug._id}>
                        <td>{index}</td>
                        <td>{bug.name}</td>
                        <td>{bug.priority}</td>
                        <td>{bug.details}</td>
                        <td>
                          <button onClick={() => navigate(`/bugs/${bug._id}`)}>
                            Edit
                          </button>
                        </td>
                        <td>
                          <button onClick={() => {
                            deleteBug(bug._id); window.location.reload(true);}} >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                })}
            </tbody>
           </Table>
        </div>
        
    )
}
