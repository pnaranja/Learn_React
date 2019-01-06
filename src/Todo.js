import React from "react"
import styled from 'styled-components';
import Header from "./modules/Header"
import Main from "./modules/Main"
import Footer from "./modules/Footer"

const MyStyle = styled.section`
    background-color: white;
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #efefef;
    box-shadow:
    /* The top layer shadow */
        0 1px 1px rgba(0,0,0,0.15),
            /* The second layer */
        0 10px 0 -5px #eee,
            /* The second layer shadow */
        0 10px 1px -4px rgba(0,0,0,0.15),
            /* The third layer */
        0 20px 0 -10px #eee,
            /* The third layer shadow */
        0 20px 1px -9px rgba(0,0,0,0.15);
    padding: 30px;
`

class Todo extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <Header/>
                <MyStyle>
                    <Main/>
                </MyStyle>
                <Footer/>
            </div>
        )
    }
}

export default Todo
