import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './menu.module.css'

const DashboardMenu = () => {
    
  return (
        <div className={styles.sectionWrapper}>
            <div className={styles.container}>
                <Link to='/development/docs'>Documentation</Link>
            </div>
        </div>
            
    )
}

export default DashboardMenu