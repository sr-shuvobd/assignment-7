import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Component/layout/Layout.jsx'
import HomePage from './Pages/Home/HomePage.jsx'
import TimelinePage from './Pages/Timeline/TimelinePage.jsx'
import StatsPage from './Pages/Stats/StatsPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children: [
      {
        index:true,
        element: <HomePage/>
      },
      {
        path:'timeline',
        element: <TimelinePage/>
      },
      {
        path:'stats',
        element: <StatsPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
