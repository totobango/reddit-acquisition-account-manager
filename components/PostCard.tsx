"use client";

import { useId, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  BookmarkIcon,
  ChevronDown,
  CommentIcon,
  MoreIcon,
  PinIcon,
  ShareIcon,
} from "./Icons";
import styles from "./PostCard.module.css";

export type FlairTone =
  | "blue"
  | "orange"
  | "green"
  | "purple"
  | "red"
  | "slate";

export type PostMeta = {
  id: string;
  flair: string;
  tone: FlairTone;
  title: string;
  score: number;
  comments: number | "open";
  age: string;
  pinned?: boolean;
};

const flairClass: Record<FlairTone, string> = {
  blue: styles.flairBlue,
  orange: styles.flairOrange,
  green: styles.flairGreen,
  purple: styles.flairPurple,
  red: styles.flairRed,
  slate: styles.flairSlate,
};

function formatScore(n: number): string {
  if (Math.abs(n) < 1000) return String(n);
  const k = n / 1000;
  // Reddit drops the decimal once the count reaches 10k.
  return Math.abs(k) >= 10 ? `${Math.round(k)}k` : `${k.toFixed(1)}k`;
}

type Vote = 0 | 1 | -1;

export function PostCard({
  post,
  children,
}: {
  post: PostMeta;
  children: React.ReactNode;
}) {
  const [vote, setVote] = useState<Vote>(0);
  const [open, setOpen] = useState(Boolean(post.pinned));
  const [saved, setSaved] = useState(false);
  const bodyId = useId();

  const score = post.score + vote;

  const cast = (next: Vote) => setVote((v) => (v === next ? 0 : next));

  const votePillClass = [
    styles.votePill,
    vote === 1 ? styles.votePillUp : "",
    vote === -1 ? styles.votePillDown : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={styles.post} id={post.id}>
      {post.pinned && (
        <p className={styles.pinnedTag}>
          <PinIcon />
          Pinned by moderators
        </p>
      )}

      <div className={styles.meta}>
        <span className={styles.metaAvatar} aria-hidden="true">
          TG
        </span>
        <span className={styles.metaUser}>u/thomasgermain</span>
        <span className={styles.dot} />
        <span>{post.age}</span>
      </div>

      <div className={styles.flairRow}>
        <span className={`${styles.flair} ${flairClass[post.tone]}`}>
          {post.flair}
        </span>
      </div>

      <button
        type="button"
        className={styles.titleBtn}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        <h2 className={styles.title}>{post.title}</h2>
      </button>

      <div
        id={bodyId}
        className={`${styles.bodyWrap} ${open ? styles.bodyWrapOpen : ""}`}
      >
        <div className={styles.body}>{children}</div>
      </div>

      <button
        type="button"
        className={styles.readMore}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={bodyId}
      >
        {open ? "Show less" : "Read more"}
        <ChevronDown className={open ? styles.chevronOpen : undefined} />
      </button>

      <div className={styles.actions}>
        <div className={votePillClass}>
          <button
            type="button"
            className={`${styles.voteBtn} ${
              vote === 1 ? styles.voteBtnActive : ""
            }`}
            onClick={() => cast(1)}
            aria-pressed={vote === 1}
            aria-label={`Upvote. Current score ${score}.`}
          >
            <ArrowUp filled={vote === 1} />
          </button>
          <span className={styles.score} aria-hidden="true">
            {formatScore(score)}
          </span>
          <button
            type="button"
            className={`${styles.voteBtn} ${styles.voteBtnDown} ${
              vote === -1 ? styles.voteBtnActive : ""
            }`}
            onClick={() => cast(-1)}
            aria-pressed={vote === -1}
            aria-label={`Downvote. Current score ${score}.`}
          >
            <ArrowDown filled={vote === -1} />
          </button>
        </div>

        <a className={styles.pill} href="#composer">
          <CommentIcon />
          {post.comments === "open" ? "Open" : formatScore(post.comments)}
          <span className="srOnly"> comments</span>
        </a>

        <button
          type="button"
          className={`${styles.pill} ${saved ? styles.pillActive : ""}`}
          onClick={() => setSaved((s) => !s)}
          aria-pressed={saved}
        >
          <BookmarkIcon filled={saved} />
          {saved ? "Saved" : "Save"}
        </button>

        <a
          className={styles.pill}
          href="#composer"
          aria-label="Share. In this copy of Reddit that just points at the contact block."
        >
          <ShareIcon />
          Share
        </a>

        <span className={styles.pill} aria-hidden="true">
          <MoreIcon />
        </span>
      </div>
    </article>
  );
}
