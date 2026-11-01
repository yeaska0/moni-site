'use strict';

/* ==========================================================================
   1. САЙТҚА КІРУДІ БҰҒАТТАУ (ПАРОЛЬ ЛОГИКАСЫ)
   ========================================================================== */
const SITE_PASSWORD = '114571';
const STORAGE_KEY_AUTH = 'site_authenticated';

// Парольді тексеріп, сайтты ашу
function unlockSite() {
  const input = document.getElementById('site-pass-input');
  const error = document.getElementById('site-pass-err');
  const overlay = document.getElementById('site-lock-overlay');

  if (!input || !error || !overlay) return;

  if (input.value.trim() === SITE_PASSWORD) {
    writeSessionStorage(STORAGE_KEY_AUTH, 'true'); // Сессияға сақтау
    overlay.classList.add('unlocked');
    overlay.style.display = 'none';
    document.body.style.overflow = ''; // Скроллды қайта қосу
    playAmbientMusicDirectly(); // Пароль дұрыс болса, фондық музыканы қосу
  } else {
    error.style.display = 'block'; // Қате пароль
    input.value = '';
    input.focus();
  }
}

// Сайт ашылған кезде пароль сұрау керек пе, жоқ па тексереді
function checkSiteAuth() {
  const overlay = document.getElementById('site-lock-overlay');
  const input = document.getElementById('site-pass-input');
  const error = document.getElementById('site-pass-err');
  const isAuth = readSessionStorage(STORAGE_KEY_AUTH, 'false');

  if (isAuth === 'true') {
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = '';
    return;
  }

  document.body.style.overflow = 'hidden'; // Бұғаттаулы кезде скроллды өшіру

  if (input) {
    input.addEventListener('input', () => { if (error) error.style.display = 'none'; });
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') unlockSite(); });
  }
}

// SessionStorage-пен жұмыс істейтін көмекші функциялар (Браузер жабылғанша сақталады)
function readSessionStorage(key, fallback) {
  try { return sessionStorage.getItem(key) ?? fallback; } catch (e) { return fallback; }
}
function writeSessionStorage(key, value) {
  try { sessionStorage.setItem(key, value); } catch (e) {}
}

/* ==========================================================================
   2. КОНСТАНТАЛАР МЕН ДЕРЕКТЕР БАЗАСЫ (СУРЕТТЕР, ВИДЕОЛАР, ӨЛЕҢДЕР)
   ========================================================================== */
const RELATIONSHIP_START = new Date('2026-04-14T00:00:00'); // Санақ басталатын күн
const DEFAULT_LANG = 'en';
const STORAGE_KEY_LANG = 'lang';

const IMAGE_DIR = 'assets/images/';
const VIDEO_DIR = 'assets/videos/';
const AUDIO_DIR = 'assets/audio/';

const HERO_IMAGE_FILE = 'photo_base4.png';
const BLANK_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'; // Кешігіп жүктелуге (lazy load) арналған бос пиксель

// Галерея суреттері
const GALLERY = [
  { file: 'photo_new1.webp', caption: 'Moni' },
  { file: 'photo_new2.jpeg', caption: 'Ақмарал' },
  { file: 'photo_base0.png', caption: 'Менің Monim' },
  { file: 'photo_base1.png', caption: 'Сүйкімді' },
  { file: 'photo_base2.png', caption: 'Стильді' },
  { file: 'photo_base3.png', caption: 'Нұрлы' },
  { file: 'photo_base4.png', caption: 'Менің бақытым' },
  { file: 'photo1.jpg', caption: 'Ақмарал' },
  { file: 'photo2.jpg', caption: 'Ақалек' },
  { file: 'photo3.jpg', caption: 'Moni' },
  { file: '2026-06-24 20.38.34.jpg'},
  { file: '2026-06-24 20.38.46.jpg' },
  { file: '2026-06-24 20.39.27.jpg' },
  { file: '2026-06-24 20.39.31.jpg' },
  { file: '2026-06-24 20.39.35.jpg'},
  { file: '2026-06-24 20.39.40.jpg' },
  { file: '2026-06-24 20.39.43.jpg' },
  { file: '2026-06-24 20.39.47.jpg' },
  { file: '2026-06-24 20.39.52.jpg' },
  { file: '2026-06-24 20.39.57.jpg' },
  { file: '2026-06-24 20.40.11.jpg' },
  { file: '2026-06-24 20.40.32.jpg' },
  { file: '2026-06-24 20.40.35.jpg'},
  { file: '2026-06-24 20.40.39.jpg' },
  { file: '2026-06-24 20.40.42.jpg' },
  { file: '2026-06-24 20.40.45.jpg' },
  { file: '2026-06-24 20.40.49.jpg' },
  { file: '2026-06-24 20.40.53.jpg' },
  { file: '2026-06-24 20.40.56.jpg'},
  { file: '2026-06-24 20.41.00.jpg' },
];

// Музыкалық тректер
const TRACKS = [
  { file: 'Sadraddin_-_Qolymnan_usta.mp3', title: 'Qolymnan Usta' },
  { file: 'Sadraddin_Bakr_-_Sagynysh.mp3', title: 'Sagynysh' },
  { file: 'Kairat Nurtas - Маралым.mp3', title: 'Маралым' },
];

// Видео файлдар
const VIDEO_FILES = [
  'video_new1.mp4', 'video_new2.mp4', 'video_new3.mp4',
  'TikSave_io_7551293612592581893-hd.mp4',
  'TikSave_io_7561655786267594040-hd.mp4',
  'TikSave_io_7590279590208195848-hd.mp4',
  'TikSave_io_7590760051674008888-hd.mp4',
  'TikSave_io_7624150877170830610-hd.mp4',
  'TikSave_io_7626022271940840712-hd.mp4',
  'TikSave_io-7644124603991854354-_1080p_.mp4',
  'TikSave.io_7649322101593083144-hd.mp4',
  'TikSave.io_7650786355441601800-hd.mp4',
];

/* ==========================================================================
   3. КӨПТІЛДІЛІК (i18n - Internationalization)
   ========================================================================== */
const i18n = {
  kk: {
    navHome: 'Басты бет', navGallery: 'Галерея', navVideos: 'Видео', navMusic: 'Музыка',
    heroEyebrow: 'Moni-дің Әлемі', galleryTitle: 'Галерея', videosTitle: 'Видео', musicTitle: 'Музыка',
    musicPlay: 'Ойнату', musicPause: 'Тоқтату', countEyebrow: 'Танысқанымызға', countTitle: 'Бірге өткен уақыт',
    cntDays: 'Күн', cntHours: 'Сағат', cntMins: 'Минут', cntSecs: 'Секунд',
    footerName: 'Moni · Ақмарал · Ақалек', footerDate: '14 сәуір 2026 — мәңгілік',
  },
  ru: {
    navHome: 'Главная', navGallery: 'Галерея', navVideos: 'Видео', navMusic: 'Музыка',
    heroEyebrow: 'Мир Мони', galleryTitle: 'Галерея', videosTitle: 'Видео', musicTitle: 'Музыка',
    musicPlay: 'Воспроизвести', musicPause: 'Пауза', countEyebrow: 'С нашей первой встречи', countTitle: 'Время вместе',
    cntDays: 'Дней', cntHours: 'Часов', cntMins: 'Минут', cntSecs: 'Секунд',
    footerName: 'Moni · Ақмарал · Ақалек', footerDate: '14 апреля 2026 — навсегда',
  },
  en: {
    navHome: 'Home', navGallery: 'Gallery', navVideos: 'Videos', navMusic: 'Music',
    heroEyebrow: "Moni's World", galleryTitle: 'Gallery', videosTitle: 'Videos', musicTitle: 'Music',
    musicPlay: 'Play', musicPause: 'Pause', countEyebrow: 'Since the day we met', countTitle: 'Time Spent Together',
    cntDays: 'Days', cntHours: 'Hours', cntMins: 'Minutes', cntSecs: 'Seconds',
    footerName: 'Moni · Aqmaral · Aqalek', footerDate: 'April 14, 2026 — forever',
  },
};

// LocalStorage көмекші функциялары (тілді сақтау үшін)
function readStorage(key, fallback) { try { return localStorage.getItem(key) ?? fallback; } catch (e) { return fallback; } }
function writeStorage(key, value) { try { localStorage.setItem(key, value); } catch (e) {} }
function buildPath(directory, fileName) { return directory + encodeURIComponent(fileName); }

// Тілді ауыстыру функциясы
let currentLang = DEFAULT_LANG;
function setLang(lang) {
  if (!i18n[lang]) lang = DEFAULT_LANG;
  currentLang = lang;
  const dictionary = i18n[lang];

  document.documentElement.lang = lang; // HTML тілін ауыстыру

  // Барлық data-i18n атрибуты бар элементтердің мәтінін ауыстыру
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });

  syncMusicUi();

  // Активті тіл батырмасын белгілеу
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  writeStorage(STORAGE_KEY_LANG, lang);
}

/* ==========================================================================
   4. ТЕРЕЗЕЛЕРДІ (ОКНО/TABS) АУЫСТЫРУ ЛОГИКАСЫ (SPA)
   ========================================================================== */
function switchWindow(targetId, event) {
  if (event) event.preventDefault();

  // Барлық терезелерді жасыру
  document.querySelectorAll('.window-section').forEach(sec => sec.classList.remove('active-window'));

  // Тек қажетті терезені ашу
  const target = document.getElementById(targetId);
  if (target) target.classList.add('active-window');

  // Мәзірдегі активті батырманы ауыстыру
  document.querySelectorAll('.nav-item').forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`.nav-item[href="#${targetId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Басқа бетке өткенде видеоларды автоматты түрде тоқтату
  pauseAllVideos(null);

  // Бетті ең басына апару
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   5. LIGHTBOX (СУРЕТТІ ТОЛЫҚ ЭКРАНДА АШУ)
   ========================================================================== */
let lightboxOpen = false;
let lastFocusedElement = null;
let currentGalleryIndex = 0;

function openLb(index) {
  const lightbox = document.getElementById('lb');
  const image = document.getElementById('lbImg');
  const closeBtn = document.getElementById('lb-close');
  if (!lightbox || !image) return;

  currentGalleryIndex = index;
  const photo = GALLERY[index];
  lastFocusedElement = document.activeElement;

  image.src = buildPath(IMAGE_DIR, photo.file);
  image.alt = photo.caption || '';
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Артқы фонның скроллын өшіру
  lightboxOpen = true;

  if (closeBtn) closeBtn.focus();
}

function closeLb() {
  if (!lightboxOpen) return;
  const lightbox = document.getElementById('lb');
  const image = document.getElementById('lbImg');

  lightbox.style.display = 'none';
  document.body.style.overflow = '';
  image.src = BLANK_PIXEL;
  lightboxOpen = false;

  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
  lastFocusedElement = null;
}

function nextLb(event) {
  if (event) event.stopPropagation();
  currentGalleryIndex = (currentGalleryIndex + 1) % GALLERY.length;
  openLb(currentGalleryIndex);
}

function prevLb(event) {
  if (event) event.stopPropagation();
  currentGalleryIndex = (currentGalleryIndex - 1 + GALLERY.length) % GALLERY.length;
  openLb(currentGalleryIndex);
}

// Lightbox-ты басып немесе пернетақтамен (Escape, Arrow) басқару
document.addEventListener('click', (e) => {
  if (lightboxOpen && e.target === document.getElementById('lb')) closeLb();
});
document.addEventListener('keydown', (e) => {
  if (!lightboxOpen) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowRight') nextLb();
  if (e.key === 'ArrowLeft') prevLb();
});

/* ==========================================================================
   6. КОНТЕНТТІ ГЕНЕРАЦИЯЛАУ (ГАЛЕРЕЯ, ВИДЕО, МУЗЫКА)
   ========================================================================== */
function buildGallery() {
  const grid = document.getElementById('gGrid');
  if (!grid) return;
  const fragment = document.createDocumentFragment();

  GALLERY.forEach((photo, index) => {
    const item = document.createElement('div');
    item.className = 'g-item';
    item.setAttribute('role', 'button');
    item.tabIndex = 0;

    const image = document.createElement('img');
    image.src = buildPath(IMAGE_DIR, photo.file);
    image.alt = photo.caption;
    image.loading = 'lazy'; // Суреттерді оңтайландырып жүктеу

    const caption = document.createElement('div');
    caption.className = 'g-cap';
    caption.textContent = photo.caption;

    item.appendChild(image);
    item.appendChild(caption);
    item.addEventListener('click', () => openLb(index));
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);
  const heroImage = document.getElementById('heroImg');
  if (heroImage) heroImage.src = buildPath(IMAGE_DIR, HERO_IMAGE_FILE);
}

function pauseAllVideos(exceptVideo) {
  document.querySelectorAll('#vGrid video').forEach((video) => {
    if (video !== exceptVideo && !video.paused) video.pause();
  });
}

function buildVideos() {
  const grid = document.getElementById('vGrid');
  if (!grid) return;
  const fragment = document.createDocumentFragment();

  VIDEO_FILES.forEach((fileName) => {
    const item = document.createElement('div');
    item.className = 'v-item';

    const video = document.createElement('video');
    video.src = buildPath(VIDEO_DIR, fileName);
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;

    item.appendChild(video);
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);

  // Бір видео қосылғанда басқаларын және өлеңдерді тоқтату
  grid.addEventListener('play', (event) => {
    if (event.target instanceof HTMLVideoElement) {
      pauseAllVideos(event.target);
      if (ambientAudio && !ambientAudio.paused) ambientAudio.pause();
      if (audio && !audio.paused) audio.pause();
    }
  }, true);
}

const audio = document.getElementById('audio');
let activeIndex = -1;
const ICON_PLAY  = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>';
const ICON_PAUSE = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="currentColor"><path d="M6 5h4v14H6zM14 5h4v14h-4z"></path></svg>';

function buildMusic() {
  const list = document.getElementById('musicList');
  if (!list) return;
  const fragment = document.createDocumentFragment();

  TRACKS.forEach((track, index) => {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.id = `mcard-${index}`;

    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mc-btn';
    button.id = `mcbtn-${index}`;
    button.innerHTML = ICON_PLAY;
    button.addEventListener('click', () => playCard(index));

    const title = document.createElement('span');
    title.className = 'mc-title';
    title.textContent = track.title;

    card.appendChild(button);
    card.appendChild(title);
    fragment.appendChild(card);
  });

  list.appendChild(fragment);
  syncMusicUi();
}

function playCard(index) {
  if (!audio) return;
  pauseAllVideos(null); // Өлең қосылғанда видеоны тоқтату

  // Фондық музыканы тоқтату
  if (ambientAudio && !ambientAudio.paused) {
    ambientAudio.pause();
    isAmbientPlaying = false;
    if (ambientBtn) ambientBtn.classList.remove('playing');
    if (ambientIcon) ambientIcon.textContent = '🔇';
  }

  // Егер сол өлең қайта басылса пауза қою
  if (index === activeIndex) {
    if (audio.paused) startPlayback(); else audio.pause();
    return;
  }

  activeIndex = index;
  audio.src = buildPath(AUDIO_DIR, TRACKS[index].file);
  startPlayback();
}

function startPlayback() {
  const result = audio.play();
  if (result !== undefined) {
    result.catch((error) => {
      console.warn('Аудионы ойнату мүмкін болмады:', error);
      syncMusicUi();
    });
  }
}

function syncMusicUi() {
  if (!audio) return;
  TRACKS.forEach((track, index) => {
    setCardState(index, index === activeIndex && !audio.paused);
  });
}

function setCardState(index, playing) {
  const card = document.getElementById(`mcard-${index}`);
  const button = document.getElementById(`mcbtn-${index}`);
  if (!card || !button) return;

  card.classList.toggle('playing', playing);
  button.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
}

if (audio) {
  audio.addEventListener('play', () => { pauseAllVideos(null); syncMusicUi(); });
  audio.addEventListener('pause', syncMusicUi);
  audio.addEventListener('ended', () => playCard((activeIndex + 1) % TRACKS.length)); // Келесі өлеңге өту
}

/* ==========================================================================
   7. ФОНДЫҚ МУЗЫКА (AMBIENT MUSIC)
   ========================================================================== */
const ambientAudio = document.getElementById('ambient-audio');
const ambientBtn = document.getElementById('ambient-toggle-btn');
const ambientIcon = document.getElementById('ambient-icon');
let isAmbientPlaying = false;

function playAmbientMusicDirectly() {
  if (!ambientAudio || isAmbientPlaying) return;
  ambientAudio.volume = 0.35; // Қатты шықпауы үшін
  ambientAudio.play().then(() => {
    isAmbientPlaying = true;
    if (ambientBtn) ambientBtn.classList.add('playing');
    if (ambientIcon) ambientIcon.textContent = '🎵';
  }).catch((err) => console.warn('Autoplay blocked by browser policy:', err));
}

function toggleAmbientMusic() {
  if (!ambientAudio) return;
  if (isAmbientPlaying) {
    ambientAudio.pause();
    isAmbientPlaying = false;
    if (ambientBtn) ambientBtn.classList.remove('playing');
    if (ambientIcon) ambientIcon.textContent = '🔇';
  } else {
    if (audio && !audio.paused) audio.pause();
    playAmbientMusicDirectly();
  }
}

if (ambientBtn) ambientBtn.addEventListener('click', toggleAmbientMusic);

function initAmbientAutoplay() {
  if (!ambientAudio) return;
  const startOnUserInteraction = () => {
    if (!isAmbientPlaying) playAmbientMusicDirectly();
    document.removeEventListener('click', startOnUserInteraction);
    document.removeEventListener('touchstart', startOnUserInteraction);
    document.removeEventListener('keydown', startOnUserInteraction);
  };
  document.addEventListener('click', startOnUserInteraction);
  document.addEventListener('touchstart', startOnUserInteraction);
  document.addEventListener('keydown', startOnUserInteraction);
}

/* ==========================================================================
   8. ВИЗУАЛДЫ ЭФФЕКТТЕР (PARTICLES / БӨЛШЕКТЕР АНИМАЦИЯСЫ)
   ========================================================================== */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function createParticles(canvasId, requestedCount) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const context = canvas.getContext('2d');
  if (!context) return;

  // Телефондарда анимация қатып қалмауы үшін бөлшек санын азайту
  const count = window.innerWidth < 640 ? Math.round(requestedCount / 2) : requestedCount;
  const colors = [[104, 225, 253], [255, 255, 255], [182, 240, 255]];

  function resize() {
    canvas.width  = canvas.offsetWidth || window.innerWidth;
    canvas.height = canvas.offsetHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => setTimeout(resize, 150), { passive: true });

  const particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.8 + 0.4,
    vx: (Math.random() - 0.5) * 0.22,
    vy: -(Math.random() * 0.4 + 0.08),
    alpha: Math.random() * 0.32 + 0.08,
    color: colors[Math.floor(Math.random() * colors.length)],
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.008 + 0.004,
  }));

  function drawParticle(p) {
    // BUG FIXED: '0.5 Math.sin' орнына көбейту белгісі ('*') қойылды
    const alpha = p.alpha * (0.5 + 0.5 * Math.sin(p.phase));
    context.beginPath();
    context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    context.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${alpha})`;
    context.fill();
  }

  function renderFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.phase += p.speed;
      // Экраннан шығып кеткен бөлшектерді қайтару
      if (p.y < -10 || p.x < -20 || p.x > canvas.width + 20) {
        p.x = Math.random() * canvas.width; p.y = canvas.height + 10; p.phase = 0;
      }
      drawParticle(p);
    });
  }

  if (prefersReducedMotion()) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(drawParticle);
    return;
  }

  let animationId = null;
  function loop() { renderFrame(); animationId = requestAnimationFrame(loop); }
  function start() { if (animationId === null) animationId = requestAnimationFrame(loop); }
  function stop() { if (animationId !== null) { cancelAnimationFrame(animationId); animationId = null; } }

  // Анимацияны тек экранда көрініп тұрғанда ғана қосу (Оптимизация)
  if ('IntersectionObserver' in window) {
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) start(); else stop(); });
    });
    visibilityObserver.observe(canvas);
  } else { start(); }
}

/* ==========================================================================
   9. УАҚЫТ САНАҒЫШ (COUNTDOWN)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('cntDays');
  const hoursEl = document.getElementById('cntHours');
  const minsEl = document.getElementById('cntMins');
  const secsEl = document.getElementById('cntSecs');
  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function pad(number) { return String(number).padStart(2, '0'); }

  function update() {
    const diff = Math.abs(Date.now() - RELATIONSHIP_START.getTime());
    const totalSeconds = Math.floor(diff / 1000);
    daysEl.textContent  = String(Math.floor(totalSeconds / 86400));
    hoursEl.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    minsEl.textContent  = pad(Math.floor((totalSeconds % 3600) / 60));
    secsEl.textContent  = pad(totalSeconds % 60);
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   10. ЖОБАНЫ ІСКЕ ҚОСУ ЖӘНЕ CLICK-ЭФФЕКТТЕРІ
   ========================================================================== */
function init() {
  checkSiteAuth();
  buildGallery();
  buildVideos();
  buildMusic();
  setLang(readStorage(STORAGE_KEY_LANG, DEFAULT_LANG));
  initCountdown();
  createParticles('heroCanvas', 70);
  initAmbientAutoplay();

  // Сайт жүктелгенде басты бетті ашып қою
  switchWindow('home', null);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Экранды шерткенде пайда болатын жұлдызшалар (Sparkles)
document.addEventListener('click', function(e) {
  // Егер батырмаға немесе суретке басылса, жұлдызша шықпайды
  if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('.g-item')) return;

  const spark = document.createElement('div');
  spark.className = 'click-spark';
  spark.innerHTML = '✨';
  spark.style.left = (e.pageX - 10) + 'px';
  spark.style.top = (e.pageY - 10) + 'px';
  document.body.appendChild(spark);

  // Анимация біткен соң элементті өшіріп тастау (Жадты толтырмау үшін)
  setTimeout(() => spark.remove(), 1000);
});