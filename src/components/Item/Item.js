import { Link } from 'react-router-dom'
import './item.css'

const Item = ({ item }) => {
  return (
    <div className='item'>
      <Link to={`/producto/${item.id}`}>
        <p>{item.name}</p>
        <p>${item.precioxkilo} x Kg</p>
      </Link>
    </div>
  )
}

export default Item