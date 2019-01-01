import React from "react"
import styled from 'styled-components';
import Header from "./modules/Header"
import Main from "./modules/Main"
import Footer from "./modules/Footer"

const MyStyle = styled.section`
    padding: 4em;
    background: papaywhip;
    color: tomato;
`

const Todo = () =>(
    <div>
        <Header/>
        <MyStyle>
            <Main/>
        </MyStyle>
        <Footer/>
    </div>
)

export default Todo
