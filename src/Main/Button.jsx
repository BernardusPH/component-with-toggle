import React from 'react';
import "./Button.css"
const Button = (props) => {
function buttonHandle(){
    props.cashHandle()
    
}
    return (
        <div className='ann-mon-container'>
            <div>
                Annually
            </div>

            <div className='button-container' onClick={buttonHandle}>
                <button className={`button ${(props.cashSwitch)?"monthly":"annually"}`}></button>
            </div>

            <div>
                Monthly
            </div>
        </div>
    );
}

export default Button;
