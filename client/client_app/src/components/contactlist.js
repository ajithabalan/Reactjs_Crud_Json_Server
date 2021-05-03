import React from 'react'
import {Link} from 'react-router-dom'


const  Contactlist=(props)=>{
    
    
    console.log(props)   
       
    const Contacts=props.contacts.map((contact)=>
    {
        return(           
            

            <div class="ui cards">   
           <div class="ui card">
        <div class="content">
        <div >
        <a href="#" onClick={()=>props.deleteGetId(contact.id)}>
        
        <i className="right floated trash icon "></i>
        </a>
        <Link to="/update">
        <a href="/update" onClick={()=>props.editGetId(contact.id)}>        
        
        <i className="right floated edit icon "></i>
        </a >
        </Link>
        
        </div>
        <div class="header">{contact.name}</div>
        <div class="meta" >{contact.email}</div>
        
        </div>
        
        </div></div>
        
        
        )
         }
         )

return(
    <div className="ui container">
        <Link to="/add">
      <div class="ui grid">
      <div class="four wide column"></div>
       <div class="four wide column"></div>  
      <button type="submit" style={{"margin-top":30}} className="ui primary button right floated ">ADD CONTACT</button>
      </div>
      </Link>
    <h2 style={{"margin-top":15}}>Contact list</h2>
    <ul>{Contacts}</ul>
    </div>
)
}

export default Contactlist