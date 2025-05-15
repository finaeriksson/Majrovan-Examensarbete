

/* MobileMenu.tsx – ett enkelt overlay */

import { NavLink } from 'react-router-dom';
import styles from './mobileMenu.module.css';


interface MobileMenuProps {
  open: boolean;
  onClose: () => void;     // exakt vilken signatur du vill ha
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <nav
        id="mobile-menu"
        className={styles.drawer}
        onClick={e => e.stopPropagation()}
      >
        <NavLink to="/"        onClick={onClose}>Hem</NavLink>
        <NavLink to="/gallery" onClick={onClose}>Galleri</NavLink>
        <NavLink to="/blog"    onClick={onClose}>Blogg</NavLink>
        <NavLink to="/calendar"onClick={onClose}>Kalender</NavLink>
        <NavLink to="/aboutUs"  onClick={onClose}>Om oss</NavLink>
      </nav>
    </div>
  );
}
