import { Col, Row, Form, Input, Select, Space } from "antd";

const { TextArea } = Input;

export const CustomInputItem = ({
    label,
    validateStatus,
    labelName,
    name,
    showCount,
    addonBefore,
    value,
    onChange,
    onBlur,
    required,
    type,
    max,
    validator,
}) => {
    return (
        <Form.Item
            label={label}
            hasFeedback
            validateStatus={validateStatus}
            name={labelName}
            required={required}
            rules={
                required
                    ? [
                          {
                              required: true,
                              message: `Please Enter ${label}`,
                          },
                          //   {
                          //       validator: { validator },
                          //   },
                      ]
                    : []
            }
        >
            <Input
                name={name}
                maxLength={max}
                showCount={showCount}
                placeholder={`Enter ${label}`}
                addonBefore={addonBefore}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                type={type}
            />
        </Form.Item>
    );
};

export const CustomSelectItem = ({
    label,
    validateStatus,
    labelName,
    name,
    data,
    onChange,
    required,
    width,
    mode,
    maxCount,
    onBlur,
}) => {
    return (
        <Form.Item
            label={label}
            hasFeedback
            validateStatus={validateStatus}
            name={labelName}
            required={required}
            rules={
                required
                    ? [
                          {
                              required: true,
                              message: `Please Enter ${label}`,
                          },
                      ]
                    : []
            }
        >
            <Select
                name={name}
                placeholder={`Select ${label}`}
                style={{ width: `${width}` }}
                onChange={onChange}
                onBlur={onBlur}
                mode={mode}
                maxCount={maxCount}
            >
                {data.map((option, index) => (
                    <Option key={index} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </Form.Item>
    );
};

export const InputWithPrefixSelect = ({
    label,
    validateStatus,
    labelName,
    name,
    data,
    addonBefore,
    value,
    onChange,
    required,
    defaultValue,
    type,
}) => {
    return (
        <Form.Item
            label={label}
            hasFeedback
            validateStatus={validateStatus}
            name={labelName}
            required={required}
            rules={
                required
                    ? [
                          {
                              required: true,
                              message: `Please Enter ${label}`,
                          },
                      ]
                    : []
            }
        >
            <Space.Compact style={{ width: "100%" }}>
                <Select
                    name={name}
                    placeholder={`Select ${label}`}
                    style={{ width: "20%" }}
                    defaultValue={defaultValue}
                    onChange={onChange}
                >
                    {data.map((option, index) => (
                        <Option key={index} value={option.value}>
                            {option.label}
                        </Option>
                    ))}
                </Select>
                <Input
                    style={{ width: "80%" }}
                    showCount
                    placeholder={`Enter ${label}`}
                />
            </Space.Compact>
        </Form.Item>
    );
};

export const CustomTextArea = ({
    label,
    labelName,
    name,
    showCount,
    onChange,
    required,
}) => {
    return (
        <Form.Item label={label} name={labelName}>
            <TextArea
                name={name}
                showCount={showCount}
                placeholder={`Enter ${label}`}
                onChange={onChange}
                required={required}
            />
        </Form.Item>
    );
};
