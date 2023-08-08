import React from 'react'
import {PRODUCTS} from "./shop-now/Product-List"
import CreateProduct from './shop-now/create-product'

const Main = () => {
  return (
    <div>Stores the Main Page
      <div>
        <h1>Spiteful's Store</h1>
      </div>
      <div className='products'>{PRODUCTS.map((product) => {
        <CreateProduct />
      })}
      </div>
    </div>
  )
}

export default Main