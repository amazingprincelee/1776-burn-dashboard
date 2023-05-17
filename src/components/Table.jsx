import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import convert from 'ethereum-unit-converter';



function Table({ onTotalValue }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.etherscan.io/api', {
        params: {
          module: 'account',
          action: 'tokentx',
          contractaddress: '0x679ec51c3989de468ce7b47ca6560636744f5ac6',
          address: '0x000000000000000000000000000000000000dEaD',
          page: 1,
          offset: 10000,
          startblock: 0,
          endblock: 27000000,
          sort: 'desc',
          apikey: "2KBH34YNQ4QHV4E5RHF5Y4QBCDWG5RJ5IP",
        },
      });
      const formattedData = response.data.result.slice(0, 14).map((item) => ({
        ...item,
        timeStamp: formatTime(item.timeStamp),
        value: convertWeiToEth(item.value),
      }));
      setData(formattedData);
      calculateTotalValue(formattedData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleViewMore = () => {
    navigate('/burn');
  };

  const formatTime = (timestamp) => {
    const currentTime = new Date().getTime() / 1000;
    const diff = currentTime - timestamp;
    const hours = Math.floor(diff / 3600);
    if (hours < 24) {
      return `${hours} hours ago`;
    } else {
      const days = Math.floor(hours / 24);
      return `${days} days ago`;
    }
  };

  const convertWeiToEth = (value) => {
    const ethValue = convert(value, 'wei', 'ether');
    return ethValue;
  };

  const calculateTotalValue = (formattedData) => {
    const totalValue = formattedData.reduce((acc, item) => {
      if (item.value) {
        const value = parseFloat(item.value);
        if (!isNaN(value)) {
          return acc + value;
        }
      }
      return acc;
    }, 0);
    onTotalValue(totalValue);
  };

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>HASH</th>
              <th>TO</th>
              <th>1776 (ETH)</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.timeStamp}</td>
                <td>{item.hash.substr(0, 8)}...</td>
                <td>Dead Wallet</td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-primary m-3" onClick={handleViewMore}>
        View More
      </button>
    </div>
    );
}

export default Table;