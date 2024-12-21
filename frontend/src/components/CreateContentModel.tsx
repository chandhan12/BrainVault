import { useRef, useState } from "react"
import { Button } from "./Button"
import { CrossIcon } from "./Icons"
import Input from "./Input"
import axios from "axios";
import { BACKEND_URL } from "../config";


enum ContentType{
  youtube='youtube',
  twitter='twitter',
  Document="Document",
  Link="Link"
}

interface CreateContentModelProps {
  open: boolean;
  onClose: () => void;
}

const CreateContentModel = ({open,onClose}:CreateContentModelProps) => {
  const titleRef=useRef<HTMLInputElement>();
  const linkRef=useRef<HTMLInputElement>();
  const tagRef=useRef<HTMLInputElement>();
  const [type,setType]=useState("youtube")
  
  

  async function addContent () {
    const title=titleRef.current?.value
    const link=linkRef.current?.value
    const arrayTags=tagRef.current?.value

    const tags=arrayTags?.split(',').map((item) => item.trim())

    
    await axios.post(`${BACKEND_URL}/api/v1/content/create`,{
      title,
      link,
      type,
      tags
    },{
  headers:{
    authorization:`Barer ${localStorage.getItem('token')}`
  }})

onClose() 
    
  }
  console.log(type)
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
                <h1 className="m-2">Type</h1>
                
                <select className="border border-slate-400 rounded-md pt-1 pb-1 m-2" onChange={(e)=>{
                  setType(e.target.value)
                }}>
                  <option value="youtube">Youtube</option>
                  <option value="twitter">Twitter</option>
                  <option value="Document">Document</option>
                  <option value="Link">Link</option>
                </select>
                <Input reference={tagRef} placeholder={"Enter tags comma(,)"}/>
               
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
