
import Header from "./components/Header"
import Home from "./pages/Home"
import Card from './components/Card'
import Courses from "./data/coursesData.js"

function App() {

  return (
    <div>
      <Header/>
      <Home/>

     {/* <Card name="Product-1" price={499} desc="Lorem ipsum, dolor sit amet consectetur"/>
     <Card name="Product-2" price={699} desc="Lorem ipsum, dolor "/>
      <Card name="Product-3" price={1499} desc="Lorem ipsum, dolor consectetur"/> */}

      <Card courses = {Courses}/>
    </div>
  )
}

export default App
