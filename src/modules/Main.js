import React from "react"

const Main = () => {
    const GreenBlue = 'Green or Blue!';
    const date = new Date();

    const one_style = date.getSeconds() <= 30 ? {color: '#0000FF'} : {color: '#008000'};

    return (
        <ul>
            <div>Today is {date.toTimeString()}</div>
            <div style={one_style}><input type="checkbox"/> {`${GreenBlue}`} </div>
            <div><input type="checkbox"/> Placeholder</div>
            <div><input type="checkbox"/> Placeholder</div>
            <div><input type="checkbox"/> Placeholder</div>
        </ul>
    )

};

export default Main