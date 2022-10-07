import React from 'react';
import { Coin } from './App';
import CoinCard from './CoinCard';






interface CoinListProps {
    coins?: Coin[];
}


const CoinList = ({ coins }: CoinListProps): any => {
    console.log({ coins })

    return (
        coins?.map((coin) => (
            <>
                <CoinCard key={coin.id} />
            </>

        ))
    )
}

export default CoinList;