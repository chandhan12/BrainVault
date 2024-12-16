import { ReactElement } from "react"


const SideBarItem = ({icon,text}:{
    text:String,
    icon:ReactElement
}) => {
  return (
    <div className="flex cursor-pointer hover:bg-slate-300 rounded max-w-64  transition-all duration-200">
        <div className="p-2 text-gray-900">
            {icon} 
        </div>
      <div className="p-2 text-gray-900 text-lg">
        {text}
      </div>
    </div>
  )
}

export default SideBarItem
