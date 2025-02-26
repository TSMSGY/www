import "./index.css"
import { Navbar } from "./components/navbar/navbar"
import { Hero } from './pages/hero'

function App() {

  return (
    <>
<div className="
        absolute inset-0 -z-10 h-full w-full opacity-10
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        bg-[size:6rem_4rem]"/>
    <div className="flex flex-col h-screen font-zig">
      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default App
