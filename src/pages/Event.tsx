import React, {FC, useEffect, useState} from 'react';
import EventCalendar from "../components/EventCalendar";
import {Button, Layout, Modal, Row} from "antd";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Event: FC = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const {fetchGuests} = useActions()
    const {guests} = useTypedSelector(state => state.event)

    useEffect(() => {
        fetchGuests()
    }, [])

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
            <EventCalendar events={[]}/>
            <Modal
                title='Добавить событие'
                open={modalOpen}
                footer={null}
                onCancel={() => setModalOpen(false)}
            >
                <EventForm
                    guests={guests}
                />
            </Modal>
        </Layout>
    );
};

export default Event;