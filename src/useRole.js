import React, { useEffect, useState } from 'react';


const useRole = (user) => {
    const [currentUser,setCurrentUser]=useState('')
    useEffect(()=>{
        if(user)
        {
            fetch(`https://car-swap-server.vercel.app/user/${user?.email}`)
            .then(res=>res.json())
            .then(data=>setCurrentUser(data[0].rolePermission))
        }
    },[user])
    return [currentUser];
};

export default useRole;