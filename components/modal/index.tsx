import { ReactNode } from "react";
import { Modal } from "antd";

type ModalProps = {
  title: string;
  open: boolean;
  handleOk: () => void;
  confirmLoading?: boolean;
  handleCancel: () => void;
  children: ReactNode;
};

const ModalComp: React.FC<ModalProps> = ({
  title,
  open,
  handleOk,
  confirmLoading,
  handleCancel,
  children,
}) => {
  return (
    <div>
      <Modal
        title={title}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        destroyOnClose
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalComp;
