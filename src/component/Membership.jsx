import React from "react";
// import  Membershipcard  from "./Membershipcard";

export function Membership({title}) {
  return (
    <div className="membership-section">
      <div className="title-box">
        <h4>Membership Benefit</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="cards">
        <h2>{title}</h2>
        {/* <p>{paragraph}</p> */}
        {/* <Membershipcard /> */}
      </div>
    </div>
  );
}
