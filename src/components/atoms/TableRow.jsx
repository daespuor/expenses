import React from "react"
import "./table-row.module.css"
const TableRow = ({ item }) => {
  const { topic, type, value, date } = item
  return (
    <tr>
      <td>{topic}</td>
      <td>{value}</td>
      <td>{type}</td>
      <td>{date}</td>
      <td></td>
    </tr>
  )
}

export default TableRow
