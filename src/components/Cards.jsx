import React, { useEffect, useState } from 'react';









function Cards() {

  const [price, setPrice] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.dev.dex.guru/v1/chain/1/tokens/0x679ec51c3989de468ce7b47ca6560636744f5ac6/market/?api-key=i0Pxxb4APurIDf9E8LcVKK0GYjRVjpa2w4h_5tgZeJk"
    )
      .then((response) => response.json())
      .then((data) => {
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
        //   setPriceChange(data.pairs[0].priceChange.h24);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  return (
    <div className="container text-center " style={{color: "white"}}>
      <div className="row align-items-start">
        <div className="col-sm-12 col-md mb-3">
          <div
            className="p-2 rounded"
            style={{
              background: 'linear-gradient(135deg, #81C3D7, #3275A8)',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            1776 Price: {price}
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
            Market Cap: {marketCap}
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
            Volume: {volume}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

