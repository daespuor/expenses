import React, { useState, useEffect, useReducer } from "react"
import Layout from "../components/Layout"
import MainTitle from "../components/atoms/MainTitle"
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons"
import ExpensesTable from "../components/expenses-table/ExpensesTable"
import { ToastContainer, toast } from "react-toastify"
import axios from "axios"

const UPDATE_FIELD = "UPDATE_FIELD"
const INITIAL_STATE = {
  topic: "",
  type: "",
  value: 0.0,
  date: new Date(),
}
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
const Expenses = () => {
  const [expenses, setExpenses] = useState(null)
  const [activeForm, setActiveForm] = useState(false)
  const [formState, dispatch] = useReducer(reducer, INITIAL_STATE)
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
  const handleInputUpdate = field => event => {
    let value = event
    if (event.target) {
      value = event.target.value
    }
    dispatch({
      type: UPDATE_FIELD,
      payload: {
        [field]: value,
      },
    })
  }
  const validateFields = fields => {
    const regExp = new RegExp(/^[+-]?\d+(\.\d+)?$/)
    const toastConfig = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    }
    for (const field in fields) {
      if (fields[field] === "") {
        toast.error("All fields are mandatory!", toastConfig)
        return false
      }
    }
    if (!regExp.test(fields.value.toString())) {
      toast.error("Value must be a number", toastConfig)
      return false
    }
    return true
  }
  const handleSubmit = () => {
    if (validateFields(formState)) {
      axios
        .post("/api/create-expenses", { ...formState })
        .then(res => {
          console.log(res)
        })
        .catch(err => console.error(err))
    }
  }
  return (
    <Layout>
      <ToastContainer />
      <MainTitle icon={faMoneyCheckAlt} title={"Expenses & Payments"} />
      <ExpensesTable
        data={expenses}
        toggleShowForm={toggleShowForm}
        activeForm={activeForm}
        handleInputUpdate={handleInputUpdate}
        handleSubmit={handleSubmit}
      />
    </Layout>
  )
}

export default Expenses
