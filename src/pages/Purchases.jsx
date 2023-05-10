import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import { ProductPurchase } from '../components/Purchases/ProductPurchase'

const Purchases = () => {

  const { purchases, getPurchased } = usePurchases()

  useEffect(() => {
    getPurchased()
  }, [])


  return (
    <div>
      <h2>Purchases</h2>
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