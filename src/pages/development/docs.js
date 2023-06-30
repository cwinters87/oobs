import React from "react"
import { Seo } from "../../components/seo";
import Docs from "../../components/docs";
import NavigationBar from "../../layout/navbar";

const DocsPage = () => {

  const navBarStyle = {
    height : "72px",
  };

  const linkContainerSytle = {
    gap: "2rem",
  };

  return (
    <>
      <NavigationBar navBarStyle={navBarStyle} linkContainerSytle={linkContainerSytle}/>
      <Docs />
    </>
  );
};

export const Head = () => <Seo title="TaskSuite - Api Docs" />;

export default DocsPage;
