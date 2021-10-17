import React, {FC} from 'react';
import {Calendar, Button} from "antd";
import {IEvent} from "../models/IEvent";
import {Moment} from "moment";
import {formatDate} from "../utils/date";
import {DeleteOutlined} from "@ant-design/icons"
import Item from "antd/es/list/Item";

interface EventCalendarProps {
    events: IEvent[];
    removeEvent: (descr: string) => void;
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

    function dateCellRender(value: Moment) {               //value будет принимать ВСЕ отображаемые даты по очереди
        const formatedDate = formatDate(value.toDate());
        // console.log(formatedDate)
        const currentDayEvents = props.events.filter(ev => ev.date === formatedDate);
        // затем если в наших events есть перебираемая дата, (с гостем или автором) то отображается в ячейке (перебираются все отображажемые даты)
        // console.log(currentDayEvents) // это массив с одной датой и разными событиями(гостями,авторами)
        const removeEvent = (descr: string) => {
            props.removeEvent(descr)
        }

        return (
            <div>
                {currentDayEvents.map((ev, index) =>
                    <div
                        key={index}
                        onClick={() => console.log('hello')}
                        style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            {ev.description}
                        </div>
                        <DeleteOutlined
                            onClick={() => removeEvent(ev.description)}
                            style={{color: 'red'}}
                        />
                    </div>
                )}
            </div>
        );
    }

    return (
        <Calendar
            dateCellRender={dateCellRender}
        />
    );
};

export default EventCalendar;
