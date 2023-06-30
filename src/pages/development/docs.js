import React from "react"
import { Seo } from "../../components/seo";
import Docs from "../../components/docs";

const DocsPage = () => {

  return (
    <>
      <Docs />
    </>
  );
};

export const Head = () => <Seo title="TaskSuite - Api Docs" />;

export default DocsPage;
