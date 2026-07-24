import { SearchIcon, Snoo } from "./Icons";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top">
        <Snoo className={styles.snoo} />
        <span className={styles.wordmark}>reddit</span>
      </a>

      {/* Decorative. Read-only so nobody types into a box that cannot answer. */}
      <div className={styles.search} role="search">
        <SearchIcon />
        <input
          className={styles.searchInput}
          type="text"
          readOnly
          placeholder="Search r/FRITES"
          aria-label="Search r/FRITES. Decorative, this copy of Reddit has no search."
          tabIndex={-1}
        />
      </div>

      <div className={styles.actions}>
        <a className={styles.ghostBtn} href="#post-ama">
          Get in touch
        </a>
        <span className={styles.user}>
          <span className={styles.avatar} aria-hidden="true">
            TG
          </span>
          <span className={styles.username}>u/thomasgermain</span>
        </span>
      </div>
    </header>
  );
}
