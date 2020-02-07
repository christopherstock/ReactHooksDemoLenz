import React, { useEffect, useState } from "react";

import { Button, Divider, List } from "antd";
import { useRandomJoke } from "../hooks/api";

export function RandomJoke() {
  const { getJoke, loading } = useRandomJoke();
  const [jokes, setJokes] = useState<string[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => appendRandomJoke(), []);

  return (
    <div>
      <Button type="primary" onClick={appendRandomJoke} loading={loading}>
        Request a Random Joke
      </Button>

      <Divider />

      {jokes.length > 0 ? (
        <List
          dataSource={jokes}
          renderItem={
            // TODO extract to method .createJokeLine()
            (item: string, index: number): JSX.Element => {
              const id: number = index + 1;
              return (
                <List.Item>
                  {id}: {item}
                </List.Item>
              );
            }
          }
        />
      ) : (
        <>loading...</>
      )}
    </div>
  );

  /*
   * Dank scope hoisting kann man Funktionen auch nach `return` definieren.
   * Damit bekommt man eine Leseart, die Klassenkomponenten ähnelt
   */
  function appendRandomJoke() {
    getJoke()
      .then(response => {
        setJokes(currentJokes => [
          ...currentJokes,
          response.data.value.joke.replace(/&quot;/g, '"')
        ]);
      })
      .catch(e => {
        console.error(e);
      });
  }
}
