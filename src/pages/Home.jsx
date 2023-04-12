import React, { useContext } from 'react'
import MyContext from '../context/MyContext'
import CardHome from '../components/CardHome';

const Home = () => {
  
  const {data} = useContext(MyContext);

  
  return (
    <div className='home__container'>
      {data.map((ele)=> <div key={ele.id} className='card'>
        <CardHome data={ele}/>
      </div>
      )}
    </div>
  )
}

export default Home