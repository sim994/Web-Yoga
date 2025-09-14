import React from 'react'

export function Card({title,price}) {
  let color = {
    color: price >= 100000 ? "red" : "yellow"
  }
  return (
    <>
        
              <h1>Product name :{title}</h1>
              <h1 style={color}>Product Price:{price}</h1>
    </>
  )
}

