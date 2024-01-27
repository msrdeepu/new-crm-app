import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import { v4 as uuidv4 } from "uuid";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";

//project form
import ProjectForm from "./ProjectForm";

function CreateProject({ props, record, leadList }) {
    let projectid = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        projectid: projectid,
        ptitle: record.ptitle,
        pstatus: record.pstatus,
        ppriority: record.ppriority,
        ptype: record.ptype,
        pcustomer: record.pcustomer,
        assignto: record.assignto,
        pphase: record.pphase,
        pbudget: record.pbudget,
        stdate: record.stdate,
        duedate: record.duedate,
        details: record.details,
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-projects/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-projects/${record.id}`, data);
    };
    {
        console.log(record);
    }
    return (
        <>
            <Head title="Dashboard" />

            <Card
                title={
                    <div>
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
                <ProjectForm
                    data={data}
                    setData={setData}
                    record={record}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                    saveBtn={record.id == undefined ? "Add" : "Update"}
                />
            </Card>
        </>
    );
}

CreateProject.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateProject;
