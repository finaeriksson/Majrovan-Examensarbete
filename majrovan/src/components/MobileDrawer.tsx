import { useEffect, useRef } from "react";
import styles from "./mobileDrawer.module.css";

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, children }) => {

    //Ref för stäng‐knappen
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // Ref för hela sidopanelen (<aside>) för att hitta fokusbara element
    const drawerRef = useRef<HTMLElement>(null);

    //Funktion som stänger menyn på Escape 
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

    // Funktion för att fånga Tab/Shift+Tab inuti panelen
    useEffect(() => {
        if (!open) return;

        //Blockera body-scroll och sätt initialt fokus på stäng-knappen
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            closeButtonRef.current?.focus();
        }, 0);

        // --- Definiera handleTabKey inuti useEffect så att referensen aldrig ändras efter registrering ---
        function handleTabKey(e: KeyboardEvent) {
            if (e.key !== "Tab") {
                return;
            }

            const focusableSelectors = [
                'button:not([disabled])',
                'a[href]',
                'input:not([disabled])',
                'select:not([disabled])',
                'textarea:not([disabled])',
                '[tabindex]:not([tabindex="-1"])',
            ].join(", ");

            const drawerNode = drawerRef.current;
            if (!drawerNode) {
                return;
            }

            const focusableElems = Array.from(
                drawerNode.querySelectorAll<HTMLElement>(focusableSelectors)
            ).filter((el) => el.offsetParent !== null);

            if (focusableElems.length === 0) {
                return;
            }

            const firstElem = focusableElems[0];
            const lastElem = focusableElems[focusableElems.length - 1];
            const currentElem = document.activeElement as HTMLElement;

            if (!e.shiftKey && currentElem === lastElem) {
                e.preventDefault();
                firstElem.focus();
            } else if (e.shiftKey && currentElem === firstElem) {
                e.preventDefault();
                lastElem.focus();
            }
        }

        // --- Registrera keydown‐lyssnarna (Escape och Tab) ---
        function handleEscape(e: KeyboardEvent) {
            if (e.key === "Escape") {
                onClose();
            }
        }

        document.addEventListener("keydown", handleEscape);
        document.addEventListener("keydown", handleTabKey);

        // --- Cleanup: ta bort listenrar och återställ body‐scroll när open blir false eller komponent unmounts ---
        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
            document.removeEventListener("keydown", handleTabKey);
        };
    }, [open, onClose]);

    // --- 6) Om panelen är stängd, rendera ingenting ---
    if (!open) return null;


    return (
        <div className={styles.overlay} onClick={onClose}>
            <aside
                id="mobile-menu"
                className={styles.mobileMenu}
                ref={drawerRef}
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

