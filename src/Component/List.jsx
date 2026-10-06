import { useState } from "react";

function List()  {
    const [List, setList] = useState(['item1' , 'item2'])
    return <>
      <h1>List</h1>
      <ul>{
            List.map((el, index) => <li key = {index}> {el} </li>)
      }
      </ul>
      </>
}
export default List;
