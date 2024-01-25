import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Button, Table, Space, Tooltip } from "antd";

import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { MdOutlineTimer } from "react-icons/md";
import { FcAlarmClock } from "react-icons/fc";
import Highlighter from "react-highlight-words";
import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";
import "../../../css/styles.css";

function LeadList(props) {
    const activityIcon = {
        color: "orange",
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            // ...getColumnSearchProps("id"),
        },
        {
            title: "Title",
            dataIndex: "title",
            // ...getColumnSearchProps("companycode"),
        },

        {
            title: "Owner",
            // dataIndex: "fullname",
            // ...getColumnSearchProps("fullname"),
        },

        {
            title: "Manager",
            // dataIndex: "phone",
            // ...getColumnSearchProps("phone"),
        },

        {
            title: "Source",
            // dataIndex: "company",
            // ...getColumnSearchProps("company"),
        },
        {
            title: "Status",
            // dataIndex: "role",
            // ...getColumnSearchProps("role"),
        },
        {
            title: "Rating",
            // dataIndex: "contype",
            // ...getColumnSearchProps("contype"),
        },

        {
            title: "Connected On",
            // dataIndex: "status",
            // ...getColumnSearchProps("status"),
        },

        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space>
                    <Tooltip placement="top" title={"Edit Lead"}>
                        <Button
                            shape="circle"
                            type="primary"
                            // id={record.id}
                            // onClick={editRecord}
                        >
                            {<EditOutlined />}
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title={"Manage Activity"}>
                        <Button
                            shape="circle"
                            // id={record.id}
                            // onClick={editRecord}
                        >
                            {<FcAlarmClock />}
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title={"Delete Lead"}>
                        <Button
                            shape="circle"
                            danger
                            type="primary"
                            // id={record.id}
                            // onClick={destroyRecord}
                        >
                            {<DeleteOutlined />}
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    //Loading Edit View
    function editRecord(e) {
        router.get(route("contacts.edit", e.currentTarget.id));
    }

    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("contacts.destroy", e.currentTarget.id));
        }
    }
    return (
        <>
            <Head title="Dashboard" />

            <Card
                title={
                    <div>
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
                <Link href={window.route("leads.create")} type="button">
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        New Lead
                    </Button>
                </Link>

                <Table
                    className="tableItem"
                    columns={columns}
                    dataSource={[{ key: 1, id: 1, title: "Sandeep" }]}
                />
            </Card>
        </>
    );
}

LeadList.layout = (page) => <AuthenticatedLayout children={page} />;

export default LeadList;
