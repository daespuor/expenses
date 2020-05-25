const sendQuery = require("./utils/send-query")
const GET_ALL_EXPENSES = `
query{
    allExpenses{
        data{
          _id,
          topic,
          type,
          date,
          value
        }
    }
  }
`
exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_EXPENSES)

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ expenses: data.allExpenses.data }),
  }
}
