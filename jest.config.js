module.exports = {
  setupFilesAfterEnv: ['./app/utils/testing/testConfig.js'],
  moduleDirectories: ['node_modules', './'],
  moduleNameMapper: {
    "^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$": "<rootDir>/app/utils/testing/assetTransformer.js",
  }
}