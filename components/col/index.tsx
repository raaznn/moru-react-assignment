import { Col } from "antd";
import { PropsWithChildren } from "react";

const ResponsiveCol: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}>
      {children}
    </Col>
  );
};

export default ResponsiveCol;
