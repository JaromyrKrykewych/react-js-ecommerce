import './itemlistcontainer.css'

const ItemListContainer = ({greetings}) => {
  return (
    <div className='item-list-container'>
      <h2>Bienvenido {greetings}! Proximamente sumaremos nuestros productos en esta sección!</h2>
    </div>
  )
}

export default ItemListContainer