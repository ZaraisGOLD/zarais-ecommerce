import React from 'react'
import './styles/cardProduct.css'
import { useNavigate } from 'react-router-dom'
import useCrudCart from '../../hooks/useCrudCart'

const CardProduct = ({ product }) => {

  const navigate = useNavigate()

  const { createProducttoCart } = useCrudCart()

  const handleSelectProduct = () => {
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    e.stopPropagation()

    const data = {
      quantity: 1,
      productId: product.id
    }

    createProducttoCart(data)
  }

  return (
    <article onClick={handleSelectProduct} className='product'>
      <header className='product__header'>
        <img className='product__img pI1' src={product.images[0].url} alt="" />
        <img className='product__img pI2' src={product.images[1].url} alt="" />
      </header>
      <section className='product__body'>
        <div className='product__section'>
          <h5 className='product__subtitle'>{product.brand}</h5>
          <h4 className='product__title'>{product.title}</h4>
        </div>
        <div className='product__price'>
          <span className='product__price--label'>Price</span>
          <span className='product__price--value'>{product.price}</span>
        </div>
        <button onClick={handleBtnClick} className='product__btn'>
          <i className='bx bxs-cart product__btn--icon' ></i>
        </button>
      </section>
    </article>
  )
}

export default CardProduct