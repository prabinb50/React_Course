import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'

function App() {
  return (
    <div className='app-container'>
      <SideBar></SideBar>
      <div className='content'>
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
