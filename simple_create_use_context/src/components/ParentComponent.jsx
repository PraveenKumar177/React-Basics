import ChildComponent from './ChildComponent'
import { useContext } from 'react'
import { TextContext } from './context/TextContext'
const ParentComponent = () => {
    const text = useContext(TextContext)
    return (
        <div className="box">
            <h3>ParentComponent</h3>
            <p>{text}</p>
            <ChildComponent />
        </div>
    )
}

export default ParentComponent