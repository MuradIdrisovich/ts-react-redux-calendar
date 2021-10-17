import React, {FC, useState} from 'react';
import {Button, Layout, Menu, Modal, Row} from "antd";
import {useHistory} from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hooks/useActions";
import EventForm from "./EventForm";
import {IEvent} from "../models/IEvent";
import {UserOutlined} from '@ant-design/icons';
import {Space} from 'antd'

const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions()
    const [modalVisible, setModalVisible] = useState(false);
    const {fetchGuests, createEvent, fetchEvents} = useActions();
    const {guests,events} = useTypedSelector(state => state.event);

    const addNewEvent = (event: IEvent) => {
        setModalVisible(false);
        createEvent(event);
    }

    return (
        <Layout.Header >
            <Row justify="end">
                {isAuth
                    ?
                    <>
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

                        <div style={{color: 'white', paddingRight: '10px'}}>
                            <Space>
                                <UserOutlined/>
                                {user.username}
                            </Space>
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item

                                    onClick={() => setModalVisible(true)}
                                    key={3}
                            >
                                Добавить событие
                            </Menu.Item>
                            <Menu.Item
                                onClick={logout}
                                key={2}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item
                            onClick={() => router.push(RouteNames.LOGIN)}
                            key={1}
                        >
                            Логин
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;
