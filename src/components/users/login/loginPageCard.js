import * as React from "react"
import * as styles from "./loginPageCard.module.css"
import LoginForm from "./loginForm"

const LoginPageCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <div className={styles.box}>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default LoginPageCard
