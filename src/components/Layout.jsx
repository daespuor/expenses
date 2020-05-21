import React from "react"
import styles from "./layout.module.css"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <main className={styles.mainLayout}>
    <Header />
    <div className={styles.content}>{children}</div>
    <Footer />
  </main>
)

export default Layout
