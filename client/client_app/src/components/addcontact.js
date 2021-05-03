import React from 'react'
import { Redirect } from 'react-router-dom';
import {history} from 'react-router-dom';


export default class Addcontact extends React.Component{
    state={
        name:"",
        email:""
    }
    state = {
        redirect: true
      }

    adddetails=(e)=>{
        
        e.preventDefault();
        if((!this.state.name)||(!this.state.email))
        {
            alert("All fields are mandatory")
        }
        else{
            console.log(this.state)
            this.props.addContactHandler(this.state)
            this.setState({name:"",email:""})
            
            
            
        }

    }


    render(){        
        
        
        return(
            <div className="ui container ">
                
                <h2 style={{"margin-top":10}}>ADD CONTACT</h2>
                <div class="ui grid">
  <div class="six wide column">
            <form className="ui form"  onSubmit={this.adddetails} >
                
                <div className="field">
                    <label> Name</label>
                    <input  placeholder=" Name" value={this.state.name}
                    onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                <div className="field">
                        <label>Email Id</label>
                        <input placeholder="Email Id"  value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/></div>
                        
                
                      
            <button type="submit" className="ui primary button">Submit
            </button>
            
            </form>
             <Redirect to="/" push={true} />
  
            
            </div>
  
</div>
          
            </div>

           

        )
        
        
        
    }

    
    





}