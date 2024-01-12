import React from "react";
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

const LogoForm = () => {
    return (
        <Form layout="vertical">
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    <CustomInputItem label={"Choose Logo"} type={"file"} />
                </Col>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        width={100}
                        label={"Logo Position"}
                        data={[
                            { name: "one", value: "one" },
                            { name: "two", value: "two" },
                        ]}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <p>Choose Logo Height</p>
                    <Slider defaultValue={30} max={500} />
                </Col>
                <Col xs={24} md={8}>
                    <p>Choose Logo Width</p>
                    <Slider defaultValue={30} max={500} />
                </Col>
                <Col xs={24} md={8}>
                    <p>Choose Logo Margin</p>
                    <Slider defaultValue={30} max={500} />
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
