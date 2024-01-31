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

function CreateEmploye({ props, employeList, record }) {
    let empId = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        // empId: "",
        dob: record.dob,
        marstatus: record.marstatus,
        bloodgroup: record.bloodgroup,
        physicchallenged: record.physicchallenged,
        nationality: record.nationality,
        passportno: record.passportno,
        joindate: record.joindate,
        probationenddate: record.probationenddate,
        department: record.department,
        role: record.role,
        reportingto: record.reportingto,
        prevworkexp: record.prevworkexp,
        salarymode: record.salarymode,
        salary: record.salary,
        currentstatus: record.currentstatus,
        resignedon: record.resignedon,
        resignationreason: record.resignationreason,
        emergperson: record.emergperson,
        personrelation: record.personrelation,
        emergcontact: record.emergcontact,
        insurenceno: record.insurenceno,
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-employees/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-employees/${record.id}`, data);
    };
    {
        console.log(record.id);
        console.log(record);
    }

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
                    record={record}
                    // saveBtn={record.id == undefined ? "Add" : "Update"}

                    saveBtn={"Save"}
                    submitHandler={updateHandler}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

CreateEmploye.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateEmploye;
