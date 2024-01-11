import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function ContactsList(props) {
    return (
        <>
            <Head title="Dashboard" />

            {/* <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>You're logged in!</Typography.Text>
            </Card> */}
            <Card
                title={
                    <div>
                        <img
                            src="https://dgbits.in/images/logo-dgbits.svg" // Replace with the URL or path of your image
                            alt="Image Alt Text"
                            style={{
                                marginRight: "8px",
                                width: "30px",
                                height: "30px",
                            }}
                        />
                        Card Title with Image
                    </div>
                }
            >
                {/* Card Content */}
            </Card>
        </>
    );
}

ContactsList.layout = (page) => <AuthenticatedLayout children={page} />;

export default ContactsList;
