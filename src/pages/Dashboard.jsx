import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import { ethers } from "ethers";
import ABI from '../ABI';

const customizeStyle = {
  backgroundColor: "#81C3D7",
  borderRadius: "5px",
  fontFamily: "Roboto, sans-serif"
};

function Dashboard() {
  const [burnPercentage, setBurnPercentage] = useState(0);
  const [totalBurn, setTotalBurn] = useState(0);
  const [totalSupply, setTotalSupply] = useState("10,000,000,000");
  const [circulatingSupply, setCirculatingSupply] = useState("N/A");

  const handleTotalValue = (value) => {
    setTotalBurn(value);
  };

  useEffect(() => {
    fetchBurnPercentage();
    fetchTotalSupply();
  }, []);

  useEffect(() => {
    calculateCirculatingSupply();
  }, [totalSupply, burnPercentage]);

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

      const burnValue = response.data.result;
      const percentage = ethers.utils.formatUnits(burnValue, 18);

      setBurnPercentage(percentage);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTotalSupply = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.alchemyapi.io/v2/UAKNq4s1ggGd_t8Fm-CC4s2Z-iCX9U7G');
      // Replace 'YOUR_ALCHEMY_API_KEY' with your actual Alchemy API key
  
      const contract = new ethers.Contract('0x679ec51c3989de468ce7b47ca6560636744f5ac6', ABI, provider);
      // Replace 'CONTRACT_ADDRESS' with the actual contract address
  
      const totalSupply = await contract.totalSupply();
  
      setTotalSupply(totalSupply);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateCirculatingSupply = () => {
    const totalSupplyNum = parseFloat(totalSupply);
    const burnPercentageNum = parseFloat(burnPercentage);
    const totalBurnNum = parseFloat(totalBurn);

    const circulatingSupplyNum = totalSupplyNum - (totalSupplyNum * burnPercentageNum / 100) - totalBurnNum;
    setCirculatingSupply(circulatingSupplyNum);
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
              <p>{totalSupply}</p>
            </div>
            <div>
              <h6>Circulating Supply</h6>
              <p>{circulatingSupply}</p>
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
