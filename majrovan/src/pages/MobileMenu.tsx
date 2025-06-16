

import { NavLink } from 'react-router-dom';
import styles from './mobileMenu.module.css';


interface MobileMenuProps {
  onClose: () => void;    
}

export default function MobileMenu({ onClose }: MobileMenuProps) {

  return (
      <nav
        id="mobile-menu"
        className={styles.mobileMenuContent}
        onClick={e => e.stopPropagation()}
      >
        <NavLink to="/" onClick={onClose} className={({ isActive }) => (isActive ? styles.active : "")}>Hem</NavLink>
        <NavLink to="/gallery" onClick={onClose} className={({ isActive }) => (isActive ? styles.active : "")}>Köp våra produkter</NavLink>
        <NavLink to="/blog"    onClick={onClose} className={({ isActive }) => (isActive ? styles.active : "")}>Blogg</NavLink>
        <NavLink to="/calendar" onClick={onClose} className={({ isActive }) => (isActive ? styles.active : "")}>Kalender</NavLink>
        <NavLink to="/aboutUs"  onClick={onClose} className={({ isActive }) => (isActive ? styles.active : "")}>Om oss</NavLink>
      </nav>
  );
}
