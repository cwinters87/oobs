import * as React from "react"
import { Link } from "gatsby"
import * as styles from "./comingSoon.module.css"

const ComingSoonCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <h1>Coming Soon!</h1>
        <p>
          Thank you for visiting our website. We're currently working hard to
          bring you an exceptional online experience as we rebrand TaskSuite.
          The page you're trying to access is under construction and will be
          available soon.
        </p>
        <p>
          In the meantime, if you have any questions or need assistance, please
          don't hesitate to contact our support team at{" "}
          <a href="mailto:info@tasksuite.com">info@tasksuite.com</a> or call us
          at <a href="tel:512.900.7468">512-900-7468.</a>
        </p>
        <p>
          We appreciate your patience and look forward to serving you better
          with our enhanced website. Stay tuned!
        </p>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  )
}

export default ComingSoonCard
