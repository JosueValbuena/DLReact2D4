import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import { useParams } from 'react-router-dom';
import CardDetalles from '../components/CardDetalles';

const Pizza = () => {

    const {data} = useContext(MyContext);
    const {id} = useParams();

    const pizza = data.find(
        (ele) => ele.id === id
    );

  return (
    <div>
        {<CardDetalles pizza={pizza}/>}
    </div>
  )
}

export default Pizza