import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const CountryCard = () => {
const[country,setCountry]=useState([])
const [name, setName] = useState([]);
  const fetchNa = async () => {
    await fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  };

  useEffect(()=>{
    fetchNa();
   
  },[])
  return(
    <div>
<h1>hellooooooo</h1>
      { country?.map((c)=>(
          <div>
  <h1>{c.name.official}</h1>
          </div>
        
      ))}

    </div>
  )
    


    

  
}



export default CountryCard
