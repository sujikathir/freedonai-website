# Deploy FreeDon AI to freedonai.tech (Vercel + Namecheap)

Follow these steps to host the site on **freedonai.tech** using Vercel and your Namecheap domain.

---

## 1. Push the project to Git (if you haven’t)

Create a repo on GitHub (or GitLab/Bitbucket), then:

```bash
cd freedonai-website
git init
git add .
git commit -m "Initial FreeDon AI website"
git remote add origin https://github.com/YOUR_USERNAME/freedonai-website.git
git branch -M main
git push -u origin main
```

---

## 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub is easiest).
2. Click **Add New…** → **Project**.
3. **Import** your `freedonai-website` repo.
4. Leave defaults (Framework: Next.js, root: `./`). Click **Deploy**.
5. Wait for the build. You’ll get a URL like `freedonai-website.vercel.app`.

---

## 3. Add freedonai.tech as a custom domain on Vercel

1. In the Vercel project, open **Settings** → **Domains**.
2. Enter **freedonai.tech** and click **Add**.
3. Vercel will show you which DNS records to add. You’ll usually see either:
   - **Option A:** Use Vercel nameservers (recommended), or  
   - **Option B:** Add an **A** record and a **CNAME** record in Namecheap.

---

## 4. Configure DNS in Namecheap

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

## 5. SSL (HTTPS)

Vercel issues a certificate for your domain automatically. Once DNS is correct, **https://freedonai.tech** will work. No extra steps in Namecheap for SSL.

---

## 6. Redirect www to non‑www (optional)

In Vercel **Settings** → **Domains**, add both:

- `freedonai.tech`
- `www.freedonai.tech`

Set the **primary** to `freedonai.tech`. Vercel will redirect `www` to the primary.

---

## Quick reference

| Step | Where | What |
|------|--------|------|
| 1 | GitHub | Push repo |
| 2 | Vercel | Import repo, deploy |
| 3 | Vercel → Domains | Add `freedonai.tech` |
| 4 | Namecheap | Either Custom NS (Vercel) or A + CNAME |
| 5 | Wait | DNS propagation; SSL auto on Vercel |

If the site doesn’t load after a while, use [Vercel’s domain check](https://vercel.com/docs/concepts/projects/domains) and Namecheap’s DNS status to confirm the records match what Vercel shows.
