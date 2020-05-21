import React from "react"
import Layout from "../components/Layout"
import MainTitle from "../components/atoms/MainTitle"
import { faMoneyCheckAlt } from "@fortawesome/free-solid-svg-icons"
const Expenses = () => (
  <Layout>
    <MainTitle icon={faMoneyCheckAlt} title={"Expenses & Payments"} />
  </Layout>
)

export default Expenses
