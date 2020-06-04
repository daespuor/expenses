import React from "react"
import styles from "./search-box.module.css"

const SearchBox = ({ onSearch }) => (
  <div className={styles.searchBox}>
    <input type="text" placeholder="Search" onKeyPress={onSearch} />
  </div>
)

export default SearchBox
