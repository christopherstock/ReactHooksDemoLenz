import { useAxios } from "../context/Axios";
import globalAxios, { CancelTokenSource } from "axios";
import { useState, useCallback, useRef } from "react";

export interface RandomJokeResponse {
  /** The response type - success or error. */
  type: string;
  /** The value body that contains the joke. */
  value: {
    /** The ID of the joke. */
    id: number;
    /** The joke in prosa. */
    joke: string;
    /** All categories this joke is assigned to. */
    categories: string[];
  };
}

export function useRandomJoke() {
  const { get: getJoke, loading } = useGet<RandomJokeResponse>("jokes/random");
  return { getJoke, loading };
}

export function useGet<T>(url: string) {
  const axios = useAxios();
  const [loading, setLoading] = useState(false);

  const cancelToken = useRef<CancelTokenSource>();

  const get = useCallback(
    async function getJoke() {
      if (cancelToken.current) {
        cancelToken.current.cancel();
      }

      cancelToken.current = globalAxios.CancelToken.source();
      setLoading(true);

      const response = await axios.get<T>(url, {
        cancelToken: cancelToken.current.token
      });

      cancelToken.current = undefined;
      setLoading(false);

      return response;
    },
    [axios, cancelToken]
  );
  return { get, loading };
}
