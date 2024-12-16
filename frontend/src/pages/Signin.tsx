import { Button } from "../components/Button"
import Input from "../components/Input"



const Signin = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-300 ">
      <div className="bg-white  rounded-lg p-4 w-auto h-64 ">
       <Input placeholder="user@gmail.com" onChange={()=>{

       }} />
       <Input placeholder="password" onChange={()=>{
        
    }} />

    <Button  variant="primary" text="Signin" WidthFull={true}/>
    <p>Don't have an account signup</p>
      </div>
      
    </div>
  )
}

export default Signin
