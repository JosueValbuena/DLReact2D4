import React from 'react'

const CardDetalles = ({ pizza }) => {
    return (
        <div className='card__detalles'>
            <div>
                <img src={pizza.img} alt="" />
            </div>
            <div>
                <h2>{pizza.name}</h2>
                <hr />
                <p>{pizza.desc}</p>
                <h3>Ingredientes</h3>
                <ul>
                    {pizza.ingredients.map((ele) => <li key={ele.index}>{ele}</li>)}
                </ul>
                <div className='card__detalles__btn'>
                    <h3>{pizza.price}</h3>
                    <button>Agregar al Carro</button>
                </div>
            </div>
        </div>
    )
}

export default CardDetalles