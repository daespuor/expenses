import React, { useState } from "react"
import DatePicker from "react-datepicker"
import styles from "./expenses-form.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSave } from "@fortawesome/free-solid-svg-icons"

const ExpensesForm = ({ updateField, handleSubmit }) => {
  const [date, setDate] = useState({
    startDate: new Date(),
  })
  return (
    <tr className={styles.expensesForm}>
      <td>
        <select id="topic" onChange={updateField("topic")}>
          <option value="">Select...</option>
          <option value="food">Food</option>
          <option value="commuting">Commuting</option>
          <option value="fun">Fun</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          id="value"
          onChange={updateField("value")}
          placeholder="$"
        />
      </td>
      <td>
        <select id="type" onChange={updateField("type")}>
          <option value="">Select...</option>
          <option value="add">payments</option>
          <option value="remove">expenses</option>
        </select>
      </td>
      <td>
        <DatePicker
          onChange={value => {
            updateField("date")(value)
            setDate({ startDate: value })
          }}
          selected={date.startDate}
        />
      </td>
      <td>
        <button type="submit" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faSave} />
        </button>
      </td>
    </tr>
  )
}

export default ExpensesForm
