import styles from "./Sidebar.module.css";

const COMMUNITIES = [
  { name: "r/PPC", tag: null },
  { name: "r/advertising", tag: null },
  { name: "r/adops", tag: null },
  { name: "r/recruitinghell", tag: "mod posted here once" },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="About this community">
      <section className={styles.card}>
        <h2 className={styles.cardTitle}>About r/FRITES</h2>
        <p className={styles.about}>
          France, Italy, Spain. Mid-market advertisers, onboarded the Reddit way.
        </p>

        <div className={styles.stats}>
          <div>
            <span className={styles.statValue}>1</span>
            <span className={styles.statLabel}>Member</span>
          </div>
          <div>
            <span className={styles.statValue}>1</span>
            <span className={`${styles.statLabel} ${styles.online}`}>
              Online
            </span>
          </div>
        </div>

        <p className={styles.aside}>Hiring would double this.</p>
        <p className={styles.created}>Created March 2026</p>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Rules</h2>
        <ol className={styles.rules}>
          <li>
            <strong>Add value or do not post.</strong> Same rule as the ads.
          </li>
          <li>
            <strong>Remember the human.</strong> On both sides of the ad.
          </li>
          <li>
            <strong>Never broadcast.</strong> If it works on Instagram unchanged,
            it does not belong here.
          </li>
          <li>
            <strong>Feedback is a gift.</strong> Especially the one that stings.
          </li>
          <li>
            <strong>Show the work.</strong> Claims without sources get
            downvoted.
          </li>
        </ol>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Moderators</h2>
        <p className={styles.mod}>
          <span className={styles.modName}>u/thomasgermain</span>
          <span className={styles.modMeta}>Barcelona, ready for Amsterdam</span>
        </p>
        <ul className={styles.linkList}>
          <li>
            <a href="https://adsfellow.app" target="_blank" rel="noopener noreferrer">
              adsfellow.app
            </a>
          </li>
          <li>
            <a href="https://b2blast.com" target="_blank" rel="noopener noreferrer">
              b2blast.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/thomasgermain5"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:thomas.germain155@gmail.com">
              thomas.germain155@gmail.com
            </a>
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Changelog</h2>
        <ul className={styles.changelog}>
          <li className={styles.changeItem}>
            <span className={styles.changeDate}>March 2026</span>
            Rejected for Client Partner. Feedback: not enough C-suite selling.
          </li>
          <li className={styles.changeItem}>
            <span className={styles.changeDate}>March to July 2026</span>
            Kept building. Shipped two products. Kept reading the earnings
            letters.
          </li>
          <li className={`${styles.changeItem} ${styles.changeItemNow}`}>
            <span className={styles.changeDate}>July 2026</span>
            Applied for Acquisition Account Manager. Built this instead of a
            cover letter.
          </li>
        </ul>
      </section>

      <section className={styles.card}>
        <h2 className={styles.cardTitle}>Related communities</h2>
        <ul className={styles.linkList}>
          {COMMUNITIES.map((c) => (
            <li className={styles.community} key={c.name}>
              <span className={styles.communityIcon} aria-hidden="true">
                r/
              </span>
              {c.name}
              {c.tag && <span className={styles.tag}>{c.tag}</span>}
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
