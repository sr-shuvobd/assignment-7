import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Component/layout/Layout.jsx'
import HomePage from './Pages/Home/HomePage.jsx'
import TimelinePage from './Pages/Timeline/TimelinePage.jsx'
import StatsPage from './Pages/Stats/StatsPage.jsx'
import Details from './Pages/Details/Details.jsx'
import ErrorPage from './Pages/Error/ErrorPage.jsx'

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
        path:'/timeline',
        element: <TimelinePage/>
      },
      {
        path:'/stats',
        element: <StatsPage/>
      },
      {
        path:'/details/:id',
        element:<Details/>
      }
    ],
    errorElement: <ErrorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
