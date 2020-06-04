import React, { useState, useEffect, useReducer } from "react"
import Layout from "../components/Layout"
import MainTitle from "../components/atoms/MainTitle"
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons"
import ExpensesTable from "../components/ExpensesTable"
import axios from "axios"
import Total from "../components/atoms/Total"
import { Toast, Dialog } from "../utils/alerts"
import ExpensesForm from "../components/ExpensesForm"
import { Modal } from "react-responsive-modal"

const SIZE_LIMIT = 100000
const SIZE_INIT = 10
const UPDATE_FIELD = "UPDATE_FIELD"
const INITIAL_STATE = {
  topic: "",
  type: "",
  value: 0.0,
  date: new Date(),
}
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

const Expenses = () => {
  const [expenses, setExpenses] = useState(null)
  const [formState, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [status, setStatus] = useState("loading")
  const [size, setSize] = useState(SIZE_INIT)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [modalOpened, setModalOpened] = useState(false)
  const [filter, setFilter] = useState("")

  useEffect(() => {
    if (status !== "loading") return
    axios({
      method: "GET",
      url: `/api/get-expenses?size=${size}&filter=${filter}`,
    })
      .then(result => {
        if (result.status !== 200) {
          console.error("Error loading expenses!")
          console.error(result)
          return
        }
        setExpenses(result.data.expenses)
        setTotalCount(result.data.countExpenses)
        setTotal(result.data.total)
        setStatus("loaded")
      })
      .catch(err => console.error(err))
  }, [status])

  const reloadExpenses = () => setStatus("loading")

  const showForm = () => {
    setModalOpened(true)
  }

  const closeForm = () => {
    setModalOpened(false)
  }

  const handleFilter = event => {
    const { value } = event.target
    if (event.charCode == 13) {
      if (value !== "") {
        setSize(SIZE_LIMIT)
      } else {
        setSize(SIZE_INIT)
      }
      setFilter(value)
      setStatus("loading")
    }
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

    for (const field in fields) {
      if (fields[field] === "") {
        Toast.fire({
          text: "All fields are mandatory",
          icon: "warning",
        })
        return false
      }
    }
    if (!regExp.test(fields.value.toString())) {
      Toast.fire({
        text: "Value must be a number",
        icon: "warning",
      })
      return false
    }
    return true
  }

  const handleSubmit = () => {
    if (validateFields(formState)) {
      let { value } = formState
      if (formState.type !== "add") {
        value *= -1
      }
      axios
        .post("/api/create-expenses", { ...formState, value })
        .then(_ => {
          Dialog.fire({
            titleText: "Expense saved successfully!",
            icon: "success",
            timer: 5000,
            showConfirmButton: false,
          })
          reloadExpenses()
          closeForm()
        })
        .catch(err => console.error(err))
    }
  }

  const requestMore = () => {
    setCurrentPage(currentPage + 1)
    setSize((currentPage + 1) * size)
    reloadExpenses()
  }

  return (
    <Layout>
      <MainTitle icon={faMoneyCheckAlt} title={"Expenses & Payments"} />
      <Total value={total} />
      <ExpensesTable
        data={expenses}
        showForm={showForm}
        requestMore={requestMore}
        total={totalCount}
        handleFilter={handleFilter}
        size={size}
      />
      <Modal
        open={modalOpened}
        onClose={closeForm}
        center
        classNames={{
          modal: "custom-modal",
          closeButton: "close-button-modal",
        }}
      >
        <ExpensesForm
          updateField={handleInputUpdate}
          handleSubmit={handleSubmit}
          handleClose={closeForm}
        />
      </Modal>
    </Layout>
  )
}

export default Expenses
