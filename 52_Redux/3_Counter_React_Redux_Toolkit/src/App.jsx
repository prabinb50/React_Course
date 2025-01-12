import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Container from './components/Container'
import Controls from './components/Controls'
import { useSelector } from 'react-redux'
import PrivacyMess from './components/PrivacyMess'

function App() {

  const privacy = useSelector(store => store.privacy);

  return (
    <div className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMess></PrivacyMess> : <DisplayCounter></DisplayCounter>}
          <Controls></Controls>
        </div>
      </Container>
    </div>
  )
}

export default App
