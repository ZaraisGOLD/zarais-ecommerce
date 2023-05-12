import React from 'react'
import './styles/productPurchase.css'

export const ProductPurchase = ({ prodPurchased }) => {

  return (
    <div className='purchases__content'>
      <article className='purchases__container'>
        <div className='purchases__imgContainer'>
          <img className='purchases__img' src={prodPurchased.product.images[0].url} alt="" />
        </div>
        <h3 className='purchases__productName'>{prodPurchased.product.title}</h3>
        <div className='purchases__data'>
          <span className='purchases__quantity'>Quantity: <span className='purchases__value'>{prodPurchased.quantity}</span>
          </span>
          <span className='purchases__subtotal'>Subtotal: <span className='purchases__value'>${prodPurchased.quantity * prodPurchased.product.price}.00</span>
          </span>
        </div>
      </article>
    </div>
  )
}
