import FlightDetails from '../../../../components/flights/flightDetails/FlightDetails';


const FlightDetailsPage = (props: any) => {

    return (
        <>
            <h2>FLIGHT DETAILS PAGE</h2>
            <FlightDetails flightId={props.params.id}/>
        </>
    )
}

export default FlightDetailsPage