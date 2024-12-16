import { useRef } from "react"
import { Button } from "../components/Button"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"



const Signup = () => {
  const emailRef=useRef<HTMLInputElement>()
  const passwordRef=useRef<HTMLInputElement>()
  const navigate=useNavigate()
  

  async function signUp(){
    const email=emailRef.current?.value;
    const password=passwordRef.current?.value;
    console.log(email,password)

    await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
      email,
      password
    })

    alert("your signed up successfully")
    navigate('/signin')
  }
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-300 ">
      <div className="bg-white  rounded-lg p-4 w-auto h-auto ">
        
       <Input reference={emailRef} placeholder="user@gmail.com" />
       <Input reference={passwordRef} placeholder="password"  />

    <Button onClick={signUp} variant="primary" text="SignUp" WidthFull={true}/>
    <p className="text-slate-700">Account already exists ? <Link to={'/signin'} className="hover:underline hover:text-green-500">SignIn</Link></p>
    
      </div>
      
    </div>
  )
}

export default Signup
