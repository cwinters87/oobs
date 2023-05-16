import * as React from 'react'


// stye sheet for this page - Gatby uses .module.css files passing "styles" as an object - classNames are {style.className}
import * as styles from './calendar.module.css'

const Calendar = () => {
    
  return (
        <div className={styles.container} id={styles.redTestID}>


            {/* Insert calendar code here */}


            <h3>Calendar goes here Calendar element replaces this</h3>



        </div>
    )
}

export default Calendar