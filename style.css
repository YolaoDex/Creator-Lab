<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Creator Lab</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#08080c;
    --bg-panel:#121218;
    --bg-panel-alt:#17171f;
    --border:rgba(255,255,255,0.08);
    --border-strong:rgba(255,255,255,0.16);
    --text:#f4f2f8;
    --text-muted:#8f8c9c;
    --text-dim:#5e5c68;
    --violet:#7c5cfc;
    --blue:#4e7fff;
    --warm1:#ff6b4a;
    --warm2:#ff3d81;
    --green:#3ddc84;
    --grad-cool: linear-gradient(135deg, var(--violet), var(--blue));
    --grad-warm: linear-gradient(135deg, var(--warm1), var(--warm2));
    --radius: 16px;
    --font-display:'Space Grotesk', sans-serif;
    --font-body:'Inter', sans-serif;
    --font-mono:'JetBrains Mono', monospace;
  }
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:
      radial-gradient(ellipse 900px 500px at 15% -5%, rgba(124,92,252,0.16), transparent 60%),
      radial-gradient(ellipse 700px 500px at 100% 10%, rgba(255,61,129,0.10), transparent 55%),
      var(--bg);
    color:var(--text);
    font-family:var(--font-body);
    min-height:100vh;
    -webkit-font-smoothing:antialiased;
  }
  @media (prefers-reduced-motion: reduce){
    *{animation-duration:0.001ms !important; transition-duration:0.001ms !important;}
  }
  a{color:inherit;}
  ::selection{background:rgba(124,92,252,0.35);}

  header.top{
    position:fixed; top:0; left:0; right:0; z-index:100;
    display:flex; align-items:center; justify-content:space-between;
    padding:16px 32px;
    background:rgba(8,8,12,0.72);
    backdrop-filter:blur(14px);
    -webkit-backdrop-filter:blur(14px);
    border-bottom:1px solid var(--border);
  }
  .logo{
    display:flex; align-items:center; gap:10px;
    font-family:var(--font-display); font-weight:700; font-size:20px; letter-spacing:-0.02em;
  }
  .logo-mark{
    width:30px; height:30px; border-radius:9px;
    background:var(--grad-cool);
    display:flex; align-items:center; justify-content:center;
    position:relative; overflow:hidden;
    box-shadow:0 0 0 1px var(--border-strong), 0 4px 18px rgba(124,92,252,0.35);
  }
  .logo-mark svg{width:16px; height:16px;}
  .header-right{display:flex; align-items:center; gap:14px;}
  .sound-toggle{
    width:38px; height:38px; border-radius:11px;
    background:var(--bg-panel); border:1px solid var(--border);
    display:flex; align-items:center; justify-content:center; cursor:pointer;
    transition:border-color .2s ease, transform .15s ease;
  }
  .sound-toggle:hover{border-color:var(--border-strong); transform:translateY(-1px);}
  .sound-toggle svg{width:18px; height:18px; stroke:var(--text-muted);}
  .sound-toggle.is-muted svg{stroke:var(--warm1);}

  main{padding-top:88px;}
  .view{display:none;}
  .view.active{display:block;}
  .view-enter{animation:viewIn .5s cubic-bezier(.16,.9,.3,1) both;}
  .view-exit{animation:viewOut .28s ease both;}
  @keyframes viewIn{from{opacity:0; transform:translateY(14px);} to{opacity:1; transform:translateY(0);}}
  @keyframes viewOut{from{opacity:1; transform:translateY(0);} to{opacity:0; transform:translateY(-10px);}}

  .wrap{max-width:1080px; margin:0 auto; padding:0 32px 90px;}
  .wrap-narrow{max-width:760px; margin:0 auto; padding:0 32px 90px;}

  .hero{padding:56px 0 40px;}
  .eyebrow{
    font-family:var(--font-mono); font-size:12px; letter-spacing:.14em; text-transform:uppercase;
    color:var(--violet); display:flex; align-items:center; gap:8px; margin-bottom:14px;
  }
  .eyebrow .dot{width:6px; height:6px; border-radius:50%; background:var(--violet); box-shadow:0 0 10px var(--violet); animation:pulse 2s infinite;}
  @keyframes pulse{0%,100%{opacity:1;} 50%{opacity:.35;}}
  h1.hero-title{
    font-family:var(--font-display); font-weight:700; font-size:44px; line-height:1.08; letter-spacing:-0.02em;
    margin:0 0 14px; max-width:640px;
  }
  h1.hero-title span{
    background:var(--grad-cool); -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .hero-sub{color:var(--text-muted); font-size:16px; max-width:520px; line-height:1.6; margin:0 0 36px;}

  .deck{
    border-radius:20px; border:1px solid var(--border);
    background:linear-gradient(180deg, var(--bg-panel), var(--bg-panel-alt));
    padding:22px; position:relative; overflow:hidden;
  }
  .deck-top{display:flex; align-items:center; justify-content:space-between; margin-bottom:18px;}
  .deck-label{font-family:var(--font-mono); font-size:12px; letter-spacing:.1em; color:var(--text-muted); text-transform:uppercase;}
  .on-air{
    display:flex; align-items:center; gap:8px;
    font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase;
    padding:6px 12px; border-radius:100px; border:1px solid var(--border); color:var(--text-dim);
  }
  .on-air .led{width:8px; height:8px; border-radius:50%; background:var(--text-dim); transition:all .3s ease;}
  .on-air.live{color:var(--green); border-color:rgba(61,220,132,0.3); background:rgba(61,220,132,0.06);}
  .on-air.live .led{background:var(--green); box-shadow:0 0 8px var(--green); animation:pulse 1.4s infinite;}

  .drop-zone{
    border:1.5px dashed var(--border-strong);
    border-radius:14px;
    padding:38px 24px;
    display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px;
    text-align:center; cursor:pointer;
    transition:border-color .25s ease, background .25s ease;
  }
  .drop-zone:hover, .drop-zone.drag-over{
    border-color:var(--violet); background:rgba(124,92,252,0.06);
  }
  .drop-icon{
    width:52px; height:52px; border-radius:14px;
    background:var(--grad-cool); display:flex; align-items:center; justify-content:center;
    box-shadow:0 8px 24px rgba(124,92,252,0.3);
  }
  .drop-icon svg{width:24px; height:24px; stroke:#fff;}
  .drop-zone p.main-txt{margin:0; font-size:15px; font-weight:500;}
  .drop-zone p.sub-txt{margin:0; font-size:13px; color:var(--text-muted);}
  .btn-import{
    margin-top:6px; border:none; cursor:pointer;
    background:var(--grad-cool); color:#fff; font-family:var(--font-body); font-weight:600; font-size:14px;
    padding:10px 22px; border-radius:100px;
    box-shadow:0 6px 20px rgba(124,92,252,0.28);
    transition:transform .18s ease, box-shadow .18s ease;
  }
  .btn-import:hover{transform:translateY(-2px); box-shadow:0 10px 26px rgba(124,92,252,0.4);}
  .file-chip{
    margin-top:14px; display:none; align-items:center; gap:10px;
    background:var(--bg-panel-alt); border:1px solid var(--border); border-radius:12px; padding:10px 14px;
    font-size:13px;
  }
  .file-chip.show{display:flex;}
  .file-chip svg{width:16px; height:16px; stroke:var(--green); flex-shrink:0;}
  .file-chip .name{font-family:var(--font-mono); color:var(--text);}
  .file-chip .rm{margin-left:auto; cursor:pointer; color:var(--text-muted); font-size:12px;}
  .file-chip .rm:hover{color:var(--warm2);}

  .section-label{
    font-family:var(--font-mono); font-size:12px; letter-spacing:.12em; text-transform:uppercase;
    color:var(--text-dim); margin:52px 0 20px;
  }
  .grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(270px, 1fr)); gap:18px;}
  .card{
    position:relative; border-radius:var(--radius); border:1px solid var(--border);
    background:var(--bg-panel); padding:26px; cursor:pointer; text-align:left;
    overflow:hidden; opacity:0; transform:translateY(16px);
    animation:cardIn .6s cubic-bezier(.16,.9,.3,1) forwards;
    transition:border-color .25s ease, transform .25s ease, background .25s ease;
  }
  .card:nth-child(1){animation-delay:.05s;}
  .card:nth-child(2){animation-delay:.14s;}
  .card:nth-child(3){animation-delay:.23s;}
  @keyframes cardIn{to{opacity:1; transform:translateY(0);}}
  .card::before{
    content:''; position:absolute; inset:0; border-radius:var(--radius); padding:1px;
    background:var(--grad-cool);
    -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite:xor; mask-composite:exclude;
    opacity:0; transition:opacity .3s ease;
  }
  .card:hover{transform:translateY(-4px); background:var(--bg-panel-alt);}
  .card:hover::before{opacity:1;}
  .card.warm::before{background:var(--grad-warm);}
  .card-icon{
    width:46px; height:46px; border-radius:13px; margin-bottom:20px;
    display:flex; align-items:center; justify-content:center;
    background:rgba(124,92,252,0.12); border:1px solid rgba(124,92,252,0.25);
  }
  .card.warm .card-icon{background:rgba(255,107,74,0.12); border-color:rgba(255,107,74,0.28);}
  .card-icon svg{width:22px; height:22px; stroke:var(--violet);}
  .card.warm .card-icon svg{stroke:var(--warm1);}
  .card h3{font-family:var(--font-display); font-size:19px; font-weight:600; margin:0 0 8px;}
  .card p{margin:0 0 20px; color:var(--text-muted); font-size:13.5px; line-height:1.55;}
  .card .go{
    display:flex; align-items:center; gap:6px; font-size:13px; font-weight:600; color:var(--text);
  }
  .card .go svg{width:14px; height:14px; stroke:currentColor; transition:transform .2s ease;}
  .card:hover .go svg{transform:translateX(4px);}

  .tool-header{
    position:sticky; top:73px; z-index:20; background:rgba(8,8,12,0.85); backdrop-filter:blur(10px);
    border-bottom:1px solid var(--border); margin:0 0 34px; padding:20px 32px;
    display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px;
  }
  .back-btn{
    display:flex; align-items:center; gap:8px; background:none; border:1px solid var(--border);
    color:var(--text-muted); font-family:var(--font-body); font-size:13px; font-weight:500;
    padding:9px 16px; border-radius:100px; cursor:pointer; transition:all .2s ease;
  }
  .back-btn:hover{border-color:var(--border-strong); color:var(--text); transform:translateX(-2px);}
  .back-btn svg{width:14px; height:14px;}
  .tool-title-wrap{display:flex; align-items:center; gap:14px;}
  .tool-title{font-family:var(--font-display); font-weight:600; font-size:20px;}

  .tool-lead{color:var(--text-muted); font-size:15px; max-width:620px; line-height:1.65; margin:0 0 30px;}

  .toc{
    display:flex; flex-wrap:wrap; gap:8px; margin:0 0 44px;
  }
  .toc a{
    font-size:12.5px; font-weight:500; font-family:var(--font-mono); text-decoration:none;
    color:var(--text-muted); background:var(--bg-panel); border:1px solid var(--border);
    padding:8px 14px; border-radius:100px; transition:all .2s ease;
  }
  .toc a:hover{color:var(--text); border-color:var(--violet); transform:translateY(-1px);}

  article.guide section{margin-bottom:52px; scroll-margin-top:150px;}
  article.guide .chapter-num{
    font-family:var(--font-mono); font-size:12px; letter-spacing:.1em; color:var(--violet); margin-bottom:10px; display:block;
  }
  .view-views article.guide .chapter-num{color:var(--warm1);}
  article.guide h2{
    font-family:var(--font-display); font-weight:600; font-size:25px; margin:0 0 16px; letter-spacing:-0.01em;
  }
  article.guide p{font-size:15px; line-height:1.8; color:#d9d7e2; margin:0 0 16px;}
  article.guide h3{
    font-family:var(--font-display); font-weight:600; font-size:16.5px; margin:26px 0 10px; color:var(--text);
  }
  article.guide ul{margin:0 0 16px; padding-left:20px;}
  article.guide li{font-size:14.5px; line-height:1.75; color:#d9d7e2; margin-bottom:8px;}
  article.guide li strong{color:var(--text); font-weight:600;}
  article.guide .callout{
    border-left:3px solid var(--violet); background:rgba(124,92,252,0.06);
    padding:14px 18px; border-radius:0 12px 12px 0; margin:20px 0; font-size:14px; color:#c9c6d6; line-height:1.7;
  }
  .view-views article.guide .callout{border-left-color:var(--warm1); background:rgba(255,107,74,0.06);}
  .guide-divider{height:1px; background:var(--border); margin:0 0 52px;}

  .panel{
    background:var(--bg-panel); border:1px solid var(--border); border-radius:var(--radius);
    padding:26px;
  }

  .tools-section{margin-bottom:44px;}
  .tools-section-head{display:flex; align-items:center; gap:12px; margin-bottom:6px;}
  .tools-section-head h2{font-family:var(--font-display); font-size:19px; font-weight:600; margin:0;}
  .tools-section-sub{color:var(--text-muted); font-size:14px; line-height:1.6; margin:0 0 18px; max-width:600px;}
  .search-row{display:flex; gap:10px; margin-bottom:18px;}
  .search-row input{
    flex:1; background:var(--bg-panel-alt); border:1px solid var(--border); color:var(--text);
    font-family:var(--font-body); font-size:14px; padding:11px 14px; border-radius:10px; outline:none;
    transition:border-color .2s ease;
  }
  .search-row input:focus{border-color:var(--violet);}
  .btn-search{
    border:none; cursor:pointer; background:var(--bg-panel-alt); border:1px solid var(--border);
    color:var(--text); font-family:var(--font-body); font-weight:600; font-size:13.5px;
    padding:0 20px; border-radius:10px; display:flex; align-items:center; gap:8px;
    transition:border-color .2s ease;
  }
  .btn-search:hover{border-color:var(--violet);}
  .btn-search svg{width:15px; height:15px;}

  .placeholder-grid{display:grid; grid-template-columns:repeat(auto-fit, minmax(230px,1fr)); gap:14px;}
  .placeholder-card{
    border:1.5px dashed var(--border-strong); border-radius:14px; padding:20px;
    display:flex; flex-direction:column; gap:10px; min-height:120px; justify-content:space-between;
    transition:border-color .2s ease, background .2s ease; text-decoration:none;
  }
  .placeholder-card:hover{border-color:var(--violet); background:rgba(124,92,252,0.05);}
  .placeholder-card .pc-top{display:flex; align-items:center; gap:10px;}
  .placeholder-card .pc-icon{
    width:34px; height:34px; border-radius:9px; background:var(--bg-panel-alt); border:1px solid var(--border);
    display:flex; align-items:center; justify-content:center; flex-shrink:0;
  }
  .placeholder-card .pc-icon svg{width:16px; height:16px; stroke:var(--text-muted);}
  .placeholder-card .pc-name{font-weight:600; font-size:14px; color:var(--text);}
  .placeholder-card .pc-desc{font-size:12.5px; color:var(--text-muted); line-height:1.5; margin:0;}
  .placeholder-badge{
    align-self:flex-start; font-family:var(--font-mono); font-size:10.5px; letter-spacing:.06em; text-transform:uppercase;
    color:var(--warm1); background:rgba(255,107,74,0.1); border:1px solid rgba(255,107,74,0.25);
    padding:4px 9px; border-radius:100px;
  }
  .divider{height:1px; background:var(--border); margin:40px 0;}

  .upload-mini{
    border:1.5px dashed var(--border-strong); border-radius:14px; padding:26px;
    display:flex; align-items:center; gap:18px; cursor:pointer; transition:all .2s ease;
  }
  .upload-mini:hover{border-color:var(--violet); background:rgba(124,92,252,0.05);}
  .upload-mini .um-icon{
    width:44px; height:44px; border-radius:12px; background:var(--grad-warm); flex-shrink:0;
    display:flex; align-items:center; justify-content:center; box-shadow:0 6px 18px rgba(255,61,129,0.28);
  }
  .upload-mini .um-icon svg{width:20px; height:20px; stroke:#fff;}
  .upload-mini .um-text p{margin:0;}
  .upload-mini .um-text .t1{font-weight:600; font-size:14.5px;}
  .upload-mini .um-text .t2{font-size:12.5px; color:var(--text-muted); margin-top:3px;}

  .copy-article-btn{
    display:inline-flex; align-items:center; gap:8px; background:var(--bg-panel); border:1px solid var(--border);
    color:var(--text-muted); font-size:13px; font-weight:500; padding:9px 16px; border-radius:100px;
    cursor:pointer; transition:all .2s ease; font-family:var(--font-body); margin-bottom:36px;
  }
  .copy-article-btn:hover{border-color:var(--border-strong); color:var(--text);}
  .copy-article-btn svg{width:14px; height:14px;}
  .copy-article-btn.copied{color:var(--green); border-color:rgba(61,220,132,0.3);}

  footer.foot{
    text-align:center; padding:40px 32px 60px; color:var(--text-dim); font-size:12.5px;
    font-family:var(--font-mono); letter-spacing:.02em;
  }

  @media (max-width: 680px){
    header.top{padding:14px 18px;}
    .wrap, .wrap-narrow{padding:0 18px 70px;}
    h1.hero-title{font-size:32px;}
    .tool-header{padding:16px 18px;}
  }
</style>
</head>
<body>

<header class="top">
  <div class="logo">
    <div class="logo-mark">
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
    </div>
    Creator Lab
  </div>
  <div class="header-right">
    <div class="sound-toggle" id="soundToggle" title="Activer ou couper le son" role="button" tabindex="0" aria-label="Activer ou couper le son">
      <svg id="soundIconOn" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
      <svg id="soundIconOff" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
    </div>
  </div>
</header>

<main>

  <!-- ============ ACCUEIL ============ -->
  <section class="view active" id="view-home">
    <div class="wrap">
      <div class="hero">
        <div class="eyebrow"><span class="dot"></span> Studio de création</div>
        <h1 class="hero-title">Fabriquez du contenu qui <span>performe vraiment</span>.</h1>
        <p class="hero-sub">Importez votre vidéo, puis choisissez un outil pour l'écriture, la stratégie de visibilité ou les ressources externes.</p>

        <div class="deck">
          <div class="deck-top">
            <span class="deck-label">Console de diffusion</span>
            <div class="on-air" id="onAirHome"><span class="led"></span><span id="onAirLabelHome">En attente</span></div>
          </div>
          <div class="drop-zone" id="dropZoneHome">
            <div class="drop-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            </div>
            <p class="main-txt">Glissez-déposez votre vidéo ici</p>
            <p class="sub-txt">MP4, MOV, WEBM — ou utilisez le bouton ci-dessous</p>
            <button class="btn-import" id="btnImportHome" type="button">Importer ma vidéo</button>
            <input type="file" id="fileInputHome" accept="video/*" style="display:none">
          </div>
          <div class="file-chip" id="fileChipHome">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span class="name" id="fileNameHome">—</span>
            <span class="rm" id="fileRemoveHome">Retirer</span>
          </div>
        </div>
      </div>

      <div class="section-label">Vos outils</div>
      <div class="grid">
        <button class="card btn-sound" data-view="algo" type="button">
          <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg></div>
          <h3>Algorithme</h3>
          <p>Le guide complet pour écrire des titres, descriptions, scripts, accroches et hashtags qui fonctionnent vraiment.</p>
          <span class="go">Ouvrir le guide <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
        </button>

        <button class="card warm btn-sound" data-view="views" type="button">
          <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg></div>
          <h3>Plus de vues</h3>
          <p>La stratégie de visibilité complète : timing, miniatures, hooks, régularité, engagement.</p>
          <span class="go">Ouvrir le guide <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
        </button>

        <button class="card btn-sound" data-view="tools" type="button">
          <div class="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></svg></div>
          <h3>Outils recommandés</h3>
          <p>Convertisseur YouTube, effets spéciaux et sites externes sélectionnés pour votre production.</p>
          <span class="go">Ouvrir l'outil <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
        </button>
      </div>
    </div>
  </section>

  <!-- ============ ALGORITHME ============ -->
  <section class="view view-algo" id="view-algo">
    <div class="tool-header">
      <button class="back-btn btn-sound" data-back type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Retour à l'accueil
      </button>
      <div class="tool-title-wrap">
        <span class="tool-title">Algorithme</span>
      </div>
    </div>
    <div class="wrap-narrow">
      <p class="tool-lead">Le guide de référence pour rédiger un contenu professionnel qui capte l'attention et sert l'algorithme, du titre jusqu'aux hashtags.</p>

      <button class="copy-article-btn btn-sound" id="copyAlgoBtn" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copier tout le guide
      </button>

      <nav class="toc">
        <a href="#algo-titres">Titres</a>
        <a href="#algo-descriptions">Descriptions</a>
        <a href="#algo-scripts">Scripts</a>
        <a href="#algo-accroches">Accroches</a>
        <a href="#algo-hashtags">Hashtags</a>
      </nav>

      <article class="guide" id="algoArticle">
        <section id="algo-titres">
          <span class="chapter-num">CHAPITRE 01</span>
          <h2>Écrire des titres qui donnent envie de cliquer</h2>
          <p>Un titre a une seule mission : obtenir le clic sans trahir le contenu. C'est le premier filtre que l'algorithme observe, à travers le taux de clic (CTR), avant même de regarder la durée de visionnage. Un bon titre doit être compris en moins de deux secondes, même sur un petit écran de téléphone.</p>
          <h3>Les principes qui fonctionnent</h3>
          <ul>
            <li><strong>La promesse concrète.</strong> Un titre efficace annonce un résultat, une transformation ou une information précise plutôt qu'une idée vague. « Comment j'ai doublé mes vues en un mois » fonctionne mieux que « Mes astuces vidéo ».</li>
            <li><strong>La tension non résolue.</strong> Le titre ouvre une question que seule la vidéo peut fermer. Il ne faut jamais répondre à la question dans le titre lui-même, sinon le spectateur n'a plus de raison de cliquer.</li>
            <li><strong>Les chiffres et les repères concrets.</strong> Les nombres, les durées et les montants rassurent et donnent une idée claire de ce qui attend le spectateur.</li>
            <li><strong>La longueur adaptée à la plateforme.</strong> Sur YouTube, gardez l'essentiel dans les 60 premiers caractères, car c'est ce qui s'affiche sur mobile. Sur TikTok et Reels, le titre se lit en une fraction de seconde : allez droit au but.</li>
          </ul>
          <div class="callout">À éviter : le clickbait qui ne tient pas sa promesse. Il génère du clic à court terme mais fait chuter la rétention, ce qui pénalise la vidéo dans la durée aux yeux de l'algorithme.</div>
        </section>

        <section id="algo-descriptions">
          <span class="chapter-num">CHAPITRE 02</span>
          <h2>Rédiger une description qui travaille pour vous</h2>
          <p>La description n'est pas un simple résumé : c'est un outil de référencement et un prolongement de la relation avec l'audience. Elle est lue par l'algorithme pour comprendre le sujet de la vidéo, et par les spectateurs qui cherchent plus de contexte, des liens ou des ressources.</p>
          <h3>Structure recommandée</h3>
          <ul>
            <li><strong>Les deux premières lignes</strong> doivent résumer la valeur de la vidéo en une phrase claire, car ce sont les seules visibles avant le clic sur « plus ».</li>
            <li><strong>Le corps de la description</strong> détaille le contenu, mentionne les mots-clés naturellement liés au sujet, et peut inclure un sommaire horodaté pour les vidéos longues.</li>
            <li><strong>La fin de la description</strong> regroupe les liens utiles, les réseaux sociaux et un appel à l'action clair (s'abonner, commenter, regarder une autre vidéo).</li>
          </ul>
          <div class="callout">Astuce : intégrez les mots-clés que votre audience taperait réellement dans la barre de recherche, pas des termes techniques que vous seul utilisez.</div>
        </section>

        <section id="algo-scripts">
          <span class="chapter-num">CHAPITRE 03</span>
          <h2>Construire un script qui retient l'attention</h2>
          <p>Un script professionnel n'est pas un texte à réciter mais une structure qui guide le rythme de la vidéo. L'objectif est de maintenir la courbe de rétention la plus haute possible, car c'est le signal le plus fort envoyé à l'algorithme.</p>
          <h3>La structure en quatre temps</h3>
          <ul>
            <li><strong>L'ouverture (0 à 5 secondes) :</strong> on annonce immédiatement ce que le spectateur va obtenir, sans générique ni introduction longue.</li>
            <li><strong>La mise en contexte :</strong> on explique brièvement pourquoi le sujet compte, sans retarder l'action ou l'information principale.</li>
            <li><strong>Le développement :</strong> on avance par étapes ou par preuves concrètes, en variant le rythme visuel et vocal pour éviter les zones de décrochage.</li>
            <li><strong>La conclusion active :</strong> on résume la valeur apportée et on oriente vers une action précise, jamais un simple « n'oubliez pas de vous abonner » isolé.</li>
          </ul>
          <div class="callout">Chaque minute de script doit justifier sa présence. Si une phrase n'apporte ni information ni émotion ni rythme, elle se coupe.</div>
        </section>

        <section id="algo-accroches">
          <span class="chapter-num">CHAPITRE 04</span>
          <h2>Réussir l'accroche des premières secondes</h2>
          <p>L'accroche décide si le spectateur reste ou part. Sur les formats courts, ce sont les deux ou trois premières secondes qui déterminent la diffusion de la vidéo par l'algorithme ; sur les vidéos longues, ce sont les quinze premières secondes.</p>
          <h3>Techniques qui fonctionnent</h3>
          <ul>
            <li><strong>Commencer par le résultat</strong> plutôt que par le point de départ, puis revenir en arrière pour expliquer comment on y arrive.</li>
            <li><strong>Créer une rupture visuelle ou sonore</strong> dès la première image pour casser le défilement automatique du fil d'actualité.</li>
            <li><strong>Poser une question directe</strong> qui concerne personnellement le spectateur ciblé, plutôt qu'une question générale.</li>
            <li><strong>Éviter tout temps mort</strong> : pas de logo animé, pas de silence, pas de phrase de politesse avant le contenu.</li>
          </ul>
        </section>

        <section id="algo-hashtags">
          <span class="chapter-num">CHAPITRE 05</span>
          <h2>Choisir des hashtags utiles</h2>
          <p>Les hashtags aident l'algorithme à classer le contenu par thématique, mais leur effet est plus limité qu'on ne le pense : ils ne remplacent jamais un bon titre ou une bonne description.</p>
          <h3>Bonnes pratiques</h3>
          <ul>
            <li><strong>Mélangez trois niveaux :</strong> un hashtag large et populaire, un hashtag de niche précis, et un hashtag propre à votre marque ou série de contenu.</li>
            <li><strong>Limitez le nombre</strong> à trois ou quatre hashtags pertinents plutôt qu'une longue liste diluée, qui peut être perçue comme du spam.</li>
            <li><strong>Restez cohérent dans le temps</strong> sur vos hashtags de marque pour construire une identité reconnaissable et faciliter la recherche de vos anciennes vidéos.</li>
          </ul>
        </section>
      </article>
    </div>
  </section>

  <!-- ============ PLUS DE VUES ============ -->
  <section class="view view-views" id="view-views">
    <div class="tool-header">
      <button class="back-btn btn-sound" data-back type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Retour à l'accueil
      </button>
      <div class="tool-title-wrap">
        <span class="tool-title">Plus de vues</span>
      </div>
    </div>
    <div class="wrap-narrow">
      <p class="tool-lead">La stratégie complète pour sortir de la stagnation : ce que regarde réellement l'algorithme, et comment travailler chaque levier de visibilité.</p>

      <button class="copy-article-btn btn-sound" id="copyViewsBtn" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copier tout le guide
      </button>

      <nav class="toc">
        <a href="#views-timing">Timing</a>
        <a href="#views-miniatures">Miniatures</a>
        <a href="#views-hook">Hook</a>
        <a href="#views-regularite">Régularité</a>
        <a href="#views-engagement">Engagement</a>
        <a href="#views-donnees">Données</a>
      </nav>

      <article class="guide" id="viewsArticle">
        <section id="views-timing">
          <span class="chapter-num">CHAPITRE 01</span>
          <h2>Publier au bon moment</h2>
          <p>Le timing de publication n'améliore pas la qualité d'une vidéo, mais il détermine la taille du premier groupe de spectateurs qui la reçoit à chaud, ce qui influence directement sa diffusion initiale par l'algorithme.</p>
          <ul>
            <li><strong>Publiez quand votre audience est réellement disponible</strong>, pas au moment qui semble générique : un public étudiant, un public actif ou un public international n'ont pas les mêmes horaires.</li>
            <li><strong>Consultez vos statistiques d'audience</strong> pour identifier les créneaux où vos abonnés sont déjà connectés, plutôt que de suivre des recommandations génériques trouvées en ligne.</li>
            <li><strong>Laissez une marge avant le pic d'activité</strong> : publier trente à soixante minutes avant que votre audience soit la plus présente laisse le temps à l'algorithme de commencer à tester la vidéo.</li>
          </ul>
        </section>

        <section id="views-miniatures">
          <span class="chapter-num">CHAPITRE 02</span>
          <h2>Concevoir des miniatures qui arrêtent le défilement</h2>
          <p>La miniature travaille avec le titre, jamais seule. Ensemble, ils doivent former une promesse claire et cohérente en une fraction de seconde de lecture.</p>
          <ul>
            <li><strong>Un seul point focal</strong> par miniature : un visage expressif, un objet clé ou un résultat visuel, jamais plusieurs éléments qui se disputent l'attention.</li>
            <li><strong>Un contraste fort</strong> entre le sujet et l'arrière-plan, pensé pour rester lisible en très petit format sur mobile.</li>
            <li><strong>Peu ou pas de texte</strong> superposé : le texte redondant avec le titre n'apporte rien et alourdit la lecture visuelle.</li>
            <li><strong>Une cohérence de style</strong> dans la durée, pour que votre audience reconnaisse vos vidéos au premier coup d'œil dans un fil rempli de contenus concurrents.</li>
          </ul>
        </section>

        <section id="views-hook">
          <span class="chapter-num">CHAPITRE 03</span>
          <h2>Maîtriser les premières secondes</h2>
          <p>C'est le moment où l'algorithme décide combien de personnes supplémentaires verront la vidéo. Une chute d'audience dans les cinq premières secondes limite fortement la diffusion, quelle que soit la qualité du reste du contenu.</p>
          <ul>
            <li><strong>Montrez immédiatement la valeur</strong> ou le résultat final, sans préambule ni générique.</li>
            <li><strong>Évitez toute phrase de remplissage</strong> comme les salutations longues ou les rappels d'abonnement en ouverture.</li>
            <li><strong>Testez plusieurs accroches</strong> pour un même sujet et comparez leur rétention dans vos statistiques afin d'identifier ce qui capte le mieux votre audience.</li>
          </ul>
        </section>

        <section id="views-regularite">
          <span class="chapter-num">CHAPITRE 04</span>
          <h2>Tenir un rythme de publication régulier</h2>
          <p>La régularité rassure autant l'algorithme que l'audience : elle permet de mesurer les performances sur une base stable et construit une habitude de visionnage chez les abonnés.</p>
          <ul>
            <li><strong>Choisissez une fréquence tenable</strong> sur la durée plutôt qu'un rythme ambitieux qui s'effondre après quelques semaines : la constance prime sur le volume.</li>
            <li><strong>Fixez des créneaux fixes</strong> reconnaissables par votre audience, par exemple deux publications par semaine à jours fixes.</li>
            <li><strong>Préparez un stock de contenu</strong> à l'avance pour absorber les imprévus sans casser le rythme de publication.</li>
          </ul>
        </section>

        <section id="views-engagement">
          <span class="chapter-num">CHAPITRE 05</span>
          <h2>Nourrir l'interaction avec l'audience</h2>
          <p>Les commentaires, les partages et les réponses aux messages envoient un signal fort à l'algorithme, car ils indiquent qu'une vidéo génère une conversation, pas seulement une consommation passive.</p>
          <ul>
            <li><strong>Posez une question ouverte</strong> à la fin de la vidéo pour donner une raison concrète de commenter.</li>
            <li><strong>Répondez aux premiers commentaires</strong> rapidement après la publication : cela relance l'activité au moment où l'algorithme évalue la vidéo.</li>
            <li><strong>Épinglez un commentaire</strong> qui prolonge la discussion ou apporte un complément d'information utile.</li>
          </ul>
        </section>

        <section id="views-donnees">
          <span class="chapter-num">CHAPITRE 06</span>
          <h2>Lire ses statistiques pour ajuster sa stratégie</h2>
          <p>Aucune de ces techniques ne remplace l'observation de vos propres données. Chaque audience réagit différemment, et les statistiques indiquent précisément ce qui fonctionne pour la vôtre.</p>
          <ul>
            <li><strong>Suivez le taux de clic et la rétention</strong> plutôt que le seul nombre de vues, car ce sont les deux métriques qui pilotent la diffusion algorithmique.</li>
            <li><strong>Comparez vos vidéos entre elles</strong> plutôt qu'à des créateurs différents, pour identifier ce qui fonctionne spécifiquement pour votre format et votre audience.</li>
            <li><strong>Ajustez un seul élément à la fois</strong> (titre, miniature ou accroche) pour comprendre clairement l'effet de chaque changement.</li>
          </ul>
        </section>
      </article>
    </div>
  </section>

  <!-- ============ OUTILS RECOMMANDÉS ============ -->
  <section class="view view-tools" id="view-tools">
    <div class="tool-header">
      <button class="back-btn btn-sound" data-back type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
        Retour à l'accueil
      </button>
      <div class="tool-title-wrap">
        <span class="tool-title">Outils recommandés</span>
      </div>
    </div>
    <div class="wrap">
      <p class="tool-lead">Une sélection de sites et d'outils externes pour compléter votre production. Les cartes marquées « lien à ajouter » sont des emplacements réservés — remplacez le <code>href="#"</code> correspondant dans le code source par le lien réel.</p>

      <div class="tools-section">
        <div class="tools-section-head"><h2>Convertisseur YouTube</h2></div>
        <p class="tools-section-sub">Recherchez une chaîne YouTube pour accéder aux outils de conversion de ses vidéos vers d'autres formats, utiles pour republier ou archiver un contenu.</p>
        <div class="search-row">
          <input type="text" id="ytSearchInput" placeholder="Nom de la chaîne ou URL YouTube">
          <button class="btn-search btn-sound" id="ytSearchBtn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Rechercher
          </button>
        </div>
        <!-- PLACEHOLDERS LIENS : remplacer chaque href="#" ci-dessous par le lien réel du site de conversion -->
        <div class="placeholder-grid">
          <a class="placeholder-card btn-sound" href="#" data-placeholder-link="convertisseur-1">
            <div class="pc-top">
              <div class="pc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
              <span class="pc-name">Convertisseur A</span>
            </div>
            <p class="pc-desc">Emplacement réservé pour votre premier outil de conversion.</p>
            <span class="placeholder-badge">Lien à ajouter</span>
          </a>
          <a class="placeholder-card btn-sound" href="#" data-placeholder-link="convertisseur-2">
            <div class="pc-top">
              <div class="pc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
              <span class="pc-name">Convertisseur B</span>
            </div>
            <p class="pc-desc">Emplacement réservé pour un second outil de conversion.</p>
            <span class="placeholder-badge">Lien à ajouter</span>
          </a>
        </div>
      </div>

      <div class="divider"></div>

      <div class="tools-section">
        <div class="tools-section-head"><h2>Effets spéciaux vidéo</h2></div>
        <p class="tools-section-sub">Recherchez une chaîne ou un mot-clé pour trouver des outils d'effets spéciaux à appliquer sur vos vidéos.</p>
        <div class="search-row">
          <input type="text" id="fxSearchInput" placeholder="Nom de la chaîne ou mot-clé d'effet">
          <button class="btn-search btn-sound" id="fxSearchBtn" type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            Rechercher
          </button>
        </div>
        <!-- PLACEHOLDERS LIENS : remplacer chaque href="#" ci-dessous par le lien réel de l'outil d'effets -->
        <div class="placeholder-grid">
          <a class="placeholder-card btn-sound" href="#" data-placeholder-link="effets-1">
            <div class="pc-top">
              <div class="pc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21 7.5 13.5 2 9h7z"/></svg></div>
              <span class="pc-name">Effets spéciaux A</span>
            </div>
            <p class="pc-desc">Emplacement réservé pour votre premier outil d'effets.</p>
            <span class="placeholder-badge">Lien à ajouter</span>
          </a>
          <a class="placeholder-card btn-sound" href="#" data-placeholder-link="effets-2">
            <div class="pc-top">
              <div class="pc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 7h7l-5.5 4.5L18.5 21 12 16.5 5.5 21 7.5 13.5 2 9h7z"/></svg></div>
              <span class="pc-name">Effets spéciaux B</span>
            </div>
            <p class="pc-desc">Emplacement réservé pour un second outil d'effets.</p>
            <span class="placeholder-badge">Lien à ajouter</span>
          </a>
        </div>
      </div>

      <div class="divider"></div>

      <div class="tools-section">
        <div class="tools-section-head"><h2>Votre vidéo</h2></div>
        <p class="tools-section-sub">Vous pouvez aussi importer directement votre vidéo ici pour l'utiliser avec ces outils, sans repasser par l'accueil.</p>
        <div class="upload-mini btn-sound" id="uploadMiniTools">
          <div class="um-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          </div>
          <div class="um-text">
            <p class="t1" id="uploadMiniText">Importer ma vidéo</p>
            <p class="t2">Cliquez ou déposez un fichier ici</p>
          </div>
          <input type="file" id="fileInputTools" accept="video/*" style="display:none">
        </div>
      </div>
    </div>
  </section>

</main>

<footer class="foot">CREATOR LAB — STUDIO DE PRODUCTION DE CONTENU</footer>

<script>
(function(){
  "use strict";

  var muted = false;
  var actx = null;
  function ensureCtx(){
    if(!actx){
      try{ actx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){ actx = null; }
    }
    if(actx && actx.state === "suspended"){ actx.resume(); }
    return actx;
  }
  function tone(freq, start, dur, gainPeak, type){
    var ctx = ensureCtx();
    if(!ctx || muted) return;
    var osc = ctx.createOscillator();
    var gain = ctx.createGain();
    osc.type = type || "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + start);
    gain.gain.setValueAtTime(0.0001, ctx.currentTime + start);
    gain.gain.exponentialRampToValueAtTime(gainPeak, ctx.currentTime + start + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
    osc.connect(gain).connect(ctx.destination);
    osc.start(ctx.currentTime + start);
    osc.stop(ctx.currentTime + start + dur + 0.02);
  }
  function playHover(){ tone(720, 0, 0.07, 0.035, "sine"); }
  function playClick(){ tone(560, 0, 0.09, 0.05, "sine"); tone(880, 0.05, 0.12, 0.045, "sine"); }

  document.addEventListener("DOMContentLoaded", function(){
    var soundEls = document.querySelectorAll(".btn-sound, .card, .placeholder-card, .sound-toggle");
    soundEls.forEach(function(el){
      el.addEventListener("mouseenter", playHover);
    });
    document.querySelectorAll(".btn-sound, .card, .placeholder-card").forEach(function(el){
      el.addEventListener("click", playClick);
    });
  });

  var soundToggle = document.getElementById("soundToggle");
  var iconOn = document.getElementById("soundIconOn");
  var iconOff = document.getElementById("soundIconOff");
  function toggleMute(){
    muted = !muted;
    soundToggle.classList.toggle("is-muted", muted);
    iconOn.style.display = muted ? "none" : "block";
    iconOff.style.display = muted ? "block" : "none";
    ensureCtx();
  }
  soundToggle.addEventListener("click", toggleMute);
  soundToggle.addEventListener("keydown", function(e){
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); toggleMute(); }
  });

  var current = document.getElementById("view-home");
  function showView(id){
    var target = document.getElementById(id);
    if(!target || target === current) return;
    var outgoing = current;
    outgoing.classList.add("view-exit");
    setTimeout(function(){
      outgoing.classList.remove("active", "view-exit");
      target.classList.add("active", "view-enter");
      window.scrollTo(0, 0);
      setTimeout(function(){ target.classList.remove("view-enter"); }, 550);
      current = target;
    }, 260);
  }
  document.querySelectorAll("[data-view]").forEach(function(el){
    el.addEventListener("click", function(){ showView("view-" + el.getAttribute("data-view")); });
  });
  document.querySelectorAll("[data-back]").forEach(function(el){
    el.addEventListener("click", function(){ showView("view-home"); });
  });

  function wireUpload(dropZoneId, fileInputId, chipId, nameId, removeId, onAirId, onAirLabelId){
    var dropZone = document.getElementById(dropZoneId);
    var fileInput = document.getElementById(fileInputId);
    var chip = chipId ? document.getElementById(chipId) : null;
    var nameEl = nameId ? document.getElementById(nameId) : null;
    var removeEl = removeId ? document.getElementById(removeId) : null;
    var onAir = onAirId ? document.getElementById(onAirId) : null;
    var onAirLabel = onAirLabelId ? document.getElementById(onAirLabelId) : null;

    if(!dropZone) return;

    dropZone.addEventListener("click", function(e){
      if(e.target.closest(".btn-import") || e.target === dropZone || e.target.closest(".drop-icon") || e.target.closest("p")){
        fileInput.click();
      }
    });
    dropZone.addEventListener("dragover", function(e){ e.preventDefault(); dropZone.classList.add("drag-over"); });
    dropZone.addEventListener("dragleave", function(){ dropZone.classList.remove("drag-over"); });
    dropZone.addEventListener("drop", function(e){
      e.preventDefault();
      dropZone.classList.remove("drag-over");
      if(e.dataTransfer.files && e.dataTransfer.files[0]){
        handleFile(e.dataTransfer.files[0]);
      }
    });
    fileInput.addEventListener("change", function(){
      if(fileInput.files && fileInput.files[0]) handleFile(fileInput.files[0]);
    });

    function handleFile(file){
      playClick();
      if(chip && nameEl){
        nameEl.textContent = file.name;
        chip.classList.add("show");
      }
      if(onAir && onAirLabel){
        onAir.classList.add("live");
        onAirLabel.textContent = "Vidéo chargée";
      }
    }
    if(removeEl){
      removeEl.addEventListener("click", function(e){
        e.stopPropagation();
        fileInput.value = "";
        chip.classList.remove("show");
        if(onAir && onAirLabel){
          onAir.classList.remove("live");
          onAirLabel.textContent = "En attente";
        }
      });
    }
  }
  wireUpload("dropZoneHome", "fileInputHome", "fileChipHome", "fileNameHome", "fileRemoveHome", "onAirHome", "onAirLabelHome");

  var uploadMini = document.getElementById("uploadMiniTools");
  var fileInputTools = document.getElementById("fileInputTools");
  var uploadMiniText = document.getElementById("uploadMiniText");
  uploadMini.addEventListener("click", function(){ fileInputTools.click(); });
  uploadMini.addEventListener("dragover", function(e){ e.preventDefault(); });
  uploadMini.addEventListener("drop", function(e){
    e.preventDefault();
    if(e.dataTransfer.files && e.dataTransfer.files[0]){
      uploadMiniText.textContent = e.dataTransfer.files[0].name;
      playClick();
    }
  });
  fileInputTools.addEventListener("change", function(){
    if(fileInputTools.files && fileInputTools.files[0]){
      uploadMiniText.textContent = fileInputTools.files[0].name;
      playClick();
    }
  });

  function wireCopyArticle(btnId, articleId){
    var btn = document.getElementById(btnId);
    var article = document.getElementById(articleId);
    if(!btn || !article) return;
    btn.addEventListener("click", function(){
      var text = article.innerText;
      navigator.clipboard.writeText(text).then(function(){
        btn.classList.add("copied");
        var original = btn.innerHTML;
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Guide copié';
        setTimeout(function(){ btn.innerHTML = original; btn.classList.remove("copied"); }, 1800);
      });
    });
  }
  wireCopyArticle("copyAlgoBtn", "algoArticle");
  wireCopyArticle("copyViewsBtn", "viewsArticle");

  var ytBtn = document.getElementById("ytSearchBtn");
  var ytInput = document.getElementById("ytSearchInput");
  if(ytBtn){
    ytBtn.addEventListener("click", function(){
      playClick();
      var grid = ytBtn.closest(".tools-section").querySelector(".placeholder-grid");
      if(grid){ grid.scrollIntoView({behavior:"smooth", block:"nearest"}); }
    });
  }
  var fxBtn = document.getElementById("fxSearchBtn");
  if(fxBtn){
    fxBtn.addEventListener("click", function(){
      playClick();
      var grid = fxBtn.closest(".tools-section").querySelector(".placeholder-grid");
      if(grid){ grid.scrollIntoView({behavior:"smooth", block:"nearest"}); }
    });
  }

})();
</script>
</body>
</html>
