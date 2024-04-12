
import { Outlet } from 'react-router-dom'
// import './App.css'
import './index.css'
import SideBar from './sideBar/SideBar'
import Trends from './trends/Trends'
import { TweetContext } from './Context/contex'
import json from "./data/data.json"

function App() {

  const data = { ...json };

  return (

    <TweetContext.Provider value={data}>
      < div class=" flex">
        <SideBar />
        <div class=" w-[45%]">
          <Outlet />
        </div>
        <Trends />
      </div>
    </TweetContext.Provider>
  )
}

export default App
