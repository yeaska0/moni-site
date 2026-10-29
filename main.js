/* ════════════════════════════════════════════════════
   main.js
   Сайттың барлық логикасы осы файлда:
   деректер, аудармалар, галерея, видео, музыка,
   хат қақпасы, санағыш, бөлшектер анимациясы.
   Автор: Ақалек | 2026
════════════════════════════════════════════════════ */

/* 'use strict' режимі: кездейсоқ қателерді (мысалы, жарияланбаған айнымалыны)
   браузер жасырмай, бірден көрсетеді. */
'use strict';


/* ════════════════════════════════════════════════════
   1. БАПТАУЛАР (CONFIG)
   Өзгертуге болатын барлық мәндер бір жерде тұр.
════════════════════════════════════════════════════ */

/* Хатты ашатын пароль.
   ЕСКЕРТУ: бұл файл браузерде ашық көрінеді, сондықтан пароль нағыз
   қорғаныс емес, тек "ашу ойыны". */
const LETTER_PASSWORD = '0358';

/* Санағыш осы күннен бастап есептейді (жергілікті уақытпен) */
const RELATIONSHIP_START = new Date('2026-04-14T00:00:00');

/* Әдепкі тіл және тілді браузерде сақтайтын кілт */
const DEFAULT_LANG = 'en';
const STORAGE_KEY_LANG = 'lang';

/* Файлдар тұратын бумалар */
const IMAGE_DIR = 'assets/images/';
const VIDEO_DIR = 'assets/videos/';
const AUDIO_DIR = 'assets/audio/';

/* Басты экрандағы фото (галерея тізімінен бөлек көрсетіледі) */
const HERO_IMAGE_FILE = 'photo_base4.png';

/* 1x1 мөлдір сурет: лайтбокс жабылғанда бос src қалдырмау үшін */
const BLANK_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';


/* ════════════════════════════════════════════════════
   2. ДЕРЕКТЕР (DATA)
   Әр сурет өз жазуымен бір объектіде тұр,
   сондықтан жазулар мен суреттердің арасы шатаспайды.
════════════════════════════════════════════════════ */

/* file: файл аты (бос орындар қалай болса солай жазылады, жолға кейін автоматты кодталады)
   caption: суреттің астындағы жазу */
const GALLERY = [
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
   kk: қазақша | ru: орысша | en: ағылшынша
   Кілттер index.html ішіндегі data-i18n атрибуттарымен бірдей.
════════════════════════════════════════════════════ */

const i18n = {

  kk: {
    navGallery:      'Галерея',
    navVideos:       'Видео',
    navMusic:        'Музыка',
    navLetter:       'Хат',
    heroEyebrow:     'Moni-дің Әлімі',
    galleryTitle:    'Галерея',
    videosTitle:     'Видео',
    musicTitle:      'Музыка',
    musicPlay:       'Ойнату',
    musicPause:      'Тоқтату',
    letterTitle:     'Хат',
    letterGateH3:    'Жасырын хат',
    letterGateP:     'Хатты ашу үшін пароль енгізіңіз',
    gatePlaceholder: 'Пароль...',
    letterBtn:       'Ашу',
    letterErr:       'Пароль дұрыс емес',
    letterTo:        'Сүйіктім Moni-ге,',
    letterBody:
        'Мони, саған көптен бері айтқым келген бір нәрсе бар.\n' +
        'Бәлкім бұл хатты жазбауым керек шығар. Бірақ ішімде сақтап жүруден шаршадым. Сондықтан бір рет болса да жүрегімдегіні жасырмай айтқым келеді.\n' +
        'Сен мұны білмеуің де мүмкін, бірақ өмірімнің қиын кезеңдерінде маған байқамай үлкен көмек көрсеткен адамдардың бірі өзің болдың.\n' +
        'Сенімен сөйлескен кездерімде ішімдегі уайымдарым мен шаршаған ойларым бір сәтке болса да жоғалып кететін. Жаным тынышталып, бәрі жақсы болатын сияқты көрінетін.\n' +
        'Маған сенің сыртқы келбетіңнен бұрын жүрегің ұнайды. Адамды өзіне баурап алатын мінезің, ақкөңілдігің, адамдарға деген қарым-қатынасың, жылы жүзің — осының бәрі сені ерекше етеді.\n' +
        'Мен сені жақсы көремін. Бірақ бұл хатты сенен бір нәрсе талап ету үшін жазып отырған жоқпын. Керісінше, сені құрметтегендіктен жазып отырмын.\n' +
        'Тек бір нәрсені білгеніңді қалаймын: сен менің өмірімде із қалдырған адамсың.\n' +
        'Саған шын жүректен бақыт тілеймін. Өзің армандаған өмірге жет, әрқашан күліп жүр.',
    letterSig:       'Ақалек · Ақмарал',
    letterDate:      '14 сәуір 2026 — мәңгілік',
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
    navLetter:       'Письмо',
    heroEyebrow:     'Алим для Мони',
    galleryTitle:    'Галерея',
    videosTitle:     'Видео',
    musicTitle:      'Музыка',
    musicPlay:       'Воспроизвести',
    musicPause:      'Пауза',
    letterTitle:     'Письмо',
    letterGateH3:    'Секретное письмо',
    letterGateP:     'Введите пароль, чтобы открыть письмо',
    gatePlaceholder: 'Пароль...',
    letterBtn:       'Открыть',
    letterErr:       'Неверный пароль',
    letterTo:        'Моя дорогая Мони,',
    letterBody:
        'Мони, есть кое-что, что я давно хотел тебе сказать.\n' +
        'Может, и не стоило писать это письмо. Но я устал держать всё внутри себя. Поэтому хочу хотя бы раз открыто сказать то, что у меня на сердце.\n' +
        'Ты, возможно, этого не знаешь, но в самые трудные периоды моей жизни ты незаметно стала одним из тех людей, кто очень мне помог.\n' +
        'Когда мы разговаривали, тревоги и тяжёлые мысли хоть на мгновение куда-то уходили. На душе становилось спокойно, и казалось, что всё будет хорошо.\n' +
        'Мне нравится не твоя внешность — мне нравится твоя душа. Характер, который притягивает людей, искренность, тёплое отношение к окружающим, добрая улыбка — всё это делает тебя особенной.\n' +
        'Я люблю тебя. Но это письмо — не просьба и не требование. Я пишу его, потому что уважаю тебя.\n' +
        'Я просто хочу, чтобы ты знала: ты оставила след в моей жизни.\n' +
        'Желаю тебе счастья от всего сердца. Пусть жизнь, о которой ты мечтаешь, станет реальностью. Всегда улыбайся.',
    letterSig:       'Ақалек · Ақмарал',
    letterDate:      '14 апреля 2026 — навсегда',
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
    navLetter:       'Letter',
    heroEyebrow:     'Alim for Moni',
    galleryTitle:    'Gallery',
    videosTitle:     'Videos',
    musicTitle:      'Music',
    musicPlay:       'Play',
    musicPause:      'Pause',
    letterTitle:     'Letter',
    letterGateH3:    'A Secret Letter',
    letterGateP:     'Enter the password to open the letter',
    gatePlaceholder: 'Password...',
    letterBtn:       'Open',
    letterErr:       'Incorrect password',
    letterTo:        'My dearest Moni,',
    letterBody:
        'Moni, there is something I have wanted to tell you for a long time.\n' +
        'Perhaps I should not have written this letter. But I am tired of keeping everything inside. So I want to say, just this once, what is truly in my heart.\n' +
        'You may not know this, but during the hardest times of my life, you quietly became one of the people who helped me the most.\n' +
        'Whenever we talked, my worries and heavy thoughts would fade away, even for just a moment. I felt at peace, and everything seemed like it would be alright.\n' +
        'What I love about you is not your appearance — it is your soul. The way you draw people in, your sincerity, your warmth toward others, your gentle smile — all of this makes you extraordinary.\n' +
        'I love you. But I am not writing this letter to ask anything of you. I am writing it because I respect you.\n' +
        'I simply want you to know: you have left a mark on my life.\n' +
        'I wish you happiness with all my heart. May the life you dream of become your reality. Always keep smiling.',
    letterSig:       'Aqalek · Aqmaral',
    letterDate:      'April 14, 2026 — forever',
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

/* Файл атынан толық жол жасайды.
   encodeURIComponent бос орын мен қазақ/орыс әріптерін
   браузер түсінетін қауіпсіз түрге келтіреді. */
function buildPath(directory, fileName) {
  return directory + encodeURIComponent(fileName);
}

/* localStorage-тан оқу. Жеке шолу режимінде немесе
   тыйым салынғанда браузер қате шығарады, сондықтан try/catch қолданылады. */
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (error) {
    return fallback;
  }
}

/* localStorage-қа жазу. Жазылмаса, сайт жұмысына кедергі болмайды. */
function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    /* Сақтау мүмкін болмады. Бұл маңызды емес, жай ғана елемейміз. */
  }
}

/* Пайдаланушы анимацияны азайтуды сұраған ба (құрылғы параметрі) */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}


/* ════════════════════════════════════════════════════
   5. ТІЛ АУЫСТЫРУ (setLang)
   index.html ішіндегі onclick="setLang('kk')" осыны шақырады.
════════════════════════════════════════════════════ */

let currentLang = DEFAULT_LANG;

function setLang(lang) {
  /* 1-қадам: белгісіз тіл келсе (мысалы, localStorage-та ескі мән), әдепкіге ораламыз */
  if (!Object.prototype.hasOwnProperty.call(i18n, lang)) {
    lang = DEFAULT_LANG;
  }
  currentLang = lang;
  const dictionary = i18n[lang];

  /* 2-қадам: бет тілін көрсетеміз (экран оқу құралы мен іздеу жүйесіне керек) */
  document.documentElement.lang = lang;

  /* Тіл ауысқанда мазмұн жұмсақ жыпылықтайды (Fade эффектісі) */
  const mainEl = document.getElementById('main');
  if (mainEl) {
    mainEl.classList.add('lang-fade');
    setTimeout(() => mainEl.classList.remove('lang-fade'), 300);
  }

  /* 3-қадам: data-i18n бар барлық мәтінді аударамыз */
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = dictionary[element.dataset.i18n];
    if (translation !== undefined) {
      element.textContent = translation;
    }
  });

  /* 4-қадам: енгізу өрісінің placeholder мәтінін аударамыз */
  document.querySelectorAll('[data-i18n-ph]').forEach((element) => {
    const translation = dictionary[element.dataset.i18nPh];
    if (translation !== undefined) {
      element.placeholder = translation;
    }
  });

  /* 5-қадам: хат мәтінін, музыка түймелерінің атауларын жаңартамыз */
  renderLetterBody();
  syncMusicUi();

  /* 6-қадам: белсенді тіл түймесін белгілейміз */
  document.querySelectorAll('.lang-btn').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });

  /* 7-қадам: келесі кіргенде сол тіл ашылуы үшін есте сақтаймыз */
  writeStorage(STORAGE_KEY_LANG, lang);
}


/* ════════════════════════════════════════════════════
   6. ХАТ (LETTER)
════════════════════════════════════════════════════ */

/* Хат мәтінін таңдалған тілде бетке салады.
   textContent қолданылады: мәтін HTML ретінде емес, таза мәтін ретінде қойылады.
   Жол үзілістері (\n) CSS-тегі white-space арқылы көрінеді. */
function renderLetterBody() {
  const container = document.getElementById('letterBody');
  if (!container) return;

  const dictionary = i18n[currentLang];

  /* Алғашқы жол: "Сүйіктім Moni-ге," */
  const addressee = document.createElement('span');
  addressee.className = 'l-to';
  addressee.textContent = dictionary.letterTo;

  /* Хаттың негізгі мәтіні */
  const body = document.createTextNode('\n' + dictionary.letterBody + '\n');

  /* Қолтаңба және күн */
  const signature = document.createElement('span');
  signature.className = 'l-sig';
  signature.appendChild(document.createTextNode(dictionary.letterSig));
  signature.appendChild(document.createElement('br'));
  const date = document.createElement('small');
  date.textContent = dictionary.letterDate;
  signature.appendChild(date);

  /* Ескі мазмұнды жаңасымен бір әрекетте алмастырамыз */
  container.replaceChildren(addressee, body, signature);
}

/* Парольді тексереді. index.html ішіндегі onclick осыны шақырады. */
function checkLetter() {
  const input   = document.getElementById('letterPass');
  const error   = document.getElementById('letterErr');
  const gate    = document.getElementById('letterGate');
  const content = document.getElementById('letterContent');
  if (!input || !error || !gate || !content) return;

  /* trim: кездейсоқ қосылған бос орындарды алып тастайды */
  if (input.value.trim() === LETTER_PASSWORD) {
    error.style.display   = 'none';
    gate.style.display    = 'none';
    content.style.display = 'block';
  } else {
    error.style.display = 'block';
    input.value = '';
    input.focus();
  }
}

/* Пароль өрісінің оқиғалары.
   1) Қайта теріп бастағанда қате хабарламасы жойылады.
   2) Enter басылса, пароль тексеріледі (index.html ішінде inline onkeydown жоқ). */
function initLetterGate() {
  const input = document.getElementById('letterPass');
  const error = document.getElementById('letterErr');
  if (!input || !error) return;

  input.addEventListener('input', () => {
    error.style.display = 'none';
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') checkLetter();
  });
}


/* ════════════════════════════════════════════════════
   7. ЛАЙТБОКС (LIGHTBOX): суретті үлкейтіп көру (ЖАҢАРТЫЛҒАН)
════════════════════════════════════════════════════ */

let lightboxOpen = false;
let lastFocusedElement = null;
let currentGalleryIndex = 0; /* Қай сурет ашық тұрғанын сақтайды */

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

/* Фонды басқанда жабылады */
document.addEventListener('click', (event) => {
  const lightbox = document.getElementById('lb');
  if (lightboxOpen && event.target === lightbox) {
    closeLb();
  }
});

/* Пернетақта: Escape - жабу, Оң/Сол - ауыстыру */
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

  /* DocumentFragment: барлық суретті алдымен жадта жинап,
     бетке бір-ақ рет қосады. Бұл жылдамырақ. */
  const fragment = document.createDocumentFragment();

  GALLERY.forEach((photo, index) => {
    const src = buildPath(IMAGE_DIR, photo.file);

    /* Сурет карточкасы. role="button" мен tabindex пернетақтамен басқаруға мүмкіндік береді */
    const item = document.createElement('div');
    item.className = 'g-item';
    item.setAttribute('role', 'button');
    item.tabIndex = 0;
    item.style.transitionDelay = `${(index % 4) * 0.06}s`;

    const image = document.createElement('img');
    image.src = src;
    image.alt = photo.caption;
    image.loading = 'lazy';      /* Экранға жақындағанда ғана жүктеледі */
    image.decoding = 'async';

    const caption = document.createElement('div');
    caption.className = 'g-cap';
    caption.textContent = photo.caption;

    item.appendChild(image);
    item.appendChild(caption);

    /* Тінтуірмен басу (ЖАҢАРТЫЛДЫ: индекс арқылы ашады) */
    item.addEventListener('click', () => openLb(index));

    /* Пернетақта: Enter басқанда бірден ашылады.
       Space басқанда бет төмен айналмасын деп әрекет тоқтатылады,
       ал лайтбокс Space босатылғанда (keyup) ашылады: әйтпесе фокус
       жабу түймесіне ауысып, Space сол түймені басып қоюы мүмкін. */
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

  /* Басты экрандағы фото */
  const heroImage = document.getElementById('heroImg');
  if (heroImage) heroImage.src = buildPath(IMAGE_DIR, HERO_IMAGE_FILE);
}


/* ════════════════════════════════════════════════════
   9. ВИДЕО (VIDEOS)
════════════════════════════════════════════════════ */

/* Көрсетілген видеодан басқа барлық видеоны тоқтатады */
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
    video.preload = 'metadata';   /* Тек ұзақтығы мен алғашқы кадр жүктеледі, трафик үнемделеді */
    video.playsInline = true;     /* iPhone-да толық экранға автоматты шықпайды */

    item.appendChild(video);
    fragment.appendChild(item);
  });

  grid.appendChild(fragment);

  /* Бір видео қосылғанда басқа видеолар мен музыка тоқтайды.
     "play" оқиғасы жоғары көтерілмейді, сондықтан true (capture) қолданылады. */
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
let activeIndex = -1;   /* Қазір таңдалған тректің нөмірі. -1: ешқайсысы емес */

/* Ойнату және үзіліс белгішелері (SVG). currentColor: түсті CSS береді */
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

/* Түйме басылғанда: ойнату, тоқтату немесе басқа трекке ауысу */
function playCard(index) {
  if (!audio) return;

  /* Сол трек қайта басылды: ойнап тұрса тоқтатамыз, тоқтап тұрса жалғастырамыз. */
  if (index === activeIndex) {
    if (audio.paused) {
      startPlayback();
    } else {
      audio.pause();
    }
    return;
  }

  /* Басқа трек таңдалды */
  activeIndex = index;
  audio.src = buildPath(AUDIO_DIR, TRACKS[index].file);
  startPlayback();
}

/* audio.play() "уәде" (Promise) қайтарады. Браузер бұғаттаса қате шығады,
   оны ұстамасақ, консольде өңделмеген қате қалады. */
function startPlayback() {
  const result = audio.play();
  if (result !== undefined) {
    result.catch((error) => {
      console.warn('Аудионы ойнату мүмкін болмады:', error);
      syncMusicUi();
    });
  }
}

/* Барлық карточканың көрінісін аудионың нақты күйіне сәйкестендіреді */
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

/* Аудионың күйі өзгергенде (қай жақтан болса да) түймелер автоматты жаңарады */
if (audio) {
  audio.addEventListener('play', () => {
    pauseAllVideos(null);   /* Музыка қосылса, видеолар тоқтайды */
    syncMusicUi();
  });
  audio.addEventListener('pause', syncMusicUi);
  audio.addEventListener('error', () => {
    console.warn('Аудио файл табылмады немесе ашылмады:', audio.src);
    syncMusicUi();
  });

  /* Трек біткенде келесісі қосылады, соңғысынан кейін біріншіге оралады */
  audio.addEventListener('ended', () => {
    playCard((activeIndex + 1) % TRACKS.length);
  });
}


/* ════════════════════════════════════════════════════
   11. БӨЛШЕКТЕР ЖҮЙЕСІ (PARTICLES)
   Hero бөліміндегі алтын, раушан және кілегей түсті бөлшектер.
════════════════════════════════════════════════════ */

function createParticles(canvasId, requestedCount) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  /* Телефонда бөлшек саны екі есе аз: батарея мен өнімділікті үнемдеу */
  const count = window.innerWidth < 640
      ? Math.round(requestedCount / 2)
      : requestedCount;

  /* Бөлшек түстері: [қызыл, жасыл, көк] */
  const colors = [
    [196, 168, 120],  /* алтын */
    [200, 160, 168],  /* раушан */
    [240, 232, 220],  /* кілегей */
  ];

  /* Кенептің өлшемін контейнерге сәйкестендіру */
  function resize() {
    canvas.width  = canvas.offsetWidth  || (canvas.parentElement && canvas.parentElement.offsetWidth)  || window.innerWidth;
    canvas.height = canvas.offsetHeight || (canvas.parentElement && canvas.parentElement.offsetHeight) || window.innerHeight;
  }
  resize();

  /* Терезе өлшемі өзгергенде 150 мс күтіп, бір рет қана қайта өлшейміз */
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  }, { passive: true });

  /* Әр бөлшектің бастапқы күйі кездейсоқ */
  const particles = Array.from({ length: count }, () => ({
    x:     Math.random() * canvas.width,
    y:     Math.random() * canvas.height,
    r:     Math.random() * 1.8 + 0.4,                /* радиус */
    vx:    (Math.random() - 0.5) * 0.22,             /* көлденең жылдамдық */
    vy:    -(Math.random() * 0.4 + 0.08),            /* жоғары қарай жылдамдық */
    alpha: Math.random() * 0.32 + 0.08,              /* ең жоғары мөлдірсіздік */
    color: colors[Math.floor(Math.random() * colors.length)],
    phase: Math.random() * Math.PI * 2,              /* жыпылықтау фазасы */
    speed: Math.random() * 0.008 + 0.004,            /* жыпылықтау жылдамдығы */
  }));

  /* Бір бөлшекті сызу */
  function drawParticle(particle) {
    const alpha = particle.alpha * (0.5 + 0.5 * Math.sin(particle.phase));
    context.beginPath();
    context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
    context.fillStyle = `rgba(${particle.color[0]},${particle.color[1]},${particle.color[2]},${alpha})`;
    context.fill();
  }

  /* Бір кадр: орнын жаңарту және сызу */
  function renderFrame() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.phase += particle.speed;

      /* Экраннан шығып кетсе, төменнен қайта шығады */
      if (particle.y < -10 || particle.x < -20 || particle.x > canvas.width + 20) {
        particle.x = Math.random() * canvas.width;
        particle.y = canvas.height + 10;
        particle.phase = 0;
      }

      drawParticle(particle);
    });
  }

  /* Анимацияны азайту таңдалған болса, қозғалыссыз бір кадр ғана салынады */
  if (prefersReducedMotion()) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(drawParticle);
    return;
  }

  /* Анимация циклі. requestAnimationFrame: браузер өзі ыңғайлы уақытта шақырады */
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

  /* Hero экраннан шығып кетсе, анимация тоқтайды (процессор үнемделеді) */
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

/* Элемент көрінген соң, оның inline transition-delay мәнін тазалайды.
   Inline мән CSS ережелерінен басым, сондықтан тазаланбаса, кейінгі hover
   және "playing" күйінің ауысуы да сол уақытқа кешігіп, баяу болады.
   Тазалау opacity анимациясы біткен соң жасалады. */
function releaseDelayAfterReveal(element) {
  /* Inline кешігуі жоқ элементке (мысалы, .reveal) тазалайтын ештеңе жоқ */
  if (!element.style.transitionDelay) return;

  function onTransitionEnd(event) {
    /* Ішкі элементтердің (мысалы, img) анимациясын елемейміз */
    if (event.target === element && event.propertyName === 'opacity') {
      element.style.transitionDelay = '';
      element.removeEventListener('transitionend', onTransitionEnd);
    }
  }
  element.addEventListener('transitionend', onTransitionEnd);
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .g-item, .v-item, .music-card');

  /* Анимацияны азайту таңдалған немесе браузер IntersectionObserver-ді білмесе,
     барлығын бірден көрсетеміз */
  if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
    targets.forEach((element) => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target;
        element.classList.add('visible');
        observer.unobserve(element);          /* Бір рет көрсетілген соң бақылау тоқтайды */
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
  /* Элементтерді бір рет қана іздейміз, әр секунд сайын емес */
  const daysEl  = document.getElementById('cntDays');
  const hoursEl = document.getElementById('cntHours');
  const minsEl  = document.getElementById('cntMins');
  const secsEl  = document.getElementById('cntSecs');
  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  /* 7 -> "07" */
  function pad(number) {
    return String(number).padStart(2, '0');
  }

  function update() {
    const diff = Date.now() - RELATIONSHIP_START.getTime();
    if (diff < 0) return;   /* Күн әлі келмеген */

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
   Бет 48 пиксельден асса, мәзірге "scrolled" класы қосылады.
════════════════════════════════════════════════════ */

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  let isScrolled = false;

  function onScroll() {
    const shouldBeScrolled = window.scrollY > 48;
    /* Класты тек күй өзгергенде ғана ауыстырамыз */
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      nav.classList.toggle('scrolled', isScrolled);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();   /* Бет жартылай айналған күйде ашылса, бірден дұрыс көрінсін */
}


/* ════════════════════════════════════════════════════
   15. ІСКЕ ҚОСУ (INIT)
   Реті маңызды: алдымен элементтер жасалады,
   содан кейін тіл, анимация және т.б.
════════════════════════════════════════════════════ */

function init() {
  /* 1. Мазмұн блоктарын жасау */
  buildGallery();
  buildVideos();
  buildMusic();

  /* 2. Сақталған тілді қолдану (элементтер дайын болған соң) */
  setLang(readStorage(STORAGE_KEY_LANG, DEFAULT_LANG));

  /* 3. Жасалған элементтерді скролл анимациясына тіркеу */
  initScrollReveal();

  /* 4. Қалған функциялар */
  initLetterGate();
  initCountdown();
  initNavScroll();
  createParticles('heroCanvas', 70);
}

/* Бет оқылып жатса, DOM дайын болғанша күтеміз; дайын болса, бірден іске қосамыз */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


/* ════════════════════════════════════════════════════
   16. ИНТЕРАКТИВТІ ЭФФЕКТ (Экранды басқандағы жұлдыздар)
════════════════════════════════════════════════════ */

document.addEventListener('click', function(e) {
  /* Түймелерді немесе сілтемелерді басқанда жұлдыз шықпауы үшін */
  if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input') || e.target.closest('.g-item')) return;

  const spark = document.createElement('div');
  spark.className = 'click-spark';

  /* Эмодзи: ✨ жұлдыз, 💖 жүрек немесе басқасын қоюға болады */
  spark.innerHTML = '✨';

  /* Басқан жердің координаттары */
  spark.style.left = (e.pageX - 10) + 'px';
  spark.style.top = (e.pageY - 10) + 'px';

  document.body.appendChild(spark);

  /* Анимация біткен соң DOM-нан өшіру */
  setTimeout(() => {
    spark.remove();
  }, 1000);
});
