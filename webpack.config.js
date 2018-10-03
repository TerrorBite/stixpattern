module.exports = {
    mode: "production",
    entry: "./index.js",
    target: "web",
    node: { module: "empty", net: "empty", fs: "empty" },
    output: {
        library: "STIXPatternValidator",
        libraryTarget: "window"
    }
};