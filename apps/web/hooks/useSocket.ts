import React, { useEffect, useState } from 'react'
import { WS_URL } from '../app/config';

const useSocket = () => {
    const[loading,setLoading] = useState(true);
    const[socket,setSocket] = useState<WebSocket>()

    useEffect(()=>{
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4YTQ5YzQxMC01YWE2LTRkMzctODVkZS00NzUxNWM3OTY1ZjMiLCJpYXQiOjE3NjAxNTcxODJ9.QL1yKlBCiC2ZgFsvI2LPwFugDfOgkC9fvP1O7bw_Gmo`);
        ws.onopen = ()=>{
            setLoading(false);
            setSocket(ws)
        }
    },[])
    return {
        socket,
        loading
    }
}

export default useSocket