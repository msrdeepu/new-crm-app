import { useState } from "react";
import { Col, Row, Form, Input, Select, Space, Button, Image } from "antd";
const { TextArea } = Input;
import { Head, Link, router } from "@inertiajs/react";
//custom form fields
import {
    CustomInputItem,
    CustomSelectItem,
    CustomTextArea,
} from "../components/FormFields/FormFields";
//btns
import BtnsItems from "../components/Btns/BtnsItems";
//react-quill-rich-text-editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ProjectForm = ({ data, setData, submitHandler, record, saveBtn }) => {
    const [form] = Form.useForm();
    const [startDateTime, setDueDateTime] = useState("");
    const [dueDateTime, setStartDateTime] = useState("");
    const [details, setDetails] = useState("");
    const [pTitle, setPTitle] = useState("");

    const titleHandler = (e) => {
        setData("ptitle", e.target.value);
    };

    const statusHandler = (value) => {
        setData("pstatus", value);
    };

    const priorityHandler = (value) => {
        setData("ppriority", value);
    };

    const typeHandler = (value) => {
        setData("ptype", value);
    };

    const customerHandler = (value) => {
        setData("pcustomer", value);
    };

    const assignedToHandler = (value) => {
        setData("assignto", value);
    };

    const phaseHandler = (value) => {
        setData("pphase", value);
    };

    const budgetHandler = (e) => {
        setData("pbudget", e.target.value);
    };

    const detailsHandler = (html) => {
        setData("details", html);
        setDetails(html);
    };

    const handleStartDateTimeChange = (event) => {
        const selectedStartDateTime = event.target.value;
        setData("stdate", selectedStartDateTime);
        setStartDateTime(selectedStartDateTime);
    };
    const handleDueDateTimeChange = (event) => {
        const selectedDueDateTime = event.target.value;
        setData("duedate", selectedDueDateTime);
        setDueDateTime(selectedDueDateTime);
    };

    function onCancelHandler(e) {
        router.get(route("projects.index"));
    }

    return (
        <Form
            layout="vertical"
            form={form}
            onFinish={submitHandler}
            initialValues={{
                ptitle: data.ptitle,
                pstatus: data.pstatus,
                ppriority: data.ppriority,
                ptype: data.ptype,
                pcustomer: data.pcustomer,
                assignto: data.assignto,
                pphase: data.pphase,
                pbudget: data.pbudget,
                stdate: data.stdate,
                duedate: data.duedate,
                details: data.details,
            }}
        >
            {console.log(data)}
            <Row gutter={[8, 3]}>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label={"Project Title"}
                        name={"ptitle"}
                        labelName={"ptitle"}
                        onChange={titleHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        label={"Project Status"}
                        name={"pstatus"}
                        labelName={"pstatus"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={statusHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        label={"Project Priority"}
                        name={"ppriority"}
                        labelName={"ppriority"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={priorityHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        label={"Project Type"}
                        name={"ptype"}
                        labelName={"ptype"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={typeHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        label={"Select Customer"}
                        name={"pcustomer"}
                        labelName={"pcustomer"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={customerHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        label={"Assign To"}
                        name={"assignto"}
                        labelName={"assignto"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={assignedToHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label={"Project Budget"}
                        labelName={"pbudget"}
                        name={"pbudget"}
                        type="number"
                        onBlur={budgetHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        label={"Select Phase"}
                        name={"pphase"}
                        labelName={"pphase"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={phaseHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label={"Start Date"}
                        labelName={"sdate"}
                        name={"sdate"}
                        type="datetime-local"
                        value={startDateTime}
                        onBlur={handleStartDateTimeChange}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label={"End Date"}
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
                firstText={saveBtn}
                secondText="Cancel"
                cancelForm={onCancelHandler}
            />
        </Form>
    );
};

export default ProjectForm;
