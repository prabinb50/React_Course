import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import { Provider } from "react-redux"
import myntraStore from './store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/bag",
        element: <Bag></Bag>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
