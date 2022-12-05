import './itemdetails.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetails = ({ item }) => {
  const { img, name, precioxkilo, stockxkilo} = item
  
  return (
    <div className='item-detail'>
      <div className='item-info'>
        <img src={img} alt='' loading='lazy'/>
      </div>
      <div className='item-options'>
        <h3>{name}</h3>
        <h4>AR$ {precioxkilo}</h4>
        <ItemCount stockValue={stockxkilo}/>
        <span>Disponible: {stockxkilo}Kg</span>
        <button>Comprar</button>
      </div>
    </div>
  )
}

export default ItemDetails