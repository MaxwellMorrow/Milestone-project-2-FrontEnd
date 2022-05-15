import React, { useState } from "react";

export default function NewTicket() {
    // useState
    const [id, setId] = useState("")
    const [priority, setPriority] = useState("")
    const [details, setDetails] = useState("")
    const [name, setName] = useState("")

    // functions
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:3000/ticket/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    id: id,
                    name: name,
                    priority: priority,
                    details: details,
                }),
            })
            let resJson = await res.json();
            console.log(resJson);
        } catch (err) {
            console.log(err)
        }
        window.location.reload(true);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Id</label>
                    <input type="number" name="id" placeholder="Id" onChange={(e) => setId(e.target.value)}/>
                </div>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Priority</label>
                    <input type="text" name="priority" placeholder="Priority" onChange={(e) => setPriority(e.target.value)}/>
                </div>
                <div>
                    <label>Details</label>
                    <input type="text" name="details" placeholder="Details" onChange={(e) => setDetails(e.target.value)}/>
                </div>
                <input type="submit" value="Add Ticket"></input>
            </form>
        </div>
    )
}