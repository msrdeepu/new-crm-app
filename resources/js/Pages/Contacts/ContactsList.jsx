import { useState, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Button, Table, Input, Space, Image } from "antd";
import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import Highlighter from "react-highlight-words";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";
import "../../../css/styles.css";
import ContacImage from "../assets/contact.jpg";
function ContactsList({ props, contactList }) {
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            ...getColumnSearchProps("id"),
        },
        {
            title: "CODE",
            dataIndex: "companycode",
            ...getColumnSearchProps("companycode"),
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            render: (_, record, index) => (
                <Space>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) =>
                                console.log(
                                    `current index: ${current}, prev index: ${prev}`
                                ),
                        }}
                    >
                        <Image
                            style={{
                                borderRadius: "50%",
                                height: "50px",
                                width: "50px",
                            }}
                            src={
                                contactList[index].avatar == null
                                    ? ContacImage
                                    : `/storage/${contactList[index].avatar}`
                            }
                        />
                    </Image.PreviewGroup>
                </Space>
            ),
        },
        {
            title: "Name",
            dataIndex: "fullname",
            ...getColumnSearchProps("fullname"),
        },

        {
            title: "Phone",
            dataIndex: "phone",
            ...getColumnSearchProps("phone"),
        },
        // {
        //     title: "Email",
        //     dataIndex: "emailid",
        //     ...getColumnSearchProps("emailid"),
        // },

        {
            title: "Company",
            dataIndex: "company",
            ...getColumnSearchProps("company"),
        },
        // {
        //     title: "Role",
        //     dataIndex: "role",
        //     ...getColumnSearchProps("role"),
        // },
        {
            title: "Type",
            dataIndex: "contype",
            ...getColumnSearchProps("contype"),
        },

        {
            title: "Status",
            dataIndex: "status",
            ...getColumnSearchProps("status"),
        },

        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space>
                    <Button shape="circle" id={record.id} onClick={editRecord}>
                        {<EditOutlined />}
                    </Button>

                    <Button
                        shape="circle"
                        danger
                        onClick={destroyRecord}
                        id={record.id}
                    >
                        {<DeleteOutlined />}
                    </Button>
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
                <Link href={window.route("contacts.create")} type="button">
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        New Contact
                    </Button>
                </Link>
                {/* {console.log(contactList)} */}
                <Table
                    className="tableItem"
                    columns={columns}
                    dataSource={contactList}
                />
            </Card>
        </>
    );
}

ContactsList.layout = (page) => <AuthenticatedLayout children={page} />;

export default ContactsList;
