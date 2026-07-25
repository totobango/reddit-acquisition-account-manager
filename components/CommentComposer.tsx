"use client";

import { useState } from "react";
import styles from "./CommentComposer.module.css";

const EMAIL = "thomas.germain155@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/thomasgermain5";

export function CommentComposer() {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.wrap} id="composer" aria-label="Get in touch">
      <div className={styles.row}>
        <span className={styles.avatar} aria-hidden="true">
          TG
        </span>
        <span className={styles.rowLabel}>
          Comment as <span className={styles.rowUser}>u/thomasgermain</span>
        </span>
      </div>

      {open ? (
        <div className={styles.open}>
          <p className={styles.openText}>
            Comments are open everywhere else on Reddit. Here, just email me:{" "}
            <a className={styles.mailLink} href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </p>
          <p className={styles.linkedinRow}>
            <a
              className={styles.linkedinLink}
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p className={styles.footnote}>
            No form, nothing to fill in, nothing gets sent from this page.
          </p>
        </div>
      ) : (
        <button
          type="button"
          className={styles.box}
          onClick={() => setOpen(true)}
          aria-expanded={false}
        >
          <span className={styles.placeholder}>What are your thoughts?</span>
          <span className={styles.boxActions}>
            <span className={styles.commentBtn}>Comment</span>
          </span>
        </button>
      )}
    </section>
  );
}
