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

function CreateLead({ leadList, record }) {
    let leadId = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        leadId: leadId,
        title: record.title,
        leadowner: record.leadowner,
        leadmanager: record.leadmanager,
        leadsource: record.leadsource,
        industry: record.industry,
        status: record.status,
        rating: record.rating,
        contactdate: record.contactdate,
        annualrevenue: record.annualrevenue,
        details: record.details,
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-business-leads/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-business-leads/${record.id}`, data);
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
                    record={record}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                    saveBtn={record.id == undefined ? "Add" : "Update"}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

CreateLead.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateLead;
