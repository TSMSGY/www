import "./index.css";
import { Navbar } from "./components/navbar/navbar";
import { Landing } from "./pages/landing/landing";

function App() {
  return (
    <div className="flex flex-col h-screen font-zig">
      <Navbar />
      <Landing/>
    </div>
  );
}

export default App;
