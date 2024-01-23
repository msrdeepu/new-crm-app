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

function CreateContact({ contactType, country }) {
    let contid = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        ctype: "",
        contactid: contid,
        title: "",
        fullname: "",
        designation: "",
        company: "",
        pannumber: "",
        gstnumber: "",
        phone: "",
        mobilenum: "",
        altcontact: "",
        wpnumber: "",
        emailid: "",
        altemailid: "",
        weburl: "",
        city: "",
        country: "",
        billaddress: "",
        avatar: "",
        status: "",
        houseaddress: "",
        officeaddress: "",
        perminantaddress: "",
        bankdetails: "",
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-contacts/store", data);
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
                <ContactForm
                    data={data}
                    contactType={contactType}
                    country={country}
                    setData={setData}
                    saveBtn={"Submit"}
                    submitHandler={submitHandler}
                />
            </Card>
        </>
    );
}

CreateContact.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateContact;
