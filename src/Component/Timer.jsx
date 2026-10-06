import { useEffect , useState } from "react"

function Timer() {
    const [ count, setCount]= useState(1);

    useEffect( ()=> {
        console.log('screen refreshed')
        checkCount()
    },[count])
    function checkCount() {
        if(count>10) {
            setCount(1);
        }
    }

function updateCount() {
    setCount((previousState) => {return previousState+1})

}
return( 
    <>
    <h2>Naa oru thadava sonna {count} thadava sonna mathiri</h2>
    <button onClick={updateCount}>Increase Count</button>
    </>
)
}
export default Timer;