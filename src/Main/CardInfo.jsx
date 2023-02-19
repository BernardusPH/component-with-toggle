import React from 'react';
import "./CardInfo.css"
const CardInfo = (props) => {
    return (
        <div className='card-info'>
            <h2>{props.title}</h2>
            <div className='money' ><span className='dollar-sign'>$</span>{props.money}</div>
            <div>
                <hr />
                <p>{props.storage}</p>
                <hr />
                <p>{props.users}</p>
                <hr />
                <p>{props.send}</p>
                <hr />
            </div>
            <button>Learn More</button>
        </div>
    );
}

export default CardInfo;
