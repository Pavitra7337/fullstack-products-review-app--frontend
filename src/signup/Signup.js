// import React from "react";
// import "./Signup.css";
// // Signup component for the signup form
// function Signup() {
   
//     return(
//         <div className='form-container'>
//             <div className='form-box'>
//                 <h2>Create an account</h2>
//                 {/* Input field for username */}
//                 <div className='form-group'>
//                     <label htmlFor="name">Username</label>
//                     <input type="text" id="name" name="name" required/>
//                 </div>
//                 {/* Input field for email */}
//                 <div className='form-group'>
//                     <label htmlFor="email">Email</label>
//                     <input type="text" id="email" name="email" required/>
//                 </div>
//                 {/* Input field for password */}
//                 <div className='form-group'>
//                     <label htmlFor="password">Password</label>
//                     <input type="password" id="password" name="password" required/>
//                 </div>
//                 {/* Signup button */}
//                 <div className="form-group-button">
//                 <a href="/Signin"><button type="button">Signin</button></a>
//                 </div>
//             </div>
//         </div>
//     )
// }
import React, {useState } from "react"
import axios from "axios"
import './Signup.css'
import { useNavigate, Link } from "react-router-dom"


function Signup() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("User already exists")
                }
                else if(res.data==="notexist"){
                    history("/Dashboard",{state:{id:email}})
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

            <h1>Signup</h1>

            <form1 action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={submit} />

            </form1>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signin">Login Page</Link>

        </div>
    )
}

export default Signup;
 
  