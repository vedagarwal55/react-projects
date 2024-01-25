import React from 'react'
import { useState } from 'react'
import data from './data'
import "./styles.css"
const Index = () => {
    const [selected,setSelected]= useState(null);
    const [enableMultiSelection,setEnableMultiSelection]=useState(false);
    const [multiple,setMultiple]=useState([]);
    const handleSingleSelection=(getCurrentId)=>{
        setSelected(selected===getCurrentId?null:getCurrentId);
    }
    const handleMultipleSelection=(getCurrentId)=>{
        let copyMultiple=[...multiple];
        const findIndexof=copyMultiple.indexOf(getCurrentId);
        if(findIndexof===-1){
            copyMultiple.push(getCurrentId)
        }
        else{
            copyMultiple.splice(findIndexof,1);
        }
        setMultiple(copyMultiple);
    }
  return (
    <div className='wrapper'>
        <button onClick={()=>setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                data && data.length>0? 
                data.map(dataItem=><div className='item'>
                    <div onClick={enableMultiSelection?()=>handleMultipleSelection(dataItem.id):()=>handleSingleSelection(dataItem.id)} className='title'>
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMultiSelection?
                        multiple.indexOf(dataItem.id)!==-1 && <div className='content'>{dataItem.answer}</div>:
                        selected===dataItem.id&&<div className='content'>{dataItem.answer}</div>
                    }
                    {/* {
                        selected===dataItem.id?
                        <div className='content'>{dataItem.answer}</div>
                        :null
                    } */}
                </div>)
                :<div>No data found</div>
            }
        </div>
    </div>
  )
}

export default Index