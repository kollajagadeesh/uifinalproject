import './App.css';
import About from './components/pages/About';
import Register from './components/pages/Register.js';
import Login from './components/pages/login.js';
import Navbar from './components/pages/navbar.js';
import Profile from './components/pages/Profile.js';

import { BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>Welcome to UI project</h1>
    
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Navbar />}>
            <Route path="About" element={<About/>}/>
            <Route path="register" element={<Register />}/>
            <Route path="login" element={<Login />}/>
            <Route path="profile" element={<Profile/>}/>

          </Route>

        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;