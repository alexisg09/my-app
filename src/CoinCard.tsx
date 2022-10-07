import React from 'react';
import { Exchange } from './App';
import './coin.css'



interface CoinProps {
    coin?: Exchange;
}


const CoinCard = ({ coin }: CoinProps) => {

    return (
        <div className="card">
            <div className="card_left">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png" />
            </div>
            <div className="card_right">
                <h1>{coin?.name}</h1>
                <div className="card_right__details">
                    <ul>
                        <li>{coin?.id}</li>
                        <li>{coin?.volume}</li>
                    </ul>
                    <div className="card_right__review">
                        <p>The lead AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA, called 'The Bride,' was a member <br /> of the Deadly Viper Assassination Squad, led by her <br /> lover 'Bill.' Upon realizing she was pregnant with Bill's<br /> child, 'The Bride' decided to escape her life as a killer.<br /> She fled to Texas, met a young man, who, on the day<br /> of their wedding rehearsal was gunned down by....</p>
                        <a href="http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl" target="_blank" rel="noreferrer">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    )




}


export default CoinCard;