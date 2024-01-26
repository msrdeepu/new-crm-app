import React, { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Card,
    Typography,
    Col,
    Row,
    Form,
    Checkbox,
    Timeline,
    Badge,
} from "antd";
const { Text } = Typography;
import { Head, Link, router, useForm } from "@inertiajs/react";
import { MdOutlineNotificationsActive } from "react-icons/md";

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
function LeadActivity({ props, record, leadActivityList }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        leadid: record.id,
        title: record.title,
        status: "",
        rating: "",
        details: "",
        remind: "",
        stdate: "",
        note: "",
    });
    const [form] = Form.useForm();
    const [dateTime, setDateTime] = useState("");
    const [remind, setRemind] = useState(false);
    const [details, setDetails] = useState("");

    let recordId = record.id;
    const currentData = leadActivityList
        .filter((obj) => obj.leadid === recordId)
        .map((obj) => obj);

    const statusHandler = (value) => {
        setData("status", value);
    };

    const ratingHandler = (value) => {
        setData("rating", value);
    };

    const detailsHandler = (html) => {
        setData("details", html);
        setDetails(html);
    };

    const noteHandler = (e) => {
        setData("note", e.target.value);
    };

    const handleDateTimeChange = (event) => {
        const selectedDateTime = event.target.value;
        setData("stdate", selectedDateTime);
        setDateTime(selectedDateTime);
    };
    const checkBoxhandler = (e) => {
        console.log(e.target.checked);
        setRemind(!remind);
        setData("remind", e.target.checked);
    };

    const onCancelData = () => {
        window.alert("Are Sure Want to Cancel?");
        router.get(route("leads.index"));
    };

    const submitHandler = () => {
        console.log(data);
        post("/scrm-business-leads/activity/store", data);
    };

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Manage ${record.title}'s Activity`}>
                <Form layout="vertical" form={form} onFinish={submitHandler}>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={8}>
                            <CustomInputItem
                                readOnly
                                value={record.title}
                                label={"Title"}
                                // labelName={"title"}
                                name="title"
                            />
                        </Col>
                        <Col xs={24} md={8}>
                            <CustomSelectItem
                                label={"Lead Status"}
                                labelName={"status"}
                                name="status"
                                data={[
                                    { name: "One", value: "One" },
                                    { name: "Two", value: "Two" },
                                ]}
                                onChange={statusHandler}
                            />
                        </Col>
                        <Col xs={24} md={8}>
                            <CustomSelectItem
                                label={"Rating"}
                                labelName={"rating"}
                                name="rating"
                                data={[
                                    { name: "One", value: "One" },
                                    { name: "Two", value: "Two" },
                                ]}
                                onChange={ratingHandler}
                            />
                        </Col>
                        <Col xs={24}>
                            <label>Details</label>
                            <ReactQuill
                                name="details"
                                theme="snow"
                                value={details}
                                onChange={detailsHandler}
                            />
                        </Col>
                        <Col xs={24} md={4} style={{ marginTop: "10px" }}>
                            <Checkbox
                                name="remind"
                                onChange={checkBoxhandler}
                                style={{ color: "orange", fontWeight: "bold" }}
                            >
                                Remind
                            </Checkbox>
                        </Col>
                        {remind == true ? (
                            <>
                                <Col
                                    xs={24}
                                    md={7}
                                    style={{ marginTop: "10px" }}
                                >
                                    <CustomInputItem
                                        label={"Start Date"}
                                        labelName={"stdate"}
                                        name={"stdate"}
                                        type="datetime-local"
                                        value={dateTime}
                                        onBlur={handleDateTimeChange}
                                    />
                                </Col>
                                <Col
                                    xs={24}
                                    md={13}
                                    style={{ marginTop: "10px" }}
                                >
                                    <CustomInputItem
                                        label={"Note"}
                                        labelName={"note"}
                                        name={"note"}
                                        type="text"
                                        onChange={noteHandler}
                                    />
                                </Col>
                            </>
                        ) : (
                            ""
                        )}
                    </Row>
                    <BtnsItems
                        firstText="Save"
                        secondText="Cancel"
                        cancelForm={onCancelData}
                    />
                </Form>
                <hr />
                {/* {console.log(record)}
                {console.log(leadActivityList)}
                <ul>
                    {currentData.map((obj) => (
                        <li key={obj.leadid}>{obj.note}</li>
                    ))}
                </ul> */}
                <Timeline mode="alternate" style={{ marginTop: "25px" }}>
                    {currentData.map((item, index) => (
                        <Timeline.Item
                            key={index}
                            dot={
                                <MdOutlineNotificationsActive
                                    style={{
                                        fontSize: "22px",
                                        // color: "orange",
                                    }}
                                />
                            }
                        >
                            <Card title={item.title} hoverable>
                                {/* Content of your card */}
                                {item.stdate != null ? (
                                    <p>
                                        <span
                                            style={{
                                                color: "purple",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Reminder Set to:{" "}
                                        </span>
                                        <span>
                                            <mark
                                                style={{
                                                    backgroundColor:
                                                        "lightgreen",
                                                    color: "black",
                                                }}
                                            >
                                                {item.stdate}
                                            </mark>
                                        </span>
                                    </p>
                                ) : (
                                    ""
                                )}
                                {item.stdate != null ? <hr /> : ""}
                                {/* {item.status != null || item.rating != null ? (
                                    <p>
                                        Lead updated with status{" "}
                                        <span
                                            style={{
                                                color: "green",
                                                fontWeight: "bold",
                                                fontFamily: "sans-serif",
                                            }}
                                        >
                                            {item.status}
                                        </span>{" "}
                                        and Rating as{" "}
                                        <span
                                            style={{
                                                color: "dodgerblue",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {item.rating}
                                        </span>
                                        .
                                    </p>
                                ) : (
                                    ""
                                )} */}

                                {item.note != null ? (
                                    <p>
                                        <span
                                            style={{
                                                color: "orange",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Note:{" "}
                                        </span>
                                        {item.note}
                                    </p>
                                ) : (
                                    ""
                                )}
                                {item.details != null ? (
                                    <p>
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                                color: "purple",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Details:
                                        </span>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: `${item.details}`,
                                            }}
                                        />
                                        {/* {item.details} */}
                                    </p>
                                ) : (
                                    ""
                                )}

                                <p>
                                    <span
                                        style={{
                                            color: "orange",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Update:
                                    </span>{" "}
                                    Activity added on {item.created_at}
                                </p>
                            </Card>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Card>
        </>
    );
}

LeadActivity.layout = (page) => <AuthenticatedLayout children={page} />;

export default LeadActivity;
