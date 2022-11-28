import React, { useEffect, useState } from 'react';


const useRole = (user) => {
    const [currentUser,setCurrentUser]=useState('')
    useEffect(()=>{
        if(user)
        {
            fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res=>res.json())
            .then(data=>setCurrentUser(data[0].rolePermission))
        }
    },[user])
    return [currentUser];
};

export default useRole;