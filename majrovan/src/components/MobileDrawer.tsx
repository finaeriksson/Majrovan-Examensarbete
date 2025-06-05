import { useEffect, useRef } from "react";
import styles from "./mobileDrawer.module.css";

interface MobileDrawerProps{
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, children }) => {

  const closeButtonRef = useRef<HTMLButtonElement>(null);


 // När menyn öppnas, sätt fokus på stäng‐knappen och blockera scroll på body
  useEffect(() => {
    if (open) {
      // Vänta en tick så att fokus sätts när elementet renderats
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);

      // Hindra scroll av sidan bakom
      document.body.style.overflow = "hidden";
    } else {
      // Återställ scroll när menyn stängs
      document.body.style.overflow = "";
    }
  }, [open]);

  // Lyssna på Escape för att stänga menyn
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        onClose();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  // Rendera ingenting om open === false
  if (!open) return null;


    return (
        <div className={styles.overlay} onClick={onClose}>
            <aside 
                id="mobile-menu"
                className={styles.mobileMenu}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-menu-title"
                onClick={e => e.stopPropagation()} /* hindra stängning när man klickar i drawer */
                >
                    {/* Dold rubrik, bara för skärmläsare */}
                    <h2 id="mobile-menu-title" className={styles.srOnly}>Webbplatsens huvudmeny</h2> 

                    <button 
                        ref={closeButtonRef}
                        className={styles.close} 
                        onClick={onClose}
                        aria-label="Stäng meny">
                            X
                    </button> 
                {/* här renderas MobileMenu länkarna som children */}
                {children}
            </aside>
        </div>
    )
}

export default MobileDrawer

