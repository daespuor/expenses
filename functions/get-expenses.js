const sendQuery = require("./utils/send-query")
const GET_ALL_EXPENSES = `
query($size:Int!, $filter:String){
    countExpenses,
    getTotal,
    allExpensesOrderedByDate(size:$size,filter:$filter){
          _id,
          topic,
          type,
          date,
          value
    }
  }
`
exports.handler = async event => {
  const { size, filter } = event.queryStringParameters
  const { data, errors } = await sendQuery(GET_ALL_EXPENSES, {
    size: parseInt(size),
    filter: filter ? filter : "",
  })
  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      expenses: data.allExpensesOrderedByDate,
      countExpenses: data.countExpenses,
      total: data.getTotal,
    }),
  }
}
