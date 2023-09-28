import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter , setCounter]= useState(0)

  // let counter = 0

  function addValue(){

    if (counter < 20){
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      
    }


    
    
  }


  function removeValue(){
    // console.log(Math.random())

    if (counter > 0 ){
      counter = counter - 1
      setCounter(counter)
    }
    // console.log(counter)
   
    
  }
  

  return (
    <>
     <h1>hey there we are learning react!</h1>
     <h2>counter Value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
