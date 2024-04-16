
import { Outlet } from 'react-router-dom'
// import './App.css'
import './index.css'
import SideBar from './sideBar/SideBar'
import Trends from './trends/Trends'
import { TweetContext } from './Context/contex'
import json from "./data/initial-data.json"
import axios from 'axios';
import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const data = { ...json };
// const [data, setData] = useState({}); // Utilisez l'état pour les données des tweets
//   console.log(data)
//   // Récupérez les données lors du montage du composant avec useEffect
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/tweets');
//         console.log(response.data);
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []); // Le tableau de dépendances vide garantit que les données ne sont récupérées qu'une fois lors du montage


  return (

    <TweetContext.Provider value={data}>
      < div className=" flex">
        <SideBar />
        <div className=" w-[45%]">
          <Outlet />
        </div>
        <Trends />
      </div>
    </TweetContext.Provider>
  )
}

export default App




