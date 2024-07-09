import React, { useEffect } from 'react'
import { fetchCategories } from '../../features/categories/categorySlice';
import { useDispatch, useSelector } from 'react-redux'

function Categories() {
    const categories =useSelector((state)=>state.category.value)
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(fetchCategories())
  
    },[dispatch])
    console.log(categories);
    if (!categories) {
      return <div>Loading...</div>;
  }
  return (
    <div className=' grid grid-cols-4 '>
  
        {
            categories.map(c=>(
                <div key={c._id} className=' bg-white p-4 shadow-xl w-[300px]  mb-3 '>
                <img src={c.image} alt={c.name} width={300} height={300}/>
                <h2>{c.name}</h2>
            </div>
            )
               
            )
        }
    </div>
  )
}

export default Categories