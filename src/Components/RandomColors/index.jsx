import React, { useEffect, useState } from 'react'

const RandomColors = () => {
    const [typeofcolor,setTypeofColor]=useState("hex");
    const [color,setColor]=useState("#000000");
    const generateRandom=(length)=>{
        return Math.floor(Math.random()*length)
    }
    const createHexColor=()=>{
        const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor="#";
        for(let i=0;i<6;i++){
            hexColor+=hex[generateRandom(hex.length)]
        }
        setColor(hexColor)
    }
    const createRgbColor=()=>{
        const r=generateRandom(256);
        const g=generateRandom(256);
        const b=generateRandom(256);
        setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        if (typeofcolor === "rgb") createRgbColor();
        else createHexColor();
      }, [typeofcolor]);
  return (
    <div style={{
        width:"100vw",
        height:"100vh",
        background:color,
    }}>
        <button onClick={()=>setTypeofColor("hex")}>Create HEX Color</button>
        <button onClick={()=>setTypeofColor("rgb")}>Create RGB Color</button>
        <button onClick={typeofcolor==="hex"?createHexColor:createRgbColor}>Generate Random Color</button>
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection  :'column',
          gap :'20px'
        }}
      >
        <h3>{typeofcolor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
    
  )
}

export default RandomColors