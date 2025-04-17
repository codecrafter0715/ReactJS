import React from 'react'
import Navbar from '../components/Navbar'
import CardList from '../components/CardList'
// import Footer from '../components/Footer'

const HomePage = ({data}) => {
  return (
    <div>
        {/* <Navbar /> */}
        <CardList data={data}/>
        {/* <Footer /> */}
  
    </div>
  )
}

export default HomePage