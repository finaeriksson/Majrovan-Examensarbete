import { useEffect } from "react";
import styles from "./mobileMenu.module.css";

interface MenuProps {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const MobileDrawer: React.FC<MenuProps> = ({ open, onClose, children }) => {

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        }, [open]);

    if (!open) return null;


    return (
        <div className={styles.overlay} onClick={onClose}>
            <aside 
                className={styles.mobileMenu}
                role="dialog"
                aria-modal="true"
                /* hindra stängning när man klickar i drawer */
                onClick={e => e.stopPropagation()}
                >
                    <button className={styles.close} onClick={onClose}>X</button> 
                    {children}
            </aside>
        </div>
    )
}

export default MobileDrawer

