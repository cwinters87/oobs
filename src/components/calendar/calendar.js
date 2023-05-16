import * as React from 'react'


// stye sheet for this page - Gatby uses .module.css files passing "styles" as an object - classNames are {style.className}
import * as styles from './calendar.module.css'

const Calendar = () => {
    
  return (
        <div className={styles.container} id={styles.redTestID}>


            {/* Insert calendar code here */}


            <h3>Calendar goes here Calendar element replaces this</h3>
            <p><a href="https://outlook.office.com/bookwithme/user/bcbbef8724bc4439a5700619135c328c%40tasksuite.com/meetingtype/2DbWGyEG4UCTKTCJX5on9w2?anonymous" target="_blank" rel="noreferrer">click to schedule (do not want click)</a></p>



        </div>
    )
}

export default Calendar