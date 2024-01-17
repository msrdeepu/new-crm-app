import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Button, Col, Row, Form } from "antd";
import { CustomInputItem } from "@/Pages/components/FormFields/FormFields";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
    logOPosition,
} from "../../components/LogoItem/LogoItem";

function LogoList(logoFileList) {
    return (
        <>
            <Head />
            {console.log(logoFileList.logoFileList[0])}
            <Card
                title={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: `${logOPosition}`,
                        }}
                    >
                        <img
                            src={logoSrc} // Replace with the URL or path of your image
                            alt={logoAlt}
                            style={{
                                marginRight: `${logoMarginHeight}px`,
                                width: `${logoWidth}px`,
                                height: `${logoHeight}px`,
                            }}
                        />
                    </div>
                }
            >
                <div>
                    <Link href={window.route("logo.create")}>
                        <Button type="primary">Add Logo</Button>
                    </Link>
                </div>
            </Card>
        </>
    );
}

LogoList.layout = (page) => <AuthenticatedLayout children={page} />;

export default LogoList;
