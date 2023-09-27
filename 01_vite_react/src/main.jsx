import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



function MyApp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

const anotherEvent = (
  <a href="https://google.com">Visit Google</a>
)

// how to create cusom react

const customReact = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'Click me to visit'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    // MyApp() you can write like this also but this is not a common or a good practice
    // <MyApp /> // this one is used mainly 
    // anotherEvent
    <App />
  
)
