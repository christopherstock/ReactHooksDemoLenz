import { MenuItem } from "./Menu";
import { Layout } from "antd";
import React from "react";
import { RandomJoke } from "./RandomJoke";

interface Props {
  currentSite: MenuItem;
}

export function Content({ currentSite }: Props) {
  return (
    <Layout.Content className="content">
      {/*
        War vorher eine Methodenaufruf. Meine Faustregel ist:
        Methodenaufruf in JSX -> entweder eine 
        neue Komponente oder inlinen.
        JSX sollte in einer Komponente an einer Stelle stehen, das
        überall verteilen führt zu sehr unübersichtlichen Komponenten.
        Zudem kann React bei Komponenten Performanceoptimierungen durchführen,
        Methodenaufrufe bekommt es nicht mit.
        Hier aber eindeutig inlinen, ist ja fast kein Code ;)
        */
      currentSite === MenuItem.RANDOM_JOKE ? (
        <RandomJoke />
      ) : currentSite === MenuItem.LEGAL ? (
        <>legal..</>
      ) : (
        <div>TBD</div>
      )}
    </Layout.Content>
  );
}
