import * as React from "react"
import { Link } from "gatsby"
import OrgIcon from "../../images/components/icon-products-origination.png"
import CreditIcon from "../../images/components/icon-products-creditai.png"
import ServIcon from "../../images/components/icon-products-servicing.png"
import MgmtIcon from "../../images/components/icon-products-management.png"
import * as styles from "./productNav.module.css"

const ProductNav = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.container}>
        <Link className={styles.link} to="/loanorigination">
          <div className={styles.imgContainer}>
            <img src={OrgIcon} alt="Orgination Icon" />
          </div>
          <h3 className={styles.linkTitle}>ORIGINATION</h3>
        </Link>

        <Link className={styles.link} to="/loancreditai">
          <div className={styles.imgContainer}>
            <img src={CreditIcon} alt="Credit AI Icon" />
          </div>
          <h3 className={styles.linkTitle}>CREDIT AI</h3>
        </Link>

        <Link className={styles.link} to="/loanservicing">
          <div className={styles.imgContainer}>
            <img src={ServIcon} alt="Servicing Icon" />
          </div>
          <h3 className={styles.linkTitle}>SERVICING</h3>
        </Link>

        <Link className={styles.link} to="/loanmanagement">
          <div className={styles.imgContainer}>
            <img src={MgmtIcon} alt="Manament Icon" />
          </div>
          <h3 className={styles.linkTitle}>MANAGEMENT</h3>
        </Link>
      </div>
    </div>
  )
}

export default ProductNav
