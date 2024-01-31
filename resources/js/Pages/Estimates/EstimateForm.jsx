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

// const titleHandler = (e) => {
//     setData("title", e.target.value);
//     //console.log(e.target.value);
// };
// const leadOwnerHandler = (value) => {
//     setData("leadowner", value);
// };
// const leadManagerHandler = (value) => {
//     setData("leadmanager", value);
// };
// const leadSourceHandler = (value) => {
//     setData("leadsource", value);
// };
// const leadIndustryHandler = (value) => {
//     setData("industry", value);
// };
// const leadStatusHandler = (value) => {
//     setData("status", value);
// };
// const leadRatingHandler = (value) => {
//     setData("rating", value);
// };
// const contactDateHandler = (e) => {
//     setData("contactdate", e.target.value);
// };
// const annualRevenueHandler = (e) => {
//     setData("annualrevenue", e.target.value);
// };
// const detailHandler = (html) => {
//     setData("details", html);
//     setDetails(html);
// };
// const onCancelData = () => {
//     window.alert("Are You Sure Want to Cancel?");
//     router.get(route("leads.index"));
// };

const EstimateForm = ({
    data,
    setData,
    submitHandler,
    record,
    saveBtn,
    estId,
}) => {
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    return (
        <Form form={form} layout="vertical" onFinish={submitHandler}>
            <Row gutter={[8, 4]}>
                {" "}
                <CustomInputItem value={estId} />
                <BtnsItems firstText="Save" />
            </Row>
        </Form>
    );
};
export default EstimateForm;
