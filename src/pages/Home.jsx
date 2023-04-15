import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { data, setData } = useContext(MyContext);

  let navegate = useNavigate();

  const handleClick = (id) => {
    navegate(`/pizza/${id}`);
  }

  const addShoppingCard = (id) => {
    if (data.find((ele) => ele.id === id)) {
      const productAdd = data.map((ele) =>
        ele.id === id ? { ...ele, qty: ele.qty + 1 } : ele)
      setData(productAdd)
    };
  }

  return (
    <div className='home__container'>
      {data.map((ele) =>
        <div className='card__home'>
          <img src={ele.img} alt="" />
          <h2>{ele.name}</h2>
          <hr />
          <div>
            <h3>Ingredientes</h3>
            <ul>
              {ele.ingredients.map((ele) =>
                <li>{ele}</li>)}
            </ul>
          </div>
          <h2 className='card__home__price'>$ {ele.price}</h2>
          <div className='card__home__btn'>
            <button onClick={() => handleClick(ele.id)}>Ver Más</button>
            <button onClick={() => addShoppingCard(ele.id)}>Agregar al Carro</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home