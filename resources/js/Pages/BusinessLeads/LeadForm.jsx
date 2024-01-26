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

const LeadForm = ({ data, setData, submitHandler, record, saveBtn }) => {
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const titleHandler = (e) => {
        setData("title", e.target.value);
        //console.log(e.target.value);
    };
    const leadOwnerHandler = (value) => {
        setData("leadowner", value);
    };
    const leadManagerHandler = (value) => {
        setData("leadmanager", value);
    };
    const leadSourceHandler = (value) => {
        setData("leadsource", value);
    };
    const leadIndustryHandler = (value) => {
        setData("industry", value);
    };
    const leadStatusHandler = (value) => {
        setData("status", value);
    };
    const leadRatingHandler = (value) => {
        setData("rating", value);
    };
    const contactDateHandler = (e) => {
        setData("contactdate", e.target.value);
    };
    const annualRevenueHandler = (e) => {
        setData("annualrevenue", e.target.value);
    };
    const detailHandler = (html) => {
        setData("details", html);
        setDetails(html);
    };
    const onCancelData = () => {
        window.alert("Are You Sure Want to Cancel?");
        router.get(route("leads.index"));
    };
    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={submitHandler}
            initialValues={{
                title: data.title,
                leadowner: data.leadowner,
                leadmanager: data.leadmanager,
                leadsource: data.leadsource,
                industry: data.industry,
                status: data.status,
                rating: data.rating,
                contactdate: data.contactdate,
                annualrevenue: data.annualrevenue,
                details: data.details,
            }}
        >
            <Row gutter={[8, 4]}>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        label="Title"
                        showCount={true}
                        addonBefore={<IdCardIcon color="blue" />}
                        //value={data.designation}
                        onChange={titleHandler}
                        labelName="title"
                        required={false}
                        name={"title"}
                        validateStatus={title == "" ? "warning" : "success"}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"leadowner"}
                        label={"Lead Owner"}
                        labelName={"leadowner"}
                        data={[
                            { name: "item", vlaue: "item" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={leadOwnerHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"leadmanager"}
                        label={"Lead Manager"}
                        labelName={"leadmanager"}
                        data={[
                            { name: "item", vlaue: "item" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={leadManagerHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"leadsource"}
                        label={"Lead Source"}
                        labelName={"leadsource"}
                        data={[
                            { name: "item", vlaue: "item" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={leadSourceHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"industry"}
                        label={"Lead Industry"}
                        labelName={"industry"}
                        data={[
                            { name: "item", vlaue: "item" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={leadIndustryHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"status"}
                        label={"Lead Status"}
                        labelName={"status"}
                        data={[
                            { name: "item", vlaue: "item" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={leadStatusHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        name={"rating"}
                        label={"Lead Rating"}
                        labelName={"rating"}
                        data={[
                            { name: "item", vlaue: "item" },
                            { name: "two", value: "two" },
                            { name: "three", value: "three" },
                        ]}
                        onChange={leadRatingHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        name={"contactdate"}
                        label={"Contact Date"}
                        labelName={"contactdate"}
                        type={"date"}
                        onChange={contactDateHandler}
                    />
                </Col>

                <Col xs={24} md={8}>
                    <CustomInputItem
                        name={"annualrevenue"}
                        label={"Annual Revenue"}
                        labelName={"annualrevenue"}
                        type={"number"}
                        onChange={annualRevenueHandler}
                    />
                </Col>
                <Col xs={24}>
                    <label>Details</label>
                    <ReactQuill
                        name="details"
                        theme="snow"
                        value={record.id == undefined ? details : data.details}
                        onChange={detailHandler}
                    />
                </Col>
            </Row>
            <BtnsItems
                firstText={saveBtn}
                secondText={"Cancel"}
                cancelForm={onCancelData}
            />
        </Form>
    );
};

export default LeadForm;
