import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import styles from "./search-box.module.css"

const SearchBox = ({ onSearch }) => (
  <div className={styles.searchBox}>
    <FontAwesomeIcon icon={faSearch} size="2x" />
    <input type="text" placeholder="Search" />
  </div>
)

export default SearchBox
