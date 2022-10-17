import React, { PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";

// antd
import { Layout, Menu } from "antd";
import { HeartOutlined, TeamOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;

const mobileSize = 500;

const LayoutComp: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const ROUTES = useMemo(
    () => [
      {
        key: "/",
        label: "Users",
        icon: React.createElement(TeamOutlined),
        onClick: () => router.push("/"),
      },
      {
        key: "/favorites",
        label: "Favorites",
        icon: React.createElement(HeartOutlined),
        onClick: () => router.push("/favorites"),
      },
    ],
    []
  );

  const [screenWidth, setScreenWidth] = useState(1024);

  const resize = (size: number) => {
    setScreenWidth(size);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => resize(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => resize(window.innerWidth));
  }, []);

  return (
    <Layout>
      <Header style={{ position: "fixed", width: "100%", zIndex: 1 }}>
        <div style={{ float: "left", color: "white" }}>
          MORU React
          {screenWidth > mobileSize && " Assignment - Rajan Sharma"}
        </div>
      </Header>
      <Layout
        style={{
          marginTop: 64,
        }}
      >
        {screenWidth > mobileSize && (
          <Sider width={200} style={{ position: "fixed", height: "100vh" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={[router.pathname]}
              style={{ height: "100%", borderRight: 0 }}
              items={ROUTES}
            />
          </Sider>
        )}
        <Layout
          style={{
            alignItems: "center",
            width: "100%",
            // marginLeft: 200,
            marginLeft: screenWidth > mobileSize ? 200 : 0,
          }}
        >
          <Content
            style={{
              maxWidth: 1024,
              padding: 24,
              minHeight: "100vh",
              width: "100%",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComp;
