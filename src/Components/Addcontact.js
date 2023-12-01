import React, { useState } from 'react';

export default function Addcontact({addContact}){

  const[contactdata,setContactData] = useState({name: "",email:""})
  function handleChange(e){
    // ...contactdata means it will make a duplicate/copy of contactdata 
    if(e.target.name==="name"){
      setContactData({...contactdata,name: e.target.value})
    }
    else{
      setContactData({...contactdata,email: e.target.value})
    }
  }

  function handleAdd(){
    if(contactdata.name === "" || contactdata.email===""){
    alert("fill all details")
    return
    }
    addContact(contactdata)
   setContactData({name: "",email:""})
    
  }
  return (
    <div>
    <h2 className='formheader'>Add contact details</h2>
    <form >
    <div className='details'><label className='label'>Name: </label>
    <input onChange={handleChange} type='text' placeholder='enter name' name='name'></input>
    </div><br/>
    <div className='details'><label className='label'>Email: </label>
    <input onChange={handleChange} className='in' type='email' placeholder='enter email' name='email'></input>
    </div></form>

    <button onClick={handleAdd} className='btn'>Add Contact</button>
    </div>
  );
}

