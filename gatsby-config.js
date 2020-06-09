const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = {
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      "/api",
    createProxyMiddleware({
        target: "http://localhost:8888/api/",
        pathRewrite: {
          "/api/": "",
        },
      })
    )
  },
  // ...
}