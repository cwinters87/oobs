import * as React from "react"
import * as styles from "./statusHero.module.css"

const StatusHero = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>STATUS</h1>
      <p className={styles.subTitle}>
        Welcome to the Tasksuite status page. Here you will find real-time
        information about the status of our services.
      </p>
    </main>
  )
}

export default StatusHero
