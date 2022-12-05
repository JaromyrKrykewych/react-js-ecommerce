import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListFilter = ({items}) => {
  const [categoryState, setCategoryState] = useState('')
  const {category}  = useParams()

  useEffect(() => {
    if (category === 'frutos-secos') {
      setCategoryState('Fruto Seco')
    } else if (category === 'encurtidos') {
      setCategoryState('Encurtido')
    }
  }, [category])

  const newItems = items.filter(item => item.category === categoryState)

  return (
    <>
      <ItemList items={newItems} />
    </>
  )
}

export default ItemListFilter