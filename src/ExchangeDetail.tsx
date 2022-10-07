import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Exchange } from './App';
import './coin.css'





const ExchangeDetail = () => {
    const params = useParams();

    const [exchange, setExchange] = useState<Exchange>()

    async function getData() {
        const response = await fetch('https://api.coinpaprika.com/v1/exchanges/' + params.id);
        setExchange(await response.json())
    }


    useEffect(() => {
        getData()
        console.log(exchange)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div>{params?.id}</div>
            <div>{exchange?.name}</div>
            <div>{exchange?.volume}</div>
        </>

    )
}


export default ExchangeDetail;