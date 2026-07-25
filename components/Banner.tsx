import { Fragment } from "react";
import styles from "./Banner.module.css";

const NBSP = " ";

/* Each part is glued to its separator by a non-breaking space and followed by a
   normal one, so a wrap can only ever fall after the dot. The parenthetical is
   held together the same way. Written as JS strings rather than &nbsp; entities
   because SWC drops the leading space of a JSX text node containing an entity. */
const CONTEXT = [
  `Acquisition Account Manager, Mid-Market (Southern${NBSP}Europe)`,
  "Amsterdam",
  "Application by Thomas Germain",
];

export function Banner() {
  return (
    <div className={styles.wrap} id="top">
      {/* The banner carries the one line that tells a forwarded reader what
          this page is, in white on the dark end of the gradient. */}
      <div className={styles.banner}>
        <p className={styles.contextLine}>
          {CONTEXT.map((part, i) => (
            <Fragment key={part}>
              {part}
              {i < CONTEXT.length - 1 && (
                <>
                  <span className={styles.sep} aria-hidden="true">
                    {`${NBSP}·`}
                  </span>{" "}
                </>
              )}
            </Fragment>
          ))}
        </p>
      </div>

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
