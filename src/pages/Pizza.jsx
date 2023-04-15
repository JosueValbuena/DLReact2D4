import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { useParams } from 'react-router-dom';

const Pizza = () => {

  const { data, setData } = useContext(MyContext);
  const { id } = useParams();

  const pizza = data.find(
    (ele) => ele.id === id
  );

  const addShoppingCard = (id) => {
    if (data.find((ele) => ele.id === id)) {
      const productAdd = data.map((ele) =>
        ele.id === id ? { ...ele, qty: ele.qty + 1 } : ele)
      setData(productAdd)
    };
  }

  return (
      <div className='card__detalles'>
          <div>
            <img src={pizza.img} alt="" />
          </div>
          <div className='card__detalles__text'>
            <h2>{pizza.name}</h2>
            <hr />
            <p>{pizza.desc}</p>
            <h3>Ingredientes</h3>
            <ul className='card__detalles__ingredients'>
              {pizza.ingredients.map((ele) => <li key={ele.index}>{ele}</li>)}
            </ul>
            <div className='card__detalles__btn'>
              <h3>{pizza.price}</h3>
              <button onClick={() => addShoppingCard(pizza.id)}>Agregar al Carro</button>
            </div>
          </div>
        </div>
  )
}

export default Pizza