import React from 'react'
import '../InfoSection/index.css'

const basket = (props) => {
  const {cartItems, onRemove} = props
  return (
    <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div>
          {cartItems.length === 0 && <div>Cart is Empty</div>}</div>
          {cartItems.map((item)=>(
            <div key={item.name} className='row'>
              <div className='col-2'>{item.name}</div>
              <div className='col-2'>
              <button onClick={()=> onRemove(item)} className='remove'>-</button>
            </div>
            <div className='col-2 text-right'>
              {item.qty} x £{item.price.toFixed(2)}
            </div>
            </div>
            
          ))}
    </aside>
  )
}

export default basket