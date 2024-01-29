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
    Button,
} from "antd";
const { Text } = Typography;
import { Head, Link, router, useForm } from "@inertiajs/react";
import { MdOutlineTimer } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa6";

//react-quill-rich-text-editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//custom form fields
import {
    CustomInputItem,
    CustomSelectItem,
    CustomTextArea,
} from "../components/FormFields/FormFields";
import { v4 as uuidv4 } from "uuid";

//btns
import BtnsItems from "../components/Btns/BtnsItems";

function TaskDuration({ props, record, taskDurationList }) {
    const [form] = Form.useForm();
    const [startDateTime, setStartDateTime] = useState("");
    const [dueDateTime, setDueDateTime] = useState("");
    const [details, setDetails] = useState("");
    let taskUniqueId = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        taskId: record.id,
        title: record.name,
        taskUniqueId: taskUniqueId,
        started: "",
        ended: "",
        details: "",
    });

    let recordId = record.id;
    const currentData = taskDurationList
        .filter((obj) => obj.taskId == recordId)
        .map((obj) => obj);

    const detailsHandler = (html) => {
        setData("details", html);
        setDetails(html);
    };

    const handleStartDateTimeChange = (event) => {
        const selectedStartDateTime = event.target.value;
        setData("started", selectedStartDateTime);
        setStartDateTime(selectedStartDateTime);
    };
    const handleDueDateTimeChange = (event) => {
        const selectedDueDateTime = event.target.value;
        setData("ended", selectedDueDateTime);
        setDueDateTime(selectedDueDateTime);
    };

    const onCancelData = () => {
        window.alert("Are Sure Want to Cancel?");
        router.get(route("tasks.index"));
    };

    const submitHandler = () => {
        console.log(data);
        post("/scrm-tasks/duration/store", data);
    };

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Manage ${record.name}'s Duration`}>
                <Form layout="vertical" form={form} onFinish={submitHandler}>
                    <Row gutter={[8, 4]}>
                        <Col xs={24} md={8}>
                            <CustomInputItem
                                readOnly
                                value={record.name}
                                label={"Title"}
                                // labelName={"title"}
                                name="title"
                            />
                        </Col>

                        <Col xs={24} md={8}>
                            <CustomInputItem
                                label={"Start Date"}
                                labelName={"started"}
                                name={"started"}
                                type="datetime-local"
                                value={startDateTime}
                                onBlur={handleStartDateTimeChange}
                            />
                        </Col>
                        <Col xs={24} md={8}>
                            <CustomInputItem
                                label={"Due Date"}
                                labelName={"ended"}
                                name={"ended"}
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
                                value={details}
                                onChange={detailsHandler}
                            />
                        </Col>
                    </Row>
                    <BtnsItems
                        firstText="Save Log Time"
                        secondText="Cancel"
                        cancelForm={onCancelData}
                    />
                </Form>
                <hr />
                {/* {console.log(currentData)} */}
                <Timeline style={{ marginTop: "25px" }}>
                    {currentData.map((item, index) => (
                        <Timeline.Item
                            key={index}
                            dot={
                                <FaBusinessTime
                                    style={{
                                        fontSize: "22px",
                                        // color: "orange",
                                    }}
                                />
                            }
                        >
                            <Card title={item.title} hoverable>
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
                                <div>
                                    <div>
                                        <p>
                                            {" "}
                                            {item.started != null ? (
                                                <p>
                                                    {" "}
                                                    <MdOutlineTimer />
                                                    <span>Start Time: </span>
                                                    <span>{item.started}</span>
                                                    {/* {item.details} */}
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </p>
                                        <p>
                                            {" "}
                                            {item.ended != null ? (
                                                <p>
                                                    {" "}
                                                    <MdOutlineTimer />
                                                    <span>End Time: </span>
                                                    <span>{item.ended}</span>
                                                    {/* {item.details} */}
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </p>
                                        <mark
                                            style={{
                                                backgroundColor: "green",
                                                color: "white",
                                            }}
                                        >
                                            <MdOutlineTimer /> Duration:
                                        </mark>
                                    </div>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        marginTop: "15px",
                                    }}
                                >
                                    <Button
                                        type="primary"
                                        style={{ margin: "5px" }}
                                    >
                                        Edit
                                    </Button>
                                    <Button danger style={{ margin: "5px" }}>
                                        Delete
                                    </Button>
                                </div>
                            </Card>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </Card>
        </>
    );
}

TaskDuration.layout = (page) => <AuthenticatedLayout children={page} />;

export default TaskDuration;
