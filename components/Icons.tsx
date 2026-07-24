/* Icon geometry follows Reddit's own RPL icon set (20x20 grid).
   Downvote is the upvote path mirrored, so the two are exactly symmetrical. */

type IconProps = { className?: string; filled?: boolean };

const UPVOTE_PATH =
  "M12.877 19H7.123A1.125 1.125 0 0 1 6 17.875v-7.5H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.573a1.128 1.128 0 0 1 1.668 0l7.877 7.759a1.25 1.25 0 0 1 .171 1.343 1.114 1.114 0 0 1-1.007.7H14v7.5A1.125 1.125 0 0 1 12.877 19Z";

export function ArrowUp({ className, filled = false }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={UPVOTE_PATH}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ArrowDown({ className, filled = false }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={UPVOTE_PATH}
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        transform="rotate(180 10 10)"
      />
    </svg>
  );
}

export function CommentIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export function ShareIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13.5V2.5" />
      <path d="m6 6.2 4-3.7 4 3.7" />
      <path d="M4 11v5.5A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V11" />
    </svg>
  );
}

export function BookmarkIcon({ className, filled = false }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 2.5h10a1 1 0 0 1 1 1v14l-6-4-6 4v-14a1 1 0 0 1 1-1Z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MoreIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="16"
      height="16"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <circle cx="4" cy="10" r="1.6" />
      <circle cx="10" cy="10" r="1.6" />
      <circle cx="16" cy="10" r="1.6" />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="18"
      height="18"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="8.75" cy="8.75" r="6" />
      <path d="m13.2 13.2 4.3 4.3" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <path d="M12.9 1.6a1 1 0 0 1 1.42 0l4.08 4.08a1 1 0 0 1-.7 1.71 3.2 3.2 0 0 0-2.2.86l-.5.5 1.06 3.63a1 1 0 0 1-.25 1l-1 1a1 1 0 0 1-1.42 0L10.1 12.1l-4.4 4.4a1 1 0 0 1-1.42-1.42l4.4-4.4-2.28-3.29a1 1 0 0 1 0-1.41l1-1a1 1 0 0 1 1-.25l3.63 1.06.5-.5a3.2 3.2 0 0 0 .86-2.2 1 1 0 0 1 .51-.49Z" />
    </svg>
  );
}

export function ChevronDown({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      width="14"
      height="14"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

/* Snoo, redrawn. Reddit's mark is trademarked, so this is a simplified
   original tribute rather than a copy of the official asset. */
export function Snoo({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      width="32"
      height="32"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="16" r="16" fill="var(--orange)" />
      <circle cx="16" cy="7.4" r="1.7" fill="#fff" />
      <path
        d="M16 9.1v1.6"
        stroke="#fff"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <ellipse cx="16" cy="17.4" rx="8.3" ry="6.4" fill="#fff" />
      <circle cx="6.6" cy="15.6" r="2.9" fill="#fff" />
      <circle cx="25.4" cy="15.6" r="2.9" fill="#fff" />
      <circle cx="12.7" cy="16.6" r="1.5" fill="var(--orange)" />
      <circle cx="19.3" cy="16.6" r="1.5" fill="var(--orange)" />
      <path
        d="M12.6 20.3c.9.8 2 1.2 3.4 1.2s2.5-.4 3.4-1.2"
        fill="none"
        stroke="var(--orange)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
