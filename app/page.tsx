import { Banner } from "@/components/Banner";
import { CommentComposer } from "@/components/CommentComposer";
import { Header } from "@/components/Header";
import { ChevronDown } from "@/components/Icons";
import { PostCard } from "@/components/PostCard";
import { Sidebar } from "@/components/Sidebar";
import { POSTS } from "@/content/posts";
import styles from "./page.module.css";

export default function Page() {
  return (
    <>
      <Header />

      <main className={styles.shell}>
        <Banner />

        <div className={styles.columns}>
          <div className={styles.feed}>
            <div className={styles.sortBar}>
              <span className={`${styles.sortPill} ${styles.sortPillActive}`}>
                Hot
                <ChevronDown />
              </span>
              <span className={styles.sortPill}>New</span>
              <span className={styles.sortPill}>Top</span>
            </div>

            {POSTS.map((post) => (
              <PostCard key={post.meta.id} post={post.meta}>
                {post.body}
              </PostCard>
            ))}

            <CommentComposer />
          </div>

          <div className={styles.sidebarCol}>
            <Sidebar />
          </div>
        </div>
      </main>

      <footer className={styles.footer} id="sourcing">
        <div className={styles.footerInner}>
          <div className={styles.sourcing}>
            <h2 className={styles.sourcingTitle}>On sourcing</h2>
            <p>
              Reddit&rsquo;s own published figures are linked to the shareholder
              letter or the trade press that carried the announcement. Case study
              numbers are as reported by brands, agencies and awards submissions,
              not independently audited. The 90 day playbook and the graduation
              criteria are reconstructed from the job description language plus
              standard mid-market practice, because Reddit&rsquo;s internal SLAs
              are not public.
            </p>
            <p>
              Four claims changed while I was building this, and the corrections
              are left visible in the posts rather than quietly removed. Three
              more are marked as things I looked for and could not confirm,
              mostly because Reddit&rsquo;s help centre and ads API would not
              load for me. If something here is still wrong, rule 4 applies.
            </p>
          </div>

          <p className={styles.disclaimer}>
            An independent pitch by a job applicant. Not affiliated with,
            endorsed by, or published by Reddit, Inc. r/FRITES is not a real
            subreddit, though it is the real internal name of the France, Italy
            and Spain team, which is how it shows up in Reddit&rsquo;s own job
            postings. Reddit product names, figures and positioning were checked
            against public sources in July 2026.
          </p>
        </div>
      </footer>
    </>
  );
}
