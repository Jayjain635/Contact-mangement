import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
 const Contactlist = (props) => {
const{contact ,removeContact} = props
 
    const contactlist = contact.map((val) =>{
        return (
          //val.data.name bcoz we pass data in addcontact in which we have bane&email, while id is a differnt attribute
          <div className='contact'>
          <div className='contact-detail'>{val.data.name}</div>
          <div className='contact-detail'>{val.data.email}</div>
          <span onClick={()=>removeContact(val.id)}><DeleteIcon /></span>
          </div>);
    })
  return (
    <>
    <div className='contact-header'>Contact list:- </div>
    <div>{contactlist}</div>
   
    </>
  )
}
export default Contactlist