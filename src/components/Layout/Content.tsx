import { Layout } from "antd";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh-120px)",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const Content = () => {
  return <Layout.Content style={contentStyle}>Content</Layout.Content>;
};

export default Content;
