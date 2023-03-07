import './App.css';
import Header from './Components/Header'
import PunkList from './Components/PunkList'
import {useState, useEffect} from 'react' 
import axios from 'axios'
import Modal from './Components/ItemModal';


function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    const getmyNFTs = async () => {
      const openseaData = await axios.get('https://api.opensea.io/assets?asset_contract_address=0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb&order_direction=asc')
      setPunkListData(openseaData.data.assets)
    }
    return getmyNFTs()
  }, [])
  
  return (
    <div className="app" >
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Modal handleClose={setShowModal} show={showModal} punkListData={punkListData} selectedPunk={selectedPunk}/>
            <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} setShowModal={setShowModal} />
          </>
        )
      }
    </div>
  )
}

export default App;
