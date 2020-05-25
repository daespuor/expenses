import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import MainTitle from "../components/atoms/MainTitle"
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons"
import ExpensesTable from "../components/expenses-table/ExpensesTable"
import axios from "axios"

const Expenses = () => {
  const [expenses, setExpenses] = useState(null)
  const [activeForm, setActiveForm] = useState(false)
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/get-expenses",
    })
      .then(result => {
        if (result.status !== 200) {
          console.error("Error loading Todos!")
          console.error(result)
          return
        }
        setExpenses(result.data.expenses)
      })
      .catch(err => console.err(err))
  }, [])
  const toggleShowForm = () => {
    setActiveForm(!activeForm)
  }
  return (
    <Layout>
      <MainTitle icon={faMoneyCheckAlt} title={"Expenses & Payments"} />
      <ExpensesTable
        data={expenses}
        toggleShowForm={toggleShowForm}
        activeForm={activeForm}
      />
    </Layout>
  )
}

export default Expenses
