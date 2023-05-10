import React from 'react'

export const ProductPurchase = ({ prodPurchased }) => {


  return (
    <article>
      <img src={prodPurchased.product.images[0].url} alt="" />
      <h3>{prodPurchased.product.title}</h3>
      <span>{prodPurchased.quantity}</span>
      <span>{prodPurchased.quantity * prodPurchased.product.price}</span>
    </article>
  )
}
