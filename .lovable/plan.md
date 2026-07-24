## Replace portrait with user's photo

Swap the AI-generated placeholder portrait for the uploaded photo, styled to match the dark editorial aesthetic already used in Hero and About sections.

### Steps

1. **Edit the uploaded photo** via `imagegen--edit_image` using `/mnt/user-uploads/WhatsApp_Image_2026-07-24_at_12.15.46_PM.jpeg` as input:
   - Isolate Gulshan from the busy nighttime background (car, palm leaves, hedge).
   - Replace background with a clean dark studio backdrop (near-black `#0A0A0A` matching the site).
   - Apply desaturated / near-grayscale editorial treatment with subtle warm highlight, keeping face detail crisp.
   - Portrait 3:4 framing (1200×1600) so it works for both the full-bleed hero and the About column.
   - Save to `src/assets/hero-portrait.jpg` (overwriting the existing file so no import changes are needed in `Hero.tsx` / `About.tsx`).

2. **No code changes required** — both `Hero.tsx` and `About.tsx` already import `@/assets/hero-portrait.jpg`. The `grayscale` Tailwind class stays in place; the edited image will already lean monochrome so it blends cleanly.

3. **Verify** by viewing the new file and (if needed) checking the preview renders the updated portrait in the hero and About sections.

### Out of scope
- No layout, copy, or color-token changes.
- Not uploading the original as a Lovable Asset — keeping the local `src/assets` path preserves the existing import and the grayscale styling pipeline.
