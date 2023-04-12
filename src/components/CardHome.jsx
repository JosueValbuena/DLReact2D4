import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({ data }) => {

    let navegate = useNavigate();

    const handleClick = (id) => {
        navegate(`/pizza/${id}`);
    }

    return (
        <>
            <img src={data.img} alt="" />
            <h2>{data.name}</h2>
            <hr />
            <div>
                <h3>Ingredientes</h3>
                <ul>
                    {data.ingredients.map((ele) =>
                        <li>{ele}</li>)}
                </ul>
            </div>
            <h2 className='card__price'>$ {data.price}</h2>
            <div className='card__btn'>
                <button onClick={() => handleClick(data.id)}>Ver Más</button>
                <button>Agregar al Carro</button>
            </div>
        </>
    )
}

export default Card