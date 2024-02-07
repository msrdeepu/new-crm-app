import { useState, useRef } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Button, Table, Space, Tooltip, Input } from "antd";

import {
    PlusCircleOutlined,
    SearchOutlined,
    EditOutlined,
    DeleteOutlined,
} from "@ant-design/icons";
import { MdOutlineTimer } from "react-icons/md";
import Highlighter from "react-highlight-words";
import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";
import "../../../css/styles.css";

function TaskList({ props, taskList }) {
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
    const activityIcon = {
        color: "orange",
        fontSize: "18px",
    };
    const columns = [
        {
            title: "ID",
            dataIndex: "taskId",
            ...getColumnSearchProps("taskId"),
        },
        {
            title: "Task",
            dataIndex: "name",
            ...getColumnSearchProps("name"),
        },

        {
            title: "Category",
            dataIndex: "category",
            ...getColumnSearchProps("category"),
        },

        {
            title: "Status",
            dataIndex: "status",
            ...getColumnSearchProps("status"),
        },

        {
            title: "Priotity",
            dataIndex: "priority",
            ...getColumnSearchProps("priority"),
        },
        {
            title: "Start Date",
            dataIndex: "	sdate",
            ...getColumnSearchProps("	sdate"),
        },
        {
            title: "Due Date",
            dataIndex: "duedate",
            ...getColumnSearchProps("duedate"),
        },

        {
            title: "Delegated",
            dataIndex: "delegated",
            ...getColumnSearchProps("delegated"),
        },

        {
            title: "Actions",
            dataIndex: "actions",
            render: (_, record) => (
                <Space>
                    <Tooltip placement="top" title={"Edit Task"}>
                        <Button
                            shape="circle"
                            type="primary"
                            id={record.id}
                            onClick={editRecord}
                        >
                            {<EditOutlined />}
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title={"Manage Duration"}>
                        <Button
                            shape="circle"
                            id={record.id}
                            onClick={durationRecord}
                            style={activityIcon}
                        >
                            {<MdOutlineTimer />}
                        </Button>
                    </Tooltip>
                    <Tooltip placement="top" title={"Delete Task"}>
                        <Button
                            shape="circle"
                            danger
                            type="primary"
                            id={record.id}
                            onClick={destroyRecord}
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
        router.get(route("tasks.edit", e.currentTarget.id));
    }
    function durationRecord(e) {
        router.get(route("tasks.duration", e.currentTarget.id));
    }

    function destroyRecord(e) {
        if (confirm("Are you sure you want to delete this record ?")) {
            router.delete(route("tasks.destroy", e.currentTarget.id));
        }
    }
    return (
        <>
            {/* {console.log(leadList)} */}
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
                <Link href={window.route("tasks.create")} type="button">
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        New Task
                    </Button>
                </Link>

                <Table
                    className="tableItem"
                    columns={columns}
                    dataSource={taskList}
                />
            </Card>
        </>
    );
}

TaskList.layout = (page) => <AuthenticatedLayout children={page} />;

export default TaskList;
