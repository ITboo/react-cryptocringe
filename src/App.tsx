import { Layout } from "antd";

import Header from "./components/Layout/Header";
import Sider from "./components/Layout/Sider";
import Content from "./components/Layout/Content";
import Footer from "./components/Layout/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Layout>
          <Sider />
          <Content />
        </Layout>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
