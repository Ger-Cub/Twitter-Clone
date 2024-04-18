
import { Outlet } from 'react-router-dom'
// import './App.css'
import './index.css'
import SideBar from './sideBar/SideBar'
import Trends from './trends/Trends'
import TweetContext from './Context/tweets'

function App() {
  return (

    <TweetContext >
      < div className=" flex">
        <SideBar />
        <div className=" w-[45%]">
          <Outlet />
        </div>
        <Trends />
      </div>
    </TweetContext>
  )
}

export default App




