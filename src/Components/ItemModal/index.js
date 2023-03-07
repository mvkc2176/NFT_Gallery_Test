import React, {useState, useEffect} from 'react'
import './Modal.css';

const Modal = ({ handleClose, show, punkListData, selectedPunk }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none"
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    console.log(activePunk);

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className='mainContent'>
                    <div className='punkHighlight'>
                        <div className='punkContainer'>
                            <img className='selectedPunk' src={activePunk.image_original_url} alt='' />
                        </div>
                    </div>

                    <div className='punkDetails' style={{color: '#fff'}}>
                        <div className='title' >
                            {activePunk.name}
                        </div>
                        <span className='owner' > Owner : {activePunk.creator.address}</span>
                        <span className='description' > {activePunk.asset_contract.description}</span>
                    </div>
                </div>

                <div className='footer'>
                    <a className='buyButton' href = {`https://opensea.io/assets/ethereum/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/${activePunk.token_id}`} target='_blank'>
                        Buy Now
                    </a>
                    <a className='closeButton' onClick={() => handleClose(false)}>
                        Close
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Modal