import { Button } from "./Button"
import { CrossIcon } from "./Icons"
import Input from "./Input"

const onInputChange=()=>{

}

const CreateContentModel = ({open,onClose}:any) => {
  return (
    <div>
        { open && <div className="w-screen h-screen bg-slate-500 
        opacity-60 fixed left-0 top-0 justify-center flex ">
            <div className="flex justify-center flex-col ">
                <span className=" bg-white rounded opacity-100 p-4">
                   <div className="flex justify-end">
                    <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon/>
                    </div>
                  
                   </div>  
                   <div>
                    <Input onChange={onInputChange} placeholder={"Title"}/>
                    <Input onChange={onInputChange} placeholder={"Link"}/>
                </div>
                <div className="flex justify-center">
                  <Button variant="primary" text="Submit" />
                </div>
                </span>
               
            </div>
            </div>}
    </div>
  )
}

export default CreateContentModel
