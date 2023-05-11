import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import './styles/home.css'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'

const Home = () => {

  const [inputValue, setInputValue] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity
  })

  const { productsGlobal } = useSelector(state => state)

  const input = useRef()

  const handleChangeInput = () => {
    setInputValue(input.current.value.toLowerCase().trim())
  }

  const productFilter = productsGlobal
    ?.filter(prod => prod.title.toLowerCase().includes(inputValue))
    .filter(prod => {

      const from = +fromTo.from
      const to = +fromTo.to
      const price = +prod.price
      if (from && to) {
        return from <= price && price <= to
      }
      if (from && !to) {
        return from <= price
      }
      if (!from && to) {
        return to >= price
      }
      if (!from && !to) {
        true
      }
    })

  return (
    <section className='home'>
      <form className='home__form'>
        <input className='form__input' ref={input} onChange={handleChangeInput} type="text" placeholder='What are you looking for?' />
        <button className='form__btn' ><i className='bx bx-search'></i></button>
      </form>
      <button className='home__filter--btn'>
        <i className='bx bx-filter-alt' ></i>
        <span className='filter__btn--text'>Filter products</span>
      </button>
      <section className='home__filters--Container'>
        <button className='filters__btn--closed'>
          <i className='bx bx-x btn__closed--icon'></i>
        </button>
        <FilterCategory />
        <FilterPrice
          setFromTo={setFromTo}
        />
      </section>
      <section className='home__cardProduct--container'>
        {
          productFilter?.map(prod => (
            <CardProduct
              key={prod.id}
              product={prod}
            />
          ))
        }
      </section>
    </section>
  )
}

export default Home