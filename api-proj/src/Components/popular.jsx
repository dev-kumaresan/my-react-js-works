
import {useEffect, useState} from 'react';
function Popular() {
  const [popular, setPopular] = useState([])
  useEffect(()=>{
    getPopular();
  },[]);


  console.log(popular);
  const getPopular = async ()=> {
    const api = await fetch('http://universities.hipolabs.com/search?country=India')
    const data = await api.json();
    setPopular(data)
  };
  return <div>
    {popular.map((info) => {
      return info.web_pages.map((subInfo) => {
        return (
          <p>{subInfo}</p>
        )
      })
      
    })}
  </div>
  
}

export default Popular; 