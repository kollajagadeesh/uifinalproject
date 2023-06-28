import './App.css';
import Register from './components/register.js';
import Login from './components/login.js';
import Navbar from './components/navbar.js';
function App() {
  return (
    <div className="App">
      <h1>Welcome to UI project</h1>
      <Navbar />
      <Register />
      <Login />
    </div>

  );
}

export default App;
