import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card } from "antd";
import { v4 as uuidv4 } from "uuid";

import {
    logoSrc,
    logoWidth,
    logoAlt,
    logoHeight,
    logoMarginHeight,
} from "../components/LogoItem/LogoItem";
import TaskForm from "./TaskForm";

function CreateTask({ taskList, record }) {
    let taskId = uuidv4();
    const { data, setData, post, processing, errors, patch } = useForm({
        taskId: taskId,
        type: record.type,
        name: record.name,
        status: record.status,
        priority: record.priority,
        category: record.category,
        assigned: record.assigned,
        delegated: record.delegated,
        sdate: record.sdate,
        duedate: record.duedate,
        details: record.details,
    });
    const submitHandler = () => {
        console.log(data);
        post("/scrm-tasks/store", data);
    };
    //update form submission
    const updateHandler = (e) => {
        console.log(data);
        patch(`/scrm-tasks/${record.id}`, data);
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
                <TaskForm
                    record={record}
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                    saveBtn={record.taskId == undefined ? "Add" : "Update"}
                    data={data}
                    setData={setData}
                />
            </Card>
        </>
    );
}

CreateTask.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateTask;
