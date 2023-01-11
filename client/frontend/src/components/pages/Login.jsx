import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

let init = {
  userName: "",
  passWord: "",
};

export const Login = () => {
  const [login, setlogindata] = useState(init);

  const handleChange=(e)=>{
    const {name, value}= e.target;
    setlogindata({ ...login, [name]: value});
  }
    // const handleLogin = (e) => {
    //   e.preventDefault();
    //   axios
    //     .post("http://localhost:8080/auth/signup", signup)
    //     .then(() => {
    //       console.log(signup);
    //       navigate("/login");
    //     })
    //     .catch((err) => {
    //       alert("Something went wrong");
    //       console.log("error", err);
    //     });
    // };
  return (
    <div>
      <h2>Login User</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="userName"
          placeholder="UserName"
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="password"
          name="passWord"
          placeholder="PassWord"
          onChange={handleChange}
          required
        />
        <br />
        <input type="submit" value="Log In" />
      </form>
      <p>
        Create an account <Link to={"/signup"}>Signup</Link>
      </p>
    </div>
  );
};
