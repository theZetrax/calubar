const CopyPlugin = require("copy-webpack-plugin")
const path = require('path')

module.exports = [new CopyPlugin({
	patterns: [
        path.resolve(__dirname, "..", "..", "src", "worker.js"),
      ],
})]
