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

// fullname: "",
// dob: "",
// marstatus: "",
// bloodgroup: "",
// physicchallenged: "",
// nationality: "",
// passportno: "",
// joindate: "",
// probationenddate: "",
// department: "",
// role: "",
// reportingto: "",
// prevworkexp: "",
// salarymode: "",
// salary: "",
// currentstatus: "",
// resignedon: "",
// resignationreason: "",
// emergperson: "",
// personrelation: "",
// emergcontact: "",
// insurenceno: "",
//btns
import BtnsItems from "../components/Btns/BtnsItems";

const EmployeForm = ({ data, setData, submitHandler, record, saveBtn }) => {
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const fullnameHandler = (e) => {
        setData("fullname", e.target.value);
        //console.log(e.target.value);
    };
    const dobHandler = (e) => {
        setData("dob", e.target.value);
    };
    const martialStatusHandler = (value) => {
        setData("marstatus", value);
    };
    const bloodGroupHandler = (value) => {
        setData("bloodgroup", value);
    };
    const physicallyChallengedHandler = (value) => {
        setData("physicchallenged", value);
    };
    const nationalityHandler = (value) => {
        setData("nationality", value);
    };
    const passportNumberHandler = (e) => {
        setData("passportno", e.target.value);
    };
    const joinDateHandler = (e) => {
        setData("joindate", e.target.value);
    };
    const probationEndDateHandler = (e) => {
        setData("probationenddate", e.target.value);
    };
    const departmentHandler = (e) => {
        setData("department", e.target.value);
    };

    const roleHandler = (e) => {
        setData("role", e.target.value);
    };
    const reportingToHandler = (value) => {
        setData("reportingto", value);
    };

    const previousWorkExperienceHandler = (value) => {
        setData("prevworkexp", value);
    };

    const salaryModeHandler = (value) => {
        setData("salarymode", value);
    };

    const salaryHandler = (e) => {
        setData("salary", e.target.value);
    };

    const currentStatusHandler = (value) => {
        setData("currentstatus", value);
    };

    const resignedOnHandler = (e) => {
        setData("resignedon", e.target.value);
    };

    const resignationReasonHandler = (e) => {
        setData("resignationreason", e.target.value);
    };

    const emergencyContactPersonHandler = (e) => {
        setData("emergperson", e.target.value);
    };

    const personRelationHandler = (e) => {
        setData("personrelation", e.target.value);
    };

    const emergencyContactHandler = (e) => {
        setData("emergcontact", e.target.value);
    };

    const insurenceNumberHandler = (e) => {
        setData("insurenceno", e.target.value);
    };

    const onCancelData = () => {
        window.alert("Are You Sure Want to Cancel?");
        router.get(route("employees.index"));
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onFinish={submitHandler}
            initialValues={{
                dob: data.dob,
                marstatus: data.marstatus,
                bloodgroup: data.bloodgroup,
                physicchallenged: data.physicchallenged,
                nationality: data.nationality,
                passportno: data.passportno,
                joindate: data.joindate,
                probationenddate: data.probationenddate,
                department: data.department,
                role: data.role,
                reportingto: data.reportingto,
                prevworkexp: data.prevworkexp,
                salarymode: data.salarymode,
                salary: data.salary,
                currentstatus: data.currentstatus,
                resignedon: data.resignedon,
                resignationreason: data.resignationreason,
                emergperson: data.emergperson,
                personrelation: data.personrelation,
                emergcontact: data.emergcontact,
                insurenceno: data.insurenceno,
            }}
        >
            <Row gutter={[8, 4]}>
                {/* <Col xs={24} md={8}>
                    <CustomInputItem
                        //labelName={"fullname"}
                        label={"Full Name"}
                        value={record.fullname}
                        //name={"fullname"}
                        //onChange={fullnameHandler}
                    />
                </Col> */}

                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"dob"}
                        label={"Date Of Birth"}
                        name={"dob"}
                        type={"date"}
                        onChange={dobHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"marstatus"}
                        label={"Martial Status"}
                        name={"marstatus"}
                        data={[
                            { name: "One", value: "One" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={martialStatusHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"bloodgroup"}
                        label={"Blood Group"}
                        name={"bloodgroup"}
                        data={[
                            { name: "bloodgroup", value: "bloodgroup" },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={bloodGroupHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"physicchallenged"}
                        label={"Physically Challenged"}
                        name={"physicchallenged"}
                        data={[
                            {
                                name: "physicchallenged",
                                value: "physicchallenged",
                            },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={physicallyChallengedHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"nationality"}
                        label={"Nationaity"}
                        name={"nationality"}
                        data={[
                            {
                                name: "nationality",
                                value: "nationality",
                            },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={nationalityHandler}
                    />
                </Col>

                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"passportno"}
                        label={"Passport Number"}
                        name={"passportno"}
                        onChange={passportNumberHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"joindate"}
                        label={"Join Date"}
                        name={"joindate"}
                        type={"date"}
                        onChange={joinDateHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"probationenddate"}
                        label={"Probation End Date"}
                        name={"probationenddate"}
                        type={"date"}
                        onChange={probationEndDateHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"department"}
                        label={"Department"}
                        name={"department"}
                        onChange={departmentHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"role"}
                        label={"Employee Role"}
                        name={"role"}
                        onChange={roleHandler}
                    />
                </Col>

                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"reportingto"}
                        label={"Reporting To"}
                        name={"reportingto"}
                        placeholder="Reporting To"
                        data={[
                            {
                                name: "reportingto",
                                value: "reportingto",
                            },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={reportingToHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"prevworkexp"}
                        label={"Previous Experience"}
                        name={"prevworkexp"}
                        data={[
                            {
                                name: "prevworkexp",
                                value: "prevworkexp",
                            },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={previousWorkExperienceHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"salarymode"}
                        label={"Salary Mode"}
                        name={"salarymode"}
                        data={[
                            {
                                name: "salarymode",
                                value: "salarymode",
                            },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={salaryModeHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"salary"}
                        label={"Employee Salary"}
                        name={"salary"}
                        type={"number"}
                        onChange={salaryHandler}
                    />
                </Col>

                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"currentstatus"}
                        label={"Current Status"}
                        name={"currentstatus"}
                        data={[
                            {
                                name: "currentstatus",
                                value: "currentstatus",
                            },
                            { name: "Two", value: "Two" },
                        ]}
                        onChange={currentStatusHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"resignedon"}
                        label={"Employee Resigned On"}
                        name={"resignedon"}
                        type={"date"}
                        onChange={resignedOnHandler}
                    />
                </Col>

                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"emergperson"}
                        label={"Emergency Contact Person"}
                        name={"emergperson"}
                        type={"text"}
                        onChange={emergencyContactPersonHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        labelName={"personrelation"}
                        label={"Emergency Contact Person Relation"}
                        name={"personrelation"}
                        type={"text"}
                        onChange={personRelationHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        labelName={"emergcontact"}
                        label={"Emergency Contact Number"}
                        name={"emergcontact"}
                        type={"number"}
                        onChange={emergencyContactHandler}
                    />
                </Col>

                <Col xs={24} md={12}>
                    <CustomInputItem
                        labelName={"insurenceno"}
                        name={"insurenceno"}
                        label={"Insurence Number"}
                        onChange={insurenceNumberHandler}
                    />
                </Col>
                <Col xs={24}>
                    <CustomTextArea
                        labelName={"resignationreason"}
                        name={"resignationreason"}
                        label={"Resignation Reason"}
                        onChange={resignationReasonHandler}
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

export default EmployeForm;
