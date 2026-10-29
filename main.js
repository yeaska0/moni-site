/* ════════════════════════════════════════════════════
   main.js
   Сайттың барлық логикасы осы файлда:
   деректер, аудармалар, галерея, видео, музыка,
   санағыш, бөлшектер анимациясы.
   Автор: Ақалек | 2026
════════════════════════════════════════════════════ */

'use strict';


/* ════════════════════════════════════════════════════
   1. БАПТАУЛАР (CONFIG)
════════════════════════════════════════════════════ */

/* Санағыш осы күннен бастап есептейді (жергілікті уақытпен) */
const RELATIONSHIP_START = new Date('2026-04-14T00:00:00');

/* Әдепкі тіл және тілді браузерде сақтайтын кілт */
const DEFAULT_LANG = 'en';
const STORAGE_KEY_LANG = 'lang';

/* Файлдар тұратын бумалар */
const IMAGE_DIR = 'assets/images/';
const VIDEO_DIR = 'assets/videos/';
const AUDIO_DIR = 'assets/audio/';

/* Басты экрандағы фото */
const HERO_IMAGE_FILE = 'photo_base4.png';

/* 1x1 мөлдір сурет: лайтбокс жабылғанда бос src қалдырмау үшін */
const BLANK_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';


/* ════════════════════════════════════════════════════
   2. ДЕРЕКТЕР (DATA)
════════════════════════════════════════════════════ */

const GALLERY = [
  { file: 'photo_new1.webp',            caption: 'Moni'           },
  { file: 'photo_new2.jpeg',            caption: 'Ақмарал'        },
  { file: 'photo_base0.png',            caption: 'Менің Monim'    },
  { file: 'photo_base1.png',            caption: 'Сүйкімді'       },
  { file: 'photo_base2.png',            caption: 'Стильді'        },
  { file: 'photo_base3.png',            caption: 'Нұрлы'          },
  { file: 'photo_base4.png',            caption: 'Менің бақытым'  },
  { file: 'photo1.jpg',                 caption: 'Ақмарал'        },
  { file: 'photo2.jpg',                 caption: 'Ақалек'         },
  { file: 'photo3.jpg',                 caption: 'Moni'           },
  { file: '2026-06-24 20.38.34.jpg',    caption: 'Moni'           },
  { file: '2026-06-24 20.38.46.jpg',    caption: 'Ақмарал'        },
  { file: '2026-06-24 20.39.27.jpg',    caption: 'Сүйкімді'       },
  { file: '2026-06-24 20.39.31.jpg',    caption: 'Нұрлы'          },
  { file: '2026-06-24 20.39.35.jpg',    caption: 'Moni'           },
  { file: '2026-06-24 20.39.40.jpg',    caption: 'Ерекше'         },
  { file: '2026-06-24 20.39.43.jpg',    caption: 'Әдемі'          },
  { file: '2026-06-24 20.39.47.jpg',    caption: 'Жүрегім'        },
  { file: '2026-06-24 20.39.52.jpg',    caption: 'Moni'           },
  { file: '2026-06-24 20.39.57.jpg',    caption: 'Керемет'        },
  { file: '2026-06-24 20.40.11.jpg',    caption: 'Сүйіктім'       },
  { file: '2026-06-24 20.40.32.jpg',    caption: 'Жарқыным'       },
  { file: '2026-06-24 20.40.35.jpg',    caption: 'Moni'           },
  { file: '2026-06-24 20.40.39.jpg',    caption: 'Бақытым'        },
  { file: '2026-06-24 20.40.42.jpg',    caption: 'Ақалек'         },
  { file: '2026-06-24 20.40.45.jpg',    caption: 'Нурым'          },
  { file: '2026-06-24 20.40.49.jpg',    caption: 'Moni'           },
  { file: '2026-06-24 20.40.53.jpg',    caption: 'Армандым'       },
  { file: '2026-06-24 20.40.56.jpg',    caption: 'Жаным'          },
  { file: '2026-06-24 20.41.00.jpg',    caption: 'Moni'           },
];

/* Музыка тректері */
const TRACKS = [
  { file: 'Sadraddin_-_Qolymnan_usta.mp3', title: 'Qolymnan Usta' },
  { file: 'Sadraddin_Bakr_-_Sagynysh.mp3', title: 'Sagynysh'      },
  { file: 'Kairat Nurtas - Маралым.mp3',   title: 'Маралым'       },
];

/* Видео файлдары */
const VIDEO_FILES = [
  'video_new1.mp4',
  'video_new2.mp4',
  'video_new3.mp4',
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


/* ════════════════════════════════════════════════════
   3. АУДАРМАЛАР (i18n)
════════════════════════════════════════════════════ */

const i18n = {

  kk: {
    navGallery:      'Галерея',
    navVideos:       'Видео',
    navMusic:        'Музыка',
    heroEyebrow:     'Moni-дің Әлімі',
    galleryTitle:    'Галерея',
    videosTitle:     'Видео',
    musicTitle:      'Музыка',
    musicPlay:       'Ойнату',
    musicPause:      'Тоқтату',

    countEyebrow:    'Танысқанымызға',
    countTitle:      'Бірге өткен уақыт',
    cntDays:         'Күн',
    cntHours:        'Сағат',
    cntMins:         'Минут',
    cntSecs:         'Секунд',
    footerName:      'Moni · Ақмарал · Ақалек',
    footerDate:      '14 сәуір 2026 — мәңгілік',
  },

  ru: {
    navGallery:      'Галерея',
    navVideos:       'Видео',
    navMusic:        'Музыка',
    heroEyebrow:     'Алим для Мони',
    galleryTitle:    'Галерея',
    videosTitle:     'Видео',
    musicTitle:      'Музыка',
    musicPlay:       'Воспроизвести',
    musicPause:      'Пауза',

    countEyebrow:    'Со дня нашего знакомства',
    countTitle:      'Время вместе',
    cntDays:         'Дней',
    cntHours:        'Часов',
    cntMins:         'Минут',
    cntSecs:         'Секунд',
    footerName:      'Moni · Ақмарал · Ақалек',
    footerDate:      '14 апреля 2026 — навсегда',
  },

  en: {
    navGallery:      'Gallery',
    navVideos:       'Videos',
    navMusic:        'Music',
    heroEyebrow:     'Alim for Moni',
    galleryTitle:    'Gallery',
    videosTitle:     'Videos',
    musicTitle:      'Music',
    musicPlay:       'Play',
    musicPause:      'Pause',

    countEyebrow:    'Since the day we met',
    countTitle:      'Time together',
    cntDays:         'Days',
    cntHours:        'Hours',
    cntMins:         'Minutes',
    cntSecs:         'Seconds',
    footerName:      'Moni · Aqmaral · Aqalek',
    footerDate:      'April 14, 2026 — forever',
  },

};


/* ════════════════════════════════════════════════════
   4. КӨМЕКШІ ФУНКЦИЯЛАР (HELPERS)
════════════════════════════════════════════════════ */

function buildPath(directory, fileName) {
  return directory + encodeURIComponent(fileName);
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    /* Елемейміз */
  }
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}


/* ════════════════════════════════════════════════════
   5. ТІЛ АУЫСТЫРУ (setLang)
════════════════════════════════════════════════════ */

let currentLang = DEFAULT_LANG;

function setLang(lang) {
  if (!Object.prototype.hasOwnProperty.call(i18n, lang)) {
    lang = DEFAULT_LANG;
  }
  currentLang = lang;
  const dictionary = i18n[lang];

  document.documentElement.lang = lang;

  const mainEl = document.getElementById('main');
  if (mainEl) {
    mainEl.classList.add('lang-fade');
    setTimeout(() => mainEl.classList.remove('lang-fade'), 300);
  }

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation !== undefined) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nPh];
    if (translation !== undefined) {
      element.placeholder = translation;
    }
  });

  syncMusicUi();

  document.querySelectorAll('.lang-btn').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  writeStorage(STORAGE_KEY_LANG, lang);
}


/* ════════════════════════════════════════════════════
   7. ЛАЙТБОКС (LIGHTBOX)
════════════════════════════════════════════════════ */

let lightboxOpen = false;
let lastFocusedElement = null;
let currentGalleryIndex = 0;

function openLb(index) {
  const lightbox = document.getElementById('lb');
  const image    = document.getElementById('lbImg');
  const closeBtn = document.getElementById('lb-close');
  if (!lightbox || !image) return;

  currentGalleryIndex = index;
  const photo = GALLERY[index];
  lastFocusedElement = document.activeElement;

  image.src = buildPath(IMAGE_DIR, photo.file);
  image.alt = photo.caption || '';
  lightbox.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  lightboxOpen = true;

  if (closeBtn) closeBtn.focus();
}

function closeLb() {
  if (!lightboxOpen) return;
  const lightbox = document.getElementById('lb');
  const image    = document.getElementById('lbImg');

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

document.addEventListener('click', (event) => {
  const lightbox = document.getElementById('lb');
  if (lightboxOpen && event.target === lightbox) {
    closeLb();
  }
});

document.addEventListener('keydown', (event) => {
  if (!lightboxOpen) return;
  if (event.key === 'Escape') closeLb();
  if (event.key === 'ArrowRight') nextLb();
  if (event.key === 'ArrowLeft') prevLb();
});


/* ════════════════════════════════════════════════════
   8. ГАЛЕРЕЯ (GALLERY)
════════════════════════════════════════════════════ */

function buildGallery() {
  const grid = document.getElementById('gGrid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  GALLERY.forEach((photo, index) => {
    const src = buildPath(IMAGE_DIR, photo.file);

    const item = document.createElement('div');
    item.className = 'g-item';
    item.setAttribute('role', 'button');
    item.tabIndex = 0;
    item.style.transitionDelay = `${(index % 4) * 0.06}s`;

    const image = document.createElement('img');
    image.src = src;
    image.alt = photo.caption;
    image.loading = 'lazy';
    image.decoding = 'async';

    const caption = document.createElement('div');
    caption.className = 'g-cap';
    caption.textContent = photo.caption;

    item.appendChild(image);
    item.appendChild(caption);

    item.addEventListener('click', () => openLb(index));

    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        openLb(index);
      } else if (event.key === ' ') {
        event.preventDefault();
      }
    });
    item.addEventListener('keyup', (event) => {
      if (event.key === ' ') {
        openLb(index);
      }
    });

    fragment.appendChild(item);
  });

  grid.appendChild(fragment);

  const heroImage = document.getElementById('heroImg');
  if (heroImage) heroImage.src = buildPath(IMAGE_DIR, HERO_IMAGE_FILE);
}


/* ════════════════════════════════════════════════════
   9. ВИДЕО (VIDEOS)
════════════════════════════════════════════════════ */

function pauseAllVideos(exceptVideo) {
  document.querySelectorAll('#vGrid video').forEach((video) => {
    if (video !== exceptVideo && !video.paused) video.pause();
  });
}

function buildVideos() {
  const grid = document.getElementById('vGrid');
  if (!grid) return;

  const fragment = document.createDocumentFragment();

  VIDEO_FILES.forEach((fileName, index) => {
    const item = document.createElement('div');
    item.className = 'v-item';
    item.style.transitionDelay = `${(index % 3) * 0.08}s`;

    const video = document.createElement('video');
    video.src = buildPath(VIDEO_DIR, fileName);
    video.controls = true;
    video.preload = 'metadata';
    video.playsInline = true;

    item.appendChild(video);
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);

  grid.addEventListener('play', (event) => {
    if (event.target instanceof HTMLVideoElement) {
      pauseAllVideos(event.target);
      if (audio && !audio.paused) audio.pause();
    }
  }, true);
}


/* ════════════════════════════════════════════════════
   10. МУЗЫКА (MUSIC)
════════════════════════════════════════════════════ */

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
    card.style.transitionDelay = `${index * 0.1}s`;

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

  if (index === activeIndex) {
    if (audio.paused) {
      startPlayback();
    } else {
      audio.pause();
    }
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
  const card   = document.getElementById(`mcard-${index}`);
  const button = document.getElementById(`mcbtn-${index}`);
  if (!card || !button) return;

  const dictionary = i18n[currentLang];
  card.classList.toggle('playing', playing);
  button.innerHTML = playing ? ICON_PAUSE : ICON_PLAY;
  button.setAttribute('aria-label', playing ? dictionary.musicPause : dictionary.musicPlay);
  button.setAttribute('aria-pressed', String(playing));
}

if (audio) {
  audio.addEventListener('play', () => {
    pauseAllVideos(null);
    syncMusicUi();
  });
  audio.addEventListener('pause', syncMusicUi);
  audio.addEventListener('error', () => {
    console.warn('Аудио файл табылмады немесе ашылмады:', audio.src);
    syncMusicUi();
  });

  audio.addEventListener('ended', () => {
    playCard((activeIndex + 1) % TRACKS.length);
  });
}


/* ════════════════════════════════════════════════════
   11. БӨЛШЕКТЕР ЖҮЙЕСІ (PARTICLES)
════════════════════════════════════════════════════ */

function createParticles(canvasId, requestedCount) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  const count = window.innerWidth < 640
      ? Math.round(requestedCount / 2)
      : requestedCount;

  const colors = [
    [104, 225, 253],  /* аква */
    [255, 255, 255],  /* ақ */
    [182, 240, 255],  /* ашық көк */
  ];

  function resize() {
    canvas.width  = canvas.offsetWidth  || (canvas.parentElement && canvas.parentElement.offsetWidth)  || window.innerWidth;
    canvas.height = canvas.offsetHeight || (canvas.parentElement && canvas.parentElement.offsetHeight) || window.innerHeight;
  }
  resize();

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }, { passive: true });

  const particles = Array.from({ length: count }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.8 + 0.4,
    vx:    (Math.random() - 0.5) * 0.22,
    vy:    -(Math.random() * 0.4 + 0.08),
    alpha: Math.random() * 0.32 + 0.08,
    color: colors[Math.floor(Math.random() * colors.length)],
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.008 + 0.004,
  }));

  function drawParticle(particle) {
    const alpha = particle.alpha * (0.5 + 0.5 * Math.sin(particle.phase));
    context.beginPath();
    context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    context.fillStyle = `rgba(${particle.color[0]},${particle.color[1]},${particle.color[2]},${alpha})`;
    context.fill();
  }

  function renderFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.phase += particle.speed;

      if (particle.y < -10 || particle.x < -20 || particle.x > canvas.width + 20) {
        particle.x = Math.random() * canvas.width;
        particle.y = canvas.height + 10;
        particle.phase = 0;
      }

      drawParticle(particle);
    });
  }

  if (prefersReducedMotion()) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(drawParticle);
    return;
  }

  let animationId = null;

  function loop() {
    renderFrame();
    animationId = requestAnimationFrame(loop);
  }
  function start() {
    if (animationId === null) animationId = requestAnimationFrame(loop);
  }
  function stop() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
      animationId = null;
    }
  }

  if ('IntersectionObserver' in window) {
    const visibilityObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) start(); else stop();
      });
    });
    visibilityObserver.observe(canvas);
  } else {
    start();
  }
}


/* ════════════════════════════════════════════════════
   12. СКРОЛЛ КЕЗІНДЕГІ ПАЙДА БОЛУ (SCROLL REVEAL)
════════════════════════════════════════════════════ */

function releaseDelayAfterReveal(element) {
  if (!element.style.transitionDelay) return;

  function onTransitionEnd(event) {
    if (event.target === element && event.propertyName === 'opacity') {
      element.style.transitionDelay = '';
      element.removeEventListener('transitionend', onTransitionEnd);
    }
  }
  element.addEventListener('transitionend', onTransitionEnd);
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .g-item, .v-item, .music-card');

  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('visible');
        observer.unobserve(element);
        releaseDelayAfterReveal(element);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  targets.forEach((element) => observer.observe(element));
}


/* ════════════════════════════════════════════════════
   13. САНАҒЫШ (COUNTDOWN)
════════════════════════════════════════════════════ */

function initCountdown() {
  const daysEl  = document.getElementById('cntDays');
  const hoursEl = document.getElementById('cntHours');
  const minsEl  = document.getElementById('cntMins');
  const secsEl  = document.getElementById('cntSecs');
  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  function pad(number) {
    return String(number).padStart(2, '0');
  }

  function update() {
    const diff = Date.now() - RELATIONSHIP_START.getTime();
    if (diff < 0) return;

    const totalSeconds = Math.floor(diff / 1000);
    daysEl.textContent  = String(Math.floor(totalSeconds / 86400));
    hoursEl.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
    minsEl.textContent  = pad(Math.floor((totalSeconds % 3600) / 60));
    secsEl.textContent  = pad(totalSeconds % 60);
  }

  update();
  setInterval(update, 1000);
}


/* ════════════════════════════════════════════════════
   14. МӘЗІР ТҮСІ (NAV SCROLL)
════════════════════════════════════════════════════ */

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let isScrolled = false;

  function onScroll() {
    const shouldBeScrolled = window.scrollY > 48;
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      nav.classList.toggle('scrolled', isScrolled);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


/* ════════════════════════════════════════════════════
   15. ІСКЕ ҚОСУ (INIT)
════════════════════════════════════════════════════ */

function init() {
  buildGallery();
  buildVideos();
  buildMusic();

  setLang(readStorage(STORAGE_KEY_LANG, DEFAULT_LANG));

  initScrollReveal();

  initCountdown();
  initNavScroll();
  createParticles('heroCanvas', 70);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


/* ════════════════════════════════════════════════════
   16. ИНТЕРАКТИВТІ ЭФФЕКТ (Жұлдыздар)
════════════════════════════════════════════════════ */

document.addEventListener('click', function(e) {
  if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('.g-item')) return;

  const spark = document.createElement('div');
  spark.className = 'click-spark';
  spark.innerHTML = '✨';

  spark.style.left = (e.pageX - 10) + 'px';
  spark.style.top = (e.pageY - 10) + 'px';

  document.body.appendChild(spark);

  setTimeout(() => {
    spark.remove();
  }, 1000);
});
