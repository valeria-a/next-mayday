"use client";

import { getFlights } from "../../../infra/requests"
import useSWR from 'swr'
import * as urls from '../../../infra/urls'
import { url } from "inspector";
import * as requests from '../../../infra/requests'
import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

// const FlightsList = async () => {
//     // const [flights, setFlights] = useState<any>([])

//     const flightsData = await getFlights()
//     console.log(flightsData)
//     const flights = flightsData.results

//     return(
//         <ul>
//             {flights &&
//                 flights.map((flight:any) => {
//                     return <li>{flight.flight_code}</li>
//                 })}
//         </ul>
//     )
// }

// const FlightsList = () => {

//     const { data, error, isLoading } = useSWR(urls.FLIGHTS_URL, requests.flightsFetcher)

//     if (error) return <div>failed to load</div>
//     if (isLoading) return <div>loading...</div>

//     return(
//         <ul>
//             {
//                 data.results.map((flight:any) => {
//                     return <li>{flight.flight_code}</li>
//                 })}
//         </ul>
//     )
// }

const FlightsList = () => {

    const [flights, setFlights] = useState({next: null, results: [], count: 100})
    // const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        // setLoading(true)

        const urlToSend = flights.next ? flights.next : null
        const flightsData = await getFlights(urlToSend)
        console.log(flightsData)
        setFlights({...flightsData, results:[...flights.results, ...flightsData.results]})
        // setLoading(false)
    }

    useEffect(() => {
        fetchData()

    }, [])

    // if (loading) {
    //     return <CircularProgress />
    // }

    const items = flights.results.map((flight: any) => {return(
            <li style={{height: '30em'}} key={flight.id}><a href={`/flights/${flight.id}`}>{`${flight.flight_code}`}</a></li>)
        })
    return(
        <>
            <Typography color={'text.primary'} variant="h2">Flights page</Typography>
            <ul>
                <InfiniteScroll
                    dataLength={flights.count}
                    next={fetchData}
                    hasMore={flights.count > flights.results.length}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                    }
                    >
                {items}
                </InfiniteScroll>
            </ul>
        </>
    )
}

export default FlightsList