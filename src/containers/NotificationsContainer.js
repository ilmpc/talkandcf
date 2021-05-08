import React, {useState, useEffect, useCallback} from "react";
import NotificationsComponent from "../components/notifications/NotificationsComponent";
import {element} from "prop-types";
import axios from "axios";

const NotificationsContainer = () => {

    const [buttonsGroupState, setButtonsGroupState] = useState('all')
    const [sidePanelState, setSidePanelState] = useState('inbox')
    const [filteredEvents, setFilteredEvents] = useState([])
    const today = new Date();

    const allButtonHandler = useCallback(() => {
        setButtonsGroupState('all')
    }, [setButtonsGroupState])

    const appliedButtonHandler = useCallback(() => {
        setButtonsGroupState('applied')
    }, [setButtonsGroupState])

    const inboxHandler = useCallback(() => {
        setSidePanelState('inbox')
    }, [setSidePanelState])

    const doneHandler = useCallback(() => {
        setSidePanelState('done')
    }, [setSidePanelState])

    const userid = '6092acb3ac5134001b3186c0' //useSelector

    useEffect(() => {
        axios.get('http://peregovorki-js.noveogroup.com/events') // use dispatch to update events
            .then(response => {
                if (response.status === 200) {
                    const events = response.data;
                    let newEvents
                    if (sidePanelState === 'done') {

                        newEvents = events.data.filter(event => {
                            const eventDate = new Date(event.to)
                            return (today - eventDate) > 0
                        })

                    } else {
                        newEvents = events.data
                            .filter(event => {
                                const eventDate = new Date(event.to)
                                return (today - eventDate) < 0
                            })
                        if (buttonsGroupState === 'applied') {
                            newEvents = newEvents.filter(
                                event => event.appliedUsers.find(element => element._id === userid)
                            )
                        }
                    }
                    newEvents = newEvents.sort((a, b) => {
                        const aDate = new Date(a.from)
                        const bDate = new Date(b.from)
                        return aDate - bDate
                    })
                    setFilteredEvents(newEvents)
                }
            })
    }, [sidePanelState, buttonsGroupState])

    const applyHandler = useCallback(id => () => {
        axios.post(`http://peregovorki-js.noveogroup.com/events/${id}/apply`)
            .then(response => {
                // use dispatch to update events
            })
    }, [])
    const denyHandler = useCallback(id => () => {
        axios.post(`http://peregovorki-js.noveogroup.com/events/${id}/deny`)
            .then(response => {
                // use dispatch to update events
            })
    }, [])
    const getFormattedDate = useCallback(stringDate => {
        const addFirstZero = value => {
            if(value === 0){
                return '00'
            }
            if(value.toString().length < 2){
                return '0' + value
            }

            return value
        }
        const date = new Date(stringDate)
        const minutes = addFirstZero(date.getMinutes())
        const hours = addFirstZero(date.getHours())
        const day = addFirstZero(date.getDate())
        const month = addFirstZero(date.getMonth() + 1)
        const year = date.getFullYear()
        return `${hours}-${minutes} ${day}.${month}.${year}`
    }, []);


    return (
        <NotificationsComponent
            getFormattedDate={getFormattedDate}
            buttonsGroupState={buttonsGroupState}
            appliedButtonHandler={appliedButtonHandler}
            allButtonHandler={allButtonHandler}
            inboxHandler={inboxHandler}
            doneHandler={doneHandler}
            sidePanelState={sidePanelState}
            events={filteredEvents}
            userid={userid}
            applyHandler={applyHandler}
            denyHandler={denyHandler}
        />
    )
}

export default NotificationsContainer;