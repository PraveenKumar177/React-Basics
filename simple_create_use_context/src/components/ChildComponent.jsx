import { useContext } from "react"
import { TextContext } from "./context/TextContext"
import { CounterContext } from "./context/CounterContext"
const ChildComponent = () => {
    const text = useContext(TextContext)
    const {counter,setCounter} = useContext(CounterContext)
    
    return (
        <div className="box">
            <h3>ChildComponent</h3>
            <p>{text}</p>

            <h3>{counter}</h3>
            <button onClick={()=>setCounter(prev=>prev+1)}>Increase</button>

        </div>
    )
}

export default ChildComponent