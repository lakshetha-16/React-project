import React, { useEffect , useState } from "react";

function Fetch() {
    const [ users, setUsers]= useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data)=> setUsers(data))
    .then((error)=> console.error("Error:",error));

}, []);
 return(
    <div>
        <h2> User List</h2>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))}
        </ul>
    </div>
 );
}
export default Fetch;
