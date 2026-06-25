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
   6. ЛОГИКА (FUNCTIONS)
════════════════════════════════════════════════════ */


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
  const track        = TRACKS[index];
  audio.src          = track.src;
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

// Бетті ашқанда бірінші тректі жүктеу
loadTrack(0);
