const sendQuery = require("./utils/send-query")
const CREATE_EXPENSES = `
mutation($topic: String!, $type:String!, $value: Float!, $date: Date!){
    createExpense(data:{topic:$topic,value:$value,type:$type,date:$date}){
      _id,
      topic,
      type,
      date,
      value
    }
  }
`

exports.handler = async event => {
  const { topic, type, value, date } = JSON.parse(event.body)
  const newDate = new Date(date)
  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  const [
    { value: month },
    {},
    { value: day },
    {},
    { value: year },
  ] = dateTimeFormat.formatToParts(newDate)
  const { data, errors } = await sendQuery(CREATE_EXPENSES, {
    topic,
    type,
    value: parseFloat(value),
    date: `${year}-${month}-${day}`,
  })

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ expenses: data.createExpense }),
  }
}
