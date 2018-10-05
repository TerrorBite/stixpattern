module.exports = {
    mode: "production",
    optimization: {
        minimize: true
    },
    devtool: "source-map",
    entry: "./index.js",
    target: "web",
    node: { module: "empty", net: "empty", fs: "empty" },
    output: {
        library: "STIXPatternValidator",
        libraryTarget: "window"
    }
};