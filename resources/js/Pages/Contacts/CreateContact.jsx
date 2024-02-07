import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import ContactForm from "./ContactForm";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";

// Function to generate a unique ID
function generateUniqueID() {
    const prefix = "DGB";
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

function CreateContact({
    contactType,
    country,
    feminine,
    contactStatus,
    billingAddress,
    record,
}) {
    const [contactId, setContactId] = useState(generateUniqueID());
    let contid = contactId;
    const { data, setData, post, processing, errors, patch } = useForm({
        contype: record.contype,
        contactid: contid,
        title: record.title,
        fullname: record.fullname,
        designation: record.designation,
        company: record.company,
        companycode: record.companycode,
        pannumber: record.pannumber,
        gstnumber: record.gstnumber,
        phone: record.phone,
        mobilenum: record.mobilenum,
        altcontact: record.altcontact,
        wpnumber: record.wpnumber,
        emailid: record.emailid,
        altemailid: record.altemailid,
        weburl: record.weburl,
        city: record.city,
        country: record.country,
        billaddress: record.billaddress,
        avatar: record.avatar,
        status: record.status,
        houseaddress: record.houseaddress,
        officeaddress: record.officeaddress,
        perminantaddress: record.perminantaddress,
        bankdetails: record.bankdetails,
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-contacts/store", data);
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
                <ContactForm
                    data={data}
                    record={record}
                    contactType={contactType}
                    country={country}
                    feminine={feminine}
                    contactStatus={contactStatus}
                    billingAddress={billingAddress}
                    setData={setData}
                    saveBtn={record.contype == undefined ? "Add" : "Update"}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                />
            </Card>
        </>
    );
}

CreateContact.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateContact;
