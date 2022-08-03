import React from 'react'
import '../InfoSection/index.css'
import {Button2, Button} from '../ButtonElements'
import { Link } from 'react-router-dom';


const basket = (props) => {
  const {cartItems, onRemove, onAdd} = props;
  const itemPrice = cartItems.reduce((a,c)=> a + c.price * c.qty, 0)
  const shippingPrice = itemPrice > 1 ? 0 : 10;
  const totalPrice = itemPrice + shippingPrice;


  return (
    <aside className='block col-1'>
        <h2>Cart Items</h2>
        <div className='col-3'>
          {cartItems.length === 0 && <div>Cart is Empty</div>}</div>
          {cartItems.map((item)=>(
            <div key={item.name} className='row'>
              <div className='col-2'>{item.name}</div>
              <div className='col-2'>
              <Button2 onClick={() => onAdd(item)} className='remove'>+</Button2>
              <Button2 onClick={() => onRemove(item)} className='remove'>-</Button2>
            </div>
            <div className='col-2 text-right'>
              {item.qty} x £{item.price.toFixed(2)}
            </div>
            </div>
            
          ))}
          {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className='row'>
              <div className='col-2'>Item Price</div>
              <div className='col-1 text-right'>£{itemPrice.toFixed(2)}</div>
            </div>
            <div className='row'>
              <div className='col-2'>Tax Price</div>
              <div className='col-1 text-right'>£0</div>
            </div>
            <div className='row'>
              <div className='col-2'>Shipping Price</div>
              <div className='col-1 text-right'>£{shippingPrice.toFixed(2)}</div>
            </div>
            <div className='row'>
              <div className='col-2'><strong>Total price</strong></div>
            
              <div className='col-1 text-right'><strong> £{totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr/>
            <div className='row button-checkout'>
              <Button to="/checkout"><Link className='links' to='/checkout'>Checkout</Link></Button>
            </div>
            </>
          )}
    </aside>

  )
}

export default basket