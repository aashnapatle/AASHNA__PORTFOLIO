# Aashna Patle — Portfolio

A production-quality personal portfolio website for Aashna Patle, Computer Science & Data Science student and developer.

**Visual identity:** Warm beige / espresso brown / champagne bronze — luxury-editorial-futuristic.
**Design philosophy:** Art-directed, intentional, no AI-template aesthetics.

---

## Features

- **Canvas particle intro** — text-sampled particles form "AASHNA / PATLE" with subtle mouse repulsion
- **Interactive tech badges** — subtle mousemove tilt around the hero
- **Expandable about panel** — photo frame with metallic border accent
- **Editorial skills grid** — asymmetric layout, no fake percentages
- **In-place project expansion** — cards expand/collapse without page navigation
- **Achievement journey line** — scroll-driven SVG/CSS line that draws progressively
- **FastAPI contact form** — form validates, POSTs to backend, stored in SQLite
- **Custom cursor** — champagne dot + ring with lag
- **Floating navbar** — translucent backdrop-blur, active section indicator
- **Grain texture overlay** — subtle paper feel via SVG data URI
- **Scroll reveal** — IntersectionObserver-based, respects prefers-reduced-motion
- **Fully responsive** — desktop / laptop / tablet / mobile

---

## Stack

### Frontend
| Technology | Purpose |
|---|---|
| HTML5 (semantic) | Structure and accessibility |
| CSS3 (custom properties, grid, flexbox) | All styles and design tokens |
| Vanilla JavaScript (ES6+) | Interactions, animations, API calls |
| Canvas API | Particle intro system |
| IntersectionObserver API | Scroll reveal + active nav |
| Google Fonts (Playfair Display + Inter) | Typography |

### Backend
| Technology | Purpose |
|---|---|
| Python 3.11+ | Runtime |
| FastAPI | REST API framework |
| Pydantic v2 | Request validation |
| aiosqlite | Async SQLite driver |
| Uvicorn | ASGI server |

### Database
- **SQLite** (file: `backend/portfolio.db`) — auto-created on first run

---

## Project Structure

```
AASHNA__PORTFOLIO/
├── frontend/
│   ├── index.html            # Full semantic portfolio page
│   ├── css/
│   │   └── style.css         # All styles and design tokens
│   ├── js/
│   │   ├── particles.js      # Canvas particle intro
│   │   ├── main.js           # Cursor, navbar, scroll reveal
│   │   ├── hero.js           # Tech badge interaction + parallax
│   │   ├── sections.js       # ← EDIT CONFIG HERE — all real data
│   │   └── contact.js        # Form validation + API call
│   └── assets/
│       └── photo.jpg         # ← Add your photo here
├── backend/
│   ├── main.py               # FastAPI app + CORS + lifespan
│   ├── database.py           # SQLite init and connection
│   ├── models.py             # Pydantic models
│   ├── routes/
│   │   └── contact.py        # POST /api/contact
│   ├── requirements.txt
│   └── portfolio.db          # Created automatically on first run
└── README.md
```

---

## Quick Setup

### 1. Prerequisites
- Python 3.11+
- A modern web browser

### 2. Backend

```bash
# From the AASHNA__PORTFOLIO directory:

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (macOS/Linux)
source venv/bin/activate

# Install dependencies
pip install -r backend/requirements.txt

# Start the API server
uvicorn backend.main:app --reload --port 8000
```

API will be live at: http://127.0.0.1:8000

### 3. Frontend

Open `frontend/index.html` in a browser. No build step required.

> **Tip:** Use VS Code Live Server, or `python -m http.server 3000` from the `frontend/` directory for a clean dev server experience.

---

## API Reference

### `POST /api/contact`

Submit a contact message.

**Request body (JSON):**
```json
{
  "name":    "Visitor Name",
  "email":   "visitor@example.com",
  "message": "Hello, I would like to connect."
}
```

**Success response (201):**
```json
{
  "id":         1,
  "status":     "success",
  "message":    "Your message has been received. Thank you!",
  "created_at": "2024-01-01 12:00:00"
}
```

**Validation errors (422):** Standard FastAPI validation error format.

### `GET /health`

Health check. Returns `{"status": "ok"}`.

---

## Adding Your Real Content

All content is configured in **`frontend/js/sections.js`** — one CONFIG object at the top of the file:

```javascript
window.PORTFOLIO_CONFIG = {
  resume:         'assets/resume.pdf',  // Your resume
  email:          'you@example.com',
  linkedin:       'https://linkedin.com/in/your-profile',
  github:         'https://github.com/your-username',
  photo:          'assets/photo.jpg',
  projects:       [...],   // 3 projects with real details
  achievements:   [...],   // Real achievements
  experience:     [...],   // Work experience
  certifications: [...],   // Certifications
};
```

**To add your photo:**
1. Place your photo file in `frontend/assets/photo.jpg`
2. In `frontend/index.html`, replace the `<div class="photo-placeholder">` with:
   ```html
   <img src="assets/photo.jpg" alt="Aashna Patle" />
   ```

**To add your resume:**
1. Place your PDF in `frontend/assets/resume.pdf`
2. In `sections.js`, set `resume: 'assets/resume.pdf'`

---

## Production Deployment

### Frontend
- Upload `frontend/` to any static hosting (Vercel, Netlify, GitHub Pages, etc.)
- Update `API_BASE` in `contact.js` to your deployed backend URL

### Backend
- Deploy to Railway, Render, Fly.io, or any Python host
- Set `allow_origins` in `main.py` to your actual frontend domain
- SQLite is fine for a portfolio; no extra DB setup required

---

## Design Notes

- No fake skill percentages, no fake testimonials, no invented achievements
- All placeholder fields are clearly marked with `TODO:` in `sections.js`
- `liveDemo` and `github` buttons only appear when real URLs are provided
- Certificate links only appear when real URLs are provided
- Animations respect `prefers-reduced-motion`
