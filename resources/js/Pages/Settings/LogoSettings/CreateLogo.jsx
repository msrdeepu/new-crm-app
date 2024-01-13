import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "antd";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
    logOPosition,
} from "../../components/LogoItem/LogoItem";

import LogoForm from "./LogoForm";

function CreateLogo() {
    let id = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        logoId: id,
        logoFile: "",
        logoPosition: "",
        logoHeight: "",
        logoWidth: "",
        logoMargin: "",
    });
    const submitHandler = (e) => {
        // e.preventDefault();
        console.log(data);
        post("/scrm/settings/logo/store");
    };

    return (
        <>
            <Head />

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
                <LogoForm
                    data={data}
                    setData={setData}
                    onSubmit={submitHandler}
                />
            </Card>
        </>
    );
}

CreateLogo.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateLogo;
