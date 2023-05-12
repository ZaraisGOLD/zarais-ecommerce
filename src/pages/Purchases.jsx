import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import { ProductPurchase } from '../components/Purchases/ProductPurchase'
import './styles/purchases.css'

const Purchases = () => {

  const { purchases, getPurchased } = usePurchases()

  useEffect(() => {
    getPurchased()
  }, [])

  return (
    <article className='purchases__container'>
        <h2 className='purchases__title'>Purchases</h2>
        {
          purchases?.map(prodPurchased => (
            <ProductPurchase
              key={prodPurchased.id}
              prodPurchased={prodPurchased}
            />
          ))
        }
    </article>
  )
}

export default Purchases