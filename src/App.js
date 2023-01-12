import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Basket from './components/Basket';
import ErrorPage from './components/ErrorPage';

function App() {

  const [products, setProducts] = useState([])
  const [basket, setBasket] = useState([])

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
  }, []);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeFromBasket = (index) => {
    const newBasket = [...basket];
    newBasket.splice(index, 1);
    setBasket(newBasket);
  }

  const checkout = () => {
    setBasket([]);
  }

  return (
    <Router>
      <Header basketLength={basket.length}/>
      <Routes>
        <Route 
          path="/" 
          element={ <Home 
                      products={products}
                      basket={basket}
                      addToBasket={addToBasket}
                    /> }
        />
        <Route 
          path="/basket" 
          element={ <Basket 
                      basket={basket}
                      removeFromBasket={removeFromBasket}
                      checkout={checkout}
                    /> }
        />
        <Route path="/items/:id" />
        <Route path="*" element={ <ErrorPage /> } />
      </Routes>
    </Router>
    
  );
}

export default App;
