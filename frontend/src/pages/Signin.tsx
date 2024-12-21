import { Link, useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import Input from "../components/Input"
import { useRef } from "react"
import axios from "axios"
import { BACKEND_URL } from "../config"
import loginGrapic from '../assets/LoginGraphic.svg'





const Signin = () => {

  const emailRef=useRef<HTMLInputElement>()
  const passwordRef=useRef<HTMLInputElement>()
  const navigate=useNavigate()
  

  async function signIn(){
    const email=emailRef.current?.value;
    const password=passwordRef.current?.value;
    console.log(email,password)

    const response=await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
      email,
      password
    })
      const jwt=response.data.token;
      localStorage.setItem("token",jwt);
      navigate('/dashboard')
   
  }
  return (
    <div className="flex flex-col justify-center   items-center h-screen bg-slate-200 md:flex-row " >
    <div className="h-auto w-2/4 hidden md:block">
      <img src={loginGrapic} alt="" />
    </div>
      <div className="bg-white  rounded-lg p-4 w-auto h-auto ">
      <h1 className="text-center font-bold text-slate-800 text-2xl">Sign In</h1>
       <Input  reference={emailRef}placeholder="user@gmail.com" />
       <Input reference={passwordRef} placeholder="password"  />

    <Button onClick={signIn} variant="primary" text="SignIn" WidthFull={true}/>
    <p className="text-slate-700">Don't have an account ? <Link to={'/signup'} className="hover:underline hover:text-green-500">SignUp </Link></p>
      </div>

      </div>
  
  )
}

export default Signin
