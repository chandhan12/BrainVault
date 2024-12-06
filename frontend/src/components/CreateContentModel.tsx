import { CrossIcon } from "./Icons"


const CreateContentModel = ({open}) => {
  return (
    <div>
        { open && <div className="w-screen h-screen bg-slate-500 
        opacity-60 fixed left-0 top-0 justify-center flex ">
            <div className="flex justify-center flex-col ">
                <span className=" bg-white rounded opacity-100 p-4">
                   <div className="flex justify-end">
                   <CrossIcon/>
                   </div>  
                </span>
            </div>
            </div>}
    </div>
  )
}

export default CreateContentModel
