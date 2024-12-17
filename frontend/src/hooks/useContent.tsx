import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export function useContent(){
    const [contents,setContents]=useState([])

    const fetchContent=async ()=>{

        const response=await axios.get(`${BACKEND_URL}/api/v1/content/all`,{
            headers:{
                 authorization:`Barer ${localStorage.getItem('token')}`
            }
        })

        setContents(response.data.content)
    }

    useEffect(()=>{
        fetchContent()
        let interval=setInterval(()=>{
            fetchContent()
        },20*1000)

        return () =>{
            clearInterval(interval)
        }
    },[])

    return {contents,fetchContent}
}