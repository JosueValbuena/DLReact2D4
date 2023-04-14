import React, { useContext } from 'react'
import MyContext from '../context/MyContext';

const Carrito = () => {

  const { data, setData } = useContext(MyContext);

  const addShoppingCard = (id) => {
    if (data.find((ele) => ele.id === id)) {
      const productAdd = data.map((ele) =>
        ele.id === id ? { ...ele, qty: ele.qty + 1 } : ele)
      setData(productAdd)
    };
  }

  const removeShoppingCard = (id) => {
    if (data.find((ele) => ele.id === id)) {
      const productAdd = data.map((ele) =>
        ele.id === id ? { ...ele, qty: ele.qty - 1 } : ele)
      setData(productAdd)
    };
  }

  return (
    <div>
      {data.filter((ele) => ele.qty >= 1).map(
        (ele) => <div className='card__shoppingCard'>
          <div className='card__shoppingCard__Left'>
            <img src={ele.img} alt="" />
            <p>{ele.name}</p>
          </div>
          <div className='card__shoppingCard__Right'>
            <button onClick={() => removeShoppingCard(ele.id)}>-</button>
            <p>{ele.qty}</p>
            <button onClick={() => addShoppingCard(ele.id)}>+</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carrito