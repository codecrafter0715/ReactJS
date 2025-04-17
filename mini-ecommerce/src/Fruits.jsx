import React from 'react'
import useProducts from './useProducts'

const Fruits = () => {
    const {products, loading, refreshProducts, deleteProduct} = useProducts('https://jsonplaceholder.typicode.com/users')
console.log(products);

  return (
    <div>
      <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
            {products.map((p, index)=>(
                <tr key={index}>
                        <td>{p.name}</td>
                        <td>{p.email}</td>
                        <td><button onClick={()=>deleteProduct(p.id)}>delete</button></td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fruits