import React, { useContext } from 'react'
import { BasketContext } from '../context/BasketContext'
import '../sass/basket.scss'

const Basket = () => {
  const { basket, decreaseCount, increaseCount, remove } = useContext(BasketContext)
  return (
    <div className='basket'>

      <table border={1}>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Delete</th>
        </tr>

        {basket.map(item => (
          <tr>
            <td><img width={130} height={120} src={item.image} alt="" /></td>
            <td><h5>{item.name}</h5></td>
            <td><p>{item.price * item.count} $</p></td>
            <td className='count'>
              <i onClick={() => { increaseCount(item) }} class="fa-solid fa-sort-up"></i>
              <h4>{item.count}</h4>
              <i onClick={() => { decreaseCount(item) }} class="fa-solid fa-sort-down"></i>
            </td>
            <td><i onClick={() => { remove(item) }} class="fa-solid fa-trash"></i></td>
          </tr>
        ))}


      </table>

    </div>


  )
}

export default Basket
