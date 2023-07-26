"use client"

// import { Suspense } from "react"
import FlightsList from "../../../components/flights/flightsList/flightsList"

// const Flights = () => {
//     return (
//         <div style={{height: '100%'}}>
//             <h1>FLIGHTS PAGE</h1>
//             <Suspense fallback={<p style={{color: 'red'}}>Loading</p>}>
//                 <FlightsList />
//             </Suspense>
//         </div>
//     )
// }

const Flights = () => {
    return(
        <FlightsList />
    )
}

export default Flights