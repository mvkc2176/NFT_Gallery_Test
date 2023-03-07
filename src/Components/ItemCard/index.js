import React from 'react'
import weth from '../../assets/weth.png'
import './ItemCard.css'

const ItemCard = ({id , name, price, image}) => {
    return (
        <div className="ItemCard">
            <img src={image} alt='' />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'>.#{id}</div>
                </div>
                <div className='priceContainer'>
                    <img src={weth} className='wethImage' alt='' />
                    <div className='price'>{price}</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard
