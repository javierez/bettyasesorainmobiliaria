// Los vídeos del bucket de producción salen por CloudFront; lo demás, igual.
// Sin framework: afirma, imprime un resumen y sale != 0, como el resto de tests.
//
//   pnpm tsx src/lib/por-cdn.test.ts
import { porCdn } from "./utils";

let failed = 0;

function ok(cond: boolean, what: string): void {
  if (cond) {
    console.log(`  ✓ ${what}`);
    return;
  }
  failed++;
  console.error(`  ✗ ${what}`);
}

const S3 = "https://vesta-crm-prod-eu-e966e353.s3.eu-west-1.amazonaws.com";

ok(
  porCdn(`${S3}/accounts/155/hero/background-2_sWARhvE7.mp4`) ===
    "https://dtkjt7qbzgfpq.cloudfront.net/accounts/155/hero/background-2_sWARhvE7.mp4",
  "el vídeo de hero de GO4 sale por CloudFront con la misma clave",
);
ok(
  porCdn("https://vesta-config-eu-de2eecd0.s3.eu-west-1.amazonaws.com/logo.png") ===
    "https://vesta-config-eu-de2eecd0.s3.eu-west-1.amazonaws.com/logo.png",
  "otro bucket no se toca",
);
ok(
  porCdn("https://www.youtube.com/embed/abc") === "https://www.youtube.com/embed/abc",
  "una URL que no es de S3 no se toca",
);
ok(porCdn(null) === undefined && porCdn("") === "", "vacío sigue vacío");

console.log(failed ? `\n${failed} fallo(s)` : "\nTodo bien");
process.exit(failed ? 1 : 0);
