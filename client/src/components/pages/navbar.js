import {Outlet,Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>           
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Profile">Profile</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
      <Outlet/>
    </div>
  );
}

export default Navbar;