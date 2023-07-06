import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fetchData } from "../../main";
const Login = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  const { username, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData("/user/login",
      {
        username,
        password
      },
      "POST")
      .then((data) => {
        if (!data.message) {
          console.log(data)
          storeInlocalStorage(data);
          navigate("/profile");
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }
  const storeInlocalStorage = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    navigate("/profile")
  }

  return (
    <div className="loginform">
      <form className="form" onSubmit={onSubmit}>
      <label htmlFor="username"><b>Username</b></label>
                    <input type="text" id="username" name="username" placeholder="username" onChange={onChange} value={username}></input>
                    

                    <br></br>
                    
                
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="pswd" name="password" placeholder="enter password"onChange={onChange} value={password}></input>
                    <br></br>
        <button className="primary" onSubmit={onSubmit}>LogIn</button>
      </form>
      <p>if you dont have an account </p>
        <Link to="/register">
         Register
        </Link>
     
    </div>
  );
}

export default Login;