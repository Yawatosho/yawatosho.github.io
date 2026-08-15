const newsList = document.querySelector("#newsList");
const newsModal = document.querySelector("#newsModal");
const newsArchiveLink = document.querySelector("#newsArchiveLink");
const newsItems = Array.isArray(window.NEWS_ITEMS)
  ? [...window.NEWS_ITEMS].sort((a, b) => b.date.localeCompare(a.date))
  : [];
let newsModalTrigger = null;

function formatNewsDate(date) {
  return date.replaceAll("-", ".");
}

function trackNewsOpen(item) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "news_open", {
    news_id: item.id,
    news_title: item.title,
    news_date: item.date,
    transport_type: "beacon"
  });
}

function openNewsModal(item, trigger) {
  if (!newsModal) return;

  const image = newsModal.querySelector(".news-modal-image");
  const visual = newsModal.querySelector(".news-modal-visual");
  const date = newsModal.querySelector(".news-modal-date");
  const title = newsModal.querySelector(".news-modal-title");
  const detail = newsModal.querySelector(".news-modal-detail");
  const gameLink = newsModal.querySelector(".news-modal-game-link");

  visual.classList.remove("is-fallback");
  image.src = item.image;
  image.alt = item.imageAlt || "";
  date.dateTime = item.date;
  date.textContent = formatNewsDate(item.date);
  title.textContent = item.title;
  detail.textContent = item.detail;
  gameLink.hidden = !item.url;
  if (item.url) {
    gameLink.href = item.url;
    gameLink.setAttribute("aria-label", `${item.title} のゲームを遊ぶ（新しいタブで開きます）`);
  } else {
    gameLink.removeAttribute("href");
    gameLink.removeAttribute("aria-label");
  }
  newsModalTrigger = trigger;
  document.body.classList.add("is-modal-open");
  newsModal.showModal();
  trackNewsOpen(item);
}

function createNewsCard(item) {
  const article = document.createElement("article");
  article.className = "news-card";

  const button = document.createElement("button");
  button.className = "news-card-button";
  button.type = "button";
  button.setAttribute("aria-label", `${item.title} の詳細を見る`);

  const thumbnail = document.createElement("div");
  thumbnail.className = "news-thumbnail";
  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.imageAlt || "";
  image.loading = "lazy";
  image.addEventListener("error", () => thumbnail.classList.add("is-fallback"), { once: true });
  thumbnail.appendChild(image);

  const content = document.createElement("div");
  content.className = "news-card-content";
  const date = document.createElement("time");
  date.className = "news-date";
  date.dateTime = item.date;
  date.textContent = formatNewsDate(item.date);
  const title = document.createElement("h3");
  title.className = "news-title";
  title.textContent = item.title;
  const action = document.createElement("div");
  action.className = "news-card-action";
  action.innerHTML = "<span>Read more</span><span aria-hidden=\"true\">↗</span>";

  content.append(date, title, action);
  button.append(thumbnail, content);
  button.addEventListener("click", () => openNewsModal(item, button));
  article.appendChild(button);
  return article;
}

function renderNews() {
  if (!newsList) return;

  const requestedLimit = Number.parseInt(newsList.dataset.limit || "", 10);
  const hasLimit = Number.isFinite(requestedLimit) && requestedLimit > 0;
  const visibleItems = hasLimit ? newsItems.slice(0, requestedLimit) : newsItems;

  visibleItems.forEach(item => newsList.appendChild(createNewsCard(item)));

  if (newsArchiveLink) {
    newsArchiveLink.hidden = !hasLimit || newsItems.length <= requestedLimit;
  }
}

if (newsModal) {
  const modalImage = newsModal.querySelector(".news-modal-image");
  const modalVisual = newsModal.querySelector(".news-modal-visual");
  modalImage.addEventListener("error", () => modalVisual.classList.add("is-fallback"));
  modalImage.addEventListener("load", () => modalVisual.classList.remove("is-fallback"));
  newsModal.querySelector(".news-modal-close").addEventListener("click", () => newsModal.close());
  newsModal.addEventListener("click", (event) => {
    if (event.target === newsModal) newsModal.close();
  });
  newsModal.addEventListener("close", () => {
    document.body.classList.remove("is-modal-open");
    if (newsModalTrigger) newsModalTrigger.focus();
    newsModalTrigger = null;
  });
}

renderNews();
