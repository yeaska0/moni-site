/* ════════════════════════════════════════════════════
   main.js — Moni сайтының скрипттері
   Мұхит тақырыбы · Ocean Theme
   Автор: Ақалек  |  2026
════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════
   1. СУРЕТТЕР (IMAGES)
   ────────────────────────────────────────────────────
   IMG0–IMG4  : assets/images/ ішіндегі PNG суреттер
   IMG5–IMG7  : photo1.jpg / photo2.jpg / photo3.jpg
   IMG8–IMG27 : 2026-06-24 күнгі 20 сурет
════════════════════════════════════════════════════ */

const IMG0  = 'assets/images/photo_base0.png';
const IMG1  = 'assets/images/photo_base1.png';
const IMG2  = 'assets/images/photo_base2.png';
const IMG3  = 'assets/images/photo_base3.png';
const IMG4  = 'assets/images/photo_base4.png';
const IMG5  = 'assets/images/photo1.jpg';
const IMG6  = 'assets/images/photo2.jpg';
const IMG7  = 'assets/images/photo3.jpg';
const IMG8  = 'assets/images/2026-06-24%2020.38.34.jpg';
const IMG9  = 'assets/images/2026-06-24%2020.38.37.jpg';
const IMG10 = 'assets/images/2026-06-24%2020.38.41.jpg';
const IMG11 = 'assets/images/2026-06-24%2020.38.52.jpg';
const IMG12 = 'assets/images/2026-06-24%2020.38.57.jpg';
const IMG13 = 'assets/images/2026-06-24%2020.39.05.jpg';
const IMG14 = 'assets/images/2026-06-24%2020.39.09.jpg';
const IMG15 = 'assets/images/2026-06-24%2020.39.14.jpg';
const IMG16 = 'assets/images/2026-06-24%2020.39.17.jpg';
const IMG17 = 'assets/images/2026-06-24%2020.39.21.jpg';
const IMG18 = 'assets/images/2026-06-24%2020.39.24.jpg';
const IMG19 = 'assets/images/2026-06-24%2020.39.27.jpg';
const IMG20 = 'assets/images/2026-06-24%2020.39.30.jpg';
const IMG21 = 'assets/images/2026-06-24%2020.39.34.jpg';
const IMG22 = 'assets/images/2026-06-24%2020.39.38.jpg';
const IMG23 = 'assets/images/2026-06-24%2020.39.41.jpg';
const IMG24 = 'assets/images/2026-06-24%2020.39.46.jpg';
const IMG25 = 'assets/images/2026-06-24%2020.39.52.jpg';
const IMG26 = 'assets/images/2026-06-24%2020.40.22.jpg';
const IMG27 = 'assets/images/2026-06-24%2020.41.00.jpg';


/* ════════════════════════════════════════════════════
   2. СУРЕТТЕР МАССИВІ (IMAGE ARRAY)
   Галереяда осы ретпен көрсетіледі
════════════════════════════════════════════════════ */

const IMGS = [
  IMG0,  IMG1,  IMG2,  IMG3,  IMG4,
  IMG5,  IMG6,  IMG7,  IMG8,  IMG9,
  IMG10, IMG11, IMG12, IMG13, IMG14,
  IMG15, IMG16, IMG17, IMG18, IMG19,
  IMG20, IMG21, IMG22, IMG23, IMG24,
  IMG25, IMG26, IMG27,
];


/* ════════════════════════════════════════════════════
   3. ЖАЗУЛАР (CAPTIONS)
   Әр суреттің астына шығатын қазақша мәтін.
   IMGS массивімен индекс бойынша сәйкес келеді.
════════════════════════════════════════════════════ */

const CAPS = [
  'Менің Monim 🌹',   // IMG0
  'Сүйкімді 💕',      // IMG1
  'Стильді ✨',        // IMG2
  'Нұрлы 😍',         // IMG3
  'Менің бақытым 🌸', // IMG4
  'Ақмарал 💙',       // IMG5
  'Ақалек 🌸',        // IMG6
  'Moni ❤️',          // IMG7
  'Moni 💙',          // IMG8
  'Ақмарал ✨',       // IMG9
  'Сүйкімді 🌸',      // IMG10
  'Нұрлы 💫',         // IMG11
  'Moni 🌹',          // IMG12
  'Ерекше 💕',        // IMG13
  'Әдемі 🌺',         // IMG14
  'Жүрегім 💙',       // IMG15
  'Moni ❤️',          // IMG16
  'Керемет ✨',        // IMG17
  'Сүйіктім 🩷',      // IMG18
  'Жарқыным 💖',      // IMG19
  'Moni 🌷',          // IMG20
  'Бақытым 💗',       // IMG21
  'Ақалек 💙',        // IMG22
  'Нурым 🌸',         // IMG23
  'Moni 💫',          // IMG24
  'Армандым 💕',      // IMG25
  'Жаным ❤️',         // IMG26
  'Moni 🌹',          // IMG27
];


/* ════════════════════════════════════════════════════
   4. МУЗЫКА ТРЕКТЕРІ (TRACKS)
   ────────────────────────────────────────────────────
   src   — assets/audio/ ішіндегі MP3 файл жолы
   title — ойнатқышта шығатын атауы
════════════════════════════════════════════════════ */

const TRACKS = [
  { src: 'assets/audio/Sadraddin_-_Qolymnan_usta.mp3',  title: 'Qolymnan Usta 🎵' },
  { src: 'assets/audio/Sadraddin_Bakr_-_Sagynysh.mp3',  title: 'Sagynysh 🎵'       },
  { src: 'assets/audio/Kairat Nurtas - Маралым.mp3',    title: 'Маралым 🎵'         },
];


/* ════════════════════════════════════════════════════
   5. БЕЙНЕЛЕР (VIDEOS)
   assets/videos/ папкасындағы TikTok MP4 файлдары
════════════════════════════════════════════════════ */

const VIDS = [
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
   6. АУДАРМАЛАР (TRANSLATIONS — i18n)
   ────────────────────────────────────────────────────
   kk — Қазақша  |  ru — Орысша  |  en — Ағылшынша
════════════════════════════════════════════════════ */

const i18n = {

  kk: {
    gateSub:      'Менің жауапсыз махаббатым',
    gateBtn:      'Кіру →',
    gatePlaceholder: 'Пароль...',
    gateErr:      'Пароль дұрыс емес',
    navGallery:   'Галерея',
    navVideos:    'Видео',
    navLetter:    'Хат',
    heroEyebrow:  'Moni-дің Әлімі ✨',
    heroSub:      'Ақмарал · Ақалек',
    galleryTitle: 'Галерея',
    videosTitle:  'Видео',
    letterTitle:  'Хат 💌',
    letterGateH3: '🔐 Жасырын хат',
    letterGateP:  'Хатты ашу үшін пароль енгізіңіз',
    letterBtn:    'Ашу 💌',
    letterErr:    'Пароль дұрыс емес',
    letterTo:     'Сүйіктім Moni-ге,',
    letterBody:
      'Мони, саған көптен бері айтқым келген бір нәрсе бар.\n' +
      'Бәлкім бұл хатты жазбауым керек шығар. Бірақ ішімде сақтап жүруден шаршадым. Сондықтан бір рет болса да жүрегімдегіні жасырмай айтқым келеді.\n' +
      'Сен мұны білмеуің де мүмкін, бірақ өмірімнің қиын кезеңдерінде маған байқамай үлкен көмек көрсеткен адамдардың бірі өзің болдың.\n' +
      'Сенімен сөйлескен кездерімде ішімдегі уайымдарым мен шаршаған ойларым бір сәтке болса да жоғалып кететін. Жаным тынышталып, бәрі жақсы болатын сияқты көрінетін.\n' +
      'Маған сенің сыртқы келбетіңнен бұрын жүрегің ұнайды. Адамды өзіне баурап алатын мінезің, ақкөңілдігің, адамдарға деген қарым-қатынасың, жылы жүзің — осының бәрі сені ерекше етеді.\n' +
      'Мен сені жақсы көремін. Бірақ бұл хатты сенен бір нәрсе талап ету үшін жазып отырған жоқпын. Керісінше, сені құрметтегендіктен жазып отырмын.\n' +
      'Тек бір нәрсені білгеніңді қалаймын: сен менің өмірімде із қалдырған адамсың.\n' +
      'Саған шын жүректен бақыт тілеймін. Өзің армандаған өмірге жет, әрқашан күліп жүр.',
    letterSig:    'Ақалек · Ақмарал',
    letterDate:   '14 сәуір 2026 — мәңгілік ❤️',
    footerName:   'Moni · Ақмарал · Ақалек',
    footerDate:   '14 сәуір 2026 — мәңгілік ❤️',
  },

  ru: {
    gateSub:      'Моя безответная любовь',
    gateBtn:      'Войти →',
    gatePlaceholder: 'Пароль...',
    gateErr:      'Неверный пароль',
    navGallery:   'Галерея',
    navVideos:    'Видео',
    navLetter:    'Письмо',
    heroEyebrow:  'Алим Мони ✨',
    heroSub:      'Акмарал · Акалек',
    galleryTitle: 'Галерея',
    videosTitle:  'Видео',
    letterTitle:  'Письмо 💌',
    letterGateH3: '🔐 Тайное письмо',
    letterGateP:  'Введите пароль, чтобы открыть письмо',
    letterBtn:    'Открыть 💌',
    letterErr:    'Неверный пароль',
    letterTo:     'Моя дорогая Moni,',
    letterBody:
      'Мони, есть кое-что, что я давно хотел тебе сказать.\n' +
      'Может, мне и не стоило писать это письмо. Но я устал держать всё внутри. Поэтому хочу хотя бы раз сказать то, что у меня на сердце.\n' +
      'Ты, возможно, этого не знаешь, но в самые трудные моменты моей жизни ты незаметно оказалась одним из тех людей, кто очень мне помог.\n' +
      'Когда мы разговаривали, мои тревоги и усталые мысли хоть на мгновение куда-то уходили. Душа успокаивалась, и казалось, что всё будет хорошо.\n' +
      'Мне нравится не твоя внешность — мне нравится твоё сердце. Твой характер, притягивающий людей, твоя искренность, тёплое отношение к людям, добрая улыбка — всё это делает тебя особенной.\n' +
      'Я люблю тебя. Но я пишу это письмо не для того, чтобы чего-то требовать. Напротив — я пишу, потому что уважаю тебя.\n' +
      'Хочу лишь, чтобы ты знала: ты оставила след в моей жизни.\n' +
      'Желаю тебе счастья от всего сердца. Пусть жизнь, о которой ты мечтаешь, станет реальностью. Всегда улыбайся.',
    letterSig:    'Акалек · Акмарал',
    letterDate:   '14 апреля 2026 — навсегда ❤️',
    footerName:   'Moni · Акмарал · Акалек',
    footerDate:   '14 апреля 2026 — навсегда ❤️',
  },

  en: {
    gateSub:      'My unrequited love',
    gateBtn:      'Enter →',
    gatePlaceholder: 'Password...',
    gateErr:      'Wrong password',
    navGallery:   'Gallery',
    navVideos:    'Videos',
    navLetter:    'Letter',
    heroEyebrow:  "Alim's World ✨",
    heroSub:      'Akmaral · Akalek',
    galleryTitle: 'Gallery',
    videosTitle:  'Videos',
    letterTitle:  'Letter 💌',
    letterGateH3: '🔐 Secret Letter',
    letterGateP:  'Enter the password to open the letter',
    letterBtn:    'Open 💌',
    letterErr:    'Wrong password',
    letterTo:     'My dearest Moni,',
    letterBody:
      "Moni, there's something I've wanted to tell you for a long time.\n" +
      "Maybe I shouldn't have written this letter. But I'm tired of keeping it all inside. So I want to say, just this once, what is truly in my heart.\n" +
      "You might not know this, but during the hardest moments of my life, you quietly became one of the people who helped me the most.\n" +
      "When we talked, my worries and exhausted thoughts would disappear, even if just for a moment. My soul would calm down, and everything felt like it would be okay.\n" +
      "What I love about you isn't your appearance — it's your heart. The way you draw people in, your sincerity, your warmth toward others, your gentle smile — all of this makes you extraordinary.\n" +
      "I love you. But I'm not writing this letter to ask anything of you. On the contrary — I'm writing because I respect you.\n" +
      "I just want you to know: you have left a mark on my life.\n" +
      "I wish you happiness with all my heart. May the life you dream of become real. Always keep smiling.",
    letterSig:    'Akalek · Akmaral',
    letterDate:   'April 14, 2026 — forever ❤️',
    footerName:   'Moni · Akmaral · Akalek',
    footerDate:   'April 14, 2026 — forever ❤️',
  },

};


/* ════════════════════════════════════════════════════
   7. ЛОГИКА (FUNCTIONS)
════════════════════════════════════════════════════ */


/* ── ТІЛ АУЫСТЫРУ (setLang) ─────────────────────── */

let currentLang = 'kk';

function setLang(lang) {
  currentLang = lang;

  // HTML lang атрибутын жаңарту
  document.documentElement.lang = lang;

  // data-i18n бар барлық элементтерді жаңарту
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  // Placeholder мәтіндерін жаңарту
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.dataset.i18nPh;
    if (i18n[lang][key] !== undefined) {
      el.placeholder = i18n[lang][key];
    }
  });

  // Хат мазмұнын жаңарту
  renderLetterBody();

  // Белсенді тіл батырмасын белгілеу
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Таңдауды сақтау
  try { localStorage.setItem('lang', lang); } catch (e) {}
}


/* ── ТАҚЫРЫП АУЫСТЫРУ (toggleTheme) ────────────── */

let currentTheme = 'dark';

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // HTML-ге data-theme атрибутын қою
  document.documentElement.dataset.theme = currentTheme === 'light' ? 'light' : '';

  // Барлық тақырып батырмаларының эмодзисін жаңарту
  const emoji = currentTheme === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.textContent = emoji;
  });

  // Таңдауды сақтау
  try { localStorage.setItem('theme', currentTheme); } catch (e) {}
}


/* ── ХАТ МАЗМҰНЫН САЛУ (renderLetterBody) ──────── */

function renderLetterBody() {
  const el = document.getElementById('letterBody');
  if (!el) return;

  const t = i18n[currentLang];
  el.innerHTML =
    `<span class="l-to">${t.letterTo}</span>\n` +
    `${t.letterBody}\n` +
    `<span class="l-sig">${t.letterSig}<br><small>${t.letterDate}</small></span>`;
}


/* ── GATE: басты пароль ──────────────────────────── */

function checkGate() {
  const input = document.getElementById('gatePass');
  const err   = document.getElementById('gateErr');

  if (input.value === '0358') {
    const gate = document.getElementById('gate');
    gate.style.transition = 'opacity 0.5s';
    gate.style.opacity    = '0';
    setTimeout(() => { gate.style.display = 'none'; }, 500);
  } else {
    err.style.display = 'block';
    input.value       = '';
  }
}


/* ── LETTER: хат паролі ─────────────────────────── */

function checkLetter() {
  const input = document.getElementById('letterPass');
  const err   = document.getElementById('letterErr');

  if (input.value === '0358') {
    document.getElementById('letterGate').style.display    = 'none';
    document.getElementById('letterContent').style.display = 'block';
  } else {
    err.style.display = 'block';
    input.value       = '';
  }
}


/* ── LIGHTBOX: суретті үлкейтіп көру ───────────── */

function openLb(src) {
  document.getElementById('lbImg').src        = src;
  document.getElementById('lb').style.display = 'flex';
  document.body.style.overflow                = 'hidden';
}

function closeLb() {
  document.getElementById('lb').style.display = 'none';
  document.body.style.overflow                = '';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLb();
});


/* ── GALLERY: галерея торын құру ────────────────── */

(function buildGallery() {
  const grid = document.getElementById('gGrid');

  IMGS.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'g-item';
    item.innerHTML = `
      <img src="${src}" alt="${CAPS[i] || ''}" loading="lazy">
      <div class="g-cap">${CAPS[i] || ''}</div>
    `;
    item.onclick = () => openLb(src);
    grid.appendChild(item);
  });

  // Hero суретін орнату (IMG4 — негізгі сурет)
  document.getElementById('heroImg').src = IMGS[4];
})();


/* ── VIDEOS: бейне торын құру ───────────────────── */

(function buildVideos() {
  const grid = document.getElementById('vGrid');

  VIDS.forEach((filename) => {
    const item = document.createElement('div');
    item.className = 'v-item';
    item.innerHTML = `<video src="assets/videos/${filename}" controls preload="none" playsinline></video>`;
    grid.appendChild(item);
  });
})();


/* ── MUSIC PLAYER: музыка ойнатқышы ────────────── */

const audio      = document.getElementById('audio');
const playBtn    = document.getElementById('playBtn');
const titleEl    = document.getElementById('mbarTitle');
let   trackIndex = 0;

function loadTrack(index) {
  const track         = TRACKS[index];
  audio.src           = track.src;
  titleEl.textContent = track.title;
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸';
  } else {
    audio.pause();
    playBtn.textContent = '▶';
  }
}

function prevTrack() {
  trackIndex = (trackIndex - 1 + TRACKS.length) % TRACKS.length;
  loadTrack(trackIndex);
  audio.play();
  playBtn.textContent = '⏸';
}

function nextTrack() {
  trackIndex = (trackIndex + 1) % TRACKS.length;
  loadTrack(trackIndex);
  audio.play();
  playBtn.textContent = '⏸';
}

// Трек аяқталса — келесісіне өту
audio.addEventListener('ended', nextTrack);


/* ════════════════════════════════════════════════════
   8. ИНИЦИАЛИЗАЦИЯ (INIT)
   Бет жүктелгенде сақталған тіл мен тақырыпты қолдану
════════════════════════════════════════════════════ */

(function init() {
  // Сақталған тілді қолдану (әдепкі: қазақша)
  let savedLang = 'kk';
  try { savedLang = localStorage.getItem('lang') || 'kk'; } catch (e) {}
  setLang(savedLang);

  // Сақталған тақырыпты қолдану (әдепкі: қара)
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('theme') || 'dark'; } catch (e) {}
  if (savedTheme === 'light') toggleTheme();

  // Бірінші тректі жүктеу
  loadTrack(0);
})();
