import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    DownOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";
import {
    Col,
    Layout,
    Menu,
    Row,
    theme,
    Typography,
    Space,
    Dropdown,
    Avatar,
} from "antd";
import { IoSettings } from "react-icons/io5";
import { SiGoogleadsense } from "react-icons/si";
import { MdSpaceDashboard } from "react-icons/md";
import { MdOutlineContacts } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { MdAddTask } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";
import { IoDocumentAttach } from "react-icons/io5";

const { Header, Sider, Content } = Layout;

const items = [
    {
        key: "profile",
        label: <Link href={window.route("profile.edit")}>My profile</Link>,
        icon: <UserOutlined />,
    },
    {
        key: "logout",
        label: (
            <Link href={window.route("logout")} method="post" as="div">
                Logout
            </Link>
        ),
        icon: <LogoutOutlined />,
    },
];

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const { auth } = usePage().props;

    const initial =
        JSON.parse(localStorage.getItem("sidebarCollapsed")) || false;
    const [collapsed, setCollapsed] = useState(initial);

    const toggleCollapse = () => {
        const updated = !collapsed;
        setCollapsed(updated);
        localStorage.setItem("sidebarCollapsed", JSON.stringify(updated));
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout className="app-layout">
            <Sider
                theme="dark"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <div className="logo">
                    <Typography.Title className="logo-text" level={3}>
                        {collapsed ? "MSR" : "Web App"}
                    </Typography.Title>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.route().current()]}
                    items={[
                        {
                            key: "dashboard",
                            icon: <MdSpaceDashboard />,
                            label: (
                                <Link href={window.route("dashboard")}>
                                    Dashboard
                                </Link>
                            ),
                        },
                        {
                            key: "contacts",
                            icon: <MdOutlineContacts />,
                            label: (
                                <Link href={window.route("contacts.index")}>
                                    Contacts
                                </Link>
                            ),
                        },
                        {
                            key: "business-leads",
                            icon: <SiGoogleadsense />,
                            label: (
                                <Link href={window.route("leads.index")}>
                                    Leads
                                </Link>
                            ),
                        },
                        {
                            key: "projects",
                            icon: <GrTechnology />,
                            label: (
                                <Link href={window.route("projects.index")}>
                                    Projects
                                </Link>
                            ),
                        },
                        {
                            key: "tasks",
                            icon: <MdAddTask />,
                            label: (
                                <Link href={window.route("tasks.index")}>
                                    Tasks
                                </Link>
                            ),
                        },
                        {
                            key: "estimates",
                            icon: <FaFileInvoice />,
                            label: (
                                <Link href={window.route("estimates.index")}>
                                    Estimates
                                </Link>
                            ),
                        },
                        {
                            key: "invoices",
                            icon: <IoDocumentAttach />,
                            label: (
                                <Link href={window.route("invoice.index")}>
                                    Invoices
                                </Link>
                            ),
                        },
                        {
                            key: "employees",
                            icon: <FaUserCog />,
                            label: (
                                <Link href={window.route("employees.index")}>
                                    Employees
                                </Link>
                            ),
                        },
                        {
                            key: "settings",
                            icon: <IoSettings />,
                            label: (
                                <Link href={window.route("settings.index")}>
                                    Settings
                                </Link>
                            ),
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header
                    style={{
                        paddingLeft: 20,
                        paddingRight: 20,
                        background: colorBgContainer,
                    }}
                >
                    <Row justify="space-between">
                        <Col>
                            {React.createElement(
                                collapsed
                                    ? MenuUnfoldOutlined
                                    : MenuFoldOutlined,
                                {
                                    className: "trigger",
                                    onClick: () => toggleCollapse(),
                                }
                            )}
                        </Col>
                        <Col>
                            <Dropdown menu={{ items }} trigger={["click"]}>
                                <div>
                                    <Typography.Text className="auth-dropdown">
                                        <Space size={12}>
                                            <Avatar
                                                size={36}
                                                icon={<UserOutlined />}
                                            />
                                            <div>
                                                <div>
                                                    <Typography.Text strong>
                                                        {auth.user.name}
                                                    </Typography.Text>
                                                </div>
                                                <div>{auth.user.email}</div>
                                            </div>
                                            <DownOutlined />
                                        </Space>
                                    </Typography.Text>
                                </div>
                            </Dropdown>
                        </Col>
                    </Row>
                </Header>
                <Content
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
}
