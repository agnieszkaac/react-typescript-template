module.exports = {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|svg|ttf|woff|woff2)$": "<rootDir>config/fileMock.js",
    "\\.scss$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: ["<rootDir>config/setupTests.js"],
};