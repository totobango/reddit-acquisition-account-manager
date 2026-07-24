import { ArrowDown, ArrowUp, CommentIcon } from "./Icons";
import styles from "./MockAd.module.css";

type Comment = { user: string; text: string };

type MockAdProps = {
  brand: string;
  initials: string;
  title: string;
  copy: string;
  cta: string;
  score: number;
  comments: Comment[];
  verdict: string;
  tone: "bad" | "good";
};

export function MockAd({
  brand,
  initials,
  title,
  copy,
  cta,
  score,
  comments,
  verdict,
  tone,
}: MockAdProps) {
  const negative = score < 0;

  return (
    <div className={styles.ad}>
      <div className={styles.head}>
        <span className={styles.avatar} aria-hidden="true">
          {initials}
        </span>
        <span className={styles.brand}>{brand}</span>
        <span className={styles.promoted}>Promoted</span>
      </div>

      <h4 className={styles.title}>{title}</h4>
      <p className={styles.copy}>{copy}</p>
      <span className={styles.cta}>{cta}</span>

      <div className={styles.actions}>
        <span
          className={`${styles.votePill} ${
            negative ? styles.votePillNeg : styles.votePillPos
          }`}
        >
          {negative ? <ArrowDown filled /> : <ArrowUp filled />}
          {score > 0 ? `+${score}` : score}
        </span>
        <span className={styles.miniPill}>
          <CommentIcon />
          {comments.length === 2 ? "2" : String(comments.length)}
        </span>
      </div>

      <div className={styles.thread}>
        {comments.map((c) => (
          <p className={styles.comment} key={c.user}>
            <span className={styles.commentUser}>{c.user}</span>
            <span className={styles.commentText}>{c.text}</span>
          </p>
        ))}
      </div>

      <p
        className={`${styles.verdict} ${
          tone === "bad" ? styles.verdictBad : styles.verdictGood
        }`}
      >
        {verdict}
      </p>
    </div>
  );
}

export function MockAdPair({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}
