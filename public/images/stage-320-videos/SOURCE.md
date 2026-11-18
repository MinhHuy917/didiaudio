# Stage 320 YouTube video thumbnails and metadata

Nine public YouTube watch pages were fetched and their `ytInitialPlayerResponse` inspected on 2026-11-18. Each returned `playabilityStatus.status = OK` and `playableInEmbed = true`. The original titles, channel IDs, upload timestamps and duration values are recorded in `sources.json`, together with exact thumbnail URLs, dimensions, byte sizes and SHA-256 hashes.

Two videos use JBL's verified source channel ID `UCced_wdSslkOf7xc_0qyT8w`; other videos are attributed to their original review/demo channels, never represented as ĐiĐi Audio recordings. Availability, embedding permission, region restrictions, captions and advertising may change on YouTube after verification. The site retains direct watch links and handles player failures.

Only public promotional thumbnails are stored locally for the associated embedded videos. Thumbnails are converted to WebP at quality85, max960px wide, without enlargement or cropping; original framing, text, logos and watermarks remain. The nine WebPs total639826bytes. One video had no max-resolution thumbnail and uses its genuine480px `hqdefault.jpg` source. Video streams are NOT downloaded or rehosted. Copyright remains with the original creators; this record is not a claim of ownership or an open license.

Catalog/editorial translations: `src/data/product-videos.ts`. UI translations: `src/data/video-messages.ts`. Play uses the standard YouTube IFrame API with a youtube-nocookie embed host, original controls and an explicit user click. No API key, scraped stream URLs, player modification, hidden autoplay on page entry, or access-restriction bypass is used.
