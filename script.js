
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
      <img src="data:image/png;base64,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" alt="Logo Créateur Lab" style="width:100%;height:100%;object-fit:cover;border-radius:9px;">
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
        <h1 class="hero-title">Améliorez votre <span>chaîne YouTube</span>.</h1>
        <p class="hero-sub">Choisissez un outil pour l'écriture ou la stratégie de visibilité de vos vidéos.</p>
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
 
</main>
 
<footer class="foot"><span style="color:var(--warm2);">INTERFACE EN COURS DE CONSTRUCTION</span><br>CREATOR LAB — STUDIO DE PRODUCTION DE CONTENU</footer>
 
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
    var soundEls = document.querySelectorAll(".btn-sound, .card, .sound-toggle");
    soundEls.forEach(function(el){
      el.addEventListener("mouseenter", playHover);
    });
    document.querySelectorAll(".btn-sound, .card").forEach(function(el){
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
 
})();
</script>
</body>
</html>
 
