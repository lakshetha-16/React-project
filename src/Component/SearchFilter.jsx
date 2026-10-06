import React, { useState } from "react";

function SearchFilter() {
    const [search, setSearch] = useState("");
    const users = ["Vijay" , "Ajith" , "Surya" , "Dhnaush" , "Siva"]

    const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
);
return (
    <div>
        <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>

        <ul>
        
        
        {filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>

        ))}
        </ul>
    </div>
);
}
export default SearchFilter;