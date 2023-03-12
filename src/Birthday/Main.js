import img1 from '../Img/p3.jpg'
import img2 from '../Img/p1.jpg'
import img3 from '../Img/p2.jpg'
import img4 from '../Img/p4.jpg'
import React, { useState } from 'react'
import './Main.css'

function Main() {
    const List=[
        {
            id:1,
            img:img1,
            name:"Masri Alemu",
            yr:"21 Years"
        },
        {
            id:2,
            img:img2,
            name:"Henok Alemu",
            yr:"20 Years"
        },
        {
            id:3,
            img:img3,
            name:"Lidiya Alemu",
            yr:"18 Years"
        },
        {
            id:4,
            img:img4,
            name:"Bob Terefe",
            yr:"23 Years"
        },
    ]
    const [use,setUse]=useState(List)
    const Clear=()=>{
        setUse([])
    }
  return (
    <div className='main'>
      <div className="mains">
        <h2>{use.length} Birthdays Today</h2>
        {use.map((e)=><div className="list" key={e.id}>
          <img src={e.img} alt="image" style={{width:"100px",height:"100px"}} />
          <div className="nm">
           <h4>{e.name}</h4>
           <p>{e.yr}</p>
          </div>  
        </div>)}
       
        <div className="btn">
        <input type="button" onClick={Clear} value="Clear All" />
        </div>
      </div>
    </div>
  )
}

export default Main
