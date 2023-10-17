import { useState , useEffect } from "react"
import { ThemeProvider } from "./Context/Theme"
import ThemeBtn from "./Components/ThemeButton"
import Card from "./Components/Card"



function App() {

  // for theme mode =>
  const [themeMode , setThemeMode] = useState('light')
  // for darkTheme =>
  const darkTheme = () => {
    setThemeMode('dark')
  }
  // for lightTheme

  const lightTheme =  ()=> {
    setThemeMode('light')
  }

useEffect(() => {
  
  document.querySelector('html').classList.remove('light' , 'dark')
  document.querySelector('html').classList.add(themeMode)

}, [themeMode])


  return (
<ThemeProvider value={{themeMode , darkTheme , lightTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* theme button */}
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                       <Card/>
                    </div>
                </div>
            </div>
</ThemeProvider>

  )
}

export default App
