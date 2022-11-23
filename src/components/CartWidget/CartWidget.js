import * as Unicons from '@iconscout/react-unicons'
import './cartwidget.css'

const CartWidget = () => {
  return (
    <div className='cartwidget'>
      <Unicons.UilShoppingCart color='#fff' />
      <span className='cartwidget-count'>0</span>
    </div>
  )
}

export default CartWidget