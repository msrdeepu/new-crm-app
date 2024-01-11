import React, { useState } from "react";

import {
    WhatsAppIcon,
    MailIcon,
    HeatmapIcon,
    IdCardIcon,
    GlobeIcon,
    PhoneIcon,
    CreditCard,
    LoginIcon,
} from "../components/Icons/Icons";
import { Col, Row, Form, Input, Select, Space } from "antd";
const { TextArea } = Input;

//custom form fields
import {
    CustomInputItem,
    CustomSelectItem,
} from "../components/FormFields/FormFields";

//btns
import BtnsItems from "../components/Btns/BtnsItems";

const ContactForm = () => {
    const [designation, setDesignation] = useState("");

    const designationHandler = (e) => {
        setDesignation(e.target.value);
    };
    let options = [
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
    ];
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    {/* <Form.Item label="Contact Type">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item> */}
                    <CustomSelectItem label={"Contact Type"} data={options} />
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Full Name">
                        <Space.Compact style={{ width: "100%" }}>
                            <Select
                                style={{ width: "20%" }}
                                defaultValue="Mr"
                                options={[
                                    { value: "Mr", label: "Mr" },
                                    { value: "Ms", label: "Ms" },
                                    { value: "MrS", label: "MrS" },
                                ]}
                            />
                            <Input
                                style={{ width: "80%" }}
                                showCount
                                placeholder="Enter Full Name"
                            />
                        </Space.Compact>
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Role / Designation"
                        validateStatus={
                            designation == "" ? "warning" : "success"
                        }
                        showCount={true}
                        addonBefore={<IdCardIcon color="blue" />}
                        onChange={designationHandler}
                        labelName="designation"
                        required={false}
                        name={"designation"}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Firm / Company Name"
                        showCount={true}
                        addonBefore={<LoginIcon color="purple" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="companyname"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="PAN Number"
                        showCount={true}
                        addonBefore={<CreditCard color="red" />}
                        labelName="pannumber"
                        name={"pannumber"}
                        required={false}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="GST Number"
                        showCount={true}
                        addonBefore={<CreditCard color="red" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="gst"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Phone Number"
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="phone"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Mobile Number"
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="mobile"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Alternate Contact Number"
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="altcontact"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="WhatsApp Number"
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="wpnum"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Email ID"
                        showCount={true}
                        addonBefore={<MailIcon color="orange" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="mailid"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Alternate Email ID"
                        showCount={true}
                        addonBefore={<MailIcon color="blue" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="altmailid"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Website URL"
                        showCount={true}
                        addonBefore={<GlobeIcon color="purple" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="weburl"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="City / Town"
                        showCount={true}
                        addonBefore={<HeatmapIcon color="orange" />}
                        // validateStatus={
                        //     designation == "" ? "warning" : "success"
                        // }
                        //onChange={designationHandler}
                        labelName="city"
                        required={false}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item label="Country">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Preffered Billing Address / Shipping Address">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Image / Avatar">
                        <Input placeholder="Image / Avatar" type="file" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Status">
                        <Select
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Image / Avatar">
                        <TextArea showCount placeholder="House Address" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Office Address">
                        <TextArea showCount placeholder="Office Address" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Permanent Address">
                        <TextArea showCount placeholder="Permanent Address" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Bank Account Details">
                        <TextArea
                            showCount
                            placeholder="Bank Account Details"
                        />
                    </Form.Item>
                </Col>
            </Row>
            <BtnsItems firstText="Add" secondText="Cancel" />
        </Form>
    );
};

export default ContactForm;
