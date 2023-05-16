import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';

const customizeStyle = {
  backgroundColor: "#81C3D7",
  borderRadius: "5px",
  fontFamily: "Roboto, sans-serif"
};

function Dashboard() {
  const [burnPercentage, setBurnPercentage] = useState(0);

  const [totalBurn, setTotalBurn] = useState(0);

  const handleTotalValue = (value) => {
    setTotalBurn(value);
  };

  useEffect(() => {
    fetchBurnPercentage();
  }, []);

  const fetchBurnPercentage = async () => {
    try {
      const response = await axios.get('https://api.etherscan.io/api', {
        params: {
          module: 'account',
          action: 'tokenbalance',
          contractaddress: '0x679eC51c3989dE468CE7B47ca6560636744f5ac6',
          address: '0x000000000000000000000000000000000000dEaD',
          tag: 'latest',
          apikey: '2KBH34YNQ4QHV4E5RHF5Y4QBCDWG5RJ5IP'
        }
      });
      
      // const totalSupply = 10000000000; // Replace with the actual total supply value
      const burnValue = response.data.result;
      const percentage = (burnValue / 10000000000000000).toFixed(2);
      

      setBurnPercentage(percentage);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="container mb-3" style={customizeStyle}>
            <h3>1776 Supply</h3>
            <hr />
            <div>
              <h6>Total burn from initial supply</h6>
              <p>{totalBurn}</p>
            </div>
            <div>
              <h6>Burn Percentage</h6>
              <p>{burnPercentage}%</p>
            </div>
            <div>
              <h6>Total Supply</h6>
              <p>10,000,000,000</p>
            </div>
            <div>
              <h6>Circulating Supply</h6>
              <p>...</p>
            </div>
          </div>

          <div className="container mb-3" style={customizeStyle}>
            <h3>Burn Percentage</h3>
            <hr />
            <div className='m-3'>
              <div className="progress" style={{ margin: "10px" }}>
                <div className="progress-bar bg-danger" style={{ width: `${burnPercentage}%` }}></div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="col-12 col-lg-8 burn-history">
          <h1>Latest Burns</h1>
          <Table onTotalValue={handleTotalValue} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
