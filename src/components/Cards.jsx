import React, { useEffect, useState } from 'react';

function Cards() {
  const [price, setPrice] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [volume, setVolume] = useState(0);

  const apiBaseURL = "https://api.dev.dex.guru/v1/chain/1/tokens";
  const contractAddress = "0x679ec51c3989de468ce7b47ca6560636744f5ac6";
  const apiKey = "i0Pxxb4APurIDf9E8LcVKK0GYjRVjpa2w4h_5tgZeJk";

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          `${apiBaseURL}/${contractAddress}/market/?api-key=${apiKey}`
        );
        const data = await response.json();
        setPrice(data.price_usd.toFixed(8));
        setMarketCap(
          Math.round(data.price_usd.toFixed(8) * 10000000000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        setVolume(
          data.volume_24h_usd
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchTokenData();
  }, []);

  return (
    <div className="container text-center" style={{ color: "white" }}>
      <div className="row align-items-start">
        <div className="col-sm-12 col-md mb-3">
          <div
            className="p-2 rounded mt-3"
            style={{
              background: 'linear-gradient(135deg, #81C3D7, #3275A8)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h4>1776 Price:</h4>  <p>$ {price}</p> 
          </div>
        </div>
        <div className="col-sm-12 col-md mb-3">
          <div
            className="p-2 rounded"
            style={{
              background: 'linear-gradient(135deg, #81C3D7, #3275A8)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h4>Market Cap:</h4>  <p>$ {marketCap}</p> 
          </div>
        </div>
        <div className="col-sm-12 col-md mb-3">
          <div
            className="p-2 rounded"
            style={{
              background: 'linear-gradient(135deg, #81C3D7, #3275A8)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h4>Volume:</h4>  <p>$ {volume}</p>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
