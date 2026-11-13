// One-off (account 180, Muñoz Espasande): web phone → 623 595 670 and remove
// every Dobleese social link from website_config, then regenerate the site.
// Usage: node --env-file=.env fix180-web.mjs            (dry run, prints diff)
//        node --env-file=.env fix180-web.mjs --apply    (writes + refresh job)
import postgres from "postgres";

const ACCOUNT = 180;
const apply = process.argv.includes("--apply");
const sql = postgres(process.env.POSTGRES_URL, { ssl: "require", max: 1 });

// 984 485 585 in any spacing, with or without +34
const LANDLINE = /(\+34[\s.-]?)?984[\s.-]?48[\s.-]?5[\s.-]?5[\s.-]?85/g;
const fixPhone = (s) =>
  s.replace(LANDLINE, (m, p34) => {
    const spaced = /\s/.test(m);
    const num = spaced ? "623 595 670" : "623595670";
    return p34 ? `${p34}${num}` : num;
  });

// Drop any key/array item whose string value points at Dobleese
const isDoble = (v) => typeof v === "string" && /dobl+e+se/i.test(v);
function strip(v) {
  if (Array.isArray(v)) return v.filter((x) => !isDoble(x)).map(strip);
  if (v && typeof v === "object") {
    const out = {};
    for (const [k, x] of Object.entries(v)) if (!isDoble(x)) out[k] = strip(x);
    return out;
  }
  return v;
}

const cols = [
  "social_links", "seo_props", "head_props", "hero_props", "featured_props",
  "about_props", "properties_props", "testimonial_props", "contact_props",
  "footer_props", "links_props", "faqs_props", "promo_cards_props",
  "banner_props", "features_props", "blog_props", "metadata",
];

try {
  const [row] = await sql`select * from website_config where account_id = ${ACCOUNT}`;
  if (!row) throw new Error("no website_config row");
  const updates = {};
  for (const c of cols) {
    const raw = row[c];
    if (raw == null) continue;
    const isText = typeof raw === "string";
    let next;
    try {
      const parsed = isText ? JSON.parse(raw) : raw;
      next = JSON.parse(fixPhone(JSON.stringify(strip(parsed))));
      next = isText ? JSON.stringify(next) : next;
    } catch {
      next = isText ? fixPhone(raw) : raw; // not JSON: phone only
    }
    const before = isText ? raw : JSON.stringify(raw);
    const after = isText ? next : JSON.stringify(next);
    if (before !== after) {
      updates[c] = next;
      console.log(`\n## ${c}`);
      for (const m of before.match(/.{0,50}(984[\s.-]?48|dobl+e+se).{0,50}/gi) ?? []) console.log("  -", m);
    }
    const left = after.match(/.{0,40}(984[\s.-]?48|dobl+e+se|doble ?s\b).{0,40}/gi);
    if (left) console.log(`  !! still in ${c}:`, left);
  }

  if (!Object.keys(updates).length) console.log("Nothing to change.");
  else if (!apply) console.log("\nDry run. Re-run with --apply to write and regenerate.");
  else {
    await sql`update website_config set ${sql(updates)}, updated_at = now() where account_id = ${ACCOUNT}`;
    console.log("\nDB updated:", Object.keys(updates).join(", "));
  }

  if (apply) {
    const r = await fetch(`${process.env.SITE_GENERATOR_URL.replace(/\/$/, "")}/api/refresh/${ACCOUNT}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.SITE_GENERATOR_API_KEY}`, "Content-Type": "application/json" },
      body: "{}",
    });
    console.log("Refresh:", r.status, await r.text());
  }
} catch (e) {
  console.error("FAILED:", e.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
