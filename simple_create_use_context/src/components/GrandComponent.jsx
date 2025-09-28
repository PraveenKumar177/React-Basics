import ParentComponent from "./ParentComponent"
import { useContext } from "react"
import { TextContext } from "./context/TextContext"
import { CounterContext } from "./context/CounterContext"

const GrandComponent = () => {
    const text = useContext(TextContext)
    const {counter} = useContext(CounterContext)
    return (
        <div className="box" >
            <h3>GrandComponent</h3>
            <p>{text}</p>
            <h3>{counter}</h3>
            <ParentComponent />
        </div>
    )
}

export default GrandComponent