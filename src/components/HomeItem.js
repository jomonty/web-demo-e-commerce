import React from 'react';
import styled from 'styled-components';
import { ProductDiv, ProductImg, ProductTextDiv, Button } from './Styles';

const AddToBasketButton = styled(Button)`
    background-color: #13aa52;
    border: 1px solid #13aa52;
`

const DisabledButton = styled(Button)`
    background-color: #FAFBFC;
    border: 1px solid rgba(27, 31, 35, 0.15);
    color: #24292E;
    transform: none;
    transition: none;
    cursor: auto;
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;

    &:hover {
        box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
        transform: none;
    }
`

const HomeItem = ({ product, basket, addToBasket }) => {


    const handleClick = () => {
        addToBasket(product);
    }

    const addButton = () => {
        if (basket.includes(product)) {
            return (
                <DisabledButton disabled>Already in basket</DisabledButton>
            )
        } else {
            return (
                <AddToBasketButton onClick={handleClick}>Add To Basket</AddToBasketButton>
            )
        }
    }

    return (
        <ProductDiv>
            <ProductImg 
                src={product.images[0]} 
                alt="product image"
            />
            <ProductTextDiv>
                <h4>{product.title}</h4>
                <p>{product.price.toLocaleString('en-GB', {
                    style: 'currency',
                    currency: 'GBP'
                })}</p>
                {/* <p>{product.description}</p> */}
                {addButton()}
            </ProductTextDiv>
        </ProductDiv>
    )
};

export default HomeItem