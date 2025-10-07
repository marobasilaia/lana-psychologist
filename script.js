// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    const el=document.querySelector(this.getAttribute('href'));
    if(!el)return;
    const top=el.getBoundingClientRect().top+window.pageYOffset-60;
    window.scrollTo({top,behavior:'smooth'});
  });
});

// Появление блоков при скролле
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  });
},{threshold:0.1});
document.querySelectorAll('.fade-in,.slide-up').forEach(el=>io.observe(el));

// Переключение языков
const langBtns=document.querySelectorAll('.lang-btn');
function setLang(lang){
  const t={
    ru:{
      heroTitle:"Психолог в Тбилиси",
      heroSub:"Помогаю обрести внутреннюю опору, осознанность и баланс",
      aboutTitle:"Обо мне",
      aboutP1:"Здравствуйте! Меня зовут Лана, я психолог в Тбилиси. Работаю с взрослыми и подростками, использую интегративный подход и помогаю находить опору внутри себя.",
      aboutP2:"Моя практика направлена на глубокое понимание переживаний, работу с тревогой, кризисами, поиском смысла и восстановлением контакта с собой.",
      servicesTitle:"С чем я работаю",
      note:"Не занимаюсь консультированием в привычном понимании, не даю советов и рекомендаций, не провожу семейную терапию.",
      contact:"Контакты",
      footer:"© 2025 Цурцумия Лана Раулиевна. Все права защищены."
    },
    en:{
      heroTitle:"Psychologist in Tbilisi",
      heroSub:"Helping you find inner balance and awareness",
      aboutTitle:"About me",
      aboutP1:"Hello! My name is Lana, I'm a psychologist in Tbilisi. I work with adults and adolescents using an integrative approach.",
      aboutP2:"My practice focuses on understanding experiences, working with anxiety, crises and finding meaning.",
      servicesTitle:"What I work with",
      note:"I do not provide advice or recommendations, and I do not conduct family therapy.",
      contact:"Contacts",
      footer:"© 2025 Lana Tsurtsumia. All rights reserved."
    },
    geo:{
      heroTitle:"ფსიქოლოგი თბილისში",
      heroSub:"გეხმარებით შიდა ძალის, ცნობიერებისა და ბალანსის პოვნაში",
      aboutTitle:"ჩემ შესახებ",
      aboutP1:"გამარჯობა! მე ლანა ვარ, ფსიქოლოგი თბილისში. ვმუშაობ ზრდასრულებთან და მოზარდებთან ინტეგრაციული მიდგომით.",
      aboutP2:"ჩემი პრაქტიკა მიმართულია შფოთვისა და ცხოვრების კრიზისების გადაჭრისკენ.",
      servicesTitle:"რასთან ვმუშაობ",
      note:"არ ვაძლევ რჩევებს და არ ვატარებ ოჯახურ თერაპიას.",
      contact:"კონტაქტი",
      footer:"© 2025 ლანა ცურცუმია. ყველა უფლება დაცულია."
    }
  };
  const d=t[lang];
  document.getElementById('hero-title').textContent=d.heroTitle;
  document.getElementById('hero-sub').textContent=d.heroSub;
  document.getElementById('about-title').textContent=d.aboutTitle;
  document.querySelectorAll('.about-text p')[0].textContent=d.aboutP1;
  document.querySelectorAll('.about-text p')[1].textContent=d.aboutP2;
  document.getElementById('services-title').textContent=d.servicesTitle;
  document.getElementById('services-note').textContent=d.note;
  document.getElementById('contact-title').textContent=d.contact;
  document.getElementById('footer-text').textContent=d.footer;
  localStorage.setItem('lana_lang',lang);
}
const saved=localStorage.getItem('lana_lang')||'ru';
setLang(saved);
langBtns.forEach(b=>{
  if(b.dataset.lang===saved)b.classList.add('active');
  b.addEventListener('click',()=>{
    langBtns.forEach(btn=>btn.classList.remove('active'));
    b.classList.add('active');
    setLang(b.dataset.lang);
  });
});

// Отправка формы
const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const msg=document.getElementById('message').value.trim();
  if(!name||!msg)return alert('Заполните имя и сообщение');
  const text=`Имя: ${name}\nЗапрос: ${msg}`;
  const url=`https://t.me/lana_tsurtsumia?text=${encodeURIComponent(text)}`;
  window.open(url,'_blank');
});
