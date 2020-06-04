import React from "react"
import styles from "./table-row.module.css"
const TableRow = ({ item }) => {
  const { topic, type, value, date } = item
  const isAdd = type === "add"
  return (
    <tr className={isAdd ? styles.add : styles.remove}>
      <td>{value}</td>
      <td>{topic}</td>
      <td>{date}</td>
    </tr>
  )
}

export default TableRow
