import React from "react"
import TableRow from "./atoms/TableRow"
import styles from "./expenses-table.module.css"
import SearchBox from "./atoms/SearchBox"

const ExpensesTable = ({
  data,
  showForm,
  handleFilter,
  requestMore,
  total,
  size,
}) => (
  <div className={styles.expensesTable}>
    <div className={styles.expensesTableActions}>
      <button onClick={showForm} className="primary-button">
        Add +
      </button>
      <SearchBox onSearch={handleFilter} />
    </div>
    <table>
      <thead>
        <tr>
          <th>Value</th>
          <th>Topic</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item, index) => {
            return <TableRow item={item} key={index} />
          })}
      </tbody>
    </table>
    {total - size > 0 && (
      <button className={styles.expensesTableMoreButton} onClick={requestMore}>
        More Items...
      </button>
    )}
  </div>
)

export default ExpensesTable
