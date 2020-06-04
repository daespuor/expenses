import React, { useState } from "react"
import DatePicker from "react-datepicker"
import styles from "./expenses-form.module.css"

const ExpensesForm = ({ updateField, handleSubmit, handleClose }) => {
  const [date, setDate] = useState({
    startDate: new Date(),
  })
  return (
    <>
      <h2>Save New Expense</h2>
      <form className={styles.expensesForm}>
        <div className={styles.formControler}>
          <label htmlFor="topic">Topic</label>
          <select id="topic" onChange={updateField("topic")}>
            <option value="">Select...</option>
            <option value="food">Food</option>
            <option value="commuting">Commuting</option>
            <option value="fun">Fun</option>
            <option value="salary">Salary</option>
          </select>
        </div>
        <div className={styles.formControler}>
          <label htmlFor="value">Value</label>
          <input
            type="text"
            id="value"
            onChange={updateField("value")}
            placeholder="$"
          />
        </div>
        <div className={styles.formControler}>
          <label htmlFor="type">Type</label>
          <select id="type" onChange={updateField("type")}>
            <option value="">Select...</option>
            <option value="add">payments</option>
            <option value="remove">expenses</option>
          </select>
        </div>
        <div className={styles.formControler}>
          <label htmlFor="date">Date</label>
          <DatePicker
            id="date"
            onChange={value => {
              updateField("date")(value)
              setDate({ startDate: value })
            }}
            selected={date.startDate}
          />
        </div>
      </form>
      <div className={styles.expensesFormActions}>
        <button className="success-button" onClick={handleSubmit}>
          Save
        </button>
        <button className="error-button" onClick={handleClose}>
          Cancel
        </button>
      </div>
    </>
  )
}

export default ExpensesForm
