import * as React from "react";
import { render } from "react-dom";

import "antd/dist/antd.css";
import { Website } from "./components";
import { Settings, SettingsContext, AxiosContext } from "./context";
import axios from "axios";

/*
 * Konfigurationen und sowas wie eine Axios-instanz
 * werden über Kontext reingereicht
 * Das ist im Endeffekt die Dependency Injection von React
 */
const settings: Settings = {
  title: "CNDB",
  copyright: "2020 MF"
};
const axiosInstance = axios.create({
  baseURL: "https://api.icndb.com/"
});

/**
 * window.onload ist für sowas wirklich nicht nötig.
 * wenn das hier geladen ist ist alles was wir brauchen schon
 * geladen - läuft ja durch einen Bundler.
 */
const rootElement = document.getElementById("root");
render(
  <SettingsContext.Provider value={settings}>
    <AxiosContext.Provider value={axiosInstance}>
      <Website />
    </AxiosContext.Provider>
  </SettingsContext.Provider>,
  rootElement
);
