import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Addcontact from './Components/Addcontact';
import  Contactlist from './Components/Contactlist';
import uuid4 from 'uuid4';
function App() {
  //local storage is used to store our contact details and by .get items we get our details even if we reload the page
  const localStorageKey = "contact"

  const[contact,setContact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))
  ||[]})

  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(contact))
  },[contact])

 
  const addContact = (data) =>{
    // console.log("from app.js")
    //uuid4 wil generate a random id
    setContact([...contact,{id : uuid4(),data}]);
  }

  function removeContact(id){
     const updateList= contact.filter((val) => {
      return val.id!== id;
     })
     setContact(updateList)
  }

  //contactlist  take data from addcontact
  return (
    <div>
    <Header />
    <Addcontact  addContact={addContact}/>
    <Contactlist contact={contact} removeContact={removeContact}/>
    </div>
  )
}

export default App;
