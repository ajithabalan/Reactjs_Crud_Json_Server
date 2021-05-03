import React from 'react'
import { Link } from 'react-router-dom';

export default class Updatecontact extends React.Component{
    state={
        name:this.props.contact.name,
        email:this.props.contact.email
    }

    updatedetails=(e)=>{
        e.preventDefault();
        if((!this.state.name)||(!this.state.email))
        {
            alert("All fields are mandatory")
        }
        else{
            console.log(this.state)
            this.props.updateContactHandler(this.state)
            this.setState({name:"",email:""})
        }

    }


    render(){
        return(
            <div className="ui container ">
                
                <h2 style={{"margin-top":10}}>UPDATE CONTACT</h2>
                <div class="ui grid">
  <div class="six wide column">
      
            <form className="ui form"  onSubmit={this.updatedetails} >
                
                <div className="field">
                    <label> Name</label>
                    <input  placeholder=" Name" placeholder={this.props.contact.name} value={this.state.name}
                    onChange={(e)=>this.setState({name:e.target.value})}/>
                    </div>
                <div className="field">
                        <label>Email Id</label>
                        <input placeholder="Email Id" placeholder={this.props.contact.email} value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})}/></div>
                        
                
                           
            <button type="submit" className="ui primary button">Update
            </button>
            
            </form>
            
            </div>
  
</div>
            </div>
        )
    }





}