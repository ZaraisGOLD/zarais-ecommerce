import React, { useState } from 'react'
import useCrudCart from '../../hooks/useCrudCart'

const ProductIdInfo = ({ product }) => {

  const [quantity, setQuantity] = useState(1)
  const { createProducttoCart } = useCrudCart()

  const handlePlus = () => setQuantity(quantity + 1)

  const handleMinus = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleAddToCart = () => {
    const data = {
      quantity,
      productId: product.id
    }

    createProducttoCart(data)
  }

  return (
    <section>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <div>
          <span>Price</span>
          <span>${product?.price}.00</span>
        </div>
        <div>
          <span>Quantity</span>
          <div>
            <button onClick={handleMinus}>-</button>
            <button>{quantity}</button>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <button>
          <i onClick={handleAddToCart} className='bx bx-cart'></i>
        </button>
      </footer>
    </section>
  )
}

export default ProductIdInfo