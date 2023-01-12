import React from 'react';
import HomeItem from './HomeItem';
import { Header, MainDiv, ProductsList, Product } from './Styles';


const Home = ({ products, basket, addToBasket }) => {

    const productNodes = products.map((product, index) => {
        return (
            <Product key={index}>
                <HomeItem 
                    product={product}
                    index={index}
                    basket={basket}
                    addToBasket={addToBasket}
                />
            </Product>
        )
    });

    return (
        <MainDiv>
            <Header>Products</Header>
            <ProductsList>
                {productNodes}
            </ProductsList>
        </MainDiv>
    )
};

export default Home