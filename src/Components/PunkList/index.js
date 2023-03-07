import React from 'react'
import ItemCard from '../ItemCard'
import './PunkList.css'

const PunkList = ({punkListData, setSelectedPunk, setShowModal}) => {

    const selectItem = (i) => {
        setSelectedPunk(i)
        setShowModal(true)
    }

    return (
        <div className='punkList'>
            {
                punkListData.map((punk, i) => (
                    <div onClick={() => selectItem(i)}>
                        <ItemCard
                            key={punk.token_id}
                            id={punk.token_id}
                            name={punk.name}
                            price={punk.last_sale ? punk.last_sale.total_price / (10 ** 18) : 0.1}
                            image={punk.image_original_url}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default PunkList
