Update the Experience section to show only the Zepto role.

## Changes
- Edit `src/components/portfolio/Experience.tsx`.
- Remove the `Country Delight` and `Leads Ark` entries from the `ROLES` array.
- Keep the `Rider Shift In-Charge — Zepto` role and its existing bullets.
- Adjust layout: convert the alternating two-column timeline to a single centered card so the lone entry still looks balanced and intentional. Remove the timeline connector/dot when there is only one item, or keep a minimal centered version.
- Ensure the section heading, subtitle, and spacing remain intact.

## Verification
- Run the dev build check and visually inspect the Experience section to confirm only the Zepto entry appears, centered, with no orphaned timeline artifacts.