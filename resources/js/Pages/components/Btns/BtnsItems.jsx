import React from "react";
import { Button } from "antd";

const BtnsItems = (props) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
                style={{ margin: "5px" }}
                type="primary"
                htmlType="submit"
                onClick={props.submitFormItem}
            >
                {props.firstText}
            </Button>
            <Button style={{ margin: "5px" }} danger onClick={props.cancelForm}>
                {props.secondText}
            </Button>
        </div>
    );
};

export default BtnsItems;
