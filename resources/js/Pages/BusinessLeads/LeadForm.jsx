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

const LeadForm = () => {
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const titleHandler = (e) => {
        setTitle(e.target.value);
        console.log(e.target.value);
    };
    const leadOwnerHandler = (value) => {
        console.log(value);
    };
    const leadManagerHandler = (value) => {
        console.log(value);
    };
    const leadSourceHandler = (value) => {
        console.log(value);
    };
    const leadIndustryHandler = (value) => {
        console.log(value);
    };
    const leadStatusHandler = (value) => {
        console.log(value);
    };
    const leadRatingHandler = (value) => {
        console.log(value);
    };
    const contactDateHandler = (e) => {
        console.log(e.target.value);
    };
    const annualRevenueHandler = (e) => {
        console.log(e.target.value);
    };
    const detailHandler = (html) => {
        console.log(html);
        setDetails(html);
    };
    const onCancelData = () => {
        window.alert("Are You Sure Want to Cancel?");
        router.get(route("leads.index"));
    };
    return (
        <Form form={form} layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
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
                <Col xs={24} md={12}>
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
                <Col xs={24} md={12}>
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
                <Col xs={24} md={12}>
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
                <Col xs={24} md={12}>
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
                <Col xs={24} md={12}>
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
                        theme="snow"
                        value={details}
                        onChange={detailHandler}
                    />
                </Col>
            </Row>
            <BtnsItems
                firstText={"Save"}
                secondText={"Cancel"}
                cancelForm={onCancelData}
            />
        </Form>
    );
};

export default LeadForm;
