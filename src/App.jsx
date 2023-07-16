import './App.css'
import Card from './component/Card'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import data from "./data"

function App() {
  const newCard=data.map(x=>
    (
      <Card {...x}/>
    )
    );
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <div className='whole-card-div'>
    {newCard}
    </div>
    </div>
  )
}

export default App
