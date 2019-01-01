import React from "react"
import styled from 'styled-components';

const MyHeader = styled.section`
    height: 100px;
    background-color: #333;
    color: whitesmoke;
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = () => (
    <MyHeader>
        <h1>
        <p>My First TODO App!</p>
        </h1>
    </MyHeader>
)

export default Header