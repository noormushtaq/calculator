import React from 'react';



function Button(props) {

    return (

        <button 

        className="counter-button" 

        style={{

            background: props.bgColor,

            color: props.textColor

        }}

            onClick={props.onClick}

        >

            {props.label}

        </button>

    )

}

export default Button;