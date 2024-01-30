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
import EmployeForm from "./EmployeForm";

function CreateEmploye({ props }) {
    let empId = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        // empId: "",
        dob: "",
        marstatus: "",
        bloodgroup: "",
        physicchallenged: "",
        nationality: "",
        passportno: "",
        joindate: "",
        probationenddate: "",
        department: "",
        role: "",
        reportingto: "",
        prevworkexp: "",
        salarymode: "",
        salary: "",
        currentstatus: "",
        resignedon: "",
        resignationreason: "",
        emergperson: "",
        personrelation: "",
        emergcontact: "",
        insurenceno: "",
    });
    const submitHandler = () => {
        console.log(data);
        //post("/scrm-employees/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        //patch(`/scrm-employees/${record.id}`, data);
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
                <EmployeForm
                    // record={record}
                    // submitHandler={
                    //     record.id == undefined ? submitHandler : updateHandler
                    // }
                    // saveBtn={record.id == undefined ? "Add" : "Update"}

                    saveBtn={"Save"}
                    submitHandler={submitHandler}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

CreateEmploye.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateEmploye;
