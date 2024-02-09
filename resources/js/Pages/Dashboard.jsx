import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Typography, Progress, Col, Row, Button, Table } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import "../../css/styles.css";

function Dashboard({ props, clientCount, studentCount, empCount }) {
    const leadsColumns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Manager",
            dataIndex: "manager",
            key: "manager",
        },
    ];
    const projectsColumns = [
        {
            title: "Id",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },

        {
            title: "Manager",
            dataIndex: "manager",
            key: "manager",
        },
    ];

    let cardsData = [
        {
            id: 1,
            title: "Total Clients",
            dispdata: `${clientCount}`,
            actionLinkOne: "contacts.index",
            actionTextOne: "All Clients",
            actionTextTwo: "New Client",
            actionLinkTwo: "contacts.create",
        },
        {
            id: 2,
            title: "Total Projects",
            dispdata: "Data",
            actionLinkOne: "projects.index",
            actionTextOne: "All Projects",
            actionTextTwo: "New Project",
            actionLinkTwo: "projects.create",
        },
        {
            id: 3,
            title: "Total Students",
            dispdata: `${studentCount}`,
            actionLinkOne: "contacts.index",
            actionTextOne: "All Students",
            actionTextTwo: "New Student",
            actionLinkTwo: "contacts.create",
        },
        {
            id: 4,
            title: "Total Employees",
            dispdata: `${empCount}`,
            actionLinkOne: "employees.index",
            actionTextOne: "All Employees",
            actionTextTwo: "New Employee",
            actionLinkTwo: "contacts.create",
        },
    ];
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Dashboard`}>
                <Row gutter={[8, 4]}>
                    {cardsData.map((item, index) => (
                        <Col xs={24} md={6} key={index}>
                            <Card
                                hoverable
                                title={
                                    <div className="card-title">
                                        {item.title}
                                    </div>
                                }
                                actions={[
                                    <Link
                                        href={window.route(
                                            `${item.actionLinkOne}`
                                        )}
                                        type="button"
                                    >
                                        {item.actionTextOne}
                                    </Link>,
                                    <Link
                                        href={window.route(
                                            `${item.actionLinkTwo}`
                                        )}
                                        type="button"
                                    >
                                        {item.actionTextTwo}
                                    </Link>,
                                ]}
                            >
                                <div>
                                    <h1 className="card-title">
                                        {item.dispdata}
                                    </h1>
                                </div>
                            </Card>{" "}
                        </Col>
                    ))}
                    <Col xs={24} md={14} className="table-gap">
                        <Card title="Latest Leads" hoverable>
                            <Table columns={leadsColumns} />
                        </Card>
                    </Col>
                    <Col xs={24} md={10} className="table-gap">
                        <Card title="Latest Projects" hoverable>
                            <Table columns={projectsColumns} />
                        </Card>
                    </Col>
                    <Col xs={24} md={24} className="table-gap">
                        <Card title="Server Info" hoverable>
                            <div className="server-info-container">
                                <div>
                                    <h3>Last Logged in Time</h3>
                                    <h3>...Ago</h3>
                                </div>
                                <div>
                                    <h3>SWIFT CMS DISK USAGE</h3>
                                    <h3>Total size : 5.8 MB</h3>
                                    <h3>No. of files : 173</h3>
                                    <h3>No. of directories : 13</h3>
                                </div>
                            </div>
                            <hr />
                            <div className="server-info-container">
                                <div>Updated</div>
                                <div>updated</div>
                            </div>
                        </Card>
                    </Col>
                </Row>

                {/* <Row gutter={[8, 4]}></Row> */}
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
