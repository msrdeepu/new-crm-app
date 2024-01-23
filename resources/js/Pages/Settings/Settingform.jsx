import React from "react";
import { Button, Checkbox, Form, Input, Col, Divider, Row, Select } from "antd";
import { Head, Link, useForm } from "@inertiajs/react";

const Settingform = ({ submitHandler, data, setData, saveBtn }) => {
    const [form] = Form.useForm();
    const statusSelectHandler = (value) => {
        setData("status", value);
    };
    return (
        <Form
            form={form}
            onFinish={submitHandler}
            layout="vertical"
            initialValues={{
                type: data.type,
                name: data.name,
                value: data.value,
                pcode: data.pcode,
                dorder: data.dorder,
                status: data.status,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <Form.Item label="Type" name="type">
                        <Input
                            placeholder="Enter Type"
                            onChange={(e) => setData("type", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Name" name="name">
                        <Input
                            placeholder="Enter Name"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Value" name="value">
                        <Input
                            placeholder="Enter Value"
                            onChange={(e) => setData("value", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Parent Code" name="pcode">
                        <Input
                            placeholder="Enter Parent Code"
                            onChange={(e) => setData("pcode", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Display Order" name="dorder">
                        <Input
                            placeholder="Enter Display Order"
                            type="number"
                            onChange={(e) => setData("dorder", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Status" name="status">
                        <Select
                            placeholder="Select Status"
                            onChange={statusSelectHandler}
                        >
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">
                                InActive
                            </Select.Option>
                            <Select.Option value="completed">
                                Completed
                            </Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                }}
            >
                <Button
                    htmlType="submit"
                    type="primary"
                    style={{ margin: "6px" }}
                >
                    {saveBtn}
                </Button>
                <Link href={window.route("settings.index")} type="button">
                    <Button type="primary" danger style={{ margin: "6px" }}>
                        Cancel
                    </Button>
                </Link>
            </div>
        </Form>
    );
};

export default Settingform;
