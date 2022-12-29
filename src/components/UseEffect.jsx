import React,{useEffect,useState} from 'react'

const UseEffect = () => {
 const[number,setNumber]=useState(0)
const [integer,setInteger]=useState(0)

useEffect(()=>{
//  setTimeout(()=>{
//     setNumber((number)=>number+1)
//  },1000); 
setNumber(()=>integer*2)
},[integer])
  return (
    <div>
        <h1>UseEffect Hook</h1>
      <h2>Calculation {number} times</h2>
      <h2>Counter: {integer}</h2>
      <button disabled={integer===10? true: false} onClick={()=>setInteger(integer+1)}>Click ME</button>
    </div>
  )
}

export default UseEffect
