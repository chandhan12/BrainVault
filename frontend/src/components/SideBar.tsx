import { TwitterIcon, YoutubeIcon } from "./Icons"
import SideBarItem from "./SideBarItem"
import { BoltIcon } from "@heroicons/react/16/solid";


const SideBar = () => {
  return (
    <div className='h-screen fixed left-0 top-0 w-72  bg-white'>
       <div className="flex p-4 items-center ">
       <div className="p-2 flex ">
          <BoltIcon className="w-8 h-8 text-seasalt text-blue-600" />
       </div>
       <h1 className="text-xl font-bold">
            Brain Vault
        </h1>
       </div>
      <div className="pt-8 pl-4">
        <SideBarItem  text={"Twitter"} icon={<TwitterIcon/>}/>
        <SideBarItem  text={"Youtube"} icon={<YoutubeIcon/>}/>
      </div>
    </div>
  )
}

export default SideBar
