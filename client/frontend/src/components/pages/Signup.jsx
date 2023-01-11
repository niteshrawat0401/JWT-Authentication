import React from 'react'
import {Link} from "react-router-dom"

export const Signup = () => {
  return (
    <div>
        <h2>Register User</h2>
        <form>
            <input type="text" name="name" placeholder='Name'/>
            <br />
            <input type="text" name="userName" placeholder='UserName'/>
            <br />
            <input type="password" name="passWord" placeholder='PassWord' />
            <br />
            <input type="submit" value="Sign Up" />
        </form>
        <p>Already have an account <Link to={"/login"}>Login</Link></p>
    </div>
  )
}
