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
import { Col, Row, Form, Input, Select, Space } from "antd";
const { TextArea } = Input;

//custom form fields
import {
    CustomInputItem,
    CustomSelectItem,
    CustomTextArea,
} from "../components/FormFields/FormFields";

//btns
import BtnsItems from "../components/Btns/BtnsItems";

const ContactForm = ({ data, setData, saveBtn, submitHandler }) => {
    const [form] = Form.useForm();
    const [fullName, setFullName] = useState("");
    const [designation, setDesignation] = useState("");
    const [company, setCompany] = useState("");
    const [panNumber, setPanNumber] = useState("");
    const [gstNumber, setGstNumber] = useState("");
    const [phoneNumberItem, setPhoneNumberItem] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [altContactNumber, setAltContactNumber] = useState();
    const [whatsAppNumber, setWhatsAppNumber] = useState();
    const [emailId, setEmailId] = useState("");
    const [altMailId, setAltMailId] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [city, setCity] = useState("");

    const contactTypeHandler = (value) => {
        setData(value);
    };

    const nameTitleHandler = (value) => {
        setData(value);
    };

    const fullNameHandler = (e) => {
        setData(e.target.value);
        setFullName(e.target.value);
    };

    const designationHandler = (e) => {
        setData(e.target.value);
        setDesignation(e.target.value);
    };

    const companyHander = (e) => {
        setData(e.target.value);
        setCompany(e.target.value);
    };

    const panNumberHandler = (e) => {
        setData(e.target.value);
        setPanNumber(e.target.value);
    };

    const gstHandler = (e) => {
        setData(e.target.value);
        setGstNumber(e.target.value);
    };
    const phoneNumberHandler = (e) => {
        setData(e.target.value);
        setPhoneNumberItem(e.target.value);
    };

    const mobileHandler = (e) => {
        setData(e.target.value);
        setMobileNumber(e.target.value);
    };

    const altContactNumberHandler = (e) => {
        setData(e.target.value);
        setAltContactNumber(e.target.value);
    };

    const whatsAppNumberHandler = (e) => {
        setData(e.target.value);
        setWhatsAppNumber(e.target.value);
    };

    const emailIdHandler = (e) => {
        setData(e.target.value);
        setEmailId(e.target.value);
    };

    const altEmailHandler = (e) => {
        setData(e.target.value);
        setAltMailId(e.target.value);
    };

    const websiteUrlHandler = (e) => {
        setData(e.target.value);
        setWebsiteUrl(e.target.value);
    };

    const cityHandler = (e) => {
        setData(e.target.value);
        setCity(e.target.value);
    };

    const countryHandler = (value) => {
        setData(value);
    };

    const billingAddressHandler = (value) => {
        setData(value);
    };

    const avatarHandler = (e) => {
        setData(e.target.files[0]);
    };

    const statusHandler = (value) => {
        setData(value);
    };

    const houseAddresHandler = (e) => {
        setData(e.target.value);
    };

    const officeAddressHandler = (e) => {
        setData(e.target.value);
    };
    const permanentAddressHandler = (e) => {
        setData(e.target.value);
    };
    const bankAccountDetailsHandler = (e) => {
        setData(e.target.value);
    };

    let options = [
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
    ];
    return (
        <Form layout="vertical" onFinish={submitHandler} form={form}>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"ctype"}
                        label={"Contact Type"}
                        data={options}
                        onChange={contactTypeHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Full Name">
                        <Space.Compact style={{ width: "100%" }}>
                            <Select
                                name="title"
                                onChange={nameTitleHandler}
                                style={{ width: "20%" }}
                                defaultValue="Mr"
                                options={[
                                    { value: "Mr", label: "Mr" },
                                    { value: "Ms", label: "Ms" },
                                    { value: "MrS", label: "MrS" },
                                ]}
                            />
                            <Input
                                name="fullname"
                                required={true}
                                style={{ width: "80%" }}
                                showCount
                                placeholder="Enter Full Name"
                                onChange={fullNameHandler}
                                validateStatus={
                                    fullName == "" ? "warning" : "success"
                                }
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
                        required={true}
                        name={"designation"}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"company"}
                        required={true}
                        label="Firm / Company Name"
                        showCount={true}
                        addonBefore={<LoginIcon color="purple" />}
                        validatestatus={company == "" ? "warning" : "success"}
                        onChange={companyHander}
                        labelName="companyname"
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="PAN Number"
                        showCount={true}
                        addonBefore={<CreditCard color="red" />}
                        labelName="pannumber"
                        name={"pannumber"}
                        required={true}
                        validateStatus={panNumber == "" ? "warning" : "success"}
                        onChange={panNumberHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="GST Number"
                        name={"gstnumber"}
                        showCount={true}
                        addonBefore={<CreditCard color="red" />}
                        validateStatus={gstNumber == "" ? "warning" : "success"}
                        onChange={gstHandler}
                        labelName="gst"
                        required={false}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Phone Number"
                        name={"phone"}
                        type={"number"}
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        onChange={phoneNumberHandler}
                        validateStatus={
                            String(phoneNumberItem).length == 10
                                ? "success"
                                : "warning"
                        }
                        labelName="phone"
                        max={10}
                        required={true}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"mobilenum"}
                        label="Mobile Number"
                        type={"number"}
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        onChange={mobileHandler}
                        labelName="mobile"
                        required={false}
                        validateStatus={
                            String(mobileNumber).length == 10
                                ? "success"
                                : "warning"
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        label="Alternate Contact Number"
                        showCount={true}
                        addonBefore={<PhoneIcon color="green" />}
                        onChange={altContactNumberHandler}
                        labelName="altcontact"
                        required={false}
                        validateStatus={
                            String(altContactNumber).length == 10
                                ? "success"
                                : "warning"
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"wpnumber"}
                        label="WhatsApp Number"
                        showCount={true}
                        addonBefore={<WhatsAppIcon color="green" />}
                        onChange={whatsAppNumberHandler}
                        labelName="wpnum"
                        required={false}
                        validateStatus={
                            String(whatsAppNumber).length == 10
                                ? "success"
                                : "warning"
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"emailid"}
                        label="Email ID"
                        type={"email"}
                        showCount={true}
                        addonBefore={<MailIcon color="orange" />}
                        onChange={emailIdHandler}
                        labelName="mailid"
                        required={false}
                        validateStatus={
                            emailId.includes("@") ? "success" : "warning"
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"altemailid"}
                        label="Alternate Email ID"
                        showCount={true}
                        addonBefore={<MailIcon color="blue" />}
                        onChange={altEmailHandler}
                        labelName="altmailid"
                        required={false}
                        validateStatus={
                            altMailId.includes("@") ? "success" : "warning"
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"weburl"}
                        label="Website URL"
                        showCount={true}
                        addonBefore={<GlobeIcon color="purple" />}
                        onChange={websiteUrlHandler}
                        labelName="weburl"
                        required={false}
                        validateStatus={
                            websiteUrl.includes(".") ? "success" : "warning"
                        }
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"city"}
                        label="City / Town"
                        showCount={true}
                        addonBefore={<LocationIcon color="orange" />}
                        onChange={cityHandler}
                        labelName="city"
                        required={false}
                        validateStatus={city == "" ? "warning" : "success"}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item label="Country">
                        <Select
                            name="country"
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                            onChange={countryHandler}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Preffered Billing Address / Shipping Address">
                        <Select
                            name="billaddress"
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                            onChange={billingAddressHandler}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Image / Avatar">
                        <CustomInputItem
                            name={"avatar"}
                            placeholder="Image / Avatar"
                            type="file"
                            onChange={avatarHandler}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label="Status">
                        <Select
                            name="status"
                            defaultValue="lucy"
                            style={{ width: "100%" }}
                            options={[
                                { value: "jack", label: "Jack" },
                                { value: "lucy", label: "Lucy" },
                                { value: "Yiminghe", label: "yiminghe" },
                            ]}
                            onChange={statusHandler}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <CustomTextArea
                        name={"houseaddress"}
                        label="House Address"
                        showCount={true}
                        onChange={houseAddresHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomTextArea
                        name={"officeaddress"}
                        label="Office Address"
                        showCount={true}
                        onChange={officeAddressHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomTextArea
                        name={"perminantaddress"}
                        label="Permanent Address"
                        showCount={true}
                        onChange={permanentAddressHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomTextArea
                        name={"bankdetails"}
                        label="Bank Account Details"
                        showCount={true}
                        onChange={bankAccountDetailsHandler}
                    />
                </Col>
            </Row>
            <BtnsItems firstText="Add" secondText="Cancel" />
            {/* <div>
                <button type="submit">Submit</button>
                <button type="reset">Cancel</button>
            </div> */}
        </Form>
    );
};

export default ContactForm;
