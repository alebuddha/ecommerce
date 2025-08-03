import { useState } from "react";
import Home from "./pages/home";
import Navbar from "./components/navbar";
export default function App(){
  return(
    <div className="min-h-screen">
      <Navbar/>
      <h1 className="bg-blue-200">yeah bitch</h1>
      <Home/>
    </div>
  )
}