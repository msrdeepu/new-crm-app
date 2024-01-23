import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useRef, useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { Button, Input, Space, Table, Card, Typography } from "antd";
import Highlighter from "react-highlight-words";
import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
//destroy record
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("settings.destroy", e.currentTarget.id));
    }
}
//Loading Edit View
function editRecord(e) {
    router.get(route("settings.edit", e.currentTarget.id));
}

function Settinglist({ props, resource, auth }) {
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
            title: "Type",
            dataIndex: "type",
            key: "type",
            //width: '10%',
            ...getColumnSearchProps("type"),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            //width: '30%',
            ...getColumnSearchProps("name"),
        },
        {
            title: "Value",
            dataIndex: "value",
            key: "value",
            //width: '20%',
            ...getColumnSearchProps("value"),
        },
        {
            title: "Pcode",
            dataIndex: "pcode",
            key: "pcode",
            ...getColumnSearchProps("pcode"),
            //sorter: (a, b) => a.address.length - b.address.length,
            //sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Dorder",
            dataIndex: "dorder",
            key: "dorder",
            ...getColumnSearchProps("dorder"),
            //sorter: (a, b) => a.address.length - b.address.length,
            //sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            ...getColumnSearchProps("status"),
            //sorter: (a, b) => a.address.length - b.address.length,
            //sortDirections: ['descend', 'ascend'],
        },
        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space size="small">
                    <Button
                        style={{ margin: "5px", color: "purple" }}
                        shape="circle"
                        id={record.id}
                        onClick={editRecord}
                        icon={<EditOutlined />}
                    />
                    <Button
                        style={{ margin: "5px", color: "red" }}
                        shape="circle"
                        id={record.id}
                        icon={<DeleteOutlined />}
                        onClick={destroyRecord}
                    />
                </Space>
            ),
        },
    ];
    return (
        <>
            <Head title="Createsettings" />

            <Card title={`Manage Settings`} hoverable>
                <div>
                    <Link href={window.route("settings.create")}>
                        <Button icon={<PlusCircleOutlined />} type="primary">
                            Create Settings
                        </Button>
                    </Link>
                </div>
                <Table
                    className="tableTopMargin"
                    style={{ marginTop: "10px" }}
                    columns={columns}
                    dataSource={resource}
                />
            </Card>
        </>
    );
}

Settinglist.layout = (page) => <AuthenticatedLayout children={page} />;

export default Settinglist;
