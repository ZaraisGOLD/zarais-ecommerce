import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCartThunk } from '../store/slices/cart-slice'
import ProductInCart from '../components/Cart/ProductInCart'
import usePurchases from '../hooks/usePurchases'
import './styles/cart.css'

const Cart = () => {

  const { postPurchases } = usePurchases()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProductsCartThunk())
  }, [])

  const { cartGlobal } = useSelector(state => state)

  const totalPriceCart = cartGlobal?.reduce((acc, cv) => acc + cv.quantity * cv.product.price,0)

  const handlePurchased = () => {
    postPurchases()
  }

  return (
    <div>
      <h1>Cart</h1>
      {
        cartGlobal?.map(prodCart => (
          <ProductInCart 
          key={prodCart.id}
          prodCart={prodCart}
          />
        ))
      }
      <footer>
        <span>Total: </span>
        <h3>{totalPriceCart}</h3>
        <button className='cart__btn' onClick={handlePurchased}>Buy now</button>
      </footer>
    </div>
  )

}

export default Cart