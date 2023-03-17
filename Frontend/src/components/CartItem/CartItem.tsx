import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './CartItem.css'
declare module 'react' {
    interface CartItem {
      // extends React's HTMLAttributes
      item? : any ,
      qtyChangeHandler?: any,
      removeProductFromCart? : any
    }
   
    interface buttonHTMLAttributes<T> extends HTMLAttributes<T> {
          // extends React's HTMLAttributes
          type?: any   
        }
    
}
const CartItem = ({item, qtyChangeHandler, removeProductFromCart}) => {
    return (
        <div className='cartitem'>
            <div className='cartitem__image'>
                <img src={item.imageUrl} alt={item.name}/>
            </div>

            <Link to={`/product/${item.product}`} className='cartitem__name'>
                <p>{item.name}</p>
            </Link>

            <p className='cartitem__price'>${item.price}</p>

            <select onChange={(e) => qtyChangeHandler(item.product, e.target.value)} className='cartitem__select' value={item.qty}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                ))}
            </select>

            <button className='cartitem__deleteBtn' onClick={()=>removeProductFromCart(item.product)} >
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
