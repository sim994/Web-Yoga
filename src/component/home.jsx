import React, { useEffect, useState } from 'react'

export function Home() {
  let [count,setcount] = useState(0)

  useEffect(()=>{
      console.log(count);
      
  },[count])
  return (
    <div className='hero-section'>
      <h1>Home For Online Yoga</h1>
      <p>Stream Hundreds Of Expertly Led Yoga  & Meditation Classes On Any Device</p>
      <button className="stream" onClick={()=>setcount(count+1)}>Start Your Free Trail</button>
    </div>
  )
}

