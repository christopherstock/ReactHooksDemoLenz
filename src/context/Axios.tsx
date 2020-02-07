import { AxiosInstance } from "axios";

import React from "react";

export const AxiosContext = React.createContext<AxiosInstance | undefined>(
  undefined
);

export function useAxios() {
  const axios = React.useContext(AxiosContext);
  if (!axios) {
    throw new Error(
      "useAxios was invoked without being wrapped in a AxiosContext.Provider with an axios instance as value."
    );
  }
  return axios;
}
