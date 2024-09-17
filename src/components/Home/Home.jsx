
import { useState } from "react";
import "./Home.css";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
const Home = () => {
const [actors,setActors]=useState([])
const[selectedActor,setSelectedActor]=useState([])
const [reming,setReming]=useState(0);
const [totalCost,setTotalCost]=useState(0)
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setActors(data))
  },[])
const handleAddActor=(actor)=>{
  const isExist=selectedActor.find((item)=>item.id==actor.id)
  let count=actor.salary;
 if(isExist){
  return alert ('is already selected')
 }
else{
  selectedActor.forEach((item)=> {
    count=count+item.salary;
  });
  const totalReming=20000-count;
  if(count>20000){
    return alert('taka ses')
  }
 else{
  setTotalCost(count);
  setReming(totalReming);
  setSelectedActor([...selectedActor,actor])
 }
}
};

  return (
    <div className="container mx-auto">
      <div className="home-container ">
        <div className="card-container">
    {
      actors.map(actor=>(
        <div key={actors.id} className="card ">
        <div className="card-img">
            <img className="photo ml-20" src={actor.image} alt="" />
        </div>
        <h2>{actor.name}</h2>
        <p className="text-white"><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eaque.</small></p>
        <div className="info">
            <h2 className="text-white">salary:{actor.salary}</h2>
            <h2 className="text-white">{actor.role}</h2>
        </div>
        <button onClick={()=>handleAddActor(actor)} className="card-btn">selected</button>
    </div>
      )
      
      )
    }
        </div>
        <div className="cart">
        <Cart selectedActor={selectedActor} reming={reming} totalCost={totalCost}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
