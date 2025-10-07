
// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    const headerOffset = document.querySelector('header').offsetHeight + 10;
    const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Intersection Observer для показа элементов
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
  observer.observe(el);
});

// Переключение языков
const langButtons = document.querySelectorAll('.lang-btn');

function setLang(lang) {
  const translations = {
    ru: {
      heroTitle: "Психолог в Тбилиси",
      heroSub: "Помогаю обрести внутреннюю опору, осознанность и баланс",
      aboutTitle: "Обо мне",
      aboutP1: "Здравствуйте! Меня зовут Лана, я психолог в Тбилиси. Работаю с взрослыми и подростками, использую интегративный подход и помогаю находить опору внутри себя.",
      aboutP2: "Моя практика направлена на глубокое понимание переживаний, работу с тревогой, кризисами, поиском смысла и восстановлением контакта с собой.",
      servicesTitle: "С чем я работаю",
      servicesNote: "Не занимаюсь консультированием в привычном понимании, не даю советов и рекомендаций, не провожу семейную терапию.",
      contactTitle: "Контакты",
      footer: "© 2025 Цурцумия Лана Раулиевна. Все права защищены."
    },
    en: {
      heroTitle: "Psychologist in Tbilisi",
      heroSub: "Helping you find inner balance and awareness",
      aboutTitle: "About me",
      aboutP1: "Hello! My name is Lana, I'm a psychologist in Tbilisi. I work with adults and adolescents using an integrative approach.",
      aboutP2: "My practice focuses on understanding experiences, working with anxiety, crises and finding meaning.",
      servicesTitle: "What I work with",
      servicesNote: "I do not provide advice or recommendations, and I do not conduct family therapy.",
      contactTitle: "Contacts",
      footer: "© 2025 Lana Tsurtsumia. All rights reserved."
    },
    geo: {
      heroTitle: "ფსიქოლოგი თბილისში",
      heroSub: "გეხმარებით შიდა ძალის, ცნობიერებისა და ბალანსის პოვნაში",
      aboutTitle: "ჩემ შესახებ",
      aboutP1: "გამარჯობა! მე ლანა ვარ, ფსიქოლოგი თბილისში. ვმუშაობ ზრდასრულებთან და მოზარდებთან ინტეგრაციული მიდგომით.",
      aboutP2: "პრაქტიკა მიმართულია გამოცდილებების უკეთ გააზრებაში, შფოთვასთან მუშაობაში და აზრის პოვნაში.",
      servicesTitle: "რასთან ვმუშაობ",
      servicesNote: "არ ვაძლევ რჩევებს და არ ვატარებ ოჯახურ თერაპიას.",
      contactTitle: "კონტაქტი",
      footer: "© 2025 ლანა ცურცუმია. ყველა უფლება დაცულია."
    }
  };

  const t = translations[lang];
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-sub').textContent = t.heroSub;
  document.getElementById('about-title').textContent = t.aboutTitle;
  const aboutParas = document.querySelectorAll('.about-text p');
  if (aboutParas[0]) aboutParas[0].textContent = t.aboutP1;
  if (aboutParas[1]) aboutParas[1].textContent = t.aboutP2;
  document.getElementById('services-title').textContent = t.servicesTitle;
  document.getElementById('services-note').textContent = t.servicesNote;
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('footer-text').textContent = t.footer;

  localStorage.setItem('lana_lang', lang);
}

// Инициализация языка
const savedLang = localStorage.getItem('lana_lang') || 'ru';
langButtons.forEach(btn => {
  btn.classList.remove('active');
  if (btn.dataset.lang === savedLang) btn.classList.add('active');
});
setLang(savedLang);

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => b.classList.remove('active'));
    btn.classList.
add('active');
    setLang(btn.dataset.lang);
  });
});

// Форма → Telegram
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const msg = document.getElementById('message').value.trim();
    if (!name || !msg) {
      alert('Пожалуйста, заполните имя и сообщение');
      return;
    }
    const text = Имя: ${name}\nЗапрос: ${msg};
    const url = https://t.me/lana_tsurtsumia?text=${encodeURIComponent(text)};
    window.open(url, '_blank');
  });
}
