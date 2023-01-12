import styled from 'styled-components';

const Header = styled.h1`
    color: #31661B;
`

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

const Button = styled.button`
    // background-color: #5865f2;
    // border: 1px solid #5865f2;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    font-size: 14px;
    font-weight: 500;
    padding: 6px 16px;
    text-align: center;
    transform: translateY(0);
    transition: transform 150ms, box-shadow 150ms;

    &:hover {
    box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
    transform: translateY(-2px);
    }
`

const ProductsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 3rem;
    column-gap: 3rem;
    justify-content: center;
    padding: 2rem 0 2rem 0;
`

const Product = styled.li`
    display: flex;
    justify-content: center;
    // align-items: center;
    list-style-type: none;
    width: 15em;
    height: 18em;
`

const ProductDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: space-between;
    row-gap: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 1rem;
    background-color: #FEFCFF;
    width: 100%;
`

const ProductImg = styled.img`
    width: 8rem;
    height: 6rem;
    border-radius: 0.5em;
`

const ProductTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    row-gap: 0.8rem;
`

export { Header, MainDiv, Button, ProductsList, Product, ProductDiv, ProductImg, ProductTextDiv}