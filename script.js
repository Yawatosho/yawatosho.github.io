const games = [
  {
	id: "bilib",
    title: "本ならべパズルゲーム「BibLib（びぶりぶ）」",
    shortTitle: "BibLib（びぶりぶ）",
    description: "0から9までの数字が書かれた本を順番に並べて消していくパズルゲームです。",
    url: "https://yawatosho.github.io/biblib/",
    image: "https://yawatosho.github.io/biblib/ogp.webp",
    category: "Shelving / Puzzle",
    year: "2026",
    featured: true,
    archive: false
  },
  {
	id: "librarian-type",
    title: "あなたはどの図書館員タイプ？",
    shortTitle: "あなたはどの図書館員タイプ？",
    description: "12の質問から、あなたの図書館員タイプを勝手に分類する診断ゲームです。",
    url: "https://yawatosho.github.io/librarian-type/",
    image: "https://yawatosho.github.io/librarian-type/assets/ogp.png",
    category: "Diagnosis / Librarian",
    year: "2026",
    featured: true,
    archive: false
  },
  {
    id: "reference",
    title: "THE REFERENCE INTERVIEW GAME｜ほんとの質問",
    shortTitle: "THE REFERENCE INTERVIEW GAME",
    description: "利用者との対話から、ほんとの質問を見つけるレファレンス・インタビューゲーム。",
    url: "https://yawatosho.github.io/reference/",
    image: "https://yawatosho.github.io/reference/assets/ogp/ogp.png?v=20260812-full",
    category: "Reference / Deduction",
    filter: "reference",
    year: "2026",
    featured: true,
    archive: false
  },
  {
    id: "tower",
    title: "LIBRARY RUSH —カウンターは大忙し！—",
    shortTitle: "LIBRARY RUSH",
    description: "図書館の満足度を守りながら、次々に訪れる利用者に対応する待ち行列管理ゲーム。",
    url: "https://yawatosho.github.io/tower/",
    image: "https://yawatosho.github.io/tower/assets/ogp-library-rush-v5.png",
    category: "Counter / Management",
    filter: "management",
    year: "2026",
    archive: false
  },
  {
    id: "library-management-sim",
    title: "University Library Maker",
    shortTitle: "University Library Maker",
    description: "3年間で、大学に必要とされる図書館を育てる大学図書館運営シミュレーション。",
    url: "https://yawatosho.github.io/library-management-sim/",
    image: "https://yawatosho.github.io/library-management-sim/assets/images/ogp.png",
    category: "University Library / Simulation",
    filter: "management",
    year: "2026",
    archive: false
  },
  {
    id: "karuta-heroes",
    title: "NDC Karuta Heroes",
    shortTitle: "NDC Karuta Heroes",
    description: "NDCを読み解き、札を取り、強敵を倒す。対戦格闘ゲーム風のストーリー対戦カルタ。",
    url: "https://yawatosho.github.io/karuta_heroes/",
    image: "https://yawatosho.github.io/karuta_heroes/image/ogp.png",
    category: "NDC / Card Battle",
    filter: "ndc",
    year: "2026",
    archive: false
  },
  {
    id: "lily",
    title: "ひよっこ司書の本棚レスキューミッション",
    shortTitle: "BOOKSHELF RESCUE",
    description: "ひよっこ司書リリーと一緒に、本の並びや配架のミッションに挑む図書館ゲーム。",
    url: "https://yawatosho.github.io/lily/",
    image: "https://yawatosho.github.io/lily/assets/ogp.png",
    category: "Shelving / Call Number",
    filter: "shelving",
    year: "2026",
    archive: false
  },
  {
    id: "karuta2",
    title: "スーパー日本十進分類カルタ",
    shortTitle: "SUPER NDC KARUTA",
    description: "分類コードを読み解き、最速で札を取る。日本十進分類カルタのパワーアップ版。",
    url: "https://yawatosho.github.io/karuta2/",
    image: "https://yawatosho.github.io/karuta2/logo.png?v=2",
    category: "NDC / Karuta",
    filter: "ndc",
    year: "2026",
    archive: false
  },
  {
    id: "study",
    title: "司書さんと覚える日本十進分類",
    shortTitle: "STUDY NDC",
    description: "司書さんと一緒に日本十進分類を覚える、クイズ＆トレーニングゲーム。",
    url: "https://yawatosho.github.io/study/",
    image: "https://yawatosho.github.io/study/images/ogp.png",
    category: "NDC / Quiz",
    filter: "ndc",
    year: "2026",
    archive: false
  },
  {
    id: "100masu",
    title: "100マスNDC",
    shortTitle: "100 NDC",
    description: "NDCの「類」と「綱」を組み合わせた100マスを埋めて、分類知識とタイムを競うゲーム。",
    url: "https://yawatosho.hateblo.jp/100masu",
    image: "",
    category: "NDC / Time Attack",
    filter: "ndc",
    year: "2025",
    archive: true
  },
  {
    id: "karuta-classic",
    title: "日本十進分類カルタ",
    shortTitle: "NDC KARUTA",
    description: "読み上げられるNDCの番号から、対応する主題の札を素早く取るカルタゲーム。",
    url: "https://yawatosho.hateblo.jp/karuta",
    image: "",
    category: "NDC / Karuta",
    filter: "ndc",
    year: "2025",
    archive: true
  },
  {
    id: "ndc-academy",
    title: "NDC Academy",
    shortTitle: "NDC ACADEMY",
    description: "日本十進分類法を学べるクイズ。NDC→主題／主題→NDCの2方向から挑戦。",
    url: "https://yawatosho.hateblo.jp/ndc_academy",
    image: "",
    category: "NDC / Quiz",
    filter: "ndc",
    year: "2025",
    archive: true
  },
  {
    id: "ndc-training",
    title: "NDC Academy for Training",
    shortTitle: "NDC TRAINING",
    description: "類や区分を選び、繰り返し練習できるNDC Academyのトレーニング版。",
    url: "https://yawatosho.hateblo.jp/ndc_academy_toremo",
    image: "",
    category: "NDC / Training",
    filter: "ndc",
    year: "2025",
    archive: true
  },
  {
    id: "order",
    title: "The Order of Books",
    shortTitle: "THE ORDER OF BOOKS",
    description: "本を請求記号順に並べ替えるタイムアタック。書架の秩序を取り戻そう。",
    url: "https://yawatosho.hateblo.jp/order",
    image: "",
    category: "Shelving / Time Attack",
    filter: "shelving",
    year: "2025",
    archive: true
  },
  {
    id: "missorder",
    title: "まいご本を救え！ひよっこ司書の本棚レスキューミッション",
    shortTitle: "MISSORDER",
    description: "本棚から請求記号順になっていない本を見つけるタイムアタック。",
    url: "https://yawatosho.hateblo.jp/missorder",
    image: "",
    category: "Shelving / Find",
    filter: "shelving",
    year: "2025",
    archive: true
  },
  {
    id: "stewardship-wheel",
    title: "Stewardship Wheel｜Who owns our knowledge?",
    shortTitle: "STEWARDSHIP WHEEL",
    description: "Who owns our knowledge? を題材にした、ステュワードシップ・ルーレット。",
    url: "https://yawatosho.hateblo.jp/oaweek2025",
    image: "",
    category: "Open Access / Roulette",
    filter: "other",
    year: "2025",
    archive: true
  }
];

const filterItems = [
  ["all", "All"],
  ["management", "Management"],
  ["ndc", "NDC"],
  ["shelving", "Shelving"],
  ["reference", "Reference"],
  ["other", "Other"]
];

const featuredGrid = document.querySelector("#featuredGrid");
const gamesGrid = document.querySelector("#gamesGrid");
const featuredTemplate = document.querySelector("#featuredTemplate");
const gameTemplate = document.querySelector("#gameTemplate");
const filtersEl = document.querySelector("#filters");
const gameCount = document.querySelector("#gameCount");
const emptyMessage = document.querySelector("#emptyMessage");
const surpriseMe = document.querySelector("#surpriseMe");
let activeFilter = "all";

function trackGameOpen(game, source) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "game_open", {
    game_id: game.id,
    game_title: game.title,
    game_source: source,
    link_url: game.url,
    transport_type: "beacon"
  });
}

function bindImage(image, visual, game, fallbackSelector) {
  const fallback = visual.querySelector(fallbackSelector);
  if (!game.image) {
    visual.classList.add("is-fallback");
    return;
  }
  image.src = game.image;
  image.alt = `${game.title} のキービジュアル`;
  image.addEventListener("error", () => {
    visual.classList.add("is-fallback");
    if (fallback) fallback.setAttribute("aria-hidden", "false");
  }, { once: true });
}

function renderFeatured() {
  const featured = games.filter(game => game.featured).slice(0, 3);
  featured.forEach((game, index) => {
    const fragment = featuredTemplate.content.cloneNode(true);
    const link = fragment.querySelector(".featured-link");
    const visual = fragment.querySelector(".featured-visual");
    const image = fragment.querySelector(".featured-image");

    link.href = game.url;
    link.setAttribute("aria-label", `${game.title} を遊ぶ`);
    link.addEventListener("click", () => trackGameOpen(game, "featured"));

    fragment.querySelector(".featured-index").textContent = `0${index + 1}`;
    fragment.querySelector(".featured-meta").textContent = `${game.year} / ${game.category}`;
    fragment.querySelector(".featured-title").textContent = game.title;
    bindImage(image, visual, game, ".featured-fallback");
    featuredGrid.appendChild(fragment);
  });
}

function renderFilters() {
  filterItems.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-button";
    button.textContent = label;
    button.dataset.filter = value;
    button.classList.toggle("is-active", value === activeFilter);
    button.addEventListener("click", () => {
      activeFilter = value;
      filtersEl.querySelectorAll(".filter-button").forEach(btn => {
        btn.classList.toggle("is-active", btn.dataset.filter === activeFilter);
      });
      renderGames();
    });
    filtersEl.appendChild(button);
  });
}

function renderGames() {
  gamesGrid.innerHTML = "";
  const visible = activeFilter === "all"
    ? games
    : games.filter(game => game.filter === activeFilter);

  gameCount.textContent = `(${visible.length})`;
  emptyMessage.hidden = visible.length !== 0;

  visible.forEach((game) => {
    const fragment = gameTemplate.content.cloneNode(true);
    const link = fragment.querySelector(".game-link");
    const visual = fragment.querySelector(".game-visual");
    const image = fragment.querySelector(".game-image");
    const archiveBadge = fragment.querySelector(".archive-badge");

    link.href = game.url;
    link.setAttribute("aria-label", `${game.title} を遊ぶ`);
    link.addEventListener("click", () => trackGameOpen(game, "collection"));

    fragment.querySelector(".game-meta").textContent = `${game.year} / ${game.category}`;
    fragment.querySelector(".game-title").textContent = game.title;
    fragment.querySelector(".game-description").textContent = game.description;
    archiveBadge.hidden = !game.archive;

    bindImage(image, visual, game, ".game-fallback");
    gamesGrid.appendChild(fragment);
  });
}

surpriseMe.addEventListener("click", () => {
  const game = games[Math.floor(Math.random() * games.length)];
  trackGameOpen(game, "surprise_me");
  window.open(game.url, "_blank", "noopener");
});

renderFeatured();
renderFilters();
renderGames();
