import React from 'react';

// Signin component for the login form
// export function Signin(){

//     return(
//         <div className='form-container'>
//             <div className='form-box'>
//                 <h2>Signin</h2>
//                 {/* Input fields for email */}
//                 <div className='form-group'>
//                     <label htmlFor="email">Email</label>
//                     <input type="text" id="email" name="email" required/>
//                 </div>
//                 {/* Input fields for password */}
//                 <div className='form-group'>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" required/>
//                 </div>
//                 {/* Log in button */}
//                 <div className="form-group-button">
//                 <a href="/Dashboard"><button type="button">Login</button></a>
//                 </div>
//                 {/* Message for redirection to signup */}
//                 <div className='login-message'>
//                 <center><p className='login_redirect mt-2'>Don't have an account?<b><a href='/'> Signup here</a></b></p></center>
//                 </div>
//             </div>
//         </div>
//     )
// }

import  { useState } from "react"
import axios from "axios"
import './Signin.css'
import { useNavigate, Link } from "react-router-dom"


function Signin() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/Dashboard",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">

            <h1>Login</h1>

            <form1 action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form1>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Signup Page</Link>

        </div>
    )
}

export default Signin;