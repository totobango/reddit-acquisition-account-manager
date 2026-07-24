import styles from "./Prose.module.css";

/*
  Four provenance states, used inline right after the claim they qualify.
  Rule 5 of the sub is "show the work", so every number on this page carries
  one of these, or it does not appear.
*/

export function Sourced({ href, label }: { href: string; label: string }) {
  return (
    <a
      className={`${styles.chip} ${styles.chipSourced}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      <span className="srOnly"> (source, opens in a new tab)</span>
    </a>
  );
}

export function Reconstructed({ label = "reconstructed" }: { label?: string }) {
  return (
    <span className={`${styles.chip} ${styles.chipReconstructed}`}>
      {label}
      <span className="srOnly">: my inference, not a Reddit fact</span>
    </span>
  );
}

export function Unverified({ label = "could not verify" }: { label?: string }) {
  return (
    <span className={`${styles.chip} ${styles.chipUnverified}`}>
      {label}
      <span className="srOnly">: I looked and could not confirm this</span>
    </span>
  );
}

export function Corrected({ label = "corrected" }: { label?: string }) {
  return (
    <span className={`${styles.chip} ${styles.chipCorrected}`}>
      {label}
      <span className="srOnly">: an earlier draft of this page had this wrong</span>
    </span>
  );
}

export function SourceLegend() {
  return (
    <div className={styles.legend}>
      <span>
        <Sourced href="#sourcing" label="source" /> public and linked
      </span>
      <span>
        <Reconstructed /> my inference
      </span>
      <span>
        <Unverified /> looked, could not confirm
      </span>
      <span>
        <Corrected /> I had it wrong
      </span>
    </div>
  );
}
