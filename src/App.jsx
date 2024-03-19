
import './App.css'
import Timeline from './Components/Timeline'
import SideBar from './sideBar/SideBar'
import Trends from './trends/Trends'

function App() {

  return (
    < div className='main'>
      <SideBar/>
      <div className='milieu'>
        <Timeline />
      </div>
      <Trends/>
    </div>
  )
}

export default App
