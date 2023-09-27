import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'


function App() {

  let newArray = [1,2,3,4,5]
  

  return (
    <>
      <h1 className='bg-green-400 , text-black , p-4 , rounded-xl mb-4'>tailwind test</h1>
      <Card 
        username = 'Shelby'
        btnText = 'Click me'
      
      />
      <Card
      username = 'Meera'


      />
      
    </>
  )
}

export default App
