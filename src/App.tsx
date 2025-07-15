import { useState } from "react";
//import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <>
      <Header onMenuClick={() => setSidebarOpen(open => !open)}/>
      <Footer/>
    </>
  );
}

export default App;
