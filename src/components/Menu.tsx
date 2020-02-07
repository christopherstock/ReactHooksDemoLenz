import React from "react";
import { Menu as AntMenu, Icon, Layout } from "antd";

import logo from "/assets/logo.png";
import { css } from "@emotion/core";
import { useSettings } from "../context";

export enum MenuItem {
  /** Menu item 'Random Joke'. */
  RANDOM_JOKE = "Random Joke",
  /** Menu item 'About'. */
  ABOUT = "About",
  /** Menu item 'Download'. */
  DOWNLOAD = "Download",
  /** Menu item 'Go Premium'. */
  GO_PREMIUM = "Go Premium",
  /** Menu item 'Extended'. */
  EXTENDED = "Extended",
  /** Menu item 'Legal'. */
  LEGAL = "Legal",
  /** Menu item 'Imprint'. */
  IMPRINT = "Imprint"
}

/**
 * Exportieren von Props-Interfaces ist gewöhnlich nicht nötig.
 * Sollte man das mal brauchen, bekommt man es immer noch über
 * `React.ComponentProps<typeof Menu>`
 */
interface Props {
  onChangeMenu: (key: MenuItem) => void;
}

const siderClass = css({
  minHeight: "100vh"
});

export function Menu(props: Props) {
  const { title } = useSettings();
  return (
    <Layout.Sider
      breakpoint="lg"
      collapsedWidth="0"
      theme="dark"
      className={siderClass.name}
    >
      <img
        /**
         * war: src={Setting.PATH_IMAGE + "logo.png"}
         * Bilder etc. sollten als import referenziert werden,
         * dann werden sie von webpack gebundelt und können evtl.
         * noch durch processing-pipelines gejagt werden.
         * So bemerkt man auch schneller "stale" assets und deployed
         * sie nicht mit.
         */
        src={logo}
        alt={title}
        className="logo"
      />

      <AntMenu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[MenuItem.RANDOM_JOKE]}
        onSelect={(
          param /*Angabe des Typs "SelectParam" nicht nötig: dieser Typ wird automatisch gesetzt, da `onSelect` ja eine Typsignatur hat */
        ): void => {
          props.onChangeMenu(param.key as MenuItem);
        }}
      >
        <AntMenu.Item key={MenuItem.RANDOM_JOKE}>
          <Icon type="user" />
          <span>{MenuItem.RANDOM_JOKE}</span>
        </AntMenu.Item>

        <AntMenu.Item key={MenuItem.DOWNLOAD}>
          <Icon type="video-camera" />
          <span>{MenuItem.DOWNLOAD}</span>
        </AntMenu.Item>

        <AntMenu.Item key={MenuItem.ABOUT}>
          <Icon type="upload" />
          <span>{MenuItem.ABOUT}</span>
        </AntMenu.Item>

        <AntMenu.Item key={MenuItem.GO_PREMIUM}>
          <Icon type="user" />
          <span>{MenuItem.GO_PREMIUM}</span>
        </AntMenu.Item>

        <AntMenu.SubMenu
          key={MenuItem.EXTENDED}
          title={
            <span>
              <Icon type="appstore" />
              <span>{MenuItem.EXTENDED}</span>
            </span>
          }
        >
          <AntMenu.Item key={MenuItem.LEGAL}>{MenuItem.LEGAL}</AntMenu.Item>

          <AntMenu.Item key={MenuItem.IMPRINT}>{MenuItem.IMPRINT}</AntMenu.Item>
        </AntMenu.SubMenu>
      </AntMenu>
    </Layout.Sider>
  );
}
