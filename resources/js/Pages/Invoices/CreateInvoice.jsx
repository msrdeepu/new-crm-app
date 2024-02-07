import { useState, useEffect } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import { v4 as uuidv4 } from "uuid";

// Function to generate a unique ID
function generateUniqueID() {
    const prefix = "INV";
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
import InvoiceForm from "./InvoiceForm";

function CreateInvoice({ discount, taxMode }) {
    const [invId, setInvId] = useState(generateUniqueID());
    const [flatDiscount, setFlatDiscount] = useState();
    const [totalTax, setTotalTax] = useState();
    const [dueAmount, setDueAmount] = useState();
    const dueAmountHandler = (dueAmount) => {
        setDueAmount(dueAmount);
    };
    useEffect(() => {
        setDueAmount(dueAmount);
    }, [dueAmount]);
    const { data, setData, post, processing, errors, patch, reset } = useForm({
        ivoiceId: invId,
        clientname: "",
        billfirm: "",
        referenceid: "",
        eststartdate: "",
        estvalidity: "",
        details: "",
        products: [],
        flatdiscount: flatDiscount,
        discount: "",
        total: "",
        taxmode: [],
        shipcharges: "",
        paidamount: "",
    });

    //uniq id completed
    const submitHandler = () => {
        console.log(data);
        post("/scrm-invoice/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-invoice/${record.id}`, data);
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
                <InvoiceForm
                    discount={discount}
                    taxMode={taxMode}
                    dueAmount={dueAmount}
                    dueAmountHandler={dueAmountHandler}
                    // record={record}
                    // submitHandler={
                    //     record.id == undefined ? submitHandler : updateHandler
                    // }
                    // saveBtn={record.id == undefined ? "Add" : "Update"}
                    data={data}
                    setData={setData}
                    invId={invId}
                    setFlatDiscount={setFlatDiscount}
                    submitHandler={submitHandler}
                />
            </Card>
        </>
    );
}

CreateInvoice.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateInvoice;
