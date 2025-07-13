import React from 'react'
import products from '../data/proizvodi'
import ItemCard from './ItemCard'
import './wishlist.css'

const Wishlist = () => {
  return (
    <div className='karticeZaWishlist'>
        {products.filter(product => product.wishList).map(product => (
            <ItemCard key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Wishlist;