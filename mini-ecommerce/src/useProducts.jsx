import React, { useEffect, useState } from "react";
import axios from "axios";

const useProducts = (apiKeLiyeURL) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
console.log(apiKeLiyeURL);
  async function fetchAPI() {
    try {
      await fetch(apiKeLiyeURL)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        setLoading(false)
    } catch (error) {
      console.log(error, "Error while fetching");
    }
  }

  useEffect(()=>{
    
    fetchAPIAXIOS();
  },[])

  async function fetchAPIAXIOS(){
    try {
        const response = await axios.get(apiKeLiyeURL)
        setProducts(response.data)
        setLoading(false)

    } catch (error) {
        console.log(error)
    }
 
  }

  function deleteProduct(id){
    setProducts(products.filter((p)=> p.id !== id))

  }
  function refreshProducts(){
    fetchAPI();
  }

  return {products,setProducts,loading, deleteProduct, refreshProducts, fetchAPIAXIOS };
};

export default useProducts;