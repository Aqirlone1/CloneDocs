import "./App.css";
import Toolbar from "./Toolbar/Toolbar";
import React, {useState} from "react";
import { Route, Routes, Router } from "react-router-dom";
import Sidebar from "./sidebar/sideBar";

export default function App() {
  const [header, setHeader] = useState(true)
  const handleTextArea =(value)=>{
    setHeader(value)
  }
  return (
    <>
      <div>
        <Sidebar header ={header} onSelect={handleTextArea}/>
        <Routes>
          <Route path="/Toolbar" element={<Toolbar onSelect={handleTextArea} />} />
        </Routes>
      </div>
    </>
  );
}

