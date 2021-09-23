import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function displayString() {
    let str = "Hi!"
    return (
        {str: str}
    )
};

ReactDOM.render(
    <h1>Hello, World!</h1>,
    displayString,
    document.getElementById('root')
)