
import { Outlet } from 'react-router-dom'
// import './App.css'
import './index.css'
import SideBar from './sideBar/SideBar'
import Trends from './trends/Trends'
import { GlobalContext } from './Context/contex'
import React,{useState} from 'react'

function App() {

  const [data, setdata] = useState('')

  return (

    <GlobalContext.Provider value={{data, setdata}}>
      < div class="main flex">
        <SideBar />
        <div class="milieu w-[70%]">
          <Outlet />
        </div>
        <Trends />
      </div>
    </GlobalContext.Provider>
  )
}

export default App
