import { useEffect, useState } from "react"

const useData=()=>{
    const [service,setService]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data=>setService(data))
    },[])
    return [service,setService]
}

export default useData;