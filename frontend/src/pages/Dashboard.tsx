
import { useEffect, useState } from 'react'

import { Button } from '../components/Button'
import { Card } from '../components/Card'
import CreateContentModel from '../components/CreateContentModel'
import { Plus, Share } from '../components/Icons'
import SideBar from '../components/SideBar'
import { useContent } from '../hooks/useContent'
import { BACKEND_URL } from '../config'
import axios from 'axios'

function Dashboard() {
    const[modelOpen,setModelOpen]=useState(false)
    const {contents,fetchContent}=useContent()

    useEffect(()=>{
        fetchContent
    },[modelOpen])
 return<div >
        <SideBar />
         <div className='p-4 ml-72 min-h-screen bg-slate-200 border-l-2 '>
            
            <CreateContentModel open={modelOpen} onClose={()=>{
            setModelOpen(false)
            }}/>
        <div className='flex justify-end'>
        <Button variant='primary' text="Add content"  startIcon={<Plus/>} onClick={()=>{
            setModelOpen(true)
        }}/>
        <Button variant='secondary' text="Share Brain" startIcon={ <Share/>} onClick={async ()=>{
           const response= await axios.post(`${BACKEND_URL}/api/v1/brain/share`,{
                share:true
            },{
                headers:{
                     authorization:`Barer ${localStorage.getItem('token')}`
                }
            })
            const shareLink=`http://localhost:3000/api/v1/brain/${response.data.hash}`
            alert(shareLink)
        }} />

        </div>

        <div className='flex gap-4 flex-wrap'>
            
        {
            contents.map(({type,link,title})=>{
                return(
                    <Card 
                    type={type} 
                    link={link} 
                    title={title}/>
                )
            })
        }


        </div>
        </div>
 </div>
}

export default Dashboard
