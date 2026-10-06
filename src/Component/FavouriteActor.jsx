import { useState } from "react";

function FavouriteActor() {
    const [favourite, changeActor] = useState("surya")
  return (
    <>
    <h2>My favourite actor is {favourite}</h2>
    <button onClick={()=>{changeActor('vijay')}}>Change Actor</button>
    </>

  );
}

export default FavouriteActor;