import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../features/counter/counterSlice';

function Counter() {
    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0)

   const handleChange = (evt)=>{
     setAmount(evt.target.value)
   };

   const handleAdd = ()=>{
     dispatch(incrementByAmount(amount));
     setAmount(0)
   }
    


  return (
    <div className='mt-[100px] ' >
        <button 
        className='w-[200px] p-4 bg-teal-500 rounded-md text-white text-[21px]'
         onClick={() => dispatch ( increment())}>
          +
          </button>
      <h1 className='text-[32px]'>{count}</h1>
      <button 
      className='w-[200px] p-4 bg-teal-500 rounded-md text-white text-[21px] mb-4'
       onClick={() => dispatch( decrement())}>
        -
        </button>
      <br />
      <input className=' p-4 bg-gray-200 runded-md' type="number" value={amount} onChange={handleChange} />
      <br />
      <button 
      className='w-[200px] p-2 bg-teal-500 rounded-md text-white text-[21px] mt-4'
       onClick={handleAdd}>
        Add amount
        </button>
    </div>
  )
}

export default Counter