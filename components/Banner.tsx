import styles from "./Banner.module.css";

export function Banner() {
  return (
    <div className={styles.wrap} id="top">
      <div className={styles.banner} aria-hidden="true" />

      <div className={styles.identity}>
        <div className={styles.icon}>
          <span className={styles.iconInner} aria-hidden="true">
            {/* France, Italy, Spain. */}
            🍟
          </span>
        </div>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>r/FRITES</h1>
          <a className={styles.joinBtn} href="#post-ama">
            Join
          </a>
        </div>
      </div>

      <p className={styles.description}>
        France, Italy, Spain. Mid-market advertisers, onboarded the Reddit way. A
        community of one, for now.
      </p>
    </div>
  );
}
