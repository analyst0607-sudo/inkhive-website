import React, { useState } from "react";

export default function InkHiveWebsite() {
  const [form, setForm] = useState({ name: "", email: "", product: "", quantity: "", placement: "Front", message: "", image: null, preview: null });

  const manifestations = [
  "I AM ENOUGH",
  "I ATTRACT SUCCESS",
  "I AM CALM",
  "I AM EVOLVING",
  "ALIGNED & FLOWING"
];

  const paths = [
    {
      icon: "↥",
      title: "InkHive Studio",
      subtitle: "Print what you want",
      description: "Upload your logo, photo, quote, team design, event artwork, or business branding.",
      cta: "Start Custom Order",
      bg: "#fff3d8",
    },
    {
      icon: "9",
      title: "PurposeWear",
      subtitle: "Designed from your birthdate",
      description: "We calculate your single-digit birthdate number and create a soft, minimal Sanskrit design.",
      cta: "Find My Purpose",
      bg: "#f5eadb",
    },
    {
      icon: "✦",
      title: "ManifestWear",
      subtitle: "Wear what you are becoming",
      description: "Choose a calm, powerful affirmation with a subtle Sanskrit word or phrase.",
      cta: "Choose My Energy",
      bg: "#f2eef7",
    },
  ];

  const guidelines = [
    {
      title: "Custom Studio",
      items: [
        "Best for logos, events, family trips, school groups, businesses, birthdays, and gifts.",
        "You provide text or image. We help clean it up for printing.",
        "Great for bulk orders and fast turnaround.",
      ],
    },
    {
      title: "PurposeWear",
      items: [
        "Birthdate is reduced to one single digit: example 14/08/1995 = 36 → 3+6 = 9.",
        "The final single digit becomes a large, faint background watermark.",
        "Sanskrit shlok appears on top. No mountains, no busy graphics, no clutter.",
      ],
    },
    {
      title: "ManifestWear",
      items: [
        "No birthdate required.",
        "Customer chooses an intention like peace, success, confidence, healing, or abundance.",
        "Design uses short English affirmation with a small Sanskrit accent.",
      ],
    },
  ];

  const Button = ({ children, light = false }) => (
    <button
      style={{
        border: "none",
        borderRadius: 999,
        padding: "14px 24px",
        fontWeight: 800,
        cursor: "pointer",
        background: light ? "#fffaf3" : "#c8943f",
        color: light ? "#2b2118" : "white",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </button>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fffaf3", color: "#2b2118", fontFamily: "Inter, Arial, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 10, background: "rgba(255,250,243,0.96)", borderBottom: "2px solid #2b2118" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20 }}>
          <div>
            <div style={{ fontSize: 32, fontWeight: 950, letterSpacing: -1 }}>Ink<span style={{ color: "#c8943f" }}>Hive</span></div>
            <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#8b735b" }}>Where Ideas Wear Ink</div>
          </div>
          <nav style={{ display: "flex", gap: 24, color: "#6f5b47", fontWeight: 700, fontSize: 14 }}>
            <a href="#shop" style={{ color: "inherit", textDecoration: "none" }}>Shop</a>
            <a href="#guidelines" style={{ color: "inherit", textDecoration: "none" }}>Guidelines</a>
            <a href="#pricing" style={{ color: "inherit", textDecoration: "none" }}>Pricing</a>
            <a href="#quote" style={{ color: "inherit", textDecoration: "none" }}>Quote</a>
          </nav>
        </div>
      </header>

      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <p style={{ color: "#c8943f", fontWeight: 850, letterSpacing: 4, textTransform: "uppercase", fontSize: 13 }}>Custom Apparel + Purposeful Design</p>
          <h1 style={{ fontSize: "clamp(44px, 7vw, 82px)", lineHeight: 1.02, letterSpacing: -3, margin: "18px 0", fontWeight: 950 }}>
            Your shirt, your story, your purpose.
          </h1>
          <p style={{ fontSize: 20, color: "#6f5b47", lineHeight: 1.6, margin: "0 auto", maxWidth: 720 }}>
            Create anything you want, or choose one of our two premium lines: PurposeWear and ManifestWear.
          </p>
          <div style={{ marginTop: 34, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Button>Explore Options</Button>
            <Button light>See Guidelines</Button>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 900 }}>Available Products</h2>
        <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
          {[
  { name: "Tees", design: "9" },
  { name: "Hoodies", design: "3" },
  { name: "Caps", design: "6" }
].map((item) => (
  <div key={item.name} style={{ border: "2px solid #2b2118", borderRadius: 20, padding: 14, background: "white", fontWeight: 800, width: 160 }}>
    <svg width="100%" height="120" viewBox="0 0 120 120">
      <rect x="20" y="10" width="80" height="100" rx="18" fill="#f5eadb" stroke="#2b2118" strokeWidth="2"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="40" fill="#bfa88c" opacity="0.4">{item.design}</text>
      <text x="50%" y="75%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="#2b2118">Sanskrit</text>
    </svg>
    <div style={{ marginTop: 8 }}>{item.name}</div>
  </div>
))}
        </div>
      </section>

      <section id="shop" style={{ padding: "0 24px 70px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
          {paths.map((path) => (
            <div key={path.title} style={{ background: path.bg, border: "2px solid #2b2118", borderRadius: 32, padding: 32, boxShadow: "0 14px 40px rgba(43,33,24,0.06)" }}>
              <div style={{ width: 58, height: 58, borderRadius: 18, background: "white", display: "flex", alignItems: "center", justifyContent: "center", color: "#c8943f", boxShadow: "0 8px 20px rgba(0,0,0,0.06)" }}><span style={{ fontSize: 28, fontWeight: 900 }}>{path.icon}</span></div>
              <h2 style={{ fontSize: 30, margin: "24px 0 4px", fontWeight: 950 }}>{path.title}</h2>
              <p style={{ color: "#c8943f", fontWeight: 850, margin: 0 }}>{path.subtitle}</p>
              <p style={{ color: "#6f5b47", lineHeight: 1.7, marginTop: 16 }}>{path.description}</p>
              <button style={{ marginTop: 18, width: "100%", border: "none", borderRadius: 999, padding: 14, background: "#2b2118", color: "white", fontWeight: 850, cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
                {path.cta} →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="guidelines" style={{ background: "white", borderTop: "2px solid #2b2118", borderBottom: "2px solid #2b2118", padding: "70px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#c8943f", fontWeight: 850, letterSpacing: 4, textTransform: "uppercase", fontSize: 13 }}>Clear Guidelines</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", margin: "10px 0", fontWeight: 950, letterSpacing: -2 }}>Choose the right path.</h2>
          <p style={{ color: "#6f5b47", fontSize: 18 }}>Each product line has its own purpose, design rules, and customer experience.</p>
          <div style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 22 }}>
            {guidelines.map((section) => (
              <div key={section.title} style={{ border: "2px solid #2b2118", borderRadius: 30, padding: 28, background: "#fffaf3" }}>
                <h3 style={{ fontSize: 25, margin: 0, fontWeight: 950 }}>{section.title}</h3>
                <div style={{ marginTop: 20, display: "grid", gap: 16 }}>
                  {section.items.map((item) => (
                    <div key={item} style={{ display: "flex", gap: 12, color: "#6f5b47", lineHeight: 1.6 }}>
                      <span style={{ color: "#c8943f", fontWeight: 900, flexShrink: 0, marginTop: 1 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, textAlign: "center" }}>Real Product Photos</h2>
          <p style={{ color: "#6f5b47", textAlign: "center" }}>Your actual designs and models</p>

          <div style={{ marginTop: 30, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { src: "/purposewear-catalog.png", title: "PurposeWear Collection" },
              { src: "/manifestwear-catalog.png", title: "ManifestWear Collection" },
              { src: "/colors-catalog.png", title: "Color Variations" },
              { src: "/model-tee-male.png", title: "Male Model" },
              { src: "/model-tee-female.png", title: "Female Model" }
            ].map((photo) => (
              <div key={photo.title} style={{ border: "2px solid #2b2118", borderRadius: 24, overflow: "hidden", background: "white" }}>
                <img src={photo.src} alt={photo.title} style={{ width: "100%", display: "block" }} />
                <div style={{ padding: 12, fontWeight: 900, textAlign: "center" }}>{photo.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#fffaf3" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#c8943f", fontWeight: 850, letterSpacing: 4, textTransform: "uppercase", fontSize: 13 }}>New Collection</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "10px 0", fontWeight: 950, letterSpacing: -2 }}>PurposeWear + ManifestWear Lookbook</h2>
          <p style={{ color: "#6f5b47", fontSize: 18, lineHeight: 1.7, maxWidth: 780 }}>
            Soft neutral tees, hoodies, and caps with Sanskrit, English meanings, birth-number watermarks, and clean affirmation designs.
          </p>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { line: "PurposeWear 9", sanskrit: "कर्मण्येवाधिकारस्ते", english: "You have the right to action", number: "9", bg: "#f5eadb" },
              { line: "PurposeWear 3", sanskrit: "योगः कर्मसु कौशलम्", english: "Excellence in action", number: "3", bg: "#d8c7b3" },
              { line: "PurposeWear 6", sanskrit: "सर्वं शुभम् भवतु", english: "May all be well", number: "6", bg: "#e9dfd1" },
              { line: "ManifestWear", sanskrit: "अहं पूर्णः", english: "I AM ENOUGH", number: "", bg: "#f2eef7" }
            ].map((item) => (
              <div key={item.line} style={{ border: "2px solid #2b2118", borderRadius: 28, background: item.bg, padding: 24, minHeight: 300, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center" }}>
                {item.number && <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 180, fontFamily: "Georgia, serif", color: "rgba(43,33,24,0.12)" }}>{item.number}</div>}
                <div style={{ position: "relative" }}>
                  <p style={{ fontWeight: 900, color: "#6f5b47", letterSpacing: 2, textTransform: "uppercase", fontSize: 12 }}>{item.line}</p>
                  <p style={{ fontSize: 28, fontFamily: "Georgia, serif", margin: "24px 0 10px" }}>{item.sanskrit}</p>
                  <div style={{ width: 60, height: 1, background: "#2b2118", margin: "12px auto" }} />
                  <p style={{ fontSize: 18, margin: 0 }}>{item.english}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "white", borderTop: "2px solid #2b2118", borderBottom: "2px solid #2b2118" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#c8943f", fontWeight: 850, letterSpacing: 4, textTransform: "uppercase", fontSize: 13 }}>InkHive Studio</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "10px 0", fontWeight: 950, letterSpacing: -2 }}>Custom mockups for every occasion.</h2>
          <p style={{ color: "#6f5b47", fontSize: 18, lineHeight: 1.7, maxWidth: 760 }}>
            Customers can create custom apparel for work events, family celebrations, weddings, trips, teams, and parties.
          </p>
          <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 22 }}>
            {[
              { title: "Office Retreat", text: "TEAM RETREAT 2026", sub: "Company logo + location", color: "#e7d2bd" },
              { title: "Birthday Party", text: "NAVYA TURNS 7", sub: "Custom birthday crew tees", color: "#f2eef7" },
              { title: "Bridesmaid Crew", text: "BRIDESMAID CREW", sub: "Soft matching wedding tees", color: "#f5eadb" }
            ].map((item) => (
              <div key={item.title} style={{ border: "2px solid #2b2118", borderRadius: 28, background: "#fffaf3", padding: 22 }}>
                <div style={{ height: 250, border: "2px solid #2b2118", borderRadius: 24, background: item.color, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                  <svg width="170" height="210" viewBox="0 0 170 210">
                    <path d="M50 22 L72 12 H98 L120 22 L150 54 L130 78 L118 62 V188 H52 V62 L40 78 L20 54 Z" fill="#fffaf3" stroke="#2b2118" strokeWidth="3" />
                    <text x="85" y="92" textAnchor="middle" fontSize="12" fontWeight="800" fill="#2b2118">{item.text}</text>
                    <line x1="62" y1="108" x2="108" y2="108" stroke="#c8943f" strokeWidth="2" />
                    <text x="85" y="130" textAnchor="middle" fontSize="9" fill="#6f5b47">{item.sub}</text>
                  </svg>
                </div>
                <h3 style={{ fontSize: 24, fontWeight: 950, margin: "18px 0 6px" }}>{item.title}</h3>
                <p style={{ color: "#6f5b47", lineHeight: 1.6, margin: 0 }}>Upload artwork or tell us your idea. We create a clean mockup before printing.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "70px 24px", background: "#fffaf3" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 32, fontWeight: 900 }}>Terms & Conditions</h2>
          <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
            All designs, graphics, and content on this website are the intellectual property of InkHive. Customers may submit custom artwork, but InkHive reserves the right to refuse copyrighted or inappropriate content.
          </p>
          <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
            By placing an order, you confirm you have rights to use submitted content. InkHive is not responsible for copyright violations by customers.
          </p>
          <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
            PurposeWear and ManifestWear designs are original concepts and may not be reproduced without permission.
          </p>

          {/* Policies */}
          <div style={{ marginTop: 40, display: "grid", gap: 28 }}>

            <div>
              <h3 style={{ fontSize: 24, fontWeight: 900 }}>Return Policy</h3>
              <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
                All products are custom-made to order. Returns are only accepted for defective, damaged, or incorrect items. Requests must be made within 7 days of delivery with photo proof.
              </p>
              <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
                We do not accept returns for sizing issues or customer-submitted design errors.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: 24, fontWeight: 900 }}>Shipping Policy</h3>
              <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
                Orders are processed within 3–5 business days. Shipping typically takes 5–8 business days within the U.S.
              </p>
              <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
                Bulk or custom orders may take longer depending on complexity. Tracking details will be provided once shipped.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: 24, fontWeight: 900 }}>Refund Terms</h3>
              <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
                Refunds are issued only for approved return cases (defects or errors by InkHive). Approved refunds will be processed to the original payment method within 5–10 business days.
              </p>
              <p style={{ color: "#6f5b47", lineHeight: 1.7 }}>
                Custom and personalized items are non-refundable once production has started.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="pricing" style={{ padding: "70px 24px", background: "#2b2118", color: "white", textAlign: "center" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#c8943f", fontWeight: 850, letterSpacing: 4, textTransform: "uppercase", fontSize: 13 }}>Simple Pricing</p>
          <h2 style={{ fontSize: "clamp(36px, 5vw, 58px)", margin: "10px 0", fontWeight: 950, letterSpacing: -2 }}>Start simple. Upgrade anytime.</h2>
          <div style={{ marginTop: 34, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 22, textAlign: "left" }}>
            {[
              ["Custom Studio", "$18–25", "Best for everyday custom printing."],
              ["PurposeWear", "$35–45", "Premium birthdate-based Sanskrit design."],
              ["ManifestWear", "$32–42", "Premium affirmation-based design."],
            ].map(([name, price, desc]) => (
              <div key={name} style={{ background: "white", color: "#2b2118", borderRadius: 30, padding: 30 }}>
                <h3 style={{ fontSize: 25, margin: 0, fontWeight: 950 }}>{name}</h3>
                <p style={{ margin: "20px 0 10px", fontSize: 42, fontWeight: 950, color: "#c8943f" }}>{price}</p>
                <p style={{ color: "#6f5b47", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" style={{ padding: "70px 24px" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 38 }}>
          <div>
            <p style={{ color: "#c8943f", fontWeight: 850, letterSpacing: 4, textTransform: "uppercase", fontSize: 13 }}>Get Started</p>
            <h2 style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: "10px 0", fontWeight: 950, letterSpacing: -2 }}>Tell us what you want to create.</h2>
            <p style={{ color: "#6f5b47", fontSize: 18, lineHeight: 1.7 }}>Choose Custom Studio, PurposeWear, or ManifestWear. We will help turn your idea into a clean, wearable design.</p>
            <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[["T", "Tees"], ["◐", "Soft colors"], ["♡", "Meaningful"]].map(([icon, label]) => (
                <div key={label} style={{ background: "white", border: "2px solid #2b2118", borderRadius: 20, padding: 18, color: "#c8943f" }}>
                  <span style={{ fontSize: 24, fontWeight: 900 }}>{icon}</span>
                  <p style={{ color: "#2b2118", fontWeight: 850, margin: "10px 0 0" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => {
              e.preventDefault();
              const subject = `New Order - ${form.product}`;
              const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0AProduct: ${form.product}%0D%0AQuantity: ${form.quantity}%0D%0APlacement: ${form.placement}%0D%0AMessage: ${form.message}`;
              window.location.href = `mailto:creations@inkhivewear.com?subject=${subject}&body=${body}`;
            }} style={{ background: "white", border: "2px solid #2b2118", borderRadius: 32, padding: 30, display: "grid", gap: 14 }}>
            <input style={inputStyle} placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input style={inputStyle} placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select style={inputStyle} value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })}>
              <option value="">Choose product type</option>
              <option>InkHive Studio - Custom Order</option>
              <option>PurposeWear - Birthdate Design</option>
              <option>ManifestWear - Affirmation Design</option>
            </select>
            <input style={inputStyle} placeholder="Quantity" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
            <select style={inputStyle} value={form.placement} onChange={(e) => setForm({ ...form, placement: e.target.value })}>
              <option>Front</option>
              <option>Back</option>
              <option>Front + Back (+$5)</option>
            </select>
            <input type="file" accept="image/*" style={inputStyle} onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setForm({ ...form, image: file, preview: URL.createObjectURL(file) });
              }
            }} />
            {form.preview && (
              <div style={{ display: "grid", gap: 14 }}>
                <div style={{ border: "2px solid #2b2118", borderRadius: 18, padding: 12, background: "#fffaf3" }}>
                  <p style={{ margin: "0 0 10px", fontWeight: 900 }}>Uploaded Design</p>
                  <img src={form.preview} style={{ width: "100%", borderRadius: 14, border: "2px solid #2b2118" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
                  <div style={{ border: "2px solid #2b2118", borderRadius: 18, padding: 14, background: "#f5eadb", textAlign: "center" }}>
                    <div style={{ height: 150, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 110, height: 125, background: "#d8c7b3", border: "2px solid #2b2118", borderRadius: "26px 26px 18px 18px", position: "relative" }}>
                        <div style={{ position: "absolute", top: 18, left: 35, width: 40, height: 18, border: "2px solid #2b2118", borderTop: 0, borderRadius: "0 0 18px 18px" }} />
                        <img src={form.preview} style={{ position: "absolute", top: 55, left: 35, width: 40, height: 40, objectFit: "contain", borderRadius: 6 }} />
                      </div>
                    </div>
                    <p style={{ margin: 0, fontWeight: 900 }}>Hoodie Preview</p>
                  </div>

                  <div style={{ border: "2px solid #2b2118", borderRadius: 18, padding: 14, background: "#f2eef7", textAlign: "center" }}>
                    <div style={{ height: 150, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 120, height: 60, background: "#d9cde7", border: "2px solid #2b2118", borderRadius: "60px 60px 22px 22px", position: "relative" }}>
                        <div style={{ position: "absolute", bottom: -18, left: 30, width: 70, height: 24, background: "#d9cde7", border: "2px solid #2b2118", borderRadius: "0 0 40px 40px" }} />
                        <img src={form.preview} style={{ position: "absolute", top: 20, left: 45, width: 30, height: 24, objectFit: "contain", borderRadius: 4 }} />
                      </div>
                    </div>
                    <p style={{ margin: 0, fontWeight: 900 }}>Cap Preview</p>
                  </div>
                </div>
              </div>
            )}
            <textarea style={{ ...inputStyle, minHeight: 120, resize: "vertical" }} placeholder="For PurposeWear: enter birthdate. For ManifestWear: enter intention. For Custom: describe design." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <div style={{ fontSize: 12, color: "#6f5b47" }}>
              Tip: PurposeWear works best on <b>Back</b>. ManifestWear works best on <b>Front</b>, but you can choose Front, Back, or both for any design.
            </div>
            <button style={{ border: "none", borderRadius: 999, padding: 16, background: "#c8943f", color: "white", fontWeight: 900, cursor: "pointer", fontSize: 16 }}>Submit Request</button>
          </form>
        </div>
      </section>

      <footer style={{ padding: 30, textAlign: "center", borderTop: "2px solid #2b2118", color: "#6f5b47" }}>
        <p style={{ color: "#2b2118", fontWeight: 900, margin: 0 }}>InkHive</p>
        <p style={{ margin: "6px 0 0" }}>Where Ideas Wear Ink</p>
        
        {/* Copyright */}
        <p style={{ marginTop: 12, fontSize: 13 }}>
          © 2026 InkHive. All rights reserved.
        </p>

        {/* Legal Links */}
        <div style={{ marginTop: 10, display: "flex", justifyContent: "center", gap: 16, fontSize: 13 }}>
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>Terms & Conditions</span>
          <span style={{ cursor: "pointer", textDecoration: "underline" }}>Privacy Policy</span>
        </div>
      </footer>
    </div>
  );
}

function ProductMockup({ type, color }) {
  if (type === "hoodie") {
    return (
      <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 92, height: 100, background: color, border: "2px solid #2b2118", borderRadius: "24px 24px 16px 16px", position: "relative" }}>
          <div style={{ position: "absolute", top: 14, left: 29, width: 32, height: 18, border: "2px solid #2b2118", borderTop: 0, borderRadius: "0 0 16px 16px" }} />
          <div style={{ position: "absolute", top: 54, left: 28, width: 36, height: 26, border: "2px solid #2b2118", borderRadius: 8, background: "rgba(255,255,255,0.35)" }} />
        </div>
      </div>
    );
  }

  if (type === "cap") {
    return (
      <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 105, height: 58, background: color, border: "2px solid #2b2118", borderRadius: "60px 60px 22px 22px", position: "relative" }}>
          <div style={{ position: "absolute", bottom: -17, left: 24, width: 66, height: 22, background: color, border: "2px solid #2b2118", borderRadius: "0 0 40px 40px" }} />
          <div style={{ position: "absolute", top: 18, left: 41, width: 24, height: 18, border: "2px solid #2b2118", borderRadius: 5, background: "rgba(255,255,255,0.35)" }} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 88, height: 100, background: color, border: "2px solid #2b2118", borderRadius: "18px 18px 12px 12px", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, left: 28, width: 30, height: 16, background: "white", border: "2px solid #2b2118", borderTop: 0, borderRadius: "0 0 16px 16px" }} />
        <div style={{ position: "absolute", top: 42, left: 24, width: 40, height: 32, border: "2px solid #2b2118", borderRadius: 8, background: "rgba(255,255,255,0.35)" }} />
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  border: "2px solid #2b2118",
  borderRadius: 18,
  padding: 15,
  fontSize: 15,
  outline: "none",
  background: "#fffaf3",
  color: "#2b2118",
};
