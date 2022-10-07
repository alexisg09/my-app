import React, { Fragment, useEffect, useState } from 'react';
import logo from './Bananas.svg.png';
import './App.css';
import './coin.css'
import { Link } from 'react-router-dom';


export interface Coin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_active: boolean,
  is_new: boolean,
  type: string,
}

export interface Exchange {
  id: string,
  name: string,
  volume: number,
  fiat: any[]
}

function App() {

  const [coins, setCoins] = useState<Exchange[]>([])

  async function getData() {
    const response = await fetch('https://api.coinpaprika.com/v1/coins/eth-ethereum/exchanges');
    setCoins(await response.json())
  }


  useEffect(() => {
    getData()
    console.log(coins)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Salut l'équipe
        </p>

      </header>
      {coins?.map((coin) => (
        <Fragment key={coin.id}>
          <div className="card" >
            <div className="card_left">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png" alt='eee' />
            </div>
            <div className="card_right">
              <h1>{coin.name}</h1>
              <div className="card_right__details">
                <ul>
                  <li>{coin.id}</li>
                  <li>{coin.volume}</li>
                </ul>
                <div className="card_right__review">
                  <p>The lead character, called 'The Bride,' was a member <br /> of the Deadly Viper Assassination Squad, led by her <br /> lover 'Bill.' Upon realizing she was pregnant with Bill's<br /> child, 'The Bride' decided to escape her life as a killer.<br /> She fled to Texas, met a young man, who, on the day<br /> of their wedding rehearsal was gunned down by....</p>
                  <a href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl" target="_blank" rel="noreferrer">Read more</a>
                </div>
                <div className="card_right__button">
                  <Link to={coin.name + '/details'} state={coin}>
                    Détails
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fragment>

      ))}

    </div >
  );
}

export default App;
