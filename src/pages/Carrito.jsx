import React, { useContext } from 'react'
import MyContext from '../context/MyContext';

const Carrito = () => {

  const {data, setData} = useContext(MyContext);
  
  const addShoppingCard = (id) =>{
    console.log(id);

    /* data.qty = data.qty+1;
    setData([...data]) */
  }

  const removeShoppingCard = () =>{
    data.qty = data.qty-1;
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
            <button onClick={() => addShoppingCard(ele.id)}>-</button>
            <p>{ele.qty}</p>
            <button onClick={() => removeShoppingCard()}>+</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Carrito