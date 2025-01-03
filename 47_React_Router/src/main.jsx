import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import CreatePost from './components/CreatePost.jsx';

const router = createBrowserRouter([
  { path: "/", element: <App></App> },
  { path: "/create-post", element: <CreatePost></CreatePost> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
