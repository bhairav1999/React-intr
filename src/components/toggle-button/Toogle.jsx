import React, { useState } from 'react'

const Toogle = () => {
    const [activeIndex , setActiveIndex]=useState()
    const handleclick =()=>{
        setActiveIndex(!activeIndex)
    }
  return (
    <>
      <button onClick={handleclick}>
         {activeIndex ? "on" : "of"}
      </button>
      {
        activeIndex && <p>i am on</p>
      }
    </>
  )
}

export default Toogle
