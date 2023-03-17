import React, {useEffect} from 'react'
import CartItem from '../../components/CartItem/CartItem'
import './CartScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id,qty))
    }

    const removeProductFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => parseInt(item.qty) + qty, 0)
    }

    const getCartSubTotal = () => {
        return cartItems.reduce((price,item)=> (item.price * item.qty) + price, 0)
    }
    return (
        <div className='cartscreen'>
            <div className='cartscreen__left'>
                <h2>Shopping Cart</h2>
                {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                    key={item.product}
                    item={item}
                    qtyChangeHandler={qtyChangeHandler}
                    removeProductFromCart={removeProductFromCart}
              />
            ))
          )}
            </div>
            <div className='cartscreen__right'>
                <div className='cartscreen__info'>
                    <p>SubTotal ({getCartCount()}) items</p>
                    <p>${getCartSubTotal().toFixed(2)}</p>
                </div>
                <button>Proceed To Checkout</button>
            </div>
        </div>
    )
}

export default CartScreen
