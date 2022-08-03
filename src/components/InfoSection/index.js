import React from 'react'
import Item from './Item';
import './index.css'



const Info = (props) => {
    const {products, onAdd}= props;
    
  
    return (
    <main className='left-block container col-2'>
        <h1>Giveaway</h1>
        <div className='row'>
          {products.map((product)=>(
            <Item key={product.id} product={product} onAdd={onAdd}></Item>
          ))}
        </div>
    </main>
           
    
  )
}

export default Info 