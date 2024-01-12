import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
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
                <LogoForm />
            </Card>
        </>
    );
}

CreateLogo.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateLogo;
