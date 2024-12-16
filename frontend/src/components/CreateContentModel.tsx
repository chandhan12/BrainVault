import { useRef, useState } from "react"
import { Button } from "./Button"
import { CrossIcon } from "./Icons"
import Input from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../config";


enum ContentType{
  youtube='youtube',
  twitter='twitter'
}

interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
}

const CreateContentModel = ({open,onClose}:CreateContentModelProps) => {
  const titleRef=useRef<HTMLInputElement>();
  const linkRef=useRef<HTMLInputElement>();
  const [type,setType]=useState(ContentType.youtube)
  
  

  async function addContent () {
    const title=titleRef.current?.value
    const link=linkRef.current?.value

    
    await axios.post(`${BACKEND_URL}/api/v1/content/create`,{
      title,
      link,
      type
    },{
  headers:{
    authorization:`Barer ${localStorage.getItem('token')}`
  }})

onClose() 
    
  }
  return (
    <div>
        { open && <div>
          <div className="w-screen h-screen bg-slate-500 
        opacity-60 fixed left-0 top-0 justify-center flex">

          </div>
        
        <div className="w-screen h-screen  
         fixed left-0 top-0 justify-center flex ">
            <div className="flex justify-center flex-col ">
                <span className=" bg-white rounded opacity-100 p-4">
                   <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon/>
                    </div>
                  
                   </div>  
                   <div>
                    <Input reference={titleRef} placeholder={"Title"}/>
                    <Input reference={linkRef} placeholder={"Link"}/>
                </div>
                <h1>Type</h1>
                <div className="flex justify-center gap-1 p-4">
                  <Button text="Youtube" variant={ type ===ContentType.youtube ? 'primary' :"secondary"} onClick={() =>{
                    setType(ContentType.youtube)
                  }}/>
                  <Button text="Twitter" variant={ type === ContentType.twitter ? 'primary' :"secondary"} onClick={() =>{
                    setType(ContentType.twitter)
                  }}/>
                </div>
                <div className="flex justify-center">
                  <Button variant="primary" onClick={addContent} text="Submit" />
                </div>
                </span>
               
            </div>
            </div>
            </div>
            }
    </div>
  )
}

export default CreateContentModel
