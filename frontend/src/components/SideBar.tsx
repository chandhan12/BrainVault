import { useRecoilState } from "recoil";
import { DocumentIcon, LinkIcon, Logo, TwitterIcon, YoutubeIcon } from "./Icons"
import SideBarItem from "./SideBarItem"

import { activeTab  } from "../atoms";
import { Link } from "react-router-dom";



const SideBar = () => {
  const [activeTabValue,setActiveTab]=useRecoilState(activeTab)


  return (
    <div className='h-screen fixed left-0 top-0 w-72  bg-white'>
       <div className="flex p-4 items-center ">
       <div className="p-2 flex cursor-pointer">
         <Link to={'/'} ><Logo  /></Link>
       </div>
       <h1 className="text-xl font-bold cursor-pointer">
            <Link to={'/'}>BrainVault</Link>
        </h1>
       </div>
      <div className="pt-8 pl-4">
        <div onClick={()=>{
         setActiveTab('twitter')
        }}>
          <SideBarItem  text={"twitter"} icon={<TwitterIcon/>} />
        </div>
        <div onClick={()=>{
         setActiveTab('youtube')
        }}>
          <SideBarItem  text={"youtube"} icon={<YoutubeIcon/>}/>
          </div>
          <div onClick={()=>{
         setActiveTab('Document')
        }}>
          <SideBarItem  text={"Document"} icon={<DocumentIcon/>}/>
          </div>
          <div onClick={()=>{
         setActiveTab('Link')
        }}>
          <SideBarItem  text={"Link"} icon={<LinkIcon/>}/>
          </div>
      </div>
    </div>
  )
}

export default SideBar
