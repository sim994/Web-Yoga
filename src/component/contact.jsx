import React, { useState } from "react";

export function Contact() {

    let [user,setuser] = useState({
        name:"",
        email:"",
        number:"",
        complain:""

    })

    let condata =(e) =>{
        let {name,value} = e.target

        setuser((prev) => ({
            ...prev,[name]:value
        }))

    }

    let godata =(event)=>{
        event.preventDefault()
            console.log(user);
            
    }
  return (
    <div className="contact-section">
        <h3>Contact Form</h3>
      <form action="" method="post" onSubmit={godata}>
        <input
          type="text"
          name="name"
          id=""
          required
          placeholder="Enter name"
          className="input-email"
          value={user.name} 
          onChange={condata} 
          />
        <input
          type="email"
          name="email"
          id=""
          required
          placeholder="Enter email"
          className="input-email"
          value={user.email}  
          onChange={condata} 
          />
        <input
          type="text"
          name="number"
          id=""
          required
          placeholder="Enter Phone number"
          className="input-email"
          value={user.number}  
          
          onChange={condata} 
          />
        <textarea name="complain" id="" cols="34" rows="10" placeholder="Write your issues" value={user.complain} onChange={condata} ></textarea>
        <input type="submit" value="Submit" className="sign-btn" />
      </form>
    </div>
  );
}
