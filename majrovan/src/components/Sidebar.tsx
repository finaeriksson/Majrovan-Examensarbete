

import MajrovanCalendar from './Calendar/MajrovanCalendar'
import styles from './sidebar.module.css'

const Sidebar: React.FC = () => {



    return (
        <>
        <div className={styles.sidebarContainer}>
            <div className={styles.calendarContainer}>
                <MajrovanCalendar></MajrovanCalendar>
            </div>

        </div>
        
        </>
    )
}

export default Sidebar