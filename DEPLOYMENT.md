# Deploy FreeDon AI to freedonai.tech (Vercel + Namecheap)

**Repo:** [github.com/sujikathir/freedonai-website](https://github.com/sujikathir/freedonai-website)

Follow these steps to host the site on **freedonai.tech** using Vercel and your Namecheap domain.

---

## 1. Deploy on Vercel

1. **Import & deploy:** [vercel.com/new/import?s=https://github.com/sujikathir/freedonai-website](https://vercel.com/new/import?s=https://github.com/sujikathir/freedonai-website)  
   (Or: [vercel.com/new](https://vercel.com/new) → Import Git Repository → choose `sujikathir/freedonai-website`.)
2. Sign in with **GitHub** if prompted and allow Vercel to access your repos.
3. Keep defaults: **Framework** = Next.js, **Root** = `./`. Click **Deploy**.
4. Wait for the build. You’ll get a URL like `freedonai-website.vercel.app` — site is live.

---

## 2. Add freedonai.tech as a custom domain on Vercel

1. In the Vercel project, open **Settings** → **Domains**.
2. Enter **freedonai.tech** and click **Add**.
3. Vercel will show you which DNS records to add. You’ll usually see either:
   - **Option A:** Use Vercel nameservers (recommended), or  
   - **Option B:** Add an **A** record and a **CNAME** record in Namecheap.

---

## 3. Configure DNS in Namecheap

1. Log in at [namecheap.com](https://www.namecheap.com) → **Domain List** → **Manage** for **freedonai.tech**.

### Option A — Vercel nameservers (recommended)

1. In **Nameservers**, choose **Custom DNS**.
2. Enter the two nameservers Vercel gave you, e.g.:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
3. Save. Propagation can take from a few minutes up to 24–48 hours.

### Option B — A + CNAME in Namecheap

If you keep Namecheap’s nameservers:

1. Go to **Advanced DNS**.
2. Add (or edit) records as Vercel instructs, for example:
   - **A Record**  
     Host: `@`  
     Value: `76.76.21.21`  
     TTL: Automatic
   - **CNAME Record**  
     Host: `www`  
     Value: `cname.vercel-dns.com`  
     TTL: Automatic
3. Remove any conflicting A or CNAME for `@` or `www` if they exist.
4. Save. Wait for DNS propagation (minutes to 48 hours).

---

## 4. SSL (HTTPS)

Vercel issues a certificate for your domain automatically. Once DNS is correct, **https://freedonai.tech** will work. No extra steps in Namecheap for SSL.

---

## 5. Redirect www to non‑www (optional)

In Vercel **Settings** → **Domains**, add both:

- `freedonai.tech`
- `www.freedonai.tech`

Set the **primary** to `freedonai.tech`. Vercel will redirect `www` to the primary.

---

## Quick reference

| Step | Where | What |
|------|--------|------|
| 1 | Vercel | Import repo, deploy |
| 2 | Vercel → Domains | Add `freedonai.tech` |
| 3 | Namecheap | Either Custom NS (Vercel) or A + CNAME |
| 4 | Wait | DNS propagation; SSL auto on Vercel |

If the site doesn’t load after a while, use [Vercel’s domain check](https://vercel.com/docs/concepts/projects/domains) and Namecheap’s DNS status to confirm the records match what Vercel shows.
