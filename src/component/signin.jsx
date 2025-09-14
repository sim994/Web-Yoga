import React from "react";
import { useState } from "react";

export function Signin() {
  let [user, setuser] = useState({
    email: "",
    password: "",
  });

  let hanin = (e) => {
    let { name, value } = e.target;

    setuser((prev) => ({ ...prev, [name]: value }));
  };

  let subdata = (e) => {
    e.preventDefault();

    console.log(user);


    
    
  };

  return (
    <div className="singin-section">
      <h3>Signin Form</h3>
      <form method="post" onSubmit={subdata}>
        <input
          type="email"
          name="email"
          id=""
          className="input-email"
          required
          placeholder="Enter Email Here"
          value={user.email}
          onChange={hanin}
        />
        <input
          type="password"
          name="password"
          id=""
          className="input-password"
          required
          placeholder="Enter Password Here"
          value={user.password}
          onChange={hanin}
        />
        <input type="submit" value="Sign In" className="sign-btn" />

      </form>
    </div>
  );
}
