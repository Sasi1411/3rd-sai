export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  region: string;
  direction?: 'ltr' | 'rtl';
  translations?: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    savingsText: string;
    navApps: string;
    navWhy: string;
    navPersonas: string;
    navPricing: string;
    navCaseStudies: string;
  };
}

export const LANGUAGES_LIST: LanguageOption[] = [
  // User requested specifically:
  {
    code: 'zh',
    name: 'Chinese (China)',
    nativeName: '中文 (简体)',
    flag: '🇨🇳',
    region: 'East Asia',
    translations: {
      heroBadge: '独家6合1增长软件套件 · 立省 94%',
      heroTitle: '全球最强大的企业规模化与增长软件套件',
      heroSubtitle: '无限访问所有6大顶级应用：Mailchimp、Hostinger、Fomo、Wati、UptimeRobot 和 Bitly。无功能限制。仅需 $40/月（原价 $650/月）。',
      ctaPrimary: '以 $40/月 解锁全部 6 大软件',
      ctaSecondary: '查看客户案例',
      savingsText: '每月节省 $610 · 每年节省 $7,320',
      navApps: '6大应用',
      navWhy: '运作原理',
      navPersonas: '适用对象',
      navPricing: '透明定价',
      navCaseStudies: '客户案例'
    }
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    flag: '🇮🇳',
    region: 'South Asia',
    translations: {
      heroBadge: 'பிரத்யேக 6-இன்-1 வணிக வளர்ச்சி மென்பொருள் · 94% சேமிப்பு',
      heroTitle: 'உங்கள் வணிகத்தை அளவிட உலகின் மிக சக்திவாய்ந்த மென்பொருள் தொகுப்பு',
      heroSubtitle: 'அனைத்து 6 முக்கிய பயன்பாடுகளுக்கும் வரம்பற்ற அணுகல்: Mailchimp, Hostinger, Fomo, Wati, UptimeRobot மற்றும் Bitly. எந்த அம்சக் கட்டுப்பாடுகளும் இல்லை. வெறும் $40/மாதம் (தனித்தனியாக $650/மாதம்).',
      ctaPrimary: '$40/மாதத்தில் அனைத்து 6 பயன்பாடுகளையும் பெறுங்கள்',
      ctaSecondary: 'வெற்றிக் கதைகளைக் காண்க',
      savingsText: 'மாதம் $610 சேமிப்பு · ஆண்டுக்கு $7,320 சேமிப்பு',
      navApps: '6 செயலிகள்',
      navWhy: 'ஏன் தேவை',
      navPersonas: 'யாருக்கு பொருந்தும்',
      navPricing: 'விலை பட்டியல்',
      navCaseStudies: 'வெற்றி கதைகள்'
    }
  },
  {
    code: 'ms',
    name: 'Malay',
    nativeName: 'Bahasa Melayu',
    flag: '🇲🇾',
    region: 'Southeast Asia',
    translations: {
      heroBadge: 'Pek Pertumbuhan Perniagaan 6-dalam-1 · Jimat 94%',
      heroTitle: 'Aplikasi Paling Berkuasa di Dunia untuk Mengembangkan Perniagaan Anda',
      heroSubtitle: 'Akses tanpa had ke semua 6 aplikasi utama: Mailchimp, Hostinger, Fomo, Wati, UptimeRobot dan Bitly. Tiada sekatan ciri. Hanya $40/bulan berbanding $650/bulan secara berasingan.',
      ctaPrimary: 'Dapatkan Semua 6 Aplikasi dengan $40/bln',
      ctaSecondary: 'Lihat Kajian Kes',
      savingsText: 'Jimat $610/bulan · Jimat $7,320/tahun',
      navApps: '6 Aplikasi',
      navWhy: 'Mengapa Penting',
      navPersonas: 'Sasaran Pengguna',
      navPricing: 'Harga',
      navCaseStudies: 'Kajian Kes'
    }
  },
  {
    code: 'ja',
    name: 'Japanese (Japan)',
    nativeName: '日本語',
    flag: '🇯🇵',
    region: 'East Asia',
    translations: {
      heroBadge: '独占 6-in-1 ビジネス成長スイート · 94%割引',
      heroTitle: 'ビジネスを急成長させる世界最強のアプリケーション統合スイート',
      heroSubtitle: 'Mailchimp、Hostinger、Fomo、Wati、UptimeRobot、Bitlyの主要6大ツールを機能制限なしで無制限利用。個別購入月額$650がわずか$40/月。',
      ctaPrimary: '月額$40で全6ツールをアンロック',
      ctaSecondary: '導入事例を見る',
      savingsText: '月間 $610 削減 · 年間 $7,320 コストカット',
      navApps: '6大ツール',
      navWhy: '選ばれる理由',
      navPersonas: '対象ユーザー',
      navPricing: '料金プラン',
      navCaseStudies: '導入事例'
    }
  },
  {
    code: 'ko',
    name: 'Korean (Korea)',
    nativeName: '한국어',
    flag: '🇰🇷',
    region: 'East Asia',
    translations: {
      heroBadge: '단독 6-in-1 비즈니스 성장 번들 · 94% 할인',
      heroTitle: '비즈니스 스케일업과 매출 성장을 위한 세계 최강의 올인원 소프트웨어',
      heroSubtitle: 'Mailchimp, Hostinger, Fomo, Wati, UptimeRobot, Bitly 등 6대 프리미엄 도구를 기능 제한 없이 무제한 사용하세요. 개별 구매 시 월 $650를 단 월 $40에 제공합니다.',
      ctaPrimary: '월 $40에 6대 앱 모두 활성화',
      ctaSecondary: '고객 성공 사례 확인',
      savingsText: '월 $610 절약 · 연간 $7,320 순이익 보존',
      navApps: '6대 소프트웨어',
      navWhy: '필수 이유',
      navPersonas: '추천 대상',
      navPricing: '요금 안내',
      navCaseStudies: '성공 사례'
    }
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    region: 'Western Europe',
    translations: {
      heroBadge: 'Exklusives 6-in-1 Business-Skalierungs-Bundle · 94% Ersparnis',
      heroTitle: 'Die weltweit leistungsstärkste Software-Suite für Ihr Unternehmenswachstum',
      heroSubtitle: 'Unbegrenzter Zugriff auf alle 6 Top-Tools: Mailchimp, Hostinger, Fomo, Wati, UptimeRobot und Bitly. Ohne Funktionseinschränkungen. Nur $40/Monat statt $650/Monat einzeln.',
      ctaPrimary: 'Alle 6 Apps für $40/Monat freischalten',
      ctaSecondary: 'Erfolgsberichte ansehen',
      savingsText: 'Sparen Sie $610/Monat · $7.320/Jahr',
      navApps: 'Die 6 Tools',
      navWhy: 'Warum unverzichtbar',
      navPersonas: 'Für wen geeignet',
      navPricing: 'Preise',
      navCaseStudies: 'Fallstudien'
    }
  },
  {
    code: 'es',
    name: 'Spanish (Spain)',
    nativeName: 'Español',
    flag: '🇪🇸',
    region: 'Southern Europe / Latin America',
    translations: {
      heroBadge: 'Paquete de Crecimiento Empresarial 6 en 1 · Ahorro del 94%',
      heroTitle: 'La suite de aplicaciones más potente del mundo para escalar y hacer crecer su negocio',
      heroSubtitle: 'Acceso ilimitado a las 6 aplicaciones esenciales: Mailchimp, Hostinger, Fomo, Wati, UptimeRobot y Bitly. Sin restricciones de funciones. Solo $40/mes en lugar de $650/mes por separado.',
      ctaPrimary: 'Desbloquear las 6 aplicaciones por $40/mes',
      ctaSecondary: 'Ver casos de éxito',
      savingsText: 'Ahorre $610/mes · $7.320 al año',
      navApps: 'Las 6 Apps',
      navWhy: 'Por qué funciona',
      navPersonas: 'Para quién es',
      navPricing: 'Precios',
      navCaseStudies: 'Casos de éxito'
    }
  },
  {
    code: 'ar',
    name: 'Arabic (Arab)',
    nativeName: 'العربية',
    flag: '🇦🇪',
    region: 'Middle East',
    direction: 'rtl',
    translations: {
      heroBadge: 'حزمة نمو الأعمال الحصرية 6 في 1 · وفر 94٪',
      heroTitle: 'أقوى مجموعة برمجيات في العالم لتوسيع نطاق أعمالك ومضاعفة مبيعاتك',
      heroSubtitle: 'وصول غير محدود إلى أفضل 6 تطبيقات: Mailchimp و Hostinger و Fomo و Wati و UptimeRobot و Bitly. بدون أي قيود على الميزات. فقط 40 دولارًا شهريًا بدلاً من 650 دولارًا شهريًا بشكل منفصل.',
      ctaPrimary: 'احصل على جميع التطبيقات الـ 6 بـ 40$/شهر',
      ctaSecondary: 'عرض دراسات الحالة والنتائج',
      savingsText: 'وفر 610$/شهر · وفر 7,320$ سنويًا',
      navApps: 'التطبيقات الـ 6',
      navWhy: 'لماذا هذا مهم',
      navPersonas: 'لمن هذه الحزمة',
      navPricing: 'الأسعار',
      navCaseStudies: 'قصص النجاح'
    }
  },

  // 20+ additional world language options:
  {
    code: 'en',
    name: 'English (US / Global)',
    nativeName: 'English',
    flag: '🇺🇸',
    region: 'Global',
    translations: {
      heroBadge: 'Exclusive 6-in-1 Business Scale Bundle · Save 94%',
      heroTitle: "World's Most Powerful Application Suite to Scale & Grow Your Business",
      heroSubtitle: 'Unlock unlimited, unrestricted access to all 6 enterprise-grade applications: Mailchimp, Hostinger, Fomo, Wati, UptimeRobot, and Bitly. Zero feature restrictions. Only $40/month instead of $650/month separately.',
      ctaPrimary: 'Unlock All 6 Applications for $40/mo',
      ctaSecondary: 'Explore Real Case Studies',
      savingsText: 'Save $610/month · $7,320/year retained',
      navApps: 'The 6 Apps',
      navWhy: 'Why It Works',
      navPersonas: "Who It's For",
      navPricing: 'Pricing',
      navCaseStudies: 'Case Studies'
    }
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    region: 'South Asia'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    region: 'Western Europe'
  },
  {
    code: 'pt',
    name: 'Portuguese (Brazil / Portugal)',
    nativeName: 'Português',
    flag: '🇧🇷',
    region: 'South America / Europe'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: '🇷🇺',
    region: 'Eastern Europe / Eurasia'
  },
  {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: '🇮🇹',
    region: 'Southern Europe'
  },
  {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    flag: '🇹🇷',
    region: 'Eurasia'
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    nativeName: 'Tiếng Việt',
    flag: '🇻🇳',
    region: 'Southeast Asia'
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    flag: '🇹🇭',
    region: 'Southeast Asia'
  },
  {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩',
    region: 'Southeast Asia'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    flag: '🇧🇩',
    region: 'South Asia'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    flag: '🇮🇳',
    region: 'South Asia'
  },
  {
    code: 'nl',
    name: 'Dutch',
    nativeName: 'Nederlands',
    flag: '🇳🇱',
    region: 'Western Europe'
  },
  {
    code: 'pl',
    name: 'Polish',
    nativeName: 'Polski',
    flag: '🇵🇱',
    region: 'Central Europe'
  },
  {
    code: 'sv',
    name: 'Swedish',
    nativeName: 'Svenska',
    flag: '🇸🇪',
    region: 'Northern Europe'
  },
  {
    code: 'el',
    name: 'Greek',
    nativeName: 'Ελληνικά',
    flag: '🇬🇷',
    region: 'Southern Europe'
  },
  {
    code: 'tl',
    name: 'Filipino / Tagalog',
    nativeName: 'Tagalog',
    flag: '🇵🇭',
    region: 'Southeast Asia'
  },
  {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    flag: '🇵🇰',
    region: 'South Asia',
    direction: 'rtl'
  },
  {
    code: 'uk',
    name: 'Ukrainian',
    nativeName: 'Українська',
    flag: '🇺🇦',
    region: 'Eastern Europe'
  },
  {
    code: 'ro',
    name: 'Romanian',
    nativeName: 'Română',
    flag: '🇷🇴',
    region: 'Eastern Europe'
  },
  {
    code: 'cs',
    name: 'Czech',
    nativeName: 'Čeština',
    flag: '🇨🇿',
    region: 'Central Europe'
  },
  {
    code: 'fa',
    name: 'Persian (Farsi)',
    nativeName: 'فارسی',
    flag: '🇮🇷',
    region: 'Middle East',
    direction: 'rtl'
  },
  {
    code: 'he',
    name: 'Hebrew',
    nativeName: 'עברית',
    flag: '🇮🇱',
    region: 'Middle East',
    direction: 'rtl'
  },
  {
    code: 'da',
    name: 'Danish',
    nativeName: 'Dansk',
    flag: '🇩🇰',
    region: 'Northern Europe'
  }
];
