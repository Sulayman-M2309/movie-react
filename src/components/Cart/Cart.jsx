import React from 'react';
import './Cart.css'
import { act } from 'react';
const Cart = ({selectedActor,totalCost,reming}) => {
    console.log(selectedActor);
    return (
        <div>
             <h2>Total Actors:  {selectedActor.length}</h2>
             <h2>Remaing  {reming}</h2>
             <h2>Cost:{totalCost}</h2>
            {
               selectedActor.map((actor)=>(
           
          <div key={actor.id} className='w-full flex '>
            <img className=' h-20 rounded-full ' src={actor.image} alt="" />
                <li className='list-none mt-10'>{actor.name}</li>
          </div>

              
               ))
            }
        </div>
    );
};

export default Cart;