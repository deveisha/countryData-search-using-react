import React,{useState,useRef,useEffect} from 'react';


const Hooks = () => {
  const refElem=useRef("")
  const [name,setName]=useState('eisha')
  const count=useRef(0)
  console.log(refElem)

 const reset=()=>{
    setName('')
 refElem.current.style.backgroundColor='aqua'
  }
  const colorChange=()=>{
refElem.current.style.color='red'
  }
  useEffect(()=>{
    count.current=count.current+1
  })

  return (
    <div>
      <h1>UseRef Hook</h1>
      <br />
      <div>
      <input ref={refElem} type="text" value={name} onChange={(e)=>setName(e.target.value)} />
<button onClick={reset}>submit</button>
<button onClick={colorChange}>Click ME</button>
<h1>{count.current}</h1>
</div>
<br />

</div>



  )
}

export default Hooks