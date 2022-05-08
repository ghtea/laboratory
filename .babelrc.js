module.exports = {
  presets: [
    "next/babel",
    [
      "@babel/preset-react", {
        "runtime": "automatic",
        "importSource": "@emotion/react"
      }
    ],
    // [
    //   '@babel/preset-react',
    //   {
    //     importSource: 'theme-ui', // or '@theme-ui/core'
    //     runtime: 'automatic',
    //     throwIfNamespace: false,
    //   },
    // ],
  ],
  plugins: ["@emotion/babel-plugin"]
}