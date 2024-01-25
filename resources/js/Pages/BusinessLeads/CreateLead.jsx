import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import { v4 as uuidv4 } from "uuid";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";
import LeadForm from "./LeadForm";

function CreateLead() {
    let leadId = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        leadId: leadId,
        title: "",
        leadowner: "",
        leadmanager: "",
        leadsource: "",
        industry: "",
        status: "",
        rating: "",
        contactdate: "",
        annualrevenue: "",
        details: "",
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-business-leads/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-contacts/${record.id}`, data);
    };
    return (
        <>
            <Head />

            <Card
                title={
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "start",
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
                {/* {console.log(record)} */}
                <LeadForm
                    submitHandler={submitHandler}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

CreateLead.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateLead;
