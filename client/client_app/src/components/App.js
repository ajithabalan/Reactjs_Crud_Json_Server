
import React, {useState,useEffect,useParams} from 'react';
import Contactlist from './contactlist';
import Header from './header'
import Addcontact from './addcontact'
import './app.css';
import api from '../api/contacts'
import {uuid} from 'uuidv4'
import Updatecontact from './updatecontact';
import { BrowserRouter as Router, Switch,Route, Link, browserHistory, Redirect, useHistory} from 'react-router-dom'




function App() {

const [contacts,setContact]=useState([])
const[contact,setCont]=useState({})
const[id,setId]=useState("")


const addContactHandler=async(contact)=>{
  console.log(contact)

  const request={
    id:uuid(),    
  ...contact
  }

  const response=await api.post("/contacts",request)
  console.log(response)
  setContact([...contacts,response.data])
  return <Redirect to="/" push={true} />
 
     
 
}

const retriveData=async ()=>{

  const response=await api.get("/contacts")
  return response.data;

}


const  deleteContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>
  {    
    return contact.id!==id;
  } 

);
  setContact(newContactList) 
  

  
  const url='/contacts/'+id
  
  api.delete(url).then((response)=>{
    console.log(response.data)
  });

}
const editContactHandler=(id)=>{
  const newContactList=contacts.filter((contact)=>
  {    
    return contact.id!==id;
  } 

);
  setContact(newContactList) 
  console.log(id)
  const url='/contacts/'+id  
  api.get(url).then((response)=>{
    console.log(response.data)
    setCont(response.data)
    setId(id)

  }); 
}

const updateContactHandler=(contact)=>{
  console.log(contact)   
  const url='/contacts/'+id
  
  const response=api.put(url,contact).then((response)=>{
  console.log(response)
  setContact([...contacts,response.data])
  }
  )

}

useEffect(() => {

  const gettAllContacts=async()=>{
 const allContacts= await retriveData()

 if(allContacts){
 setContact(allContacts)
 };
}
gettAllContacts();

  
  
 
  }
, [])


  return (
    <div className="App">

      <Router>
      <Header/>
      

      <Switch>
        <Route path="/add" >
            <Addcontact addContactHandler={addContactHandler}/>           
           
        </Route>
        <Route path="/" exact >       
             <Contactlist contacts={contacts} deleteGetId={deleteContactHandler} editGetId ={editContactHandler}></Contactlist> 
       </Route>   
       <Route  path="/update"  >
               <Updatecontact contact={contact} updateContactHandler={updateContactHandler}></Updatecontact>
       </Route>
         
       </Switch>
       </Router>
      
    </div>
  );
}

export default App;
