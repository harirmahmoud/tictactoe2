import React from 'react'

export default function MiniSquare({val,choose}) {
    const stl1={
        fontSize:"30px",
        color:"red",
    }
    const stl2={
        fontSize:"30px",
        color:"blue",
    }
  return (
    <div onClick={choose} style={{
        width:"70px",
        height:"70px",
        border:"1px solid black",
        borderRadius:"5px",
        hover:{
            backgroundColor:"lightblue"
        },
        margin:"10px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        }}>
        <h1 style={val==="X"?stl1:stl2}>{val}</h1>
        </div>
  )
}
