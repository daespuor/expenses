import React from "react"
import TableRow from "../atoms/TableRow"
import styles from "./expenses-table.module.css"
import SearchBox from "../atoms/SearchBox"
import ExpensesForm from "./ExpensesForm"

const ExpensesTable = ({
  data,
  toggleShowForm,
  activeForm,
  handleInputUpdate,
  handleSubmit,
}) => (
  <div className={styles.expensesTable}>
    <div className={styles.expensesTableActions}>
      {!activeForm ? (
        <button onClick={toggleShowForm}>Add +</button>
      ) : (
        <button onClick={toggleShowForm}>Cancel</button>
      )}
      <SearchBox />
    </div>
    <table>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Value</th>
          <th>Type</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {activeForm && (
          <ExpensesForm
            updateField={handleInputUpdate}
            handleSubmit={handleSubmit}
          />
        )}
        {data &&
          data.map((item, index) => {
            return <TableRow item={item} key={index} />
          })}
      </tbody>
    </table>
  </div>
)

export default ExpensesTable
