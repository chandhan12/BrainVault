
import { useState } from 'react'

import { Button } from '../components/Button'
import { Card } from '../components/Card'
import CreateContentModel from '../components/CreateContentModel'
import { Plus, Share } from '../components/Icons'
import SideBar from '../components/SideBar'

function Dashboard() {
    const[modelOpen,setModelOpen]=useState(false)
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
        <Button variant='secondary' text="Share Brain" startIcon={ <Share/>} />

        </div>

        <div className='flex gap-4'>
            
        <Card type="twitter" link={`https://x.com/CricCrazyJohns/status/1864949013893779591`} title={`doge coin tweet`}/>
        <Card type="youtube" link={`https://www.youtube.com/watch?v=RWXAOJm3LAE`} title={`JEE vs Remote`}/>


        </div>
        </div>
 </div>
}

export default Dashboard
