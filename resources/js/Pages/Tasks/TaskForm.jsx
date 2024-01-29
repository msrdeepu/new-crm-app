import React, { useState } from "react";
import {
    WhatsAppIcon,
    MailIcon,
    LocationIcon,
    IdCardIcon,
    GlobeIcon,
    PhoneIcon,
    CreditCard,
    LoginIcon,
} from "../components/Icons/Icons";
import { Col, Row, Form, Input, Select, Space, Button, Image } from "antd";
const { TextArea } = Input;
import { Head, Link, router } from "@inertiajs/react";
//react-quill-rich-text-editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//custom form fields
import {
    CustomInputItem,
    CustomSelectItem,
    CustomTextArea,
} from "../components/FormFields/FormFields";

//btns
import BtnsItems from "../components/Btns/BtnsItems";

const TaskForm = ({ submitHandler, data, setData, record, saveBtn }) => {
    const [form] = Form.useForm();
    const [name, setName] = useState("");
    const [startDateTime, setStartDateTime] = useState("");
    const [dueDateTime, setDueDateTime] = useState("");
    const [details, setDetails] = useState("");

    const typeHandler = (value) => {
        setData("type", value);
    };

    const statusHandler = (value) => {
        setData("status", value);
    };

    const priorityHandler = (value) => {
        setData("priority", value);
    };

    const categoryHandler = (value) => {
        setData("category", value);
    };

    const assignedHandler = (value) => {
        setData("assigned", value);
    };

    const delegatedHandler = (value) => {
        setData("delegated", value);
    };

    const nameHandler = (e) => {
        setData("name", e.target.value);
        setName(e.target.value);
        //console.log(e.target.value);
    };
    const handleStartDateTimeChange = (event) => {
        const selectedStartDateTime = event.target.value;
        setData("sdate", selectedStartDateTime);
        setStartDateTime(selectedStartDateTime);
    };
    const handleDueDateTimeChange = (event) => {
        const selectedDueDateTime = event.target.value;
        setData("duedate", selectedDueDateTime);
        setDueDateTime(selectedDueDateTime);
    };
    const detailsHandler = (html) => {
        setData("details", html);
        setDetails(html);
    };
    function onCancelHandler(e) {
        router.get(route("tasks.index"));
    }
    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={submitHandler}
            initialValues={{
                type: data.type,
                name: data.name,
                status: data.status,
                priority: data.priority,
                category: data.category,
                assigned: data.assigned,
                delegated: data.delegated,
                sdate: data.sdate,
                duedate: data.duedate,
                details: data.details,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"type"}
                        label={"Task Type"}
                        labelName={"type"}
                        placeholder="Select Task Type"
                        data={[
                            { name: "One", value: "One" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={typeHandler}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Task Name"
                        showCount={true}
                        addonBefore={<IdCardIcon color="blue" />}
                        onChange={nameHandler}
                        labelName="name"
                        required={false}
                        name={"name"}
                        validateStatus={name == "" ? "warning" : "success"}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"status"}
                        label={"Task Status"}
                        labelName={"status"}
                        placeholder="Select Status"
                        data={[
                            { name: "One", value: "One" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={statusHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"priority"}
                        label={"Task Priority"}
                        labelName={"priority"}
                        placeholder="Select Priority"
                        data={[
                            { name: "One", value: "One" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={priorityHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"category"}
                        label={"Task Category"}
                        labelName={"category"}
                        placeholder="Select Category"
                        data={[
                            { name: "One", value: "One" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={categoryHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"assigned"}
                        label={"Assigned To"}
                        labelName={"assigned"}
                        placeholder="Select Employee"
                        data={[
                            { name: "One", value: "One" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={assignedHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"deligated"}
                        label={"Deligated To"}
                        labelName={"deligated"}
                        placeholder="Select Employee"
                        data={[
                            { name: "One", value: "One" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={delegatedHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        label={"Start Date"}
                        labelName={"stdate"}
                        name={"stdate"}
                        type="datetime-local"
                        value={startDateTime}
                        onBlur={handleStartDateTimeChange}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        label={"Due Date"}
                        labelName={"duedate"}
                        name={"duedate"}
                        type="datetime-local"
                        value={dueDateTime}
                        onBlur={handleDueDateTimeChange}
                    />
                </Col>
                <Col xs={24}>
                    <label>Details</label>
                    <ReactQuill
                        name="details"
                        theme="snow"
                        value={record.id == undefined ? details : data.details}
                        onChange={detailsHandler}
                    />
                </Col>
            </Row>
            <BtnsItems
                //firstText={saveBtn}
                firstText={saveBtn}
                secondText="Cancel"
                cancelForm={onCancelHandler}
            />
        </Form>
    );
};

export default TaskForm;
