import { Card, Typography, Space, Avatar } from "antd";
import {
  EditOutlined,
  HeartFilled,
  HeartOutlined,
  DeleteOutlined,
  MailOutlined,
  GlobalOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

// types
import { User as UserType } from "../../types/user";

type UserProps = {
  selectUser: (user: UserType) => void;
  handleDelete: (id: number) => void;
  handleToggleFavorite: (user: UserType) => void;
} & UserType;

const User: React.FC<UserProps> = ({
  selectUser,
  handleDelete,
  handleToggleFavorite,
  ...user
}) => {
  return (
    <Card
      style={{ maxWidth: 500, width: "100%" }}
      cover={
        <img
          alt="avatar"
          height={200}
          loading="lazy"
          style={{ objectFit: "cover" }}
          src={`https://source.unsplash.com/random/300x300?face ${user.id}`}
        />
      }
      actions={[
        user.isFavorite ? (
          <HeartFilled
            key="de-favorite"
            style={{ color: "red" }}
            onClick={() => handleToggleFavorite(user)}
          />
        ) : (
          <HeartOutlined
            key="favorite"
            style={{ color: "red" }}
            onClick={() => handleToggleFavorite(user)}
          />
        ),
        <EditOutlined key="edit" onClick={() => selectUser(user)} />,
        <DeleteOutlined key="delete" onClick={() => handleDelete(user.id)} />,
      ]}
    >
      <Meta
        title={user.name}
        description={
          <Space direction="vertical">
            <Typography.Text
              type="secondary"
              ellipsis={{ tooltip: user.email }}
              style={{ width: "100%" }}
            >
              <MailOutlined /> {user.email}
            </Typography.Text>
            <Typography.Text type="secondary">
              <PhoneOutlined /> {user.phone}
            </Typography.Text>
            <Typography.Link type="secondary">
              <GlobalOutlined /> {user.website}
            </Typography.Link>
          </Space>
        }
      />
    </Card>
  );
};

export default User;
