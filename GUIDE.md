# Sumit Bhoi Portfolio — Guide (मराठी)

## 1. Run kasa karaycha
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
```

## 2. Folder structure
```
public/
  images/
    sumit-walking.mp4   <- Hero cha background video
    hero-poster.jpg     <- video load honyaadhi dakhvla jaato (fallback photo)
    sumit-profile.mp4   <- About page cha photo
  resume.pdf            <- TU ITHE TAAK (Download Resume button hyala open karto)
src/
  data/portfolio.js     <- SARVA text, links, projects, skills ithech badla
  components/           <- Hero, About, ProjectSection, ExperienceSkills, Contact...
  styles/index.css      <- sarva design (colours variables survatila)
```

## 3. First page (Hero) cha background kasa banlay — 5 layers
`src/components/Hero.jsx` + `.hero__*` in `index.css`

| Layer (khalun var) | Kaam |
|---|---|
| 1. `<video>` | Tujha walking video, right 68% jaagevar. `autoPlay muted loop playsInline` he 4 attributes must (nasel tar browser autoplay karat nahi). |
| 2. CSS `filter: hue-rotate(38deg)` | Video blue hota, tyala purple look dila. Colour badlaycha asel tar 38deg badla. |
| 3. `.hero__tint` | Purple glow (screen blend). |
| 4. `.hero__shade` | Dava bhaag dark gradient => text clear vachta yeto, video chi dhar muddam disat nahi. |
| 5. `.hero__loopfade` | Video 10 sec cha ahe; loop hotana jhatka basto, mhanun shevat/survatila halka fade. |

Extra: floating dots (`.hero__dots`), grid lines (`.hero__grid`), "Code. Build. Repeat." handwritten tagline.

### Video / photo badlaycha asel tar
1. Navin video `public/images/sumit-walking.mp4` ya naavane replace kar (same naav).
2. Poster banva (video cha ek frame):
   `ffmpeg -ss 0.4 -i public/images/sumit-walking.mp4 -frames:v 1 -q:v 3 public/images/hero-poster.jpg`
3. Video 3 MB peksha motha asel tar compress kar:
   `ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -an -vf scale=1280:-2 public/images/sumit-walking.mp4`
   (`-an` = audio kaadhli, background video la audio nako.)
4. Video madhla manus ujavya baajula nasel tar `.hero__video` madhe `object-position` badla.

## 4. Tujhe links bharne (zaroori!)
`src/data/portfolio.js` ughad:
- `github`, `linkedin` -> real URL taak (rikame asel tar icon dakhvla jaat nahi).
- Pratyek project madhe `live`, `source`, `image`:
  - `null` asel tar button "disabled" disto (dead link nahi).
  - `image: '/images/grocery.png'` => screenshot `public/images/` madhe thev.
- Project features/duration/role: reference image varun ghetle aahet — jyaa tujhya project madhe nahit te kaadhun taak.
- Resume: `public/resume.pdf`.

## 5. Contact form
- Default: user cha email app ughadto (`mailto`), tujhya email la message jaail.
- Direct email sathi: `.env.example` -> `.env`, Formspree endpoint taak.

## 6. Deploy (free)
**Vercel:** GitHub var push kar -> vercel.com -> "Import Project" -> Framework: Vite -> Deploy.
**Netlify:** `npm run build` -> `dist` folder netlify.com/drop var drag-drop.
Env var (`VITE_FORM_ENDPOINT`) deploy settings madhe pan taakaychi.
