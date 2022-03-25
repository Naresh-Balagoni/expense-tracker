import './App.css';
import CreateProfile from './CreateProfile/createProfile';
import "./CreateProfile/createProfile.css"
import { Routes, Route } from 'react-router-dom';
import HomePage from './CreateProfile/HomePage/homePage';
import NavBar from './navBar';
function App() {
  return (
    <div>
       <NavBar/>
      <Routes>
         <Route exact path ='./homePage' component ={<HomePage/>}/>
         <Route exact path ='./createProfile' component ={<CreateProfile/>}/>
      </Routes>
       <div className="header">
        <div >
        <p> WELCOME TO EXPENSE TRACKER </p>
        </div>
        </div>
        <div>
        </div>
        <div>
        </div>
    </div>
  )
}

export default App;
