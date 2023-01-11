import React from 'react'
import {Link} from "react-router-dom"

export const Login = () => {
  return (
    <div><h2>Login User</h2>
    <form>
        <input type="text" name="userName" placeholder='UserName'/>
        <br />
        <input type="password" name="passWord" placeholder='PassWord' />
        <br />
        <input type="submit" value="Log In" />
    </form>
    <p>Create an account <Link to={"/signup"}>Signup</Link></p>
    </div>
  )
}
