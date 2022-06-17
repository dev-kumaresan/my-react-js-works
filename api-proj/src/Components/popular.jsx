
import {useEffect} from 'react';
function Popular() {
  useEffect(()=>{
    getPopular();
  },[]);
  const getPopular = async ()=> {
    const api = await fetch('http://universities.hipolabs.com/search?country=India')
    const data = await api.json();
    console.log(data);
  };
  return <div>popular</div>
  
}

export default Popular; 