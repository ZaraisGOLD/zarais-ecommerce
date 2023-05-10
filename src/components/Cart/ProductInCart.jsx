import React from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductInCart = ({ prodCart }) => {

  const { deleteProductFromCart } = useCrudCart()

  const handleDeleteCart = () => {
    deleteProductFromCart(prodCart.id)
  }

  return (
    <article>
      <header>
        <img src={prodCart.product.images[0].url} alt="" />
      </header>
      <section>
        <h3>{prodCart.product.title}</h3>
      </section>
      <button onClick={handleDeleteCart} >
        <i className='bx bx-trash'></i>
      </button>
      <footer>
        <span>{prodCart.quantity} </span>
      </footer>
      <div>
        <span>Subtotal:</span>
        <span>{prodCart.product.price} </span>
      </div>
    </article>
  )
}

export default ProductInCart