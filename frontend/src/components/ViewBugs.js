import React from 'react'
import { useEffect,useState } from 'react';
import Table from "react-bootstrap/Table";

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
                    return (<tr>
                            <td>{index}</td>
                            <td>{bug.name}</td>
                            <td>{bug.priority}</td>
                            <td>{bug.details}</td>
                    </tr>)
                })}
            </tbody>
           </Table>
        </div>
        
    )
}
