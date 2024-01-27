import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography, Progress } from "antd";

function Dashboard(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Progress type="dashboard" strokeColor={"red"} percent={80} />
            </Card>
        </>
    );
}

Dashboard.layout = (page) => <AuthenticatedLayout children={page} />;

export default Dashboard;
