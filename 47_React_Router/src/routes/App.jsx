import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/post-list-store'
import { Outlet } from "react-router-dom"

function App() {

  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className='app-container'>
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
        <div className='content'>
          <Header></Header>
          <Outlet></Outlet>
          {/* {selectedTab === 'Home' ? (<PostList></PostList>) : (<CreatePost></CreatePost>)} */}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
