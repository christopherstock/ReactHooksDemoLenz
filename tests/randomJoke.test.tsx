import { RandomJoke } from "../src/components/RandomJoke";

import React from "react";
import { render, screen, act } from "@testing-library/react";
import { AxiosContext } from '../src/context';
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import moxios from 'moxios';

test("pulls a joke from the API", async () => {
  render(
    <AxiosContext.Provider value={axios}>
      <RandomJoke />
    </AxiosContext.Provider>
  );

  expect(screen.queryByText("loading...")).toBeInTheDocument();

  await act(async () => {
    await moxios.wait(function() {
      let request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          type: "success",
          data: {
            value: {
              id: 165,
              joke:
                "The last thing you hear before Chuck Norris gives you a roundhouse kick? No one knows because dead men tell no tales.",
              categories: []
            }
          }
        }
      });
    });
  });

  expect(
    screen.findByText(
      "The last thing you hear before Chuck Norris gives you a roundhouse kick?"
    )
  ).toBeInTheDocument();
  expect(screen.queryByText("loading...")).not.toBeInTheDocument();
});
