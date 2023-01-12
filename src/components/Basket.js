import React from 'react';
import styled from 'styled-components';
import BasketItem from './BasketItem';
import { Header, MainDiv, Button, ProductsList, Product } from './Styles';

const Total = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    padding: 1rem 3rem 1rem 0;
    column-gap: 2rem;
`

const CheckoutButton = styled(Button)`
    background-color: #5865f2;
    border: 1px solid #5865f2;
`

const Basket = ({ basket, removeFromBasket, checkout} ) => {

    const basketNodes = basket.map((product, index) => {
        return (
            <Product key={index}>
                <BasketItem 
                    product={product} 
                    index={index}
                    removeFromBasket={removeFromBasket}
                />
            </Product>
        )
    })

    const basketTotal = () => {
        return basket.map(product => product.price).reduce(
            (accumulator, currentVal) => accumulator + currentVal,
            0
        ).toLocaleString('en-GB', {
            style: 'currency',
            currency: 'GBP'
        })
    }

    return (
        <MainDiv>
        <Header>Your basket</Header>
        <Total>
            <p>Total: {basketTotal()}</p>
            <CheckoutButton onClick={checkout}>Checkout</CheckoutButton>
        </Total>
        <ProductsList>
            {basketNodes}
        </ProductsList>
        
        </MainDiv>
    )
};

export default Basket