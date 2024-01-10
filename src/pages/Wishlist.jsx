import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import '../sass/wishlist.scss'
import { BasketContext } from '../context/BasketContext'

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext)
  const { addBasket } = useContext(BasketContext)
  return (
    <div className='wishlist'>
      {wishlist.map(item => (
        <div className="card">
          <img width={270} height={260} src={item.image} alt="" />
          <h3>{item.name}</h3>
          <div className="price">
            <li>{item.price} $</li>
            <li className='old'>{item.oldPrice} </li>
          </div>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <span>({item.comments})</span>
          <div className='persentage'>{item.persentage}%</div>
          <button onClick={() => { addBasket(item) }}>Add to Cart</button>

        </div>
      ))}


    </div>
  )
}

export default Wishlist
