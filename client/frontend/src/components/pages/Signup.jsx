import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

let init = {
  name: "",
  userName: "",
  passWord: "",
};

export const Signup = () => {
  const [signup, setSignupdata] = useState(init);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupdata({ ...signup, [name]: value });
  };

  return (
    <div>
      <h2>Register User</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <br />
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
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        Already have an account <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};
