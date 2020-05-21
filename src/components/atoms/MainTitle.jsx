import React from "react"
import styles from "./main-title.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const MainTitle = ({ icon, title }) => (
  <div className={styles.mainTitle}>
    <FontAwesomeIcon icon={icon} size="3x" />
    <h1>{title}</h1>
  </div>
)

export default MainTitle
