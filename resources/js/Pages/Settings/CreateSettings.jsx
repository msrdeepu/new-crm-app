import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";

import Settingform from "./Settingform";

function Createsettings({ props, saveBtn, group, month, status, record }) {
    const { data, setData, post, processing, errors, patch } = useForm({
        type: record.type,
        name: record.name,
        value: record.value,
        pcode: record.pcode,
        dorder: record.dorder,
        status: record.status,
    });

    const submitHandler = (e) => {
        console.log(data);
        post("/settings-store");
    };

    const updateHandler = (values) => {
        patch(`/settings/${record.id}`, data);
    };

    return (
        <>
            <Head title="Createsettings" />

            <Card title={`Settings Manager`}>
                <Settingform
                    submitHandler={
                        record.id == undefined ? submitHandler : updateHandler
                    }
                    data={data}
                    setData={setData}
                    saveBtn={record.id == undefined ? "Add" : "Update"}
                />
            </Card>
        </>
    );
}

Createsettings.layout = (page) => <AuthenticatedLayout children={page} />;

export default Createsettings;
