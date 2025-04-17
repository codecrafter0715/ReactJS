import React, { useEffect, useState } from 'react'
import data from '../data.js'
import { Link, Route, Routes, useParams } from 'react-router-dom'


const CardDetail = () => {
    const [fruit,setFruit] = useState({})
    const {ID} = useParams()
    console.log(ID);
    console.log(data);
    
    useEffect(()=>{
       const fruitArray = data.filter((f)=>f.id == ID)
       console.log(fruitArray,"Fruit Array")
    setFruit(fruitArray[0])    
    },[])
    
    console.log(fruit,"......fruit.....")

  return (
    <>
    <div>
      Details of Fruit
      <h2>{fruit.name}</h2>
      <img src={fruit.image} alt="frt" style={{width:"100%",height:"400px"}}/>
      <p>Details: {fruit.discription}</p>
      <Link to='review' element={<Review />}>Reviews</Link>
      {/* <Review /> */}
      <Link to='likes' element={<Likes />} >Likes</Link>
    </div>

    <Routes>
        <Route path='review' element={<Review />}></Route>
        <Route path='likes' element={<Likes />}>Likes</Route>
    </Routes>
    </>
  )


  function Review(){
    console.log("reviews")
    return(
        <>
        <div className='container w-50'>
        <p>User says: i dont like Jawascript</p>
        <p>User1 Says : I Like Javascript</p>
        </div>
        </>
    )
  }
  function Likes(){
    return(
        <p>Star star start</p>
    )
  }
}

export default CardDetail