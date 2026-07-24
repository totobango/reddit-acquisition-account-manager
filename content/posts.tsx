import type { PostMeta } from "@/components/PostCard";
import { MockAd, MockAdPair } from "@/components/MockAd";
import {
  Corrected,
  Reconstructed,
  SourceLegend,
  Sourced,
  Unverified,
} from "@/components/Source";
import p from "@/components/Prose.module.css";
import { S } from "./sources";

export type Post = { meta: PostMeta; body: React.ReactNode };

export const POSTS: Post[] = [
  /* ---------------------------------------------------------------- 1 */
  {
    meta: {
      id: "post-playbook",
      flair: "Playbook",
      tone: "blue",
      title:
        "[MEGATHREAD] How I would onboard a French mid-market advertiser on Reddit in 90 days",
      score: 847,
      comments: 112,
      age: "3h",
      pinned: true,
    },
    body: (
      <>
        <SourceLegend />

        <div className={p.tldr}>
          <strong>TL;DR:</strong> Week 1 setup and discovery. Week 2 first
          campaign live. Weeks 3 to 4 first signals and pruning. Month 2
          iteration and scaling. Months 3 to 6 proof of value, then graduation to
          Same Store Growth. The whole thing runs on a written Test and Learn
          roadmap the client can see.
        </div>

        <p>
          Before the plan, the honest part: this is a reconstruction.
          <Reconstructed /> Reddit does not publish its internal onboarding SLAs
          or its graduation criteria. What is public is the job description
          itself, which names the Same Store Growth team, a continuous Test and
          Learn roadmap, and Measurement Lift methodologies.
          <Sourced href={S.amJob} label="Reddit job posting" /> Everything below
          is that language plus how onboarding actually worked at Google,
          LinkedIn and Pinterest.
        </p>

        <h3 className={p.h}>Week 1: Discovery and setup</h3>
        <ul className={p.ul}>
          <li>
            Discovery call, picked up from the Client Partner: business goals,
            funnel, budget, seasonality, target KPIs, and what they already
            learned on Meta and Google.
          </li>
          <li>
            Technical setup: Business Manager, ad account, Reddit Pixel via GTM,
            Conversions API, product catalog if e-commerce. Set the currency to
            EUR deliberately on day one rather than by accident: I have seen it
            written in several places that currency is fixed at account creation,
            but I could not load Reddit&rsquo;s own help page to confirm it, and I
            am not going to state it as fact.
            <Unverified />
          </li>
          <li>
            Signal verification in Events Manager before spending a single euro.
          </li>
          <li>Deliverable: a shared Test and Learn roadmap document.</li>
        </ul>

        <h3 className={p.h}>Week 2: First campaign live</h3>
        <ul className={p.ul}>
          <li>
            Minimal but clean structure: one clear objective, two to three ad
            groups (broad interest, targeted community, retargeting).
          </li>
          <li>
            Creative adapted to Reddit, not recycled from Meta. If we bring
            campaigns across with the Meta import (sign in to Meta inside Reddit
            Ads Manager, pick the account and campaign, then customise it), the
            customise step is where the actual work happens.
            <Sourced href={S.smbTools} label="Search Engine Land" /> That import
            shipped in March 2025 as an SMB tool. It is not part of Max, and
            treating it as a one click migration is how you end up running
            Instagram copy in a comment thread.
          </li>
          <li>
            Time to launch is the metric that matters in this phase. Every day
            between signature and first spend is a day the revenue clock is not
            running.
          </li>
        </ul>

        <h3 className={p.h}>Weeks 3 to 4: First signals</h3>
        <ul className={p.ul}>
          <li>
            Read the first data: CTR, CVR, CPA, plus the two signals that only
            exist here, the upvote to downvote ratio and what the comments
            actually say.
          </li>
          <li>Prune the communities that do not convert.</li>
          <li>First A/B tests on creative and audience.</li>
        </ul>

        <h3 className={p.h}>Month 2: Iteration and scaling</h3>
        <ul className={p.ul}>
          <li>Introduce Conversation Ads for mid funnel intent.</li>
          <li>
            Add Dynamic Product Ads if e-commerce. DPA went generally available
            in May 2025.
            <Sourced href={S.dpa} label="PPC Land" />
          </li>
          <li>
            Consider Reddit Max, but not on day one. My own rule is to wait until
            the account has a stable conversion volume before handing the
            algorithm the wheel, because a learning phase paid for with a mid
            market client&rsquo;s first month is an expensive way to learn.
            Reddit has not published a minimum conversion threshold for Max that
            I could find, so treat the specific number I would use internally as
            my heuristic, not their rule.
            <Reconstructed label="my rule of thumb" />
          </li>
          <li>Increase budget on the segments that are working.</li>
        </ul>

        <h3 className={p.h}>Months 3 to 6: Proof of value and graduation</h3>
        <ul className={p.ul}>
          <li>
            Demonstrate value with Measurement Lift, not last click alone. The
            job description asks for this by name.
            <Sourced href={S.amJob} label="Reddit job posting" />
          </li>
          <li>Expand budget on what survived the tests.</li>
          <li>
            Hand over to the Same Store Growth team with a written playbook, so
            the AE inheriting the account does not restart discovery.
          </li>
        </ul>

        <div className={p.note}>
          <span className={p.noteLabel}>One caveat</span>
          If the real process is different, I would rather be corrected on day
          one than pretend I already know it. The parts I am confident about are
          the ones that transfer: sequencing, isolating variables, and refusing to
          spend before the measurement works.
        </div>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 2 */
  {
    meta: {
      id: "post-feedback",
      flair: "Feedback",
      tone: "orange",
      title:
        "I applied to Reddit in March. I got rejected. Here is what I did with the feedback.",
      score: 1200,
      comments: 203,
      age: "5h",
    },
    body: (
      <>
        <p>
          In March 2026 I interviewed for Acquisition Client Partner, Mid-Market.
          Bérengère told me I did not have enough experience selling at CMO
          level.
        </p>
        <p>
          She was right. That role is a hunter role, built on senior relationship
          selling and closing net new. I have six years of account management,
          and most of my conversations happen with marketing managers and digital
          leads, not with C-suite.
        </p>
        <p>So I did two things.</p>
        <p>
          <strong>First, I accepted it.</strong>{" "}
          Not in the polite &ldquo;thanks
          for the feedback&rdquo; way. I went back through my own pitch and found
          the gap she was pointing at. It was there.
        </p>
        <p>
          <strong>Second, I kept watching Reddit.</strong> Advertising revenue
          grew 74 percent year over year in Q1 2026, to 625 million dollars.
          <Sourced href={S.q1Letter} label="Q1 2026 letter" /> International
          revenue grew 76 percent against 67 percent in the US, so the rest of the
          world is now the faster half of the business.
          <Sourced href={S.q1Letter} label="Q1 2026 letter" />
        </p>
        <p>
          Two corrections to things I nearly wrote on this page, because rule 5
          applies to me before it applies to anyone else.
        </p>
        <ul className={p.ul}>
          <li>
            I was going to say &ldquo;seventh consecutive quarter above 60
            percent ad revenue growth&rdquo;. That streak is{" "}
            <em>total</em> revenue, not advertising revenue. Total revenue grew
            69 percent. Advertising grew 74. Close enough to sound right, wrong
            enough that someone who works there would notice.
            <Corrected />
          </li>
          <li>
            I had a Europe ARPU figure of 1.17 dollars in my draft. Reddit does
            not report a Europe ARPU. It reports three: Global 5.23, US 9.63,
            International 2.02.
            <Sourced href={S.q1Letter} label="Q1 2026 letter" /> So I took my
            number out and used theirs.
            <Corrected />
          </li>
        </ul>
        <p>
          The real gap is more interesting than the one I invented anyway. A US
          Redditor is worth 9.63 dollars a quarter and an international one is
          worth 2.02. International ARPU grew 51 percent year over year, off a
          much smaller base. That is either a problem or the largest unclosed gap
          on the platform, depending on which side of it you are sitting.
        </p>
        <p>
          Then this role opened. Acquisition Account Manager. Post signature.
          Onboard, build the Test and Learn roadmap, optimise, prove value in the
          first six months, graduate the account to Same Store Growth.
          <Sourced href={S.amJob} label="Reddit job posting" />
        </p>
        <p>
          That is not the role I was rejected for. That is the role I have been
          doing for six years.
        </p>
        <p>
          At Pinterest I onboarded advertisers onto a platform almost nobody knew
          how to use, from scratch, and got promoted in under a year. At LinkedIn
          I ran 75+ mid-market accounts and beat target three years running. At
          Google I hit 125 percent of quota across 100+ accounts.
        </p>
        <p>
          I am not reapplying to the same job. I am applying to the one I am
          actually built for.
        </p>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 3 */
  {
    meta: {
      id: "post-creative",
      flair: "Guide",
      tone: "green",
      title:
        "Broadcasting vs adding to the conversation: the same creative, twice",
      score: 634,
      comments: 89,
      age: "8h",
    },
    body: (
      <>
        <p>
          Same product, same budget, same audience. The only variable is whether
          the ad talks at the subreddit or to it.
        </p>

        <MockAdPair>
          <MockAd
            tone="bad"
            brand="u/BrandFR"
            initials="BF"
            title="Introducing our revolutionary new skincare line!"
            copy="Discover the best-in-class formula that transforms your skin in just 7 days. Shop now and get 20% off your first order!"
            cta="Shop now"
            score={-47}
            comments={[
              { user: "u/skincare_throwaway", text: "cool ad, downvoted" },
              { user: "u/mildlyannoyed", text: "the exclamation marks alone" },
            ]}
            verdict="Broadcasting"
          />
          <MockAd
            tone="good"
            brand="u/BrandFR"
            initials="BF"
            title="We reformulated our serum because r/SkincareAddiction told us the old one pilled under sunscreen"
            copy="Took us 8 months. The new one uses a lighter silicone base. It still costs the same. Some of you will not notice a difference and that is fine, but if you were one of the people who commented about pilling, this one is for you. Happy to answer questions in the comments."
            cta="Read the reformulation notes"
            score={312}
            comments={[
              {
                user: "u/skincare_throwaway",
                text: "ok this is actually how you do it",
              },
              {
                user: "u/mildlyannoyed",
                text: "respect for admitting the old one had a problem",
              },
            ]}
            verdict="Adding to the conversation"
          />
        </MockAdPair>

        <p>
          Version B acknowledges a real complaint, names the community it came
          from, admits a limitation (&ldquo;some of you will not notice a
          difference&rdquo;), and opens the comments instead of closing them.
        </p>
        <p>
          The test I use with clients: if the same creative can run unchanged on
          Instagram, LinkedIn and Reddit, it is too generic for Reddit.
        </p>
        <p>
          This is also why the upvote to downvote ratio is a KPI here and
          essentially nowhere else. A creative can hold an acceptable CTR and
          still be getting taken apart in the comments, and that is a leading
          indicator that the CPA is about to follow. You get feedback on your
          ads in real time, from the audience, in public. Most advertisers read
          that as a risk. It is the cheapest research in digital advertising.
        </p>
        <div className={p.note}>
          <span className={p.noteLabel}>On the phrasing</span>
          &ldquo;Adding to the conversation&rdquo; is how I describe this, and
          the idea is close to what Reddit tells advertisers. I could not load
          Reddit&rsquo;s Creative Best Practices page to confirm the exact
          official wording, so I am not putting it in quotation marks and
          attributing it to them.
          <Unverified />
        </div>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 4 */
  {
    meta: {
      id: "post-testlearn",
      flair: "Test & Learn",
      tone: "purple",
      title: "The 5 hypotheses I would test in the first 8 weeks",
      score: 421,
      comments: 56,
      age: "11h",
    },
    body: (
      <>
        <p>
          Five tests, run in sequence, each one isolating a single variable so
          the result means something when it comes back.
        </p>
        <div className={p.tableWrap}>
          <table className={p.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Hypothesis</th>
                <th>Isolated variable</th>
                <th>Decision KPI</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>H1</td>
                <td>Community targeting beats broad interest targeting on CPA</td>
                <td>Targeting only</td>
                <td>CPA</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td>H2</td>
                <td>Reddit native creative beats recycled Meta creative</td>
                <td>Creative only</td>
                <td>CTR + upvote ratio</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td>H3</td>
                <td>Conversation Ads convert better than feed placements</td>
                <td>Placement only</td>
                <td>CVR</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td>H4</td>
                <td>Adding Dynamic Product Ads lifts ROAS</td>
                <td>Format added</td>
                <td>ROAS</td>
                <td>2 weeks</td>
              </tr>
              <tr>
                <td>H5</td>
                <td>Reddit Max beats manual campaign management</td>
                <td>Campaign type</td>
                <td>CPA / ROAS</td>
                <td>Month 3</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          One variable per test. A fixed duration. A decision criterion written
          down before the test starts, not after the data comes in.
        </p>
        <p>
          Two things I would tell the client on day one, so we do not have an
          awkward conversation in week six.
        </p>
        <p>
          <strong>Reddit takes longer to read than Meta.</strong> The
          consideration cycle is longer, and conversions keep landing well after
          the impression because people research, leave, and come back. A four
          week test measures signal, not revenue. The specific window I quote to
          clients is based on how these accounts behaved at Pinterest and
          LinkedIn, not on a published Reddit benchmark.
          <Reconstructed />
        </p>
        <p>
          <strong>The attribution will not match your other platforms.</strong>{" "}
          Reddit&rsquo;s default click-through window is 28 days, and it is a
          setting, not a law: the options are 1, 7 or 28 days, and the view
          window cannot be longer than the click window.
          <Sourced href={S.attribution} label="Reddit Ads Help" /> Meta will
          claim some of the same conversions. Both are directionally right and
          neither is the whole truth, which is the entire reason the job
          description asks for Measurement Lift by name.
        </p>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 5 */
  {
    meta: {
      id: "post-max",
      flair: "Discussion",
      tone: "slate",
      title: "Reddit Max changes what a mid-market AM is actually for",
      score: 389,
      comments: 74,
      age: "14h",
    },
    body: (
      <>
        <p>
          Max launched in beta at CES on January 5, 2026. Reddit&rsquo;s own
          description is that it automates targeting, creative selection,
          placements and budget allocation.
          <Sourced href={S.maxSej} label="SEJ" /> Bidding is automated too,
          though that word is not in the four item list Reddit led with.
          <Sourced href={S.maxAdweek} label="Adweek" />
        </p>
        <p>
          It runs on Community Intelligence. At launch that was described as more
          than 23 billion posts and comments.
          <Sourced href={S.maxSmt} label="Social Media Today" /> By the Q1 2026
          shareholder letter in April the figure Reddit uses is over 25 billion,
          so if you are quoting it today, quote the newer one.
          <Sourced href={S.q1Letter} label="Q1 2026 letter" />
        </p>
        <p>
          The published alpha results: over 600 advertisers, 17 split tests run
          between June and August 2025 over a 21 day period, 17 percent lower
          CPA and 27 percent more conversions against business as usual
          campaigns.
          <Sourced href={S.maxSmt} label="Social Media Today" /> Worth noting
          that Reddit has since restated the second number: the same footnote in
          the April letter says &ldquo;over 25 percent&rdquo; more conversions.
          <Sourced href={S.q1Letter} label="Q1 2026 letter" /> The CPA figure did
          not move.
        </p>
        <p>
          Brooks Running reported a 37 percent drop in CPC and 27 percent more
          clicks over a 21 day campaign without a single manual change.
          <Sourced href={S.maxSmt} label="Social Media Today" />
        </p>
        <p>
          The interesting part is not the automation. Everyone has automation
          now: Performance Max, Advantage+, Smart+.
        </p>
        <p>
          The interesting part is <strong>Top Audience Personas</strong>, a
          reporting feature specific to Max campaigns. It clusters your audience
          into readable groups, Reddit&rsquo;s own examples being &ldquo;new
          parents&rdquo; and &ldquo;ambitious home cooks&rdquo;, and shows you who
          is actually responding.
          <Sourced href={S.maxVideoWeek} label="VideoWeek" />
        </p>
        <div className={p.note}>
          <span className={p.noteLabel}>Correction</span>
          I had written that Reddit calls this &ldquo;open box
          reporting&rdquo;. They do not. Reddit&rsquo;s framing is the opposite
          construction, &ldquo;opening the black box&rdquo;. &ldquo;Open
          box&rdquo; is a phrase agency blogs invented afterwards.
          <Corrected />
          <Sourced href={S.maxVideoWeek} label="VideoWeek" />
        </div>
        <p>
          <strong>What that means for this job:</strong> if the algorithm handles
          the bidding, the AM stops being a button pusher and becomes a
          translator. The value moves to reading the personas, turning them into
          creative direction, and explaining to a client why their audience is
          not who they assumed it was.
        </p>
        <p>
          That is a better job. It is also a harder one, because there is no
          optimisation busywork left to hide behind.
        </p>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 6 */
  {
    meta: {
      id: "post-cases",
      flair: "Case Study",
      tone: "red",
      title: "4 campaigns that added to the conversation, with the numbers",
      score: 512,
      comments: 41,
      age: "1d",
    },
    body: (
      <>
        <p>
          I went back through these to check them rather than copy them from a
          roundup. Two of the four had something wrong in the version that
          circulates.
        </p>

        <ul className={p.caseList}>
          <li className={p.case}>
            <h4 className={p.caseName}>Škoda UK, &ldquo;The Redditor Edit&rdquo;</h4>
            <p className={p.caseBody}>
              Co-built with r/CarTalkUK, who specced an Octavia. Reported 255
              percent above target on orders, on a budget of around 500,000
              pounds against a usual car launch spend of 3 to 5 million.
              <Sourced href={S.skodaDrum} label="The Drum" />
              <Sourced href={S.skodaMediaCat} label="MediaCat" /> The name that
              circulates as &ldquo;Redditor Edition&rdquo; is actually &ldquo;The
              Redditor Edit&rdquo;.
              <Corrected />
            </p>
            <p className={p.caseBody}>
              I dropped the &ldquo;84 percent positive sentiment&rdquo; figure
              that appears alongside this case. I could only trace it to one
              aggregator with no citation, and that same page contradicts The
              Drum on mention volume. It may well be true. I could not stand it
              up.
              <Unverified />
            </p>
          </li>

          <li className={p.case}>
            <h4 className={p.caseName}>OREO x Star Wars</h4>
            <p className={p.caseBody}>
              A Sci-Fi, Horror and Comic category takeover with 15 and 6 second
              video. Reported +10.2 points ad awareness and +6 points brand
              awareness.
              <Sourced href={S.superside} label="secondary" /> The commonly
              repeated version of this says &ldquo;Sci-Fi and Comics&rdquo; and
              adds a carousel. Neither matches the sources I could find.
              <Corrected />
            </p>
          </li>

          <li className={p.case}>
            <h4 className={p.caseName}>Contiki</h4>
            <p className={p.caseBody}>
              Travel category takeovers plus creative built from real
              Redditors&rsquo; own trip content. Reported 305 percent ROAS, an 11
              percent higher CTR than benchmark, and an 8 percent lower CPC.
              <Sourced href={S.superside} label="secondary" />
            </p>
            <p className={p.caseBody}>
              Two things I had to fix here. No source names r/travel
              specifically, it was a travel category buy. And &ldquo;Live the
              Legend&rdquo; appears to be a separate Contiki brand campaign that
              has been folded into this case study by repetition.
              <Corrected />
            </p>
          </li>

          <li className={p.case}>
            <h4 className={p.caseName}>Siemens Germany</h4>
            <p className={p.caseBody}>
              An AMA plus free-form creative. 46 percent higher CTR than the
              German benchmark, confirmed by German trade press rather than a
              vendor blog.
              <Sourced href={S.siemensWuv} label="W&V" /> The 24 percent lower
              CPC that travels with it comes from a single agency blog, and the
              agency&rsquo;s own case page publishes neither CTR nor CPC.
              <Sourced href={S.siemensAgency} label="agency case" />
            </p>
          </li>
        </ul>

        <p>
          The pattern is the same in all four. None of them arrived and shouted.
          Škoda let a subreddit spec a car. Siemens answered questions in public.
          Contiki used the community&rsquo;s own photographs.
        </p>

        <div className={p.note}>
          <span className={p.noteLabel}>Sourcing note</span>
          These are reported figures from brands, their agencies and awards
          submissions, not independently audited results. Škoda and Siemens have
          real press behind them. OREO and Contiki trace back to marketing blogs
          citing Reddit success story pages I could not open directly, so they
          get a weaker label. I also could not find a single named French,
          Spanish or Italian mid-market case study with hard numbers attached,
          which tells you how early this still is in those three markets.
        </div>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 7 */
  {
    meta: {
      id: "post-tool",
      flair: "Tool",
      tone: "green",
      title:
        "I built an ad tech SaaS solo. Reddit is one of the seven platforms it supports.",
      score: 445,
      comments: 62,
      age: "2d",
    },
    body: (
      <>
        <p>
          adsfellow.app. Built alone, no team, no funding. It generates campaign
          strategy across Google, Meta, LinkedIn, Pinterest, Microsoft, TikTok
          and Reddit.
        </p>
        <p>
          Why that matters for an AM role: I have had to read the Reddit ads
          documentation as a builder, not as a buyer. I know what a pixel event
          payload looks like, what a Conversions API rejection looks like when it
          comes back, and why deduplication between pixel and CAPI matters when
          both are firing for the same conversion.
        </p>
        <p>
          I was going to list the exact field names that trip people up. I have
          them from third party integration docs rather than from Reddit&rsquo;s
          own API reference, which I could not reach while building this page, so
          I am not going to recite a schema I have not re-checked at the source.
          <Unverified />
        </p>
        <p>
          The part that does not need a citation: when a client&rsquo;s pixel is
          not firing, I do not open a ticket and wait. I diagnose it first, then
          open the ticket with the diagnosis attached. That saves Ad Ops a round
          trip and it saves the client a week of blind spend.
        </p>
        <p>
          Measurement is not a setup task you tick off in week one. It is a
          retention lever. Advertisers rarely churn loudly. They quietly reduce
          budget because they could not prove the return internally when their own
          boss asked. If the client cannot demonstrate the value of Reddit to
          their CFO, Reddit does not make next year&rsquo;s plan.
        </p>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 8 */
  {
    meta: {
      id: "post-data",
      flair: "Data",
      tone: "blue",
      title:
        "Where adtech revenue actually gets lost (and why this role sits on the leak)",
      score: 378,
      comments: 47,
      age: "2d",
    },
    body: (
      <>
        <p>
          There is a framework I keep coming back to, published by MarketStar in
          May 2026: the advertiser lifecycle. Five stages, acquisition,
          activation, growth, retention, reactivation. The argument is that
          platforms lose revenue in the gaps between the stages rather than
          inside them. They call it the Lifecycle Revenue Gap.
          <Sourced href={S.marketStar} label="MarketStar" />
        </p>
        <p>
          <strong>Stage 2, activation, is this job.</strong>{" "}
          When a new
          advertiser takes 45 or 60 days to launch a first campaign, the
          platform&rsquo;s first impression is built on friction rather than
          performance, and that shapes everything after it.
        </p>
        <p>
          The metric is <strong>time to first spend</strong>. Not volume signed.
          Speed to spend.
        </p>
        <p>
          <strong>Stage 4, retention, is also this job</strong>, because the
          finding there is that the biggest retention problem in adtech is not
          dissatisfaction, it is uncertainty. Advertisers do not cancel loudly.
          They quietly reduce spend and stop showing up, not because the product
          failed, but because they could not prove it worked to their own
          stakeholders.
        </p>
        <p>
          Which puts pixel implementation, CAPI setup and attribution
          configuration in a different category. They are not technical
          onboarding chores. They are the reason a client renews.
        </p>
        <p>
          Context for scale, from the same piece: global ad spend crosses one
          trillion dollars in 2026, 66 percent of marketers report that siloed
          execution wastes between 10 and 30 percent of programmatic budgets, and
          70 percent of advertisers say a lack of transparency negatively affects
          their spending decisions.
          <Sourced href={S.marketStar} label="MarketStar" />
        </p>
        <p>
          Reddit&rsquo;s answer to that last one is opening the black box: Top
          Audience Personas, and reporting that shows the reasoning rather than
          just the result. It is a good answer. It only works if there is someone
          on the account who can read the box out loud to the client.
        </p>
      </>
    ),
  },

  /* ---------------------------------------------------------------- 9 */
  {
    meta: {
      id: "post-ama",
      flair: "AMA",
      tone: "orange",
      title:
        "I want to onboard your FRITES advertisers. AMA, or just tell me what is wrong with this.",
      score: 723,
      comments: "open",
      age: "2d",
    },
    body: (
      <>
        <p>Quick facts, so you do not have to dig.</p>
        <p>
          Six years in ad tech, all of it from Dublin. Google (125 percent of
          quota, 100+ accounts). LinkedIn (above target three years running, 75+
          mid-market accounts). Pinterest via Accenture (built a book from
          scratch, promoted in under a year). Started at Cofidis in financial
          services.
        </p>
        <p>
          Native French. Fluent English. Conversational Spanish. That covers two
          of the three FRITES markets directly, and I am reading Italian ad copy
          without a translator, which is a low bar but a start.
        </p>
        <p>
          Ready to relocate to Amsterdam. I spent six years running European
          markets from a central hub in Dublin, so the shape of the job is
          familiar. I know the Amsterdam office is three days a week in person.
          <Sourced href={S.fritesJob} label="Reddit job posting" />
        </p>
        <p>
          I built this instead of writing a cover letter. Every number on it is
          either linked to a source or marked as something I could not confirm.
          Six of them changed while I was building it, and I left the
          corrections visible rather than quietly fixing them.
        </p>
        <p>
          One last thing, and it is the reason this page exists at all. Bérengère
          ends every one on one by asking her team if they have any feedback for
          her. I do not have a form for that. If you have any, the comments are
          the wrong place and my inbox is the right one.
        </p>
      </>
    ),
  },
];
