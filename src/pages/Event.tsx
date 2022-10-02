import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const {fetchGuests, createEvent, fetchEvent} = useActions()
    const {guests, events} = useTypedSelector(state => state.event)
    const {user} = useTypedSelector(state => state.auth)

    useEffect(() => {
        fetchGuests()
        fetchEvent(user.username)
    }, [])

    const addNewEvent = (event: IEvent) => {
        setModalOpen(false)
        createEvent(event)
    }
    return (
        <Layout>
            <Row
                justify="center"
                style={{marginTop: 15, marginBottom: 15}}
            >
                <Button
                    onClick={() => setModalOpen(true)}
                >
                    Добавить событие
                </Button>
            </Row>
            <EventCalendar events={events}/>
            <Modal
                title='Добавить событие'
                open={modalOpen}
                footer={null}
                onCancel={() => setModalOpen(false)}
            >
                <EventForm
                    guests={guests}
                    submit={addNewEvent}
                />
            </Modal>
        </Layout>
    );
};

export default Event;