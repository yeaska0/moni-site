/* ════════════════════════════════════════════════════
   main.js — Moni🕊️ · Ultimate Romantic Design
   Luxury · Warm Champagne & Rose Gold
   Автор: Ақалек | 2026
════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════
   1. СУРЕТТЕР (IMAGES)
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
const IMG9  = 'assets/images/2026-06-24%2020.38.46.jpg';
const IMG10 = 'assets/images/2026-06-24%2020.39.27.jpg';
const IMG11 = 'assets/images/2026-06-24%2020.39.31.jpg';
const IMG12 = 'assets/images/2026-06-24%2020.39.35.jpg';
const IMG13 = 'assets/images/2026-06-24%2020.39.40.jpg';
const IMG14 = 'assets/images/2026-06-24%2020.39.43.jpg';
const IMG15 = 'assets/images/2026-06-24%2020.39.47.jpg';
const IMG16 = 'assets/images/2026-06-24%2020.39.52.jpg';
const IMG17 = 'assets/images/2026-06-24%2020.39.57.jpg';
const IMG18 = 'assets/images/2026-06-24%2020.40.11.jpg';
const IMG19 = 'assets/images/2026-06-24%2020.40.32.jpg';
const IMG20 = 'assets/images/2026-06-24%2020.40.35.jpg';
const IMG21 = 'assets/images/2026-06-24%2020.40.39.jpg';
const IMG22 = 'assets/images/2026-06-24%2020.40.42.jpg';
const IMG23 = 'assets/images/2026-06-24%2020.40.45.jpg';
const IMG24 = 'assets/images/2026-06-24%2020.40.49.jpg';
const IMG25 = 'assets/images/2026-06-24%2020.40.53.jpg';
const IMG26 = 'assets/images/2026-06-24%2020.40.56.jpg';
const IMG27 = 'assets/images/2026-06-24%2020.41.00.jpg';


/* ════════════════════════════════════════════════════
   2. СУРЕТТЕР МАССИВІ (IMAGE ARRAY)
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
════════════════════════════════════════════════════ */

const TRACKS = [
  { src: 'assets/audio/Sadraddin_-_Qolymnan_usta.mp3',  title: 'Qolymnan Usta 🎵' },
  { src: 'assets/audio/Sadraddin_Bakr_-_Sagynysh.mp3',  title: 'Sagynysh 🎵'       },
  { src: 'assets/audio/Kairat Nurtas - Маралым.mp3',    title: 'Маралым 🎵'         },
];


/* ════════════════════════════════════════════════════
   5. БЕЙНЕЛЕР (VIDEOS)
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
   6. ТАРИХ МӘЛІМЕТТЕРІ (TIMELINE DATA)
════════════════════════════════════════════════════ */

const TIMELINE = {
  kk: [
    {
      date: 'Алғашқы сәт',
      title: 'Тағдыр шешті',
      desc: 'Сені алғаш көрген сәтте жүрегім тоқтай жаздады. Ол сезімді ешқашан ұмыта алмаймын.',
    },
    {
      date: 'Алғашқы сөздер',
      title: 'Жылу берген сәттер',
      desc: 'Сөйлескен кезде барлық уайым ұмытылатын еді. Жаным тынышталып, бәрі жақсы болатын сияқты көрінетін.',
    },
    {
      date: 'Ішкі дүние',
      title: 'Жасырын сезімдер',
      desc: 'Саған деген сезімдерді ұзақ уақыт ішімде сақтадым. Айта алмадым, бірақ сезімдер жоғалған жоқ.',
    },
    {
      date: '14 сәуір 2026',
      title: 'Бұл сайт дүниеге келді',
      desc: 'Жүрегімдегі сөздерді айту үшін арнайы жасалды. Сен туралы — сен үшін.',
    },
  ],
  ru: [
    {
      date: 'Первый момент',
      title: 'Судьба решила',
      desc: 'В тот момент, когда я впервые тебя увидел, сердце почти остановилось. Этого не забыть никогда.',
    },
    {
      date: 'Первые слова',
      title: 'Тёплые моменты',
      desc: 'Когда мы разговаривали, все тревоги куда-то уходили. Душа успокаивалась, казалось, всё будет хорошо.',
    },
    {
      date: 'Внутри',
      title: 'Скрытые чувства',
      desc: 'Долгое время я хранил свои чувства к тебе внутри. Не мог сказать, но чувства никуда не исчезали.',
    },
    {
      date: '14 апреля 2026',
      title: 'Этот сайт родился',
      desc: 'Создан, чтобы сказать слова, хранившиеся в сердце. О тебе — для тебя.',
    },
  ],
  en: [
    {
      date: 'First moment',
      title: 'Fate decided',
      desc: 'The moment I first saw you, my heart almost stopped. That feeling is something I will never forget.',
    },
    {
      date: 'First words',
      title: 'Warm moments',
      desc: 'When we talked, all my worries would disappear. My soul would calm down and everything felt okay.',
    },
    {
      date: 'Deep inside',
      title: 'Hidden feelings',
      desc: 'For a long time I kept my feelings for you to myself. I could not say it, but the feelings never faded.',
    },
    {
      date: 'April 14, 2026',
      title: 'This site was born',
      desc: 'Created to say the words kept in my heart. About you — for you.',
    },
  ],
};


/* ════════════════════════════════════════════════════
   7. СЕБЕПТЕР МӘЛІМЕТТЕРІ (REASONS DATA)
════════════════════════════════════════════════════ */

const REASONS = {
  kk: [
    { icon: '💛', title: 'Жылы жүрек',   desc: 'Сенің жылуың барлығына жетеді. Қасыңда болу — тыныштық пен бақыт.' },
    { icon: '✨', title: 'Нұрлы жымию',  desc: 'Күлгенде бүкіл дүние тоқтайды. Сол жымию — менің тынысым.' },
    { icon: '🌸', title: 'Адалдық',       desc: 'Сен шынайысың, шыншылсың. Мұндай адалдық бұл дүниеде сирек.' },
    { icon: '💫', title: 'Ерекшелік',     desc: 'Ешкімге ұқсамайсың. Сен — өз алдына бір ғалам, бір өнер туындысы.' },
    { icon: '🌹', title: 'Мінез',         desc: 'Адамдарды өзіне тарта білесің. Бұл — табиғаттан берілген сирек сыйлық.' },
    { icon: '🕊️', title: 'Тазалық',       desc: 'Жүрегіндегі тазалық пен ақкөңілдік сені мүлдем ерекше етеді.' },
  ],
  ru: [
    { icon: '💛', title: 'Тёплое сердце',    desc: 'Твоего тепла хватает на всех. Быть рядом с тобой — это покой и счастье.' },
    { icon: '✨', title: 'Лучезарная улыбка', desc: 'Когда ты улыбаешься, весь мир замирает. Эта улыбка — моё дыхание.' },
    { icon: '🌸', title: 'Искренность',       desc: 'Ты настоящая, честная. Такая искренность в этом мире редкость.' },
    { icon: '💫', title: 'Уникальность',      desc: 'Ты ни на кого не похожа. Ты — целая вселенная, произведение искусства.' },
    { icon: '🌹', title: 'Характер',          desc: 'Ты умеешь притягивать людей. Это редкий дар, данный природой.' },
    { icon: '🕊️', title: 'Чистота',           desc: 'Чистота и доброта твоей души делают тебя совершенно особенной.' },
  ],
  en: [
    { icon: '💛', title: 'Warm Heart',   desc: 'Your warmth reaches everyone around you. Being near you is peace and happiness.' },
    { icon: '✨', title: 'Radiant Smile', desc: 'When you smile, the whole world stops. That smile is my breath.' },
    { icon: '🌸', title: 'Sincerity',    desc: "You're real and honest. That kind of sincerity is rare in this world." },
    { icon: '💫', title: 'Uniqueness',   desc: "You're like no one else. You are an entire universe, a work of art." },
    { icon: '🌹', title: 'Character',    desc: 'You draw people in naturally. That is a rare gift given by nature.' },
    { icon: '🕊️', title: 'Purity',       desc: 'The purity and kindness of your heart make you completely extraordinary.' },
  ],
};


/* ════════════════════════════════════════════════════
   8. АУДАРМАЛАР (TRANSLATIONS — i18n)
   kk — Қазақша  |  ru — Орысша  |  en — Ағылшынша
════════════════════════════════════════════════════ */

const i18n = {

  kk: {
    /* Gate */
    gateSub:         'Менің жауапсыз махаббатым',
    gateBtn:         'Кіру →',
    gatePlaceholder: 'Пароль...',
    gateErr:         'Пароль дұрыс емес',
    /* Nav */
    navStory:        'Тарих',
    navGallery:      'Галерея',
    navVideos:       'Видео',
    navMusic:        'Музыка',
    navLetter:       'Хат',
    /* Hero */
    heroEyebrow:     'Moni-дің Әлімі ✨',
    heroTagline:     'Менің жауапсыз махаббатым',
    heroCta:         'Тарихымызды оқу ↓',
    /* Story */
    storyEyebrow:    'Біздің тарихымыз',
    storyTitle:      'Жүректегі естеліктер',
    /* Gallery */
    galleryEyebrow:  'Сәттер',
    galleryTitle:    'Галерея',
    /* Reasons */
    reasonsEyebrow:  'Себептер',
    reasonsTitle:    'Сені неге жақсы көремін',
    /* Videos */
    videosEyebrow:   'Естеліктер',
    videosTitle:     'Видео',
    /* Music */
    musicEyebrow:    'Жүрекке жылы',
    musicTitle:      'Музыка 🎵',
    /* Letter */
    letterEyebrow:   'Жасырын',
    letterTitle:     'Хат 💌',
    letterGateH3:    '🔐 Жасырын хат',
    letterGateP:     'Хатты ашу үшін пароль енгізіңіз',
    letterBtn:       'Ашу 💌',
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
    letterDate:      '14 сәуір 2026 — мәңгілік ❤️',
    /* Countdown */
    countEyebrow:    '14 сәуір 2026 бастап',
    countTitle:      'Бірге өткен уақыт',
    cntDays:         'Күн',
    cntHours:        'Сағат',
    cntMins:         'Минут',
    cntSecs:         'Секунд',
    /* Final */
    finalEyebrow:    'Соңғы сөз',
    finalTitle:      'Сені мәңгі жақсы көремін',
    finalSub:        'Бұл сайт — саған арналған сыйлық. Әрдайым бақытты бол.',
    finalQuote:      '"Жүрегімде сенің орның бар мәңгілік"',
    /* Footer */
    footerName:      'Moni🕊️ · Ақмарал · Ақалек',
    footerDate:      '14 сәуір 2026 — мәңгілік ❤️',
  },

  ru: {
    /* Gate */
    gateSub:         'Моя безответная любовь',
    gateBtn:         'Войти →',
    gatePlaceholder: 'Пароль...',
    gateErr:         'Неверный пароль',
    /* Nav */
    navStory:        'История',
    navGallery:      'Галерея',
    navVideos:       'Видео',
    navMusic:        'Музыка',
    navLetter:       'Письмо',
    /* Hero */
    heroEyebrow:     'Алим Мони ✨',
    heroTagline:     'Моя безответная любовь',
    heroCta:         'Читать нашу историю ↓',
    /* Story */
    storyEyebrow:    'Наша история',
    storyTitle:      'Воспоминания в сердце',
    /* Gallery */
    galleryEyebrow:  'Моменты',
    galleryTitle:    'Галерея',
    /* Reasons */
    reasonsEyebrow:  'Причины',
    reasonsTitle:    'Почему я люблю тебя',
    /* Videos */
    videosEyebrow:   'Воспоминания',
    videosTitle:     'Видео',
    /* Music */
    musicEyebrow:    'Тепло для сердца',
    musicTitle:      'Музыка 🎵',
    /* Letter */
    letterEyebrow:   'Тайное',
    letterTitle:     'Письмо 💌',
    letterGateH3:    '🔐 Тайное письмо',
    letterGateP:     'Введите пароль, чтобы открыть письмо',
    letterBtn:       'Открыть 💌',
    letterErr:       'Неверный пароль',
    letterTo:        'Моя дорогая Moni,',
    letterBody:
      'Мони, есть кое-что, что я давно хотел тебе сказать.\n' +
      'Может, мне и не стоило писать это письмо. Но я устал держать всё внутри. Поэтому хочу хотя бы раз сказать то, что у меня на сердце.\n' +
      'Ты, возможно, этого не знаешь, но в самые трудные моменты моей жизни ты незаметно оказалась одним из тех людей, кто очень мне помог.\n' +
      'Когда мы разговаривали, мои тревоги и усталые мысли хоть на мгновение куда-то уходили. Душа успокаивалась, и казалось, что всё будет хорошо.\n' +
      'Мне нравится не твоя внешность — мне нравится твоё сердце. Твой характер, притягивающий людей, твоя искренность, тёплое отношение к людям, добрая улыбка — всё это делает тебя особенной.\n' +
      'Я люблю тебя. Но я пишу это письмо не для того, чтобы чего-то требовать. Напротив — я пишу, потому что уважаю тебя.\n' +
      'Хочу лишь, чтобы ты знала: ты оставила след в моей жизни.\n' +
      'Желаю тебе счастья от всего сердца. Пусть жизнь, о которой ты мечтаешь, станет реальностью. Всегда улыбайся.',
    letterSig:       'Акалек · Акмарал',
    letterDate:      '14 апреля 2026 — навсегда ❤️',
    /* Countdown */
    countEyebrow:    'С 14 апреля 2026',
    countTitle:      'Время, проведённое вместе',
    cntDays:         'Дней',
    cntHours:        'Часов',
    cntMins:         'Минут',
    cntSecs:         'Секунд',
    /* Final */
    finalEyebrow:    'Последнее слово',
    finalTitle:      'Я люблю тебя навсегда',
    finalSub:        'Этот сайт — подарок для тебя. Будь всегда счастлива.',
    finalQuote:      '"В моём сердце твоё место навсегда"',
    /* Footer */
    footerName:      'Moni🕊️ · Акмарал · Акалек',
    footerDate:      '14 апреля 2026 — навсегда ❤️',
  },

  en: {
    /* Gate */
    gateSub:         'My unrequited love',
    gateBtn:         'Enter →',
    gatePlaceholder: 'Password...',
    gateErr:         'Wrong password',
    /* Nav */
    navStory:        'Story',
    navGallery:      'Gallery',
    navVideos:       'Videos',
    navMusic:        'Music',
    navLetter:       'Letter',
    /* Hero */
    heroEyebrow:     "Alim's World ✨",
    heroTagline:     'My unrequited love',
    heroCta:         'Read our story ↓',
    /* Story */
    storyEyebrow:    'Our story',
    storyTitle:      'Memories of the heart',
    /* Gallery */
    galleryEyebrow:  'Moments',
    galleryTitle:    'Gallery',
    /* Reasons */
    reasonsEyebrow:  'Reasons',
    reasonsTitle:    'Why I love you',
    /* Videos */
    videosEyebrow:   'Memories',
    videosTitle:     'Videos',
    /* Music */
    musicEyebrow:    'Warm for the heart',
    musicTitle:      'Music 🎵',
    /* Letter */
    letterEyebrow:   'Secret',
    letterTitle:     'Letter 💌',
    letterGateH3:    '🔐 Secret Letter',
    letterGateP:     'Enter the password to open the letter',
    letterBtn:       'Open 💌',
    letterErr:       'Wrong password',
    letterTo:        'My dearest Moni,',
    letterBody:
      "Moni, there's something I've wanted to tell you for a long time.\n" +
      "Maybe I shouldn't have written this letter. But I'm tired of keeping it all inside. So I want to say, just this once, what is truly in my heart.\n" +
      "You might not know this, but during the hardest moments of my life, you quietly became one of the people who helped me the most.\n" +
      "When we talked, my worries and exhausted thoughts would disappear, even if just for a moment. My soul would calm down, and everything felt like it would be okay.\n" +
      "What I love about you isn't your appearance — it's your heart. The way you draw people in, your sincerity, your warmth toward others, your gentle smile — all of this makes you extraordinary.\n" +
      "I love you. But I'm not writing this letter to ask anything of you. On the contrary — I'm writing because I respect you.\n" +
      "I just want you to know: you have left a mark on my life.\n" +
      "I wish you happiness with all my heart. May the life you dream of become real. Always keep smiling.",
    letterSig:       'Akalek · Akmaral',
    letterDate:      'April 14, 2026 — forever ❤️',
    /* Countdown */
    countEyebrow:    'Since April 14, 2026',
    countTitle:      'Time we have shared',
    cntDays:         'Days',
    cntHours:        'Hours',
    cntMins:         'Minutes',
    cntSecs:         'Seconds',
    /* Final */
    finalEyebrow:    'Last words',
    finalTitle:      'I love you forever',
    finalSub:        'This site is a gift for you. Always be happy.',
    finalQuote:      '"Your place in my heart is forever"',
    /* Footer */
    footerName:      'Moni🕊️ · Akmaral · Akalek',
    footerDate:      'April 14, 2026 — forever ❤️',
  },

};


/* ════════════════════════════════════════════════════
   9. ЛОГИКА (CORE FUNCTIONS)
════════════════════════════════════════════════════ */


/* ── ТІЛ АУЫСТЫРУ (setLang) ─────────────────────── */

let currentLang = 'kk';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.dataset.i18nPh;
    if (i18n[lang][key] !== undefined) el.placeholder = i18n[lang][key];
  });

  renderLetterBody();
  buildTimeline();
  buildReasons();

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}


/* ── ТАҚЫРЫП АУЫСТЫРУ (toggleTheme) ────────────── */

let currentTheme = 'dark';

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = currentTheme === 'light' ? 'light' : '';

  const emoji = currentTheme === 'dark' ? '☀️' : '🌙';
  document.querySelectorAll('.theme-btn').forEach((btn) => {
    btn.textContent = emoji;
  });

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
    gate.style.transition = 'opacity 0.7s';
    gate.style.opacity    = '0';
    setTimeout(() => {
      gate.style.display = 'none';
      // Particles жұмыс жасауы үшін hero resize керек
      initParticles();
    }, 700);
  } else {
    err.style.display = 'block';
    input.value       = '';
    input.focus();
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
    input.focus();
  }
}


/* ── LIGHTBOX ───────────────────────────────────── */

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


/* ════════════════════════════════════════════════════
   10. BUILDERS — СЕКЦИЯЛАР ЖАСАУШЫЛАРЫ
════════════════════════════════════════════════════ */


/* ── GALLERY ─────────────────────────────────────── */

(function buildGallery() {
  const grid = document.getElementById('gGrid');

  IMGS.forEach((src, i) => {
    const item = document.createElement('div');
    item.className = 'g-item reveal';
    item.style.transitionDelay = `${(i % 4) * 0.08}s`;
    item.innerHTML = `
      <img src="${src}" alt="${CAPS[i] || ''}" loading="lazy">
      <div class="g-cap">${CAPS[i] || ''}</div>
    `;
    item.onclick = () => openLb(src);
    grid.appendChild(item);
  });

  document.getElementById('heroImg').src = IMGS[4];
})();


/* ── VIDEOS ──────────────────────────────────────── */

(function buildVideos() {
  const grid = document.getElementById('vGrid');

  VIDS.forEach((filename, i) => {
    const item = document.createElement('div');
    item.className = 'v-item reveal';
    item.style.transitionDelay = `${(i % 3) * 0.10}s`;
    item.innerHTML = `<video src="assets/videos/${filename}" controls preload="metadata" playsinline></video>`;
    grid.appendChild(item);
  });
})();


/* ── TIMELINE ─────────────────────────────────────── */

function buildTimeline() {
  const container = document.getElementById('timeline');
  if (!container) return;
  container.innerHTML = '';

  TIMELINE[currentLang].forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'tl-item';
    el.style.transitionDelay = `${i * 0.15}s`;
    el.innerHTML = `
      <div class="tl-dot"></div>
      <div class="tl-date">${item.date}</div>
      <div class="tl-title">${item.title}</div>
      <p class="tl-desc">${item.desc}</p>
    `;
    container.appendChild(el);
  });

  // Жаңа элементтерді observe ету
  observeElements('.tl-item');
}


/* ── REASONS ─────────────────────────────────────── */

function buildReasons() {
  const grid = document.getElementById('reasonsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  REASONS[currentLang].forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.style.transitionDelay = `${i * 0.10}s`;
    card.innerHTML = `
      <span class="reason-icon">${item.icon}</span>
      <div class="reason-title">${item.title}</div>
      <p class="reason-desc">${item.desc}</p>
    `;
    grid.appendChild(card);
  });

  observeElements('.reason-card');
}


/* ── MUSIC ───────────────────────────────────────── */

const audio = document.getElementById('audio');
let   activeIndex = -1;

function buildMusic() {
  const list = document.getElementById('musicList');
  if (!list) return;
  list.innerHTML = '';

  TRACKS.forEach((track, i) => {
    const card = document.createElement('div');
    card.className = 'music-card';
    card.id        = `mcard-${i}`;
    card.style.transitionDelay = `${i * 0.12}s`;
    card.innerHTML = `
      <button class="mc-btn" id="mcbtn-${i}">▶</button>
      <span class="mc-title">${track.title}</span>
    `;
    card.querySelector('.mc-btn').onclick = () => playCard(i);
    list.appendChild(card);
  });

  observeElements('.music-card');
}

function playCard(index) {
  if (activeIndex === index && !audio.paused) {
    audio.pause();
    setCardState(index, false);
    return;
  }
  if (activeIndex >= 0) setCardState(activeIndex, false);
  activeIndex  = index;
  audio.src    = TRACKS[index].src;
  audio.play();
  setCardState(index, true);
}

function setCardState(index, playing) {
  const card = document.getElementById(`mcard-${index}`);
  const btn  = document.getElementById(`mcbtn-${index}`);
  if (!card || !btn) return;
  card.classList.toggle('playing', playing);
  btn.textContent = playing ? '⏸' : '▶';
}

audio.addEventListener('ended', () => {
  const next = (activeIndex + 1) % TRACKS.length;
  playCard(next);
});


/* ════════════════════════════════════════════════════
   11. PARTICLE SYSTEM — Бөлшектер жүйесі
════════════════════════════════════════════════════ */

function createParticles(canvasId, count) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  count = count || 60;

  function resize() {
    canvas.width  = canvas.offsetWidth  || canvas.parentElement.offsetWidth;
    canvas.height = canvas.offsetHeight || canvas.parentElement.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Particle colors: gold, rose, cream
  const colors = [
    [196, 168, 120],
    [200, 160, 168],
    [240, 232, 220],
  ];

  const particles = Array.from({ length: count }, () => {
    const c = colors[Math.floor(Math.random() * colors.length)];
    return {
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      r:    Math.random() * 1.8 + 0.4,
      vx:   (Math.random() - 0.5) * 0.25,
      vy:   -(Math.random() * 0.45 + 0.08),
      alpha: Math.random() * 0.35 + 0.08,
      color: c,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.004,
    };
  });

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.phase += p.speed;

      // Экраннан шықса — жаңарт
      if (p.y < -10 || p.x < -20 || p.x > canvas.width + 20) {
        p.x     = Math.random() * canvas.width;
        p.y     = canvas.height + 10;
        p.phase = 0;
      }

      const a = p.alpha * (0.5 + 0.5 * Math.sin(p.phase));

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${a})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}

function initParticles() {
  createParticles('heroCanvas',  70);
  createParticles('finalCanvas', 55);
}

function initGateParticles() {
  createParticles('gateCanvas', 50);
}


/* ════════════════════════════════════════════════════
   12. SCROLL REVEAL — IntersectionObserver
════════════════════════════════════════════════════ */

let revealObserver = null;

function observeElements(selector) {
  if (!revealObserver) return;
  document.querySelectorAll(selector).forEach((el) => {
    if (!el.classList.contains('visible')) {
      revealObserver.observe(el);
    }
  });
}

function initScrollReveal() {
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll(
    '.reveal, .tl-item, .reason-card, .music-card, .g-item, .v-item'
  ).forEach((el) => revealObserver.observe(el));
}


/* ════════════════════════════════════════════════════
   13. COUNTDOWN — Уақыт санағышы
   14 сәуір 2026 00:00:00 бастап есептейді
════════════════════════════════════════════════════ */

function initCountdown() {
  const start = new Date('2026-04-14T00:00:00');

  function pad(n) {
    return String(Math.max(0, n)).padStart(2, '0');
  }

  function update() {
    const now  = new Date();
    const diff = now - start;

    if (diff < 0) {
      ['cntDays','cntHours','cntMins','cntSecs'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '00';
      });
      return;
    }

    const totalSecs = Math.floor(diff / 1000);
    const days      = Math.floor(totalSecs / 86400);
    const hours     = Math.floor((totalSecs % 86400) / 3600);
    const mins      = Math.floor((totalSecs % 3600) / 60);
    const secs      = totalSecs % 60;

    const dEl = document.getElementById('cntDays');
    const hEl = document.getElementById('cntHours');
    const mEl = document.getElementById('cntMins');
    const sEl = document.getElementById('cntSecs');

    if (dEl) dEl.textContent = days;
    if (hEl) hEl.textContent = pad(hours);
    if (mEl) mEl.textContent = pad(mins);
    if (sEl) sEl.textContent = pad(secs);
  }

  update();
  setInterval(update, 1000);
}


/* ════════════════════════════════════════════════════
   14. NAV SCROLL EFFECT
════════════════════════════════════════════════════ */

function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 48);
  }, { passive: true });
}


/* ════════════════════════════════════════════════════
   15. ИНИЦИАЛИЗАЦИЯ (INIT)
════════════════════════════════════════════════════ */

(function init() {
  /* Сақталған тілді қолдану */
  let savedLang = 'kk';
  try { savedLang = localStorage.getItem('lang') || 'kk'; } catch (e) {}
  setLang(savedLang);

  /* Сақталған тақырыпты қолдану */
  let savedTheme = 'dark';
  try { savedTheme = localStorage.getItem('theme') || 'dark'; } catch (e) {}
  if (savedTheme === 'light') toggleTheme();

  /* Gate particles — бірден іске қос */
  initGateParticles();

  /* Музыка картоларын жасау */
  buildMusic();

  /* Scroll reveal */
  initScrollReveal();

  /* Countdown */
  initCountdown();

  /* Nav scroll */
  initNavScroll();

  /* Hero / Final particles — gate жабылғаннан кейін де іске қосылады */
  /* Алдын-ала іске қосамыз, canvas жасырын болса да ол жылдам ашылады */
  setTimeout(initParticles, 100);
})();
