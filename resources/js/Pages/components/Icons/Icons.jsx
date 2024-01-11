import React from "react";
import {
    IdcardOutlined,
    LogoutOutlined,
    CreditCardOutlined,
    PhoneOutlined,
    WhatsAppOutlined,
    MailOutlined,
    HeatMapOutlined,
    GlobalOutlined,
} from "@ant-design/icons";
import { FaLocationDot } from "react-icons/fa6";

export const WhatsAppIcon = (props) => {
    return <WhatsAppOutlined style={{ color: `${props.color}` }} />;
};
export const MailIcon = (props) => {
    return <MailOutlined style={{ color: `${props.color}` }} />;
};
export const LocationIcon = (props) => {
    return <FaLocationDot style={{ color: `${props.color}` }} />;
};
export const IdCardIcon = (props) => {
    return <IdcardOutlined style={{ color: `${props.color}` }} />;
};
export const GlobeIcon = (props) => {
    return <GlobalOutlined style={{ color: `${props.color}` }} />;
};
export const PhoneIcon = (props) => {
    return <PhoneOutlined style={{ color: `${props.color}` }} />;
};
export const CreditCard = (props) => {
    return <CreditCardOutlined style={{ color: `${props.color}` }} />;
};
export const LoginIcon = (props) => {
    return <LogoutOutlined style={{ color: `${props.color}` }} />;
};
