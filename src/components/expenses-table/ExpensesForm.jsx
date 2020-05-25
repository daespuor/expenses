import React from "react"
import DatePicker from "react-datepicker"
import styles from "./expenses-form.module.css"
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"

const ExpensesForm = () => {
  return (
    <tr className={styles.expensesForm}>
      <td>
        <select id="topic">
          <option value="food">Food</option>
          <option value="commuting">Commuting</option>
          <option value="fun">Fun</option>
        </select>
      </td>
      <td>
        <input type="text" id="value" placeholder="$" />
      </td>
      <td>
        <select id="type">
          <option value="add">payments</option>
          <option value="remove">expenses</option>
        </select>
      </td>
      <td>
        <DatePicker />
      </td>
      <td>
        <button type="submit">
          <FontAwesomeIcon icon={faSave} />
        </button>
      </td>
    </tr>
  )
}

export default ExpensesForm
