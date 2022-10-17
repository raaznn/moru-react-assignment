import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

// antd
import { Form, Input } from "antd";

// types
import { User as UserType } from "../../types/user";

const EditUser: React.FC<{
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
}> = ({ user, setUser }) => {
  const [form] = Form.useForm();

  const handleChange = (newVal: { newVal: keyof UserType }) => {
    if (user) {
      setUser({ ...user, ...newVal });
    }
  };

  //   useEffect(() => {
  //     form.resetFields();
  //   }, [user]);

  return (
    <Form
      form={form}
      name="edit-user"
      onValuesChange={handleChange}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      initialValues={user ? { ...user } : {}}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input value={user?.name} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Website"
        name="website"
        rules={[{ required: true, message: "Please input your website!" }]}
      >
        <Input />
      </Form.Item>
    </Form>
  );
};

export default EditUser;
