import React, {useState} from "react";
import "./signin.sass";
import { Link, useNavigate } from "react-router-dom";

const accounts = [
  {username: "minhxuan123", password: "123456789"},
  {username: "nguyenphuong", password: "19090109"},
  {username: "maiphuong", password: "100119089"},
]

const SignIn = () => {
  const[user, setUsername] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const register = () =>{
    for (const element of accounts) {
      const {username, password} = element;
      if (user === username && pw === password) {
        navigate("/")
        localStorage.setItem("isLogin", username);
        break;
      }
      else{
        alert('Incorrect username or password')
        break;
      }
    }
  }

  return (
    <div className="signin">
      <div className="signin__container">
        <h1 className="signin__title">Log in</h1>
        <input type="text" placeholder="Username" className="signin__input" value={user} onChange={(e) => setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" className="signin__input" value={pw} onChange={(e) => setPw(e.target.value)} />
        <div className="signin__row">
          <Link className="signin__forgot" to="/authentication/forgot">
            Forgot password?
          </Link>
          <Link className="signin__signup" to="/authentication/signup">
            Sign up
          </Link>
        </div>
        <button className="signin__button" onClick={register}>Login</button>
      </div>
    </div>
  );
};

export default SignIn;
