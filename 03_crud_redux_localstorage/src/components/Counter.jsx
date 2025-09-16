import { useSelector,useDispatch } from "react-redux"

const Counter = () => {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.count)
    console.log(count)
    const increment = ()=>{
        dispatch({type : "INCREMENT"})
    }
    return (
        <>
            <div>Counter Value : {count.current_count}</div>
            <button className="btn btn-info" onClick={increment}>Increment</button>
        </>
    )
}

export default Counter