document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking a link
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    // Language Switcher
    const langTRBtn = document.getElementById('lang-tr');
    const langENBtn = document.getElementById('lang-en');
    const translations = {
        'tr': {
            pageTitle: 'Hasan Usta Boyasız Göçük Düzeltme Merkezi',
            navHome: 'Anasayfa',
            navAbout: 'Hakkımızda',
            navServices: 'Hizmetlerimiz',
            navPortfolio: 'Portfolyo',
            navContact: 'İletişim',
            heroTitle: 'Aracınızın Orijinalliği Bozulmadan, Kusursuz Dokunuş.',
            heroSubtitle: '1976\'dan günümüze uzanan köklü tecrübeyle Ankara\'da boyasız göçük düzeltme sanatının güvenilir adresi.',
            btnAppointment: 'Fiyat Al',
            btnViewWorks: 'İşlerimizi İncele',
            aboutTitle: 'Tarihçe & Hakkımızda',
            aboutText: 'Hasan Usta, 1976 yılında mesleğe adım attığı günden bu yana, otomotiv sektöründe boyasız göçük düzeltme sanatının öncülerinden biri olmuştur. Yılların getirdiği bilgi birikimi ve titiz el işçiliği ile araçların orijinal yapısını bozmadan, ilk günkü estetiğine kavuşturmayı ilke edinmiştir. Hasan Usta, sadece bir tamirci değil, aynı zamanda göçük düzeltme sanatının gerçek bir zanaatkarıdır.',
            whyChooseUsTitle: 'Neden Bizi Seçmelisiniz?',
            whyChooseUs1Title: 'Sigorta ve Kasko Anlaşmalı',
            whyChooseUs1Text: 'Anlaşmalı olduğumuz sigorta şirketleri ile işlemlerinizi kolayca halledin.',
            whyChooseUs2Title: 'Orijinalliği Koruma ve %100 Değer Kaybını Önleme',
            whyChooseUs2Text: 'Aracınızın fabrika boyasını koruyarak değerini muhafaza ediyoruz.',
            whyChooseUs3Title: 'Hızlı, Titiz ve Garantili Teslimat',
            whyChooseUs3Text: 'Profesyonel ekibimizle hızlı ve güvenilir hizmet sunuyoruz.',

            servicesTitle: 'Hizmetlerimiz',
            service1Title: 'Boyasız Göçük Düzeltme',
            service1Text: 'Aracınızdaki küçük ve orta ölçekli göçükleri boyaya zarar vermeden düzeltiyoruz.',
            service2Title: 'Dolu Hasarı Onarımı',
            service2Text: 'Dolu nedeniyle oluşan göçükleri profesyonel yöntemlerle gideriyoruz.',
            service3Title: 'Park Hasarı Giderme',
            service3Text: 'Küçük çarpmalar ve park sırasında oluşan hasarları gideriyoruz.',
            portfolioTitle: 'İşlerimiz / Portfolyo',
            portfolioSubtitle: 'Araçlarınızdaki değişimi kendiniz görün.',
            portfolioCar1: 'Peugeot 2008',
            portfolioCar2: 'Seat İbiza',
            portfolioCar3: 'Audi A5',
            portfolioCar4: 'BYD Atto 3',
            portfolioCar5: 'Togg T10X',

            contactTitle: 'İletişim',
            contactInfoTitle: 'Bize Ulaşın',
            address: 'Ozan Otonom, Plevne, Çatalca Sokağı No:14/44 Sincan/Ankara',
            phone: '+90 533 021 59 43',
            hours: 'Pazartesi - Cumartesi:   08:00 - 21:00',
            quickQuoteTitle: 'Fotoğrafla Fiyat Al',
            quickQuoteText: 'Aracınızdaki göçüğün veya hasarın fotoğrafını farklı açılardan çekip bize gönderin. Orijinalliği bozmadan yapılabilecek işlemi ve ortalama fiyatı anında iletelim.',
            quickQuoteButton: 'WhatsApp\'tan Gönder',
            locationTitle: 'Konumumuz',
            whatsappButtonText: 'WhatsApp',
            badgeBefore: 'ÖNCESİ',
            badgeAfter: 'SONRASI',
            skipLink: 'İçeriğe geç',
            contactFormTitle: 'İletişim Formu',
            formName: 'Ad Soyad',
            formEmail: 'E-posta',
            formPhone: 'Telefon',
            formMessage: 'Mesaj',
            formSubmit: 'Gönder'
        },
        'en': {
            pageTitle: 'Hasan Usta Paintless Dent Repair Center',
            navHome: 'Home',
            navAbout: 'About Us',
            navServices: 'Services',
            navPortfolio: 'Portfolio',
            navContact: 'Contact',
            heroTitle: 'Flawless Touch Without Compromising Originality.',
            heroSubtitle: 'Your trusted address for paintless dent repair in Ankara, with deep experience dating back to 1976.',
            btnAppointment: 'Get price',
            btnViewWorks: 'View Our Works',
            aboutTitle: 'History & About Us',
            aboutText: 'Since taking his first steps in the profession in 1976, Hasan Usta has been one of the pioneers of paintless dent repair in the automotive industry. With years of accumulated knowledge and meticulous craftsmanship, he has adopted the principle of restoring vehicles to their original aesthetics without damaging their factory structure. Hasan Usta is not just a repairman, but a true artisan of dent repair.',
            whyChooseUsTitle: 'Why Choose Us?',
            whyChooseUs1Title: 'Insurance and Casco Agreements',
            whyChooseUs1Text: 'Easily handle your transactions with our contracted insurance companies.',
            whyChooseUs2Title: 'Preservation of Originality & 100% Value Retention',
            whyChooseUs2Text: 'We maintain your vehicle\'s value by preserving its factory paint.',
            whyChooseUs3Title: 'Fast, Meticulous and Guaranteed Delivery',
            whyChooseUs3Text: 'We provide fast and reliable service with our professional team.',

            servicesTitle: 'Our Services',
            service1Title: 'Paintless Dent Repair',
            service1Text: 'We repair small and medium-sized dents on your vehicle without damaging the paint.',
            service2Title: 'Hail Damage Repair',
            service2Text: 'We remove dents caused by hail with professional methods.',
            service3Title: 'Parking Damage Removal',
            service3Text: 'We repair minor collisions and damages incurred during parking.',
            portfolioTitle: 'Our Works / Portfolio',
            portfolioSubtitle: 'See the transformation of your vehicles yourself.',
            portfolioCar1: 'Peugeot 2008',
            portfolioCar2: 'Seat İbiza',
            portfolioCar3: 'Audi A5',
            portfolioCar4: 'BYD Atto 3',
            portfolioCar5: 'Togg T10X',

            contactTitle: 'Contact',
            contactInfoTitle: 'Reach Us',
            address: 'Ozan Otonom, Plevne, Çatalca Street Number:14/44 Sincan/Ankara',
            phone: '+90 533 021 59 43',
            hours: 'Monday - Saturday: 08:00 AM - 09:00 PM',
            quickQuoteTitle: 'Get a Quote via Photo',
            quickQuoteText: 'Send us photos of the dent or damage on your vehicle from different angles. We will instantly let you know the possible repair process without ruining the originality and the estimated price.',
            quickQuoteButton: 'Send via WhatsApp',
            locationTitle: 'Our Location',
            whatsappButtonText: 'WhatsApp',
            badgeBefore: 'BEFORE',
            badgeAfter: 'AFTER',
            skipLink: 'Skip to content',
            contactFormTitle: 'Contact Form',
            formName: 'Full Name',
            formEmail: 'Email',
            formPhone: 'Phone',
            formMessage: 'Message',
            formSubmit: 'Send'
        }
    };
    let currentLang = 'tr';
    const updateContent = () => {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
        // Update page title separately
        document.title = translations[currentLang].pageTitle;
    };
    langTRBtn.addEventListener('click', () => {
        currentLang = 'tr';
        langTRBtn.classList.add('active');
        langENBtn.classList.remove('active');
        updateContent();
    });
    langENBtn.addEventListener('click', () => {
        currentLang = 'en';
        langENBtn.classList.add('active');
        langTRBtn.classList.remove('active');
        updateContent();
    });
    // Initialize content on page load
    updateContent();
    // AOS Initialization
    AOS.init({
        duration: 1000,
        once: true,
    });
    // --- TEMA DEĞİŞTİRİCİ (DARK / LIGHT MODE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme') || 'dark';

    if (currentTheme === 'light') {
        body.classList.add('light-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');

        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.replace('fa-sun', 'fa-moon');
        } else {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }
    });
    // ---------------------------------------------
});
