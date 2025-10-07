/* Basic reset & fonts */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Inter:wght@300;400;600&display=swap');

:root{
  --bg: #fffaf6;
  --beige: #f6efe6;
  --accent: #c9a38d;
  --dark: #222;
  --muted: #6d6d6d;
  --white: #fff;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
  background:var(--bg);
  color:var(--dark);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  scroll-behavior:smooth;
}

/* Container and utility */
.container{max-width:1100px;margin:0 auto;padding:0 24px}
.row{display:flex}
.center{align-items:center}
.between{justify-content:space-between}
.grid{display:grid;gap:28px}

/* Top bar */
.topbar{
  position:fixed;left:0;right:0;top:0;
  background: linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.72));
  backdrop-filter: blur(6px); border-bottom:1px solid rgba(0,0,0,0.04);
  z-index:90;
  padding:14px 0;
}
.brand-main{
  font-family: 'Cormorant Garamond', serif;
  font-size:18px;
  letter-spacing:0.2px;
  color:var(--dark);
}

/* Navigation */
.nav{display:flex;gap:18px}
.nav-link{
  font-weight:500;color:var(--dark);text-decoration:none;padding:6px 8px;border-radius:6px;transition:color .2s, background .2s;
}
.nav-link:hover{color:var(--accent);background:rgba(201,163,141,0.06)}

/* Langs & booking */
.langs{display:inline-flex;gap:8px;margin-right:12px}
.lang-btn{
  background:transparent;border:0;padding:6px 8px;cursor:pointer;font-weight:600;color:var(--muted)
}
.lang-btn.active{color:var(--dark)}

.book-btn{
  display:inline-block;padding:8px 14px;border-radius:999px;background:var(--accent);color:var(--white);text-decoration:none;font-weight:600;margin-left:12px;
}

/* HERO */
.hero{height:86vh;padding-top:90px;display:flex;align-items:center;position:relative;overflow:hidden}
.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:40px;align-items:center}
.hero-title{
  font-family: 'Cormorant Garamond', serif;
  font-size:44px;margin:0 0 12px 0;color:var(--dark);
}
.hero-sub{font-size:18px;color:var(--muted);margin-bottom:18px}
.actions{display:flex;gap:12px}
.btn{display:inline-block;padding:10px 18px;border-radius:28px;background:var(--accent);color:var(--white);text-decoration:none;font-weight:600}
.btn.ghost{background:transparent;border:1px solid rgba(0,0,0,0.06);color:var(--dark)}

.portrait-wrap{width:100%;display:flex;justify-content:center}
.portrait{width:360px;height:460px;object-fit:cover;border-radius:12px;box-shadow:0 28px 60px rgba(0,0,0,0.18);border:6px solid rgba(255,255,255,0.6)}

/* hero blob */
.hero-blob{position:absolute;right:-120px;bottom:-40px;width:700px;height:700px;opacity:0.12;pointer-events:none;fill:var(--beige)}

/* Sections */
.section{padding:96px 0}
.section--muted{background:var(--beige)}
.section--light{background:linear-gradient(180deg, rgba(255,255,255,0.0), rgba(255,250,245,1))}

.section-title{
  font-family:'Cormorant Garamond', serif;
  font-size:28px;margin-bottom:18px;color:var(--dark)
}
.lead{font-size:16px;color:var(--muted);line-height:1.6}

/* About grid */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}
.photo-card img{width:100%;border-radius:12px;object-fit:cover;box-shadow:0 12px 40px rgba(0,0,0,0.08)}

/* Work list */
.work-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;list-style:disc;padding-left:20px;text-align:left;color:var(--dark)}
.work-list li{padding:6px 0;font-weight:500}

/* Disclaimer */
.disclaimer{margin-top:18px;color:var(--muted);font-style:normal}

/* Services */
.services-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:18px}
.service{background:rgba(255,255,255,0.9);padding:18px;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.04)}

/* Contacts */
.form-card{margin-top:18px;background:var(--white);padding:18px;border-radius:10px;box-shadow:0 10px 30px rgba(0,0,0,0.04)}
.form-card input,.

> Maro Basilaia🇬🇪:
form-card textarea{width:100%;padding:12px;border-radius:8px;border:1px solid rgba(0,0,0,0.06);margin-bottom:10px;font-family:inherit}

/* contact image */
.contact-img img{width:100%;border-radius:12px;object-fit:cover}

/* Footer */
.footer{padding:32px 0;text-align:center;color:var(--muted);border-top:1px solid rgba(0,0,0,0.03)}

/* Utilities */
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}

/* Responsive */
@media (max-width:980px){
  .hero-inner{grid-template-columns:1fr 320px}
  .portrait{width:300px;height:380px}
  .work-list{grid-template-columns:1fr}
  .about-grid{grid-template-columns:1fr}
  .services-grid{grid-template-columns:1fr}
}

@media (max-width:640px){
  .container{padding:0 18px}
  .topbar{padding:10px 0}
  .hero-inner{grid-template-columns:1fr}
  .portrait{width:260px;height:340px;margin:0 auto}
  .brand-main{font-size:16px}
  .nav{display:none}
  .langs{display:flex;gap:6px}
  .book-btn{display:none}
  section{padding:64px 0}
  .hero{height:70vh;padding-top:80px}
}
