import { useState } from 'react'



function App() {
  console.log('app rendered' , Math.floor((Math.random() * 10) + 1))
  const [value , setValue] = useState({
    value : 0
  })

  
function clickMe() {
  console.log('logged'),
  // setValue(value * 5) // it will render everytime i will click the  button
  // setValue(1) // because my state is the same as above which is '1' then it will not render further 
  // setValue(3) // it will render 3 times 
// console.log(setValue(value*5))
setValue({
  value : 0 // here the value render eachtime because of non-prmitive datatypes , in non-primitive datatypes the refrence is being passed through each time not the actuall value , like in primitve data types
})



  
}

const [multiplyByFive , setMultiplyByFive] = useState(5)


const multiply  = () => {
  setMultiplyByFive(multiplyByFive * 5 )
}


  return (
    <div className='content-center'>
    <h1>Value : {value.value} , {multiplyByFive}</h1>
    <h2></h2>
    <button onClick={clickMe}>Click to multiply by object</button>
    <button onClick={multiply}>Click to multiply by 5</button>
    </div>
  )
}

export default App
