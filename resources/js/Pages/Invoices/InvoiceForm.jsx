import React, { useState, useEffect } from "react";
import {
    WhatsAppIcon,
    MailIcon,
    LocationIcon,
    IdCardIcon,
    GlobeIcon,
    PhoneIcon,
    CreditCard,
    LoginIcon,
} from "../components/Icons/Icons";
import { FaRupeeSign } from "react-icons/fa";
import { Col, Row, Form, Input, Button, Typography } from "antd";

const { Title } = Typography;
const { TextArea } = Input;
import { Head, Link, router } from "@inertiajs/react";
//custom css
import "../../../css/styles.css";
//react-quill-rich-text-editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
//custom form fields
import {
    CustomInputItem,
    CustomSelectItem,
    CustomTextArea,
} from "../components/FormFields/FormFields";

//btns
import BtnsItems from "../components/Btns/BtnsItems";

//custom styles

let estimateTitleStyles = {
    color: "orange",
    fontFamily: "sans-serif",
    textAlign: "center",
};
let estimateItemsStyles = {
    color: "purple",
    fontFamily: "sans-serif",
    textAlign: "center",
};

let topEstimateStyles = {
    backgroundColor: "#F6FDFF",
    padding: "10px",
    borderRadius: "8px",
};
let estimateItemStyles = {
    backgroundColor: "lightgrey",
    padding: "10px",
    borderRadius: "8px",
    marginTop: "15px",
};
let itemsContainer = {
    width: "100%",
    marginTop: "15px",
    listStyle: "none",
    backgroundColor: "#F6FDFF",
};
let itemsContainerUl = {
    width: "100%",
    marginTop: "15px",
    listStyle: "none",
};
let listItem = {
    display: "flex",
    justifyContent: "space-evenly",
};

const InvoiceForm = ({
    data,
    setData,
    submitHandler,
    record,
    saveBtn,
    invId,
    discount,
    taxMode,
    dueAmount,
    setFlatDiscount,
    dueAmountHandler,
}) => {
    const [form] = Form.useForm();
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [selectedPercentage, setSelectedPercentage] = useState(0);
    const [flatDisplay, setFlatDisplay] = useState(false);
    const [flatValue, setFlatValue] = useState();
    const [totalAmount, setTotalAmount] = useState();
    const [totalTax, setTotalTax] = useState();
    const [totalAfterAddTax, setToatalAfterAddTax] = useState();
    const [shippingCharges, setShippingCharges] = useState();
    const [grandTotal, setGrandTotal] = useState();
    // const [dueAmount, setDueAmount] = useState();

    const handleAddItem = () => {
        const amount = parseFloat(data.price) * parseInt(data.quantity);
        const newItem = {
            name: data.name,
            price: parseFloat(data.price),
            quantity: parseInt(data.quantity),
            amount: parseFloat(data.price) * parseInt(data.quantity),
        };

        const newTotalAmount = data.subTotal + amount;

        setData({
            ...data,
            products: [...data.products, newItem],
            name: "",
            price: "",
            quantity: "",
        });
    };

    const handleDeleteItem = (index) => {
        const amountToRemove = data.products[index].amount;
        const newTotalAmount = data.subTotal - amountToRemove;
        setData({
            ...data,
            products: data.products.filter((_, i) => i !== index),
        });
    };
    const subTotal = data.products.reduce(
        (total, product) => total + product.amount,
        0
    );

    const discountValueHandler = (value) => {
        if (value != "flat") {
            const percentage = parseInt(value);
            setSelectedPercentage(percentage);
            setData("discount", percentage);
            const percentValue = subTotal * (percentage / 100);
            // console.log(percentValue);
            const remainingValue = subTotal - subTotal * (percentage / 100);
            // console.log("Remaining Value:", remainingValue);
            setTotalAmount(remainingValue);
            setFlatDisplay(false);
        } else {
            setFlatDisplay(true);
        }
    };

    const flatDiscountHandler = (e) => {
        let flatDisountAmount = Number(e.target.value);
        setFlatDiscount(flatDisountAmount);
        setTotalAmount(subTotal - flatDisountAmount);
        setData("flatdiscount", flatDisountAmount);
    };

    const taxValuesHandler = (values) => {
        let taxListValues = values;

        let sumValue = 0;
        taxListValues.forEach((item) => {
            sumValue += Number(item);
        });
        let addingValueOfTax = totalAmount * (sumValue / 100);
        let finalTaxGot = addingValueOfTax;

        setTotalTax(finalTaxGot);
        setToatalAfterAddTax(totalAmount + finalTaxGot);

        setData("total", totalAmount + finalTaxGot);
        setData("totaltax", addingValueOfTax);
        setData("taxmode", values);
    };
    useEffect(() => {
        // console.log(totalTax);
    }, [totalTax]);

    const shipChargeshandler = (e) => {
        let shipChargesValue = Number(e.target.value);
        setShippingCharges(Number(e.target.value));
        setGrandTotal(totalAfterAddTax + shipChargesValue);
        setData("grandtotal", totalAfterAddTax + shipChargesValue);
        setData("shipcharges", shipChargesValue);
        // console.log(grandTotal);
    };
    useEffect(() => {
        // console.log(grandTotal);
    }, [grandTotal, shippingCharges]);

    const paidAmountHandler = (e) => {
        let paidAmount = e.target.value;
        setData("paidamount", paidAmount);
        let remaingAmount = grandTotal - paidAmount;
        //setDueAmount(remaingAmount);
        // setDueAmount(remaingAmount);
        dueAmountHandler(remaingAmount);
    };
    const selectClientHandler = (value) => {
        setData("clientname", value);
        //console.log(e.target.value);
    };
    const billFirmHandler = (value) => {
        setData("billfirm", value);
    };
    const referenceIdHandler = (e) => {
        setData("referenceid", e.target.value);
    };
    const estimateStartHandler = (e) => {
        setData("eststartdate", e.target.value);
    };
    const estimateValidityHandler = (e) => {
        setData("estvalidity", e.target.value);
    };
    const detailHandler = (html) => {
        setData("details", html);
        setDetails(html);
    };

    return (
        <Form form={form} layout="vertical" onFinish={submitHandler}>
            <Row>
                <Col xs={24}>
                    <Title
                        level={3}
                        style={estimateTitleStyles}
                        className="est-top-title"
                    >
                        New Invoice
                    </Title>
                </Col>
            </Row>
            <Row gutter={[8, 4]} style={topEstimateStyles}>
                <Col xs={24} md={8}>
                    <CustomInputItem label={"Estimate Id"} value={invId} />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"clientname"}
                        label={"Estimate Client"}
                        name={"client"}
                        data={[{ name: "Client", value: "client" }]}
                        onChange={selectClientHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomSelectItem
                        labelName={"billfirm"}
                        label={"Billing Firm"}
                        name={"billfirm"}
                        data={[{ name: "billingfirm", value: "billingfirm" }]}
                        onChange={billFirmHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        label={"Reference Id"}
                        labelName={"referenceid"}
                        name={"referenceid"}
                        onChange={referenceIdHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        label={"Estimate Date"}
                        labelName={"estimatedate"}
                        name={"estimatedate"}
                        type={"date"}
                        onChange={estimateStartHandler}
                    />
                </Col>
                <Col xs={24} md={8}>
                    <CustomInputItem
                        label={"Estimate Validity"}
                        labelName={"estimatevalidity"}
                        name={"estimatevalidity"}
                        type={"date"}
                        onChange={estimateValidityHandler}
                    />
                </Col>
                <Col xs={24}>
                    <label>Details</label>
                    <ReactQuill
                        name="details"
                        theme="snow"
                        //value={record.id == undefined ? details : data.details}
                        value={details}
                        onChange={detailHandler}
                    />
                </Col>
            </Row>
            <Row gutter={[8, 4]} style={estimateItemStyles}>
                <Col xs={24}>
                    <Title
                        level={3}
                        style={estimateItemsStyles}
                        className="est-top-title"
                    >
                        Add Items
                    </Title>
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        type="text"
                        labelName={"item"}
                        label={"Item With Description"}
                        name={"item"}
                        onChange={(e) => setData("name", e.target.value)}
                        value={data.name}
                    />
                </Col>
                <Col xs={24} md={6}>
                    <CustomInputItem
                        type="number"
                        addonBefore={<FaRupeeSign color="purple" />}
                        labelName={"price"}
                        label={"Price"}
                        name={"price"}
                        value={data.price}
                        onChange={(e) => setData("price", e.target.value)}
                    />
                </Col>
                <Col xs={24} md={3}>
                    <CustomInputItem
                        type="number"
                        labelName={"quantity"}
                        label={"Quantity"}
                        name={"quantity"}
                        value={data.quantity}
                        onChange={(e) => setData("quantity", e.target.value)}
                    />
                </Col>
                <Col xs={24} md={3}>
                    <Form.Item label="👇">
                        <Button type="primary" onClick={handleAddItem}>
                            Add Item
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
            <Row style={itemsContainer}>
                <Col xs={24}>
                    <table
                        style={{ borderCollapse: "collapse", width: "100%" }}
                    >
                        <thead
                            style={{
                                padding: "10px",
                                backgroundColor: "lightblue",
                            }}
                        >
                            <tr>
                                <th
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                    }}
                                >
                                    Product Details
                                </th>

                                <th
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                    }}
                                >
                                    Quantity
                                </th>
                                <th
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                    }}
                                >
                                    Price
                                </th>
                                <th
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                    }}
                                >
                                    Amount
                                </th>
                                <th
                                    style={{
                                        border: "none",
                                        textAlign: "center",
                                    }}
                                >
                                    Remove
                                </th>
                            </tr>
                        </thead>
                        <tbody style={{ padding: "10px" }}>
                            {data.products.map((product, index) => (
                                <tr key={index}>
                                    <td
                                        style={{
                                            border: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        {product.name}
                                    </td>

                                    <td
                                        style={{
                                            border: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        {product.quantity}
                                    </td>
                                    <td
                                        style={{
                                            border: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        ₹{product.price}
                                    </td>
                                    <td
                                        style={{
                                            border: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        ₹{product.amount}
                                    </td>
                                    <td
                                        style={{
                                            border: "none",
                                            textAlign: "center",
                                        }}
                                    >
                                        <Button
                                            danger
                                            type="primary"
                                            onClick={() =>
                                                handleDeleteItem(index)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </td>
                                </tr>
                            ))}

                            <tr style={{ backgroundColor: "lightblue" }}>
                                <td
                                    colSpan="3"
                                    style={{
                                        textAlign: "center",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Subtotal
                                </td>
                                <td
                                    style={{
                                        textAlign: "center",
                                        color: "green",
                                        fontWeight: "bold",
                                    }}
                                >
                                    ₹{subTotal}
                                </td>
                                <td></td> {/* Empty cell for consistency */}
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row gutter={[8, 4]} style={{ marginTop: "20px" }}>
                <Col xs={24} md={12}>
                    <CustomSelectItem
                        labelName={"discount"}
                        label={"Discount"}
                        data={discount}
                        onChange={discountValueHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        value={totalAmount}
                        label={"Total Amount"}
                        // labelName={"totalPayAmount"}
                        // name={"totalPayAmount"}
                        type={"number"}
                    />
                </Col>

                {flatDisplay == true ? (
                    <Col xs={24} md={8}>
                        <CustomInputItem
                            label={"Flat Discount"}
                            labelName={"flatdiscount"}
                            name={"flatdiscount"}
                            type={"number"}
                            onChange={flatDiscountHandler}
                        />
                    </Col>
                ) : (
                    ""
                )}
                <Col xs={24} md={flatDisplay == true ? 8 : 12}>
                    <CustomSelectItem
                        mode={"multiple"}
                        maxCount={2}
                        labelName={"tax"}
                        label={"Tax Mode"}
                        data={taxMode}
                        onChange={taxValuesHandler}
                    />
                </Col>
                <Col xs={24} md={flatDisplay == true ? 8 : 12}>
                    <CustomInputItem
                        readOnly
                        value={totalTax}
                        label={`Total Tax`}
                        // labelName={"totaltax"}
                        //name={"totaltax"}
                        type={"number"}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        // value={totalTax}
                        label={`Shipping Charges`}
                        labelName={"shipping"}
                        name={"shipping"}
                        type={"number"}
                        onChange={shipChargeshandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        value={grandTotal}
                        label={`Grand Total`}
                        // labelName={"shipping"}
                        // name={"gtotal"}
                        type={"number"}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        // value={totalTax}
                        label={`Amount Paid`}
                        labelName={"paidamount"}
                        name={"paidamount"}
                        type={"number"}
                        onChange={paidAmountHandler}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <CustomInputItem
                        value={dueAmount}
                        label={`Amount Due`}
                        // labelName={"shipping"}
                        // name={"gtotal"}
                        type={"number"}
                    />
                </Col>
            </Row>
            <BtnsItems firstText="Save" secondText="Cancel" />
        </Form>
    );
};
export default InvoiceForm;
