import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Car from './Component/Car.jsx'
import Timer from './Component/Timer.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
 
const router = createBrowserRouter([
  {
    path:"/",
    element: <Car/>
  },
  {
    path:"/Car",
    element:<Timer/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
