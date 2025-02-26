import "./index.css"
import { Navbar } from './components/navbar'
import { Hero } from './pages/hero'

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
