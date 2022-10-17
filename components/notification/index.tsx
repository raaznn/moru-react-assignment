import { notification } from "antd";

export const openNotification = (message: string, description: string) => {
  notification["success"]({
    message,
    description,
    placement: "bottomRight",
  });
};
