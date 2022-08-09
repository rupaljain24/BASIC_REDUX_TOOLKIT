import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { clearCart} from '../Feature/Cart/cartSlice'
import CartItem from './CartItem'
import { openModal } from '../Feature/Modal/modalSlice'

const CartContainer = () => {
    const {cart,amount,total}=useSelector((store)=>store.cart)
    const dispatch =useDispatch();
    const getTotal=cart.reduce((acc,curr)=>{
                return acc+curr.amount*curr.price
    },0)
    if (amount < 1) {
        return (
          <section className='cart'>
            <header>
              <h2>your bag</h2>
              <h4 className='empty-cart'>is currently empty</h4>
            </header>
          </section>
        );
      }
    
      return (
        <section className='cart'>
          <header>
            <h2>your bag</h2>
          </header>
          <div>
            {cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div className='cart-total'>
              <h4>
                total <span>${getTotal.toFixed(2)}</span>
              </h4>
            </div>
            <button className='btn clear-btn'
            onClick={() => dispatch(openModal())}
             >
              clear cart
            </button>
          </footer>
        </section>
      )
        
}

export default CartContainer