import React from "react"
import "./header.module.css"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
        <li>
          <a href="#">Savings</a>
        </li>
        <li>
          <a href="#">Debts</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Reports</a>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
