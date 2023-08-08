import React from 'react'
import {PRODUCTS} from "./shop-now/Product-List"
import {Product} from "./product"

const Main = () => {
  return (
    <div>Store Main Page
      <div>
        <h1>Spiteful's Store</h1>
      </div>
      <div className='products'>{PRODUCTS.map((product) => {
        <Product />
      })}
      </div>
    </div>
  )
}

export default Main