import React from "react";

export interface Settings {
  title: string;
  copyright: string;
}

export const SettingsContext = React.createContext<Settings>({
  title: "",
  copyright: ""
});

/*
 * ein kleiner Custom-Hook als Shorthand
 */
export function useSettings() {
  return React.useContext(SettingsContext);
}
