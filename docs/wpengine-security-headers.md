# WP Engine — HTTP Security Headers Configuration

Since this site is a static export deployed to WP Engine (Nginx), HTTP security headers
must be configured at the hosting platform level, not in Next.js.

## Where to configure

WP Engine Admin Portal → Your Environment → **Redirects / Custom Nginx Rules**
(exact menu path depends on your plan; contact WP Engine support if needed)

## Headers to add

### Option A — WP Engine Custom Nginx Snippet

If your WP Engine plan supports custom Nginx configuration, request support to apply this:

```nginx
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()" always;
```

### Option B — CDN/WAF Layer (Recommended)

If you use Cloudflare or another CDN in front of WP Engine, add these as
**Transform Rules → Response Headers** in the CDN dashboard. This is easier
and does not require WP Engine support involvement.

---

## What these headers do

| Header | Purpose |
|--------|---------|
| `X-Frame-Options: DENY` | Prevents the site from being embedded in iframes (blocks Clickjacking) |
| `X-Content-Type-Options: nosniff` | Stops browsers from guessing content types (MIME sniffing attacks) |
| `Referrer-Policy` | Limits what URL info is sent to third parties |
| `Strict-Transport-Security` | Forces HTTPS; prevents SSL-stripping attacks |
| `Permissions-Policy` | Disables unused browser features (camera, mic, etc.) |

---

## Notes

- `X-Frame-Options: DENY` will break any page that intentionally embeds Noviant
  pages in an iframe. Change to `SAMEORIGIN` if self-embedding is needed.
- HSTS `preload` requires submission to https://hstspreload.org after applying.
- CSP is already partially applied via HTML `<meta>` tags in the site code.
  Server-level CSP headers provide stronger coverage (meta CSP cannot set
  `frame-ancestors`; only HTTP headers can).
