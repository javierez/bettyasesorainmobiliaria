// One-off (account 180): complete properties_props.cardDisplay with the same
// defaults the site already applies at runtime (no visual change), so the
// generator's static build type-checks. Then re-trigger the refresh.
// Usage: node --env-file=.env fix180-card.mjs
import postgres from "postgres";

const ACCOUNT = 180;
const DEFAULTS = { cardTitle: "listing", cardEyebrow: "location", cardLocationField: "province" };
const sql = postgres(process.env.POSTGRES_URL, { ssl: "require", max: 1 });

try {
  const [row] = await sql`select properties_props from website_config where account_id = ${ACCOUNT}`;
  const isText = typeof row.properties_props === "string";
  const props = isText ? JSON.parse(row.properties_props) : row.properties_props;
  console.log("before:", JSON.stringify(props.cardDisplay));
  props.cardDisplay = { ...DEFAULTS, ...(props.cardDisplay ?? {}) };
  console.log("after: ", JSON.stringify(props.cardDisplay));
  const value = isText ? JSON.stringify(props) : props;
  await sql`update website_config set properties_props = ${value}, updated_at = now() where account_id = ${ACCOUNT}`;

  const r = await fetch(`${process.env.SITE_GENERATOR_URL.replace(/\/$/, "")}/api/refresh/${ACCOUNT}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.SITE_GENERATOR_API_KEY}`, "Content-Type": "application/json" },
    body: "{}",
  });
  console.log("Refresh:", r.status, await r.text());
} catch (e) {
  console.error("FAILED:", e.message);
  process.exitCode = 1;
} finally {
  await sql.end();
}
