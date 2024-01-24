import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./ContactForm";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";

function CreateContact({
    contactType,
    country,
    feminine,
    contactStatus,
    billingAddress,
    record,
}) {
    let contid = uuidv4();
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

        //patch(`/scrm-contacts/${record.id}`, data);
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
                {console.log(record)}
                <ContactForm
                    data={data}
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
