import React from "react"
import styles from "./total.module.css"

const Total = ({ value }) => (
  <div className={value <= 0 ? styles.totalDebts : styles.total}>$ {value}</div>
)

export default Total
