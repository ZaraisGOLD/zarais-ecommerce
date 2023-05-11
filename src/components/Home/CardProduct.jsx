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
    <article className='product'>
      <header className='product__header' onClick={handleSelectProduct}>
        <img className='header__img image1' src={product.images[0].url} alt={product.title} />
        <img className='header__img image2' src={product.images[1].url} alt={product.title} />
      </header>
      <section className='product__body'>
        <div className='product__name'>
          <span className='product__name--brand'>{product.brand}</span>
          <h4 className='product__name--title' onClick={handleSelectProduct}>{product.title}</h4>
        </div>
        <div className='product__price'>
          <span className='product__price--label'>Price</span>
          <h4 className='product__price--value'>{product.price}</h4>
        </div>
        <button className='product__btn--addTocart' onClick={handleBtnClick} >
        <i class='bx bxs-cart-add' ></i>
        </button>
      </section>
    </article>
  )
}

export default CardProduct