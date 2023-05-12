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
    <div className='purchases'>
      <h2 className='purchases__title'>Purchases</h2>
      {
        purchases?.map(prodPurchased => (
          <ProductPurchase
            key={prodPurchased.id}
            prodPurchased={prodPurchased}
          />
        ))
      }
    </div>
  )
}

export default Purchases