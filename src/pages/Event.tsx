import React, {FC, useEffect, useState} from 'react';
import {Button, Layout, Modal, Row} from "antd";
import EventCalendar from "../components/EventCalendar";
import EventForm from "../components/EventForm";
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

const Event: FC = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents, removeEvent} = useActions();
    const {guests,events} = useTypedSelector(state => state.event);  // useTypedSelector обращается к редюсеру!!!
    const {user} = useTypedSelector(state => state.auth);

    useEffect(() => {
        fetchGuests()                // 1-я загрузка и мы получаем пользователей из './users.json' и кладем в guests = [{username: string, password: string},{...}...}]
        fetchEvents(user.username);  // берет из localStorage 'events' или [],  events: [ {author:string, guest:string, date:string, description:string}, {...},... ]
    }, [])                      // и кладем в

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    const removeOneEvent = (descr: string) => {
        removeEvent(descr)
    }

    return (
        <Layout>
            {/*{JSON.stringify(events)}*/}
            {/*<div>{JSON.stringify(user)}</div>*/}
            {/*<div>{JSON.stringify(events)}</div>*/}
            {/*events: [ {author:string, guest:string, date:string, description:string}, {...},... ]*/}

            <EventCalendar
                events={events}
                removeEvent={(descr) => removeOneEvent(descr)}
            />

            <Modal
                title="Добавить событие"
                visible={modalVisible}
                footer={null}
                onCancel={() => setModalVisible(false)}
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
