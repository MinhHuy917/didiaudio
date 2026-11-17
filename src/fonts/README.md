# Inter local font

`src/app/layout.tsx` uses `next/font/local`, so production builds no longer download font files from Google Fonts. Preserve `--font-inter`, normal style, variable weight100–900, display swap and Next's generated fallback metrics.

Source: https://github.com/rsms/inter — `docs/font-files/InterVariable.woff2`.
License: `OFL.txt`, copied from the upstream `LICENSE.txt`.

Prepared18/11/2026: keep the unicode coverage declared by the previous Google Inter stylesheet (Latin, Vietnamese, Cyrillic and Greek), pin optical size14 to match the previous weight-only face, and retain variable weights100–900. The committed WOFF2 is182,060bytes and supports1681 codepoints. Build needs neither a font processing tool nor a Google connection; the preprocessing tools were installed only in a temporary directory, not as project dependencies.

SHA-256: `47ad69ff5ea615ec6a4b1cfd2d56149d8655a37811230421a303abadfaf84846`.

Validation18/11/2026: two `yarn build` runs in the restricted-network environment completed with exit0 (19.59s and17.67s), including lint/type checking,60 generated pages and sitemap. Chrome confirmed the local weight100–900 face loaded, Vietnamese heading rendered, no horizontal overflow at390px and no Google Fonts requests. No package dependency changes or production deployment.
