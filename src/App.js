
import { useEffect, useState } from 'react';
import './App.css';
import Nav from './routes/Nav';
import Routers from './routes/Routers';
import MyContext from './context/MyContext';

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("./pizzas.json");
    const dataApi = await res.json();
    setData(dataApi);
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="App">
      <MyContext.Provider value={{data, setData}}>
        <Nav />
        <Routers />
      </MyContext.Provider>
    </div>
  );
}

export default App;
