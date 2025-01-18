import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItem from "../components/FetchItem"

function App() {

  return (
    <>
      <Header></Header>
      <FetchItem></FetchItem>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
