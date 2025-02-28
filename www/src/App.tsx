import "./index.css";
import { Navbar } from "./components/navbar/navbar";
import { Landing } from "./pages/landing/landing";
import { useTheme } from "./providers/theme-provider";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col h-screen font-zig">
        <Navbar />
        <Landing />
      </div>
      {
        theme === "dark" ? (
          <div
            className="
              absolute inset-0 -z-10 opacity-5 
              bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
              bg-[size:6rem_4rem]
              bg-fixed"
          />
        ) : (
          <div
            className="
            absolute inset-0 -z-10 opacity-10 
            bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)]
            bg-[size:6rem_4rem]
            bg-fixed"
          />


        )
      }
    </>
  );
}

export default App;
