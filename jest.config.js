/** @type {import('jest').Config} */

module.exports = {
  testEnvironment: "jsdom",
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.js",
    "\\.(css|less)$": "<rootDir>/mocks/fileMock.js",
  },
  moduleDirectories: ["./node_modules", "src"],
  setupFiles: ["./jest.polyfills.js"],
  //  --verbose --runInBand --detectOpenHandles --forceExit add in package.json test command
  // globals: {
  //   TextEncoder: require("util").TextEncoder,
  // TextDecoder: require("util").TextDecoder,
  // },
};
