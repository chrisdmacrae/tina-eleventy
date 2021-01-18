module.exports = (config) => {
  config.addWatchTarget("./src/cms");

  return {
    dir: {
      input: "src/pages",
      output: "dist",
      data: "../data",
      includes: "../includes",
      layouts: "../layouts"
    }
  }
}
