import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {rules} from "../utils/rules";
import {IUser} from "../models/IUser";

interface EventFormProps {
    guests: IUser[];
}

const EventForm: FC<EventFormProps> = (props) => {
    return (
        <Form>
            <Form.Item
                label='Описание события'
                name='description'
                rules={[rules.required()]}
            >
                <Input
                />
            </Form.Item>
            <Form.Item
                label='Дата события'
                name='date'
                rules={[rules.required()]}
            >
                <DatePicker/>
            </Form.Item>
            <Row justify='end'>
                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                    >
                        Создать
                    </Button>
                </Form.Item>
            </Row>
            <Form.Item>
                <Select>
                    {props.guests.map(guest =>
                    <Select.Option
                        value={guest.username}
                        key={guest.username}
                    >
                        {guest.username}
                    </Select.Option>
                    )}
                </Select>
            </Form.Item>
        </Form>
    );
};

export default EventForm;