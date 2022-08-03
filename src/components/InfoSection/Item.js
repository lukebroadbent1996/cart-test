import React from 'react'
import './index.css'
import {Button} from '../ButtonElements'

const Item = (props) => {
    const {product, onAdd} = props
  return (
    <div>
        <img className='small' src={product.image} alt={product.name}></img>
        <h3>{product.name}</h3>
        <div>£{product.price}</div>
        <div>
            <Button onClick={() => onAdd(product)}>Add to cart</Button>
        </div>
    </div>
  )
}

export default Item