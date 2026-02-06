let currentLang = "uz";

const text = {
  uz: {
    navHome: "Home",
    navAbout: "Mahsulot",
    navFaq: "Savollar",
    title: "Yoqilg‘ini tejang, dvigatelni himoyalang",
    subtitle: "B-ECO Fuel Tabs — zamonaviy va ekologik yechim",
    aboutTitle: "B-ECO Fuel Tabs nima?",
    aboutText: "B-ECO Fuel Tabs yoqilg‘i tizimini tozalaydi, sarfni kamaytiradi va dvigatel umrini uzaytiradi.",
    card1: "⛽️ Yoqilg‘i sarfini 10–20% kamaytiradi",
    card2: "🛠 Dvigatelni ichkaridan tozalaydi",
    card3: "🌱 Ekologik zararli chiqindilarni kamaytiradi",
    faqTitle: "Ko‘p beriladigan savollar",
    q1: "Qanday ishlaydi?",
    a1: "Fuel Tabs yoqilg‘i molekulalarini faollashtirib, yonishni samarali qiladi.",
    q2: "Qanday mashinalarga mos?",
    a2: "Barcha benzin va dizel dvigatellarga mos.",
    q3: "Qanday qo‘llaniladi?",
    a3: "Bitta tabletkani bakga solish kifoya.",
    q4: "Natija qachon bilinadi?",
    a4: "Birinchi 1–2 bakdan keyin seziladi."
  },
  kz: {
    navHome: "Басты",
    navAbout: "Өнім",
    navFaq: "Сұрақтар",
    title: "Отынды үнемдеңіз, қозғалтқышты қорғаңыз",
    subtitle: "B-ECO Fuel Tabs — экологиялық шешім",
    aboutTitle: "B-ECO Fuel Tabs деген не?",
    aboutText: "Отын жүйесін тазартып, шығынды азайтады.",
    card1: "⛽️ Отын шығынын азайтады",
    card2: "🛠 Қозғалтқышты қорғайды",
    card3: "🌱 Экологияға зиянды азайтады",
    faqTitle: "Жиі қойылатын сұрақтар",
    q1: "Қалай жұмыс істейді?",
    a1: "Отын молекулаларын белсендіреді.",
    q2: "Қандай көліктерге?",
    a2: "Барлық бензин және дизельге.",
    q3: "Қалай қолданады?",
    a3: "Бакқа салу жеткілікті.",
    q4: "Қашан әсер береді?",
    a4: "1–2 бактан кейін."
  },
  ru: {
    navHome: "Главная",
    navAbout: "Продукт",
    navFaq: "Вопросы",
    title: "Экономьте топливо, защищайте двигатель",
    subtitle: "B-ECO Fuel Tabs — инновационное решение",
    aboutTitle: "Что такое B-ECO Fuel Tabs?",
    aboutText: "Снижает расход топлива и продлевает срок службы двигателя.",
    card1: "⛽️ Экономия топлива",
    card2: "🛠 Очистка двигателя",
    card3: "🌱 Экология",
    faqTitle: "Частые вопросы",
    q1: "Как работает?",
    a1: "Улучшает процесс сгорания топлива.",
    q2: "Для каких авто?",
    a2: "Для всех бензиновых и дизельных.",
    q3: "Как использовать?",
    a3: "Добавить в бак.",
    q4: "Когда эффект?",
    a4: "После 1–2 заправок."
  }
};

function setLang(l) {
  currentLang = l;
  for (let k in text[l]) {
    const el = document.getElementById(k);
    if (el) el.innerText = text[l][k];
  }
}

function toggleFaq(n) {
  const el = document.getElementById("a" + n);
  el.style.display = el.style.display === "block" ? "none" : "block";
}

setLang("uz");
function openFuel() {
  document.getElementById("fuelModal").style.display = "flex";
}

function closeFuel() {
  document.getElementById("fuelModal").style.display = "none";
}
function openFuel() {
  document.getElementById("fuelModal").style.display = "flex";
}

function closeFuel() {
  document.getElementById("fuelModal").style.display = "none";
}

function openVideo() {
  document.getElementById("videoModal").style.display = "flex";
}

function closeVideo() {
  document.getElementById("videoModal").style.display = "none";
}
// Intro tugagach olib tashlash
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    if (intro) intro.remove();
  }, 2300);
});
function playIntroAudio() {
  const audio = document.getElementById("introAudio");
  audio.play().catch(() => {});
  
  // intro yopiladi
  document.getElementById("intro").style.display = "none";
}
