import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

export const showDeleteConfirm = (title: string, handleDelete: () => void) => {
  confirm({
    // title: "Are you sure delete this User?",
    title,
    icon: <ExclamationCircleOutlined />,
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      handleDelete();
    },
    onCancel() {},
  });
};
