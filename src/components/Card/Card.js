import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' className='br-100 ba bw2 b--none' src={`https://robohash.org/${id}?200x200/`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;