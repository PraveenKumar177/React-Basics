import './App.css'
import GrandComponent from './components/GrandComponent'
import CounterContextProvider from './components/context/CounterContext'
import { TextContext } from './components/context/TextContext'

function App() {
  
  const text = "This text from App Component"
  return (
    <>
      <CounterContextProvider>
        <TextContext.Provider value={text} >
          <GrandComponent/>
        </TextContext.Provider>
      </CounterContextProvider>
    </>
  )
}

export default App
