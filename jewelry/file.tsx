import { useState } from "react";

const IMG_COMPARISON = "https://auth.cherryshot.ai/storage/v1/object/public/cherryshot%20blog/Comparison_Photo_Template_V1.png";
const IMG_CLASSIC = "https://auth.cherryshot.ai/storage/v1/object/public/cherryshot%20blog/599646557_774826528993709_7595476511914760432_n.jpg";
const IMG_MAGAZINE = "https://auth.cherryshot.ai/storage/v1/object/public/cherryshot%20blog/600875088_2313995205691833_9065272254714610771_n.jpg";
const IMG_REFERENCE = "https://auth.cherryshot.ai/storage/v1/object/public/cherryshot%20blog/552506476_766047052898712_5431931489853888282_n.jpg";
const IMG_PRODUCT = "https://auth.cherryshot.ai/storage/v1/object/public/cherryshot%20blog/616144722_1178995267549614_725342904542926672_n.jpg";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  .cs-blog * { box-sizing: border-box; }
  .cs-blog {
    font-family: 'DM Sans', sans-serif;
    color: #1C1C1C;
    background: #FAFAF8;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 0 80px;
  }

  /* HERO */
  .cs-hero {
    background: #0F0F0F;
    padding: 56px 40px 48px;
    position: relative;
    overflow: hidden;
  }
  .cs-hero::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 280px; height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(232,33,58,0.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .cs-logo-row { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; }
  .cs-logo-row img { height: 30px; object-fit: contain; }
  .cs-logo-divider { width: 1px; height: 22px; background: rgba(255,255,255,0.15); }
  .cs-logo-tag { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
  .cs-eyebrow { display: inline-flex; align-items: center; gap: 8px; background: rgba(232,33,58,0.12); border: 1px solid rgba(232,33,58,0.3); border-radius: 4px; padding: 5px 12px; margin-bottom: 20px; }
  .cs-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: #E8213A; }
  .cs-eyebrow-text { font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #E8213A; }
  .cs-h1 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 5vw, 42px); font-weight: 800; line-height: 1.15; color: #fff; margin: 0 0 20px; max-width: 640px; }
  .cs-h1 em { font-style: italic; color: #E8213A; }
  .cs-meta-row { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
  .cs-meta-item { font-size: 12px; color: rgba(255,255,255,0.35); font-weight: 400; }
  .cs-meta-sep { color: rgba(255,255,255,0.15); }

  /* BODY */
  .cs-body { padding: 0 40px; }
  .cs-lead { font-size: 17px; line-height: 1.8; font-weight: 400; color: #2D2D2D; margin: 40px 0 36px; padding-left: 18px; border-left: 3px solid #E8213A; }
  .cs-def-box { background: #fff; border: 1px solid #E8E8E4; border-radius: 10px; padding: 22px 26px; margin-bottom: 44px; position: relative; }
  .cs-def-label { font-size: 10px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #E8213A; margin-bottom: 8px; }
  .cs-def-text { font-size: 14.5px; line-height: 1.75; color: #444; margin: 0; }
  .cs-h2 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 700; color: #0F0F0F; margin: 44px 0 14px; line-height: 1.3; }
  .cs-p { font-size: 15px; line-height: 1.82; color: #3C3C3C; margin: 0 0 16px; font-weight: 300; }
  .cs-p strong { font-weight: 600; color: #1C1C1C; }

  /* FULL BLEED IMAGE */
  .cs-img-full { width: calc(100% + 80px); margin-left: -40px; display: block; object-fit: cover; margin-top: 32px; margin-bottom: 0; }
  .cs-img-caption { font-size: 12px; color: #888; padding: 10px 40px 28px; font-style: italic; width: calc(100% + 80px); margin-left: -40px; background: #F5F5F2; border-bottom: 1px solid #EBEBEB; margin-bottom: 32px; }

  /* MODE GRID */
  .cs-modes-section { margin: 36px 0; }
  .cs-modes-label { font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #888; margin-bottom: 16px; }
  .cs-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 14px; }
  .cs-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; margin-bottom: 36px; }
  .cs-mode-card { border-radius: 8px; overflow: hidden; background: #fff; border: 1px solid #E8E8E4; }
  .cs-mode-card img { width: 100%; object-fit: cover; display: block; }
  .cs-mode-card-footer { padding: 10px 12px 12px; background: #F5F5F2; }
  .cs-mode-chip { display: inline-block; background: #0F0F0F; color: #fff; font-size: 10px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 3px 8px; border-radius: 3px; margin-bottom: 4px; }
  .cs-mode-desc { font-size: 11.5px; color: #888; font-style: italic; line-height: 1.4; }

  /* STAT */
  .cs-stat-block { background: #0F0F0F; border-radius: 12px; padding: 36px 40px; margin: 48px 0; display: flex; align-items: center; gap: 32px; }
  .cs-stat-num { font-family: 'Playfair Display', serif; font-size: 64px; font-weight: 800; color: #E8213A; line-height: 1; white-space: nowrap; flex-shrink: 0; }
  .cs-stat-label { font-size: 18px; font-weight: 600; color: #fff; line-height: 1.3; margin-bottom: 6px; }
  .cs-stat-sub { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 300; }

  /* TABLE */
  .cs-table-header-label { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; color: #0F0F0F; margin: 44px 0 14px; }
  .cs-table-wrap { border-radius: 10px; overflow: hidden; border: 1px solid #E0E0DC; margin-bottom: 44px; }
  .cs-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
  .cs-table thead tr { background: #0F0F0F; }
  .cs-table thead th { padding: 13px 16px; color: #fff; font-weight: 500; letter-spacing: 0.03em; text-align: left; }
  .cs-table thead th:not(:first-child) { text-align: center; }
  .cs-table tbody tr:nth-child(even) { background: #F7F7F4; }
  .cs-table tbody tr:nth-child(odd) { background: #fff; }
  .cs-table tbody td { padding: 12px 16px; color: #555; border-bottom: 1px solid #EBEBEB; }
  .cs-table tbody td:first-child { font-weight: 500; color: #222; }
  .cs-table tbody td:nth-child(2) { text-align: center; color: #E8213A; font-weight: 700; }
  .cs-table tbody td:nth-child(3), .cs-table tbody td:nth-child(4) { text-align: center; }

  /* FAQ */
  .cs-divider { border: none; border-top: 1px solid #EBEBEB; margin: 36px 0; }
  .cs-faq-item { border-bottom: 1px solid #EBEBEB; padding: 20px 0; }
  .cs-faq-q { font-size: 15px; font-weight: 600; color: #1C1C1C; cursor: pointer; display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; margin: 0; }
  .cs-faq-icon { flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; background: #F0F0EC; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #888; margin-top: 1px; }
  .cs-faq-icon.open { background: #E8213A; color: #fff; }
  .cs-faq-a { font-size: 14.5px; line-height: 1.78; color: #555; font-weight: 300; margin-top: 12px; }

  /* CTA */
  .cs-cta-block { background: #0F0F0F; border-radius: 14px; padding: 44px 40px; text-align: center; margin: 52px 0 0; position: relative; overflow: hidden; }
  .cs-cta-block::before { content: ''; position: absolute; bottom: -60px; right: -60px; width: 240px; height: 240px; border-radius: 50%; background: radial-gradient(circle, rgba(232,33,58,0.2) 0%, transparent 70%); pointer-events: none; }
  .cs-cta-headline { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 800; color: #fff; margin-bottom: 12px; line-height: 1.25; position: relative; }
  .cs-cta-headline em { font-style: italic; color: #E8213A; }
  .cs-cta-sub { font-size: 15px; color: rgba(255,255,255,0.5); margin-bottom: 28px; font-weight: 300; position: relative; }
  .cs-cta-btn { display: inline-block; background: #E8213A; color: #fff; font-family: 'DM Sans', sans-serif; font-weight: 600; font-size: 14.5px; padding: 14px 36px; border-radius: 6px; text-decoration: none; position: relative; }
  .cs-cta-note { font-size: 12px; color: rgba(255,255,255,0.25); margin-top: 14px; position: relative; }
`;

export default function CherryShotBlog() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "Can AI really handle eyewear photography accurately?",
      a: "Yes, when using a purpose-built platform. CherryShot AI preserves lens tints, frame geometry, and gold hardware details exactly as uploaded. General-purpose AI tools hallucinate product details. CherryShot does not — the product you upload is the product that appears in every output."
    },
    {
      q: "What is Reference Mode and when should I use it?",
      a: "Reference Mode lets you upload an existing campaign image and have CherryShot AI generate new shots that match its visual language. Use it when you already have an established brand aesthetic and need new SKUs to match existing catalog imagery without reshooting."
    },
    {
      q: "How many images do I get per SKU, and what does it cost?",
      a: "Each generation produces four campaign-ready shots. CherryShot AI starts at $10 for 50 credits — standard images cost 1 credit ($0.20), pro images cost 2 credits ($0.40). A full 20-SKU collection with four shots each runs about 80 to 160 credits, compared to $4,000 to $10,000 for a traditional studio shoot."
    },
    {
      q: "What is the difference between Classic, Magazine, and Product Only modes?",
      a: "Classic places the product on an AI-generated model in a clean editorial context — ideal for product pages. Magazine mode creates a full lifestyle scene with location, light, and atmosphere for campaign and social use. Product Only generates a standalone still life composition with no model, suited for hero shots and Amazon listings."
    },
    {
      q: "Is the output quality good enough for a paid ad or product launch?",
      a: "In 2026, yes. The quality bar has crossed from social-ready to campaign-ready. Eyewear brands are using CherryShot AI outputs on product pages, paid social ads, and seasonal drops. The before/after in this post shows the output firsthand."
    },
  ];

  const tableRows = [
    ["Turnaround per SKU", "Under 2 min", "7 to 14 days", "2 to 5 days"],
    ["Cost per image", "$0.20 to $0.40", "$50 to $200+", "$30 to $150"],
    ["Handles lens reflections", "Yes, automatic", "Manual, extra cost", "Hit or miss"],
    ["Reshoots", "Instant, free", "Extra charge", "Extra charge"],
    ["Consistency across colorways", "Pixel-perfect", "Varies by shoot", "Varies by shoot"],
    ["Visual modes available", "8+ presets + Reference", "Manual setup only", "Manual setup only"],
  ];

  return (
    <>
      <style>{styles}</style>
      <article className="cs-blog">

        {/* HERO */}
        <header className="cs-hero">
          <div className="cs-logo-row">
            <img src="https://cherryshot.ai/logo.webp" alt="CherryShot AI" />
            <div className="cs-logo-divider" />
            <span className="cs-logo-tag">Eyewear Brands</span>
          </div>
          <div className="cs-eyebrow">
            <div className="cs-eyebrow-dot" />
            <span className="cs-eyebrow-text">D2C Eyewear · 2026</span>
          </div>
          <h1 className="cs-h1">
            How Eyewear Brands Are Launching New SKUs <em>Faster</em> with Realistic AI Photography
          </h1>
          <div className="cs-meta-row">
            <span className="cs-meta-item">820 words</span>
            <span className="cs-meta-sep">·</span>
            <span className="cs-meta-item">4 min read</span>
            <span className="cs-meta-sep">·</span>
            <span className="cs-meta-item">AI Product Photography · Eyewear</span>
          </div>
        </header>

        <div className="cs-body">

          {/* LEAD */}
          <p className="cs-lead">
            Eyewear brands are launching new SKUs faster in 2026 because AI photography removes the bottleneck. No studio booking. No model coordination. No 10-day wait. Upload a product image, pick a visual mode, and get four campaign-ready shots in under two minutes. CherryShot AI handles lens reflections, frame angles, and lighting consistency across every colorway, automatically.
          </p>

          {/* DEFINITION */}
          <div className="cs-def-box">
            <div className="cs-def-label">What is AI eyewear product photography?</div>
            <p className="cs-def-text">
              AI eyewear product photography uses purpose-built models to generate realistic, campaign-quality images of glasses and sunglasses from a single uploaded product photo. Unlike general-purpose AI tools, it preserves exact lens tints, frame geometry, and hardware detail while placing the product into editorial, lifestyle, or on-model contexts.
            </p>
          </div>

          {/* THE PROBLEM */}
          <h2 className="cs-h2">The Real Bottleneck in Eyewear Launches</h2>
          <p className="cs-p">
            Eyewear is one of the hardest categories to photograph well. Lens reflections. Gold hardware glare. Frame angles that only work from exact distances. A single SKU can require three to five reshoots before the images are usable.
          </p>
          <p className="cs-p">
            Multiply that across a seasonal collection of 20 to 40 colorways and you have a scheduling problem that kills launch timelines. Traditional studio shoots for a mid-size eyewear collection run between <strong>$4,000 and $10,000</strong>. Turnaround is typically 7 to 14 days. By the time the photos arrive, the pre-launch content window is already closing.
          </p>

        </div>

        {/* BEFORE / AFTER FULL BLEED */}
        <img className="cs-img-full" src={IMG_COMPARISON} alt="Before vs After: raw product upload vs CherryShot AI output" style={{maxHeight: 500}} />
        <div className="cs-img-caption">Before vs After — Raw product upload on the left. CherryShot AI output on the right. Same SKU, zero reshoots.</div>

        <div className="cs-body">

          {/* WHAT CHANGED */}
          <h2 className="cs-h2">What Changed in 2026</h2>
          <p className="cs-p">
            AI product photography has crossed a quality threshold. The images are no longer "good enough for social." They are campaign-ready, editorially styled, and consistent across the entire catalog.
          </p>
          <p className="cs-p">
            The critical shift for eyewear is product fidelity. Early AI tools distorted frames, hallucinated lens tints, and dropped hardware detail. Purpose-built platforms now preserve the exact geometry of the product while placing it into editorial and lifestyle contexts. For a category where millimeter-level accuracy drives purchase confidence, that distinction matters.
          </p>

          {/* HOW IT WORKS */}
          <h2 className="cs-h2">How CherryShot AI Works for Eyewear</h2>
          <p className="cs-p">
            The workflow is three steps: upload your product image, select an AI model face, choose a visual mode. CherryShot AI generates four campaign-ready shots in under two minutes. The modes do the creative direction for you.
          </p>

          {/* MODE SHOWCASE */}
          <div className="cs-modes-section">
            <div className="cs-modes-label">CherryShot AI — Eyewear Modes in Action</div>

            {/* Top row: Classic + Magazine (tall portrait) */}
            <div className="cs-grid-2" style={{marginBottom: 14}}>
              <div className="cs-mode-card">
                <img src={IMG_CLASSIC} alt="CherryShot AI Classic mode — on-model editorial" style={{height: 380}} />
                <div className="cs-mode-card-footer">
                  <div className="cs-mode-chip">Classic Mode</div>
                  <div className="cs-mode-desc">On-model, editorial context — the go-to for product pages and paid social</div>
                </div>
              </div>
              <div className="cs-mode-card">
                <img src={IMG_MAGAZINE} alt="CherryShot AI Magazine mode — lifestyle editorial" style={{height: 380}} />
                <div className="cs-mode-card-footer">
                  <div className="cs-mode-chip">Magazine Mode</div>
                  <div className="cs-mode-desc">Full lifestyle scene with location, light and atmosphere — built for campaigns</div>
                </div>
              </div>
            </div>

            {/* Bottom row: Reference + Product Only (shorter) */}
            <div className="cs-grid-2">
              <div className="cs-mode-card">
                <img src={IMG_REFERENCE} alt="CherryShot AI Reference mode — match existing visual language" style={{height: 260}} />
                <div className="cs-mode-card-footer">
                  <div className="cs-mode-chip">Reference Mode</div>
                  <div className="cs-mode-desc">Upload a campaign image, generate new SKUs that match your existing visual identity exactly</div>
                </div>
              </div>
              <div className="cs-mode-card">
                <img src={IMG_PRODUCT} alt="CherryShot AI Product Only mode — premium still life" style={{height: 260}} />
                <div className="cs-mode-card-footer">
                  <div className="cs-mode-chip">Product Only</div>
                  <div className="cs-mode-desc">Standalone still life with no model — ideal for hero shots, Amazon listings, and print</div>
                </div>
              </div>
            </div>
          </div>

          <p className="cs-p">
            Switch between all modes from the same product upload. No re-upload. No reshoots. <strong>Reference Mode</strong> is especially powerful for eyewear brands that already have a campaign aesthetic — upload one reference image and every new SKU matches the look instantly.
          </p>

          {/* STAT */}
          <div className="cs-stat-block">
            <div className="cs-stat-num">4 shots</div>
            <div>
              <div className="cs-stat-label">generated in under 2 minutes per SKU</div>
              <div className="cs-stat-sub">Any colorway. Classic, Magazine, Reference, or Product Only. From $0.20 per image.</div>
            </div>
          </div>

          {/* TABLE */}
          <div className="cs-table-header-label">CherryShot AI vs Your Other Options</div>
          <div className="cs-table-wrap">
            <table className="cs-table">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>CherryShot AI</th>
                  <th>Traditional Studio</th>
                  <th>Freelance Photographer</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map(([factor, cs, trad, free], i) => (
                  <tr key={i}>
                    <td>{factor}</td>
                    <td>{cs}</td>
                    <td>{trad}</td>
                    <td>{free}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <hr className="cs-divider" />
          <h2 className="cs-h2" style={{marginTop: 28}}>Common Questions from Eyewear Founders</h2>
          <div style={{marginBottom: 48}}>
            {faqs.map((item, i) => (
              <div key={i} className="cs-faq-item">
                <div className="cs-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{item.q}</span>
                  <span className={`cs-faq-icon ${openFaq === i ? 'open' : ''}`}>
                    {openFaq === i ? '−' : '+'}
                  </span>
                </div>
                {openFaq === i && <p className="cs-faq-a">{item.a}</p>}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="cs-cta-block">
            <div className="cs-cta-headline">
              Launch every SKU with <em>campaign-ready</em> imagery.
            </div>
            <div className="cs-cta-sub">
              Classic. Magazine. Reference. Product Only. All from one upload.
            </div>
            <a href="https://cherryshot.ai" target="_blank" rel="noopener noreferrer" className="cs-cta-btn">
              Get Started for $10
            </a>
            <div className="cs-cta-note">Starts at $10 · 50 credits · No studio required</div>
          </div>

        </div>
      </article>
    </>
  );
}