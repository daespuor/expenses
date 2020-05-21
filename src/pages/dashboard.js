import React from "react"
import Layout from "../components/Layout"
import MainTitle from "../components/atoms/MainTitle"
import { faChartLine } from "@fortawesome/free-solid-svg-icons"
const Dashboard = () => (
  <Layout>
    <MainTitle icon={faChartLine} title={"Dashboard"} />
  </Layout>
)

export default Dashboard
