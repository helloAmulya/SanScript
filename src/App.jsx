import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Footer from "./components/footer/Footer.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {" "}
      <div className="bg-[#0B0F11] w-full h-screen text-[#FFF]">
        {" "}
        <NavBar /> {/* <Footer/> */}
      </div>{" "}
    </>
  );
}
export default App;
