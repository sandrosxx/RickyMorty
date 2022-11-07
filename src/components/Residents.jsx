import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Residents = ({url}) => {
    const[resident, setResident]= useState({})
    
    useEffect(()=>{
        axios.get(url).then((res)=>setResident(res.data))
    },[])
    console.log(resident)
          
   
    return (
        
            <div className='card'>
                <img src={resident.image} alt="" />
                
                <div className="text">
                    <p>  Name: {resident?.name}</p>
                    <p>Status: {resident?.status}</p>
                    <p>Origin name: {resident.origin?.name}</p>
                    <p>Episode: {resident.episode?.length}</p>
                </div>
            </div>
        
    );
};

export default Residents;