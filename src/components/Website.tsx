import { Layout } from "antd";
import { useState } from "react";
import { Menu, MenuItem } from "./Menu";
import React from "react";
import { Content } from "./Content";
import styled from "@emotion/styled";
import { Helmet } from "react-helmet";

import { useSettings } from "../context";

/**
 * Styling einfach per emotion.
 * Kann auch themes (wenn auch hier nicht genutzt)
 */
const Header = styled(Layout.Header)({ color: "#ffffff" });
const Footer = styled(Layout.Footer)({ color: "#ffffff" });

export function Website() {
  /*
   * useState ersetzt in Funktionskomponenten this.state & this.setState
   */
  const [currentMenuItem, setCurrentMenuItem] = useState(MenuItem.RANDOM_JOKE);

  const { title, copyright } = useSettings();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout>
        <Menu onChangeMenu={setCurrentMenuItem} />

        <Layout>
          <Header>{title}</Header>

          <Content currentSite={currentMenuItem} />

          <Footer>{copyright}</Footer>
        </Layout>
      </Layout>
    </>
  );
}
