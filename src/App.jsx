import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/availablePlayers/AvailablePlayers";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayers = async () =>{
  const res = await fetch("/players.json")
  return res.json()
}

function App() {

  const playersPromise = fetchPlayers()
  const [toggle, setToggle] =useState(true)
  return (
    <>
    <Navbar></Navbar>
    <div className=" max-w-[1200px] mx-auto flex justify-between items-center" >
      {
        toggle===true?<h1 className="font-bold text-xl ml-3" >Available Players</h1>:<h1 className="font-bold text-xl ml-3" >Selected Players</h1>
      }

      <div>
        <button onClick={()=>setToggle(true)} className={`border-gray-400 border-1 py-3 px-4 rounded-l-2xl border-r-0  cursor-pointer ${toggle===true?"bg-[#E7FE29]":""}`} >Available</button>

        <button onClick={()=>setToggle(false)} className={`border-gray-400 border-1 py-3 px-4 rounded-r-2xl border-l-0 cursor-pointer ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>(0)</span></button>
      </div>
    </div>

    {
      toggle === true?<Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <AvailablePlayers playersPromise = {playersPromise} ></AvailablePlayers>
    </Suspense>:<SelectedPlayers></SelectedPlayers> 
    }


    
    


    </>
  );
}

export default App;
