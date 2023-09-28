import { useState } from 'react'



function App() {

  let [color , setColor] = useState('black')



  return(
    <div className='w-full h-screen duration-200'
    style={{background : color}}>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-xl'>
          <button onClick = {() => setColor('red')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:'red'}}>Red</button>
          <button onClick = {() => setColor('green')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:'Green'}}>Green</button>
          <button onClick = {() => setColor('blue')} className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{background:'Blue'}}>Blue</button>
        </div>
      </div>

    </div>
  )
}

export default App
