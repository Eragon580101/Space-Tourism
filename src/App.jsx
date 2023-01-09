import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import DesignScreen from './screens/DesignScreen'
import CrewScreen from './screens/CrewScreen'
import DestinationScreen from './screens/DestinationScreen'
import TechnologyScreen from './screens/TechnologyScreen'
import Header from './components/Header'
import data from './data.json'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<HomeScreen/>}></Route>
        <Route exact path='/design' element={<DesignScreen/>}></Route>
        <Route exact path='/destination' element={<DestinationScreen data={data.destinations}/>}></Route>
        <Route exact path='/crew' element={<CrewScreen data={data.crew}/>}></Route>
        <Route exact path='/technology' element={<TechnologyScreen data={data.technology}/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
