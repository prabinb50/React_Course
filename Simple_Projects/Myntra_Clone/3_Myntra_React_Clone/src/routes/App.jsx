import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import FetchItem from "../components/FetchItem"
import { useSelector } from "react-redux"
import LoadingSpinner from "../components/LoadingSpinner"

function App() {

  const fetchStatus = useSelector((store) => store.fetchStatus);


  return (
    <>
      <Header></Header>
      <FetchItem></FetchItem>
      {fetchStatus.currentlyFetching ? <LoadingSpinner></LoadingSpinner> : <Outlet></Outlet>}
      <Footer></Footer>
    </>
  )
}

export default App
