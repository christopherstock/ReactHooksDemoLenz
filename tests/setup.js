import "@testing-library/jest-dom/extend-expect";
import { cleanup } from "@testing-library/react";
import moxios from "moxios";

beforeEach(function() {
  moxios.install();
});

afterEach(function() {
  moxios.uninstall();
  cleanup();
});
