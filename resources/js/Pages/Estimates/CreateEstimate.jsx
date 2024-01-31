import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import { v4 as uuidv4 } from "uuid";

// Function to generate a unique ID
function generateUniqueID() {
    const prefix = "EST";
    const currentDate = new Date();
    const month = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currentDate.getDate()).slice(-2);
    const hours = ("0" + currentDate.getHours()).slice(-2);
    const minutes = ("0" + currentDate.getMinutes()).slice(-2);
    const seconds = ("0" + currentDate.getSeconds()).slice(-2);
    const randomDigits = ("0" + Math.floor(Math.random() * 100)).slice(-2);
    const uniqueID =
        prefix + month + day + hours + minutes + seconds + randomDigits;

    return uniqueID;
}
//unique id completed

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";
import EstimateForm from "./EstimateForm";

function CreateEstimate() {
    const [estId, setEstId] = useState(generateUniqueID());

    const { data, setData, post, processing, errors, patch } = useForm({
        estimateId: estId,
        // title: record.title,
        // leadowner: record.leadowner,
        // leadmanager: record.leadmanager,
        // leadsource: record.leadsource,
        // industry: record.industry,
        // status: record.status,
        // rating: record.rating,
        // contactdate: record.contactdate,
        // annualrevenue: record.annualrevenue,
        // details: record.details,
    });

    //uniq id completed
    const submitHandler = () => {
        console.log(data);
        //post("/scrm-estimates/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-estimates/${record.id}`, data);
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
                <h2>{estId}</h2>
                {/* {console.log(record)} */}
                <EstimateForm
                    // record={record}
                    // submitHandler={
                    //     record.id == undefined ? submitHandler : updateHandler
                    // }
                    // saveBtn={record.id == undefined ? "Add" : "Update"}
                    // data={data}
                    // setData={setData}
                    estId={estId}
                    submitHandler={submitHandler}
                />
            </Card>
        </>
    );
}

CreateEstimate.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateEstimate;
