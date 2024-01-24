import { Layout } from "antd";

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 60,
    backgroundColor: "#4096ff",
  };

const Footer = () => {
  return <Layout.Footer style={footerStyle}>Footer</Layout.Footer>;
};

export default Footer;
