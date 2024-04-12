import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Timeline from './Components/Timeline.jsx'
import Explore from './Explore/Explore.jsx'
import Notifications from './Notifications/Notifications.jsx'
import Messages from './Messages/Messages.jsx'
import Bookmarks from './Bookmarks/Bookmarks.jsx'
import More from './More/More.jsx'
import Profile from './Profile/Profile.jsx'
import Lists from './Lists/Lists.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Timeline />,
      },
      {
        path: '/home',
        element: <Timeline />,
      },
      {
        path: '/:userName',
        element: <Profile />
      },
      {
        path: '/explore',
        element: <Explore />
      },
      {
        path: '/notifications',
        element: <Notifications />
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      },
      {
        path: '/messages',
        element: <Messages />
      },
      {
        path: '/more',
        element: <More />
      },
      {
        path: '/lists',
        element: <Lists />
      },
    ]
  },
  {
    path: "/home",
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
