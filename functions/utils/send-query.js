require("dotenv").config()
const axios = require("axios")

module.exports = async (query, variables = {}) => {
  console.log(process.env.FAUNA_DB_SECRET_KEY)
  const result = await axios({
    method: "POST",
    url: "https://graphql.fauna.com/graphql",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_DB_SECRET_KEY}`,
    },
    data: {
      query,
      variables,
    },
  })

  return result.data
}
