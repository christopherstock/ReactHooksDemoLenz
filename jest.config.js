const path = require("path");

module.exports = {
  roots: [path.resolve(__dirname)],
  displayName: "sandbox",
  testMatch: ["**/*.test.ts"],
  testURL: "http://localhost",
  setupFilesAfterEnv: [path.resolve(__dirname, "tests/setup.js")]
};
