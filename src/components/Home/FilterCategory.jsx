import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products-slice'
import { useDispatch } from 'react-redux'

const FilterCategory = () => {

  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'

  const [categories, getCategories] = useFetch(url)

  const dispatch = useDispatch()

  useEffect(() => {
    getCategories()
  }, [])

  const handleCategories = id => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url))
  }

  const handleAllProducts = () => {
    dispatch(getAllProductsThunk())
  }

  return (
    <article>
      <h3>Category</h3>
      <ul>
        <li onClick={handleAllProducts} >All products</li>
        {
          categories?.map(category => (
            <li onClick={() => handleCategories(category.id)} key={category.id}>
              {category.name}
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default FilterCategory