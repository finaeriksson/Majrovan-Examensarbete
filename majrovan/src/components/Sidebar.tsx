

import styles from './sidebar.module.css'


interface SidebarProps {
    children: React.ReactNode; //allt innehåll kommer hit
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {



    return (
        
        <div className={styles.sidebarContainer}>
            <div className={styles.content}>
                {children}
            </div>
        </div>       
        
    )
}

export default Sidebar

