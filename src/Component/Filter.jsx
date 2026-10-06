import React, { useState} from "react";

function Filter(){
    const [users]= useState([
        {id:1,name:"Nethu",age:19},
        {id:2,name:"mythu",age:45},
        {id:3,name:"Laks",age:20}
    ]);

const filteredUsers=users.filter((user)=> user.age>20);

return(
    <div>
      <h2> Age Greater Than 20 </h2>

      <ul>
      {filteredUsers.map((user)=>(
        <li key={user.id}>
        {user.name} - {user.age}
        </li>
      ))}
      </ul>
     </div>  
);
}
export default Filter