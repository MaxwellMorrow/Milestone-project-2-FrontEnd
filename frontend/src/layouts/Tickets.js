import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tickets({ tickets }) {
    // Vanilla JS Function
    const deleteTicket = async (name) => {
        await fetch("http://localhost:3000/ticket/" + name, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
        window.location.reload(true);
    };

    let key = 0;
    const table = tickets.map((ticket) => (
        <tr key={key++}>
            <td>{ticket.Id}</td>
            <td>{ticket.Name}</td>
            <td>{ticket.Priority}</td>
            <td>{ticket.Details}</td>
            <td>
                {/* <Link to="/editticket">EDIT</Link> */}
                <button onClick={() => deleteTicket(ticket.Name)}>DELETE</button>
            </td>
        </tr>
    ));

    // JSX Section
    return (
        <div className="">
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Priority</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>{table}</tbody>
                </table>
                {/* <Link to='/newticket'>Add New Ticket</Link> */}
            </div>
        </div>
    )
}