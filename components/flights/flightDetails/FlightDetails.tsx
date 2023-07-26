"use client";

import useSWR from 'swr'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import * as requests from  '../../../infra/requests'


const FlightDetails = (props: any) => {

    console.log(props)
    // const router = useRouter()
    // const pathname = usePathname()
    // const searchParams = useSearchParams()
    // console.log(router)
    // console.log(pathname)
    // console.log(searchParams)

    const { data, error, isLoading }: any = useSWR(
        '/flights/[id]', 
        () => requests.getFlightDetials(props.flightId))

    console.log('resp', data)

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <>
            <p>Origin country:</p>
            <p>{data.data.origin_country}</p>
        </>
    )
}

export default FlightDetails