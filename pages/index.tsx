import type { NextPage } from "next";

// antd
import { Row, Layout, Alert } from "antd";

// types
import { User as UserType } from "../types/user";

// hooks
import { useMemo, useState } from "react";
import useUser from "../hooks/useUser";

// components
import User from "../components/user";
import ResponsiveCol from "../components/col";
import Modal from "../components/modal";
import EditUser from "../components/forms/editUser";
import { openNotification } from "../components/notification";
import { showDeleteConfirm } from "../components/modal/confirmModal";
import UserSkeleton from "../components/skeleton/userSkeleton";

const Home: NextPage<{ onlyFavorites?: boolean }> = ({ onlyFavorites }) => {
  const [selectedUserForEdit, setSelectedUserForEdit] =
    useState<UserType | null>(null);
  const { isLoading, userList, toggleFavorite, deleteUser, updateUser } =
    useUser();

  const favoriteList = useMemo(
    () => userList.filter((u) => u.isFavorite),
    [userList]
  );

  // function to change favorite status
  const handleToggleFavorite = (user: UserType) => {
    toggleFavorite(user.id);
    openNotification(
      "Success",
      `${user?.isFavorite ? "Removed from favorite" : "Added to favorite"}`
    );
  };

  // function to delete user from the list
  const handleDelete = (id: number) => {
    showDeleteConfirm("Are you sure delete this User?", () => {
      deleteUser(id);
      openNotification("Success", "Deleted user");
    });
  };

  // function to edit user information
  const handleEdit = (user: UserType | null) => {
    if (user) {
      updateUser(user);
      openNotification("Success", "Updated user");
      setSelectedUserForEdit(null);
    }
  };

  // props
  const userProps = {
    handleToggleFavorite,
    handleDelete,
    selectUser: setSelectedUserForEdit,
  };

  const modalProps = {
    open: !!selectedUserForEdit,
    title: "Edit User",
    handleCancel: () => setSelectedUserForEdit(null),
    handleOk: () => handleEdit(selectedUserForEdit),
  };

  const editUsrProps = {
    user: selectedUserForEdit,
    setUser: setSelectedUserForEdit,
  };

  if (onlyFavorites && favoriteList.length === 0) {
    return (
      <Alert
        message="No user in your favorites list"
        description="Additional description and information."
        type="info"
        showIcon
      />
    );
  }

  return (
    <Layout>
      {isLoading ? (
        <UserSkeleton />
      ) : (
        <Row gutter={[12, 12]}>
          {(onlyFavorites ? favoriteList : userList).map((user: UserType) => {
            return (
              <ResponsiveCol key={user.id}>
                <User {...userProps} {...user} />
              </ResponsiveCol>
            );
          })}
        </Row>
      )}
      <Modal {...modalProps}>
        <EditUser {...editUsrProps} />
      </Modal>
    </Layout>
  );
};

export default Home;
