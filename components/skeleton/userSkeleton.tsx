import { Row, Skeleton } from "antd";
import React from "react";
import ResponsiveCol from "../col";

const UserSkeleton = () => {
  return (
    <Row gutter={[12, 12]}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
        return (
          <ResponsiveCol key={item}>
            <Skeleton />
          </ResponsiveCol>
        );
      })}
    </Row>
  );
};

export default UserSkeleton;
