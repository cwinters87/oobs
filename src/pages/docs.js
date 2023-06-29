import * as React from "react";
import { Seo } from "../components/seo";
import Docs from "../components/docs";
import NavigationBar from "../layout/navbar";

const DocsPage = () => {
  return (
    <>
      <NavigationBar />
      <Docs />
    </>
  );
};

export const Head = () => <Seo title="TaskSuite - Api Docs" />;

export default DocsPage;
