import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {getTickets, reset} from "../features/tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import TicketItem from "../components/TicketItem";


const Tickets = () => {
    const {tickets, isLoading, isSuccess} = useSelector(state => state.tickets)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if (isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, reset])

    useEffect(() => {
        dispatch(getTickets())
    }, [getTickets])

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <>
            <BackButton/>
            <h1>Tickets</h1>
            <div className="tickets">
                <div className="ticket-headings">
                    <div>Date</div>
                    <div>Product</div>
                    <div>Status</div>
                    <div></div>
                </div>
                {tickets.map(ticket => (
                    <TicketItem
                        key={ticket.id}
                        ticket={ticket}
                    />
                ))}
            </div>
        </>
    )
}

export default Tickets
