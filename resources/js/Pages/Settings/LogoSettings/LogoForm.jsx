import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Row, Col, Form, Slider } from "antd";
import { router } from "@inertiajs/react";
import {
    CustomInputItem,
    CustomSelectItem,
} from "@/Pages/components/FormFields/FormFields";

import BtnsItems from "@/Pages/components/Btns/BtnsItems";

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("logo.index"));
};

// logoFile: "",
// logoPosition: "",
// logoHeight: "",
// logoWidth: "",
// logoMargin: "",

const LogoForm = ({ onSubmit, data, setData, uniqueId }) => {
    const logoFileHandler = (e) => {
        //console.log(e.target.files[0].name);
        setData("logoFile", e.target.files[0]);
    };
    const logoPositionHandler = (value) => {
        //console.log(value);
        setData("logoPosition", value);
    };
    const logoHeightHandler = (value) => {
        //console.log(value);
        setData("logoHeight", value);
    };
    const logoWidthHandler = (value) => {
        //console.log(value);
        setData("logoWidth", value);
    };
    const logoMarginHandler = (value) => {
        //console.log(value);
        setData("logoMargin", value);
    };
    return (
        <Form layout="vertical" onFinish={onSubmit}>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        name={"logoFile"}
                        labelName={"logoFile"}
                        label={"Choose Logo"}
                        type={"file"}
                        onChange={logoFileHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        name={"logoPosition"}
                        labelName={"logoPosition"}
                        onChange={logoPositionHandler}
                        width={100}
                        label={"Logo Position"}
                        data={[
                            { name: "Start", value: "Start" },
                            { name: "Center", value: "Center" },
                            { name: "End", value: "End" },
                        ]}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Choose Logo Height" name={"logoHeight"}>
                        <Slider
                            defaultValue={30}
                            max={500}
                            onChange={logoHeightHandler}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Choose Logo Width" name={"logoWidth"}>
                        <Slider
                            defaultValue={30}
                            max={500}
                            onChange={logoWidthHandler}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                    <Form.Item label="Choose Logo Margin" name={"logoMargin"}>
                        <Slider
                            defaultValue={30}
                            max={500}
                            onChange={logoMarginHandler}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <BtnsItems
                firstText="Add"
                secondText="Cancel"
                cancelForm={onCancelData}
            />
        </Form>
    );
};

export default LogoForm;
