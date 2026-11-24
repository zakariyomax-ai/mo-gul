export interface KeyTerm {
  term: string;
  meaning: string;
}

export interface TopicChapter {
  id: string;
  index: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  summary: string;
  keyPoints: string[];
  terms: KeyTerm[];
  image: string;
  imageCaption: string;
}

export interface MilitaryTier {
  id: string;
  name: string;
  count: number;
  commander: string;
  role: string;
  disciplineNote: string;
  multiplierLabel: string;
}

export interface UlusState {
  id: string;
  name: string;
  altName: string;
  founder: string;
  period: string;
  capital: string;
  region: string;
  description: string;
  keyFact: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  category: 'davlat' | 'yurish' | 'ulus';
  categoryLabel: string;
  detail: string;
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const HERO_IMAGE = '/src/assets/images/hero_mongol_empire_1795541344130.jpg';

export const TOPIC_CHAPTERS: TopicChapter[] = [
  {
    id: 'turmush',
    index: '01',
    shortTitle: 'Turmush va Tuzum',
    title: 'Mo‘g‘ul qabilalarining joylashuvi va ijtimoiy tuzumi',
    subtitle: 'Janubiy Sibir, Manchjuriya va Mo‘g‘uliston dashtlaridagi hayot',
    summary:
      'Mo‘g‘ul qabilalari qadimdan Janubiy Sibir, Manchjuriya va Mo‘g‘uliston hududlarida istiqomat qilgan. Ularning asosiy mashg‘uloti ko‘chmanchi chorvachilik (ot, qo‘y, qoramol va tuya boqish), shuningdek ovchilik bo‘lgan. XII asrning ikkinchi yarmidan boshlab mulkiy tabaqalanish kuchayib, urug‘ jamoalari alohida ko‘chmanchi xo‘jaliklar — ayllarga bo‘lina boshlagan.',
    keyPoints: [
      'Ko‘chma uylar — o‘tovlarda yashashgan va fasllarga qarab yaylovdan yaylovga ko‘chib yurishgan.',
      'Diniy e’tiqodlarida tabiat kuchlari va ajdodlar ruhiga sig‘inishga asoslangan shomonlik ustunlik qilgan.',
      'Jamiyatda zodagonlar va harbiy boshliqlar — no‘yonlar hamda mirzolar (baxshilar) katta mavqega ega bo‘lgan.',
      'Oddiy ko‘chmanchi chorvadorlar “qora xalq” deb atalgan va qaramlik holatida bo‘lgan.'
    ],
    terms: [
      { term: 'Ayl', meaning: 'Alohida ko‘chmanchi oilaviy xo‘jalik jamoasi' },
      { term: 'No‘yon', meaning: 'Mo‘g‘ul zodagoni va harbiy sarkardalar tabaqasi' },
      { term: 'Qora xalq', meaning: 'Soliq to‘lovchi va harbiy xizmat o‘tovchi oddiy ko‘chmanchilar' },
      { term: 'Shomonlik', meaning: 'Tabiat kuchlari va ajdodlar ruhiga sig‘inish e’tiqodi' }
    ],
    image: '/src/assets/images/hero_mongol_empire_1795541344130.jpg',
    imageCaption: 'Dasht chorvadorlarining o‘tov qarorgohi va ko‘chmanchi hayot tarzi'
  },
  {
    id: 'qurultoy',
    index: '02',
    shortTitle: 'Chingizxon va Yaso',
    title: 'Temuchinning yuksalishi va 1206-yilgi Qurultoy',
    subtitle: 'Tarqoq qabilalarning yagona markazlashgan davlatga birlashuvi',
    summary:
      '1162-yilda tug‘ilgan Temuchin uzoq yillik o‘zaro qabilaviy urushlarda o‘z raqiblarini yengib, barcha mo‘g‘ul qabilalarini yagona bayroq ostiga birlashtirdi. 1206-yilda Onon daryosi bo‘yida chaqirilgan umummo‘g‘ul qurultoyida u “Chingizxon” (cheksiz qudrat egasi, ulug‘ xon) deb e’lon qilindi va Yakka Mo‘g‘ul ulusiga asos solindi.',
    keyPoints: [
      'Davlatning dastlabki qarorgoh-poytaxti Avarga bo‘lgan, keyinchalik poytaxt Qoraqurum shahriga ko‘chirilgan.',
      'Chingizxon qat’iy temir intizom o‘rnatish maqsadida yozma qonunlar to‘plami — “Buyuk Yaso” (Yasoq)ni joriy etdi.',
      'Buyuk Yaso harbiy intizom, soliq tartibi, savdo xavfsizligi va davlatga sadoqat qoidalarini belgilab berdi.',
      'Qabila boshliqlarining o‘zboshimchaligiga chek qo‘yilib, lavozimlar kelib chiqishiga emas, shaxsiy sadoqat va qobiliyatga qarab berildi.'
    ],
    terms: [
      { term: 'Qurultoy', meaning: 'Mo‘g‘ul zodagonlari va sarkardalarining oliy kengashi' },
      { term: 'Chingizxon', meaning: '1206-yilda Temuchinga berilgan “Ulug‘ xon” unvoni' },
      { term: 'Buyuk Yaso', meaning: 'Chingizxon tomonidan joriy etilgan asosiy qonunlar majmuasi' },
      { term: 'Avarga', meaning: 'Mo‘g‘ullar davlatining Onon daryosi bo‘yidagi ilk poytaxti' }
    ],
    image: '/src/assets/images/card_kurultai_1206_1795541343990.jpg',
    imageCaption: '1206-yil Onon daryosi bo‘yidagi umummo‘g‘ul qurultoyi'
  },
  {
    id: 'boshqaruv',
    index: '03',
    shortTitle: 'Boshqaruv va Yam',
    title: 'Davlat boshqaruvi, pochta tizimi va madaniyat',
    subtitle: 'Qoraqurum poytaxti, Yam bekatlari va uyg‘ur yozuvi',
    summary:
      'Ulkan hududlarni samarali boshqarish uchun Chingizxon va uning vorislari mukammal aloqa hamda boshqaruv tizimini yaratdilar. Davlat ishlarini yuritishda uyg‘ur yozuvi asosida mo‘g‘ul alifbosi joriy etildi. Savdo va diplomatik aloqalar uchun tezkor pochta tarmog‘i — Yam yo‘lga qo‘yildi.',
    keyPoints: [
      'Yam tizimi bo‘ylab har 30–40 kilometrda zaxira otlari va oziq-ovqatga ega pochta bekatlari tashkil etilgan.',
      'Xon nomidan beriladigan oltin, kumush yoki yog‘ochdan yasalgan ruxsatnoma-yorliq “payza” deb atalgan.',
      'O‘qtoyxon davrida (1235-yilda) Qoraqurum shahri kengaytirilgan, mustahkam devor va saroylar barpo etilgan.',
      'Imperiyada diniy bag‘rikenglik siyosati yuritilib, barcha din vakillari soliqlardan qisman ozod qilingan.'
    ],
    terms: [
      { term: 'Yam', meaning: 'Choparlarni yangi otlar bilan ta’minlovchi tezkor pochta tizimi' },
      { term: 'Payza', meaning: 'Elchi va savdogarlarga daxlsizlik beruvchi maxsus yorliq' },
      { term: 'Qoraqurum', meaning: 'Mo‘g‘ul imperiyasining O‘rxun vodiysidagi markaziy poytaxti' },
      { term: 'Keshik', meaning: 'Xon va uning oilasini qo‘riqlovchi saralangan shaxsiy gvardiya' }
    ],
    image: '/src/assets/images/card_karakorum_city_1795541345387.jpg',
    imageCaption: 'Qoraqurum — Ipak yo‘lidagi savdo va boshqaruv markazi'
  },
  {
    id: 'yurishlar',
    index: '04',
    shortTitle: 'Istilochilik Yurishlari',
    title: 'Sharqiy Osiyo, O‘rta Osiyo va Yevropa yurishlari',
    subtitle: '1211–1242-yillardagi yirik harbiy harakatlar xronikasi',
    summary:
      'Mo‘g‘ullar davlati tashkil topgach, qo‘shni o‘lkalarni zabt etish boshlandi. Dastlab Janubiy Sibir xalqlari, Tangut (Si-Sya) va Shimoliy Xitoy (Sin imperiyasi) bosib olindi. 1218-yildagi O‘tror fojiasidan so‘ng Chingizxon qo‘shinlari O‘rta Osiyodagi qudratli Xorazmshohlar davlatiga qarshi yurish boshladi.',
    keyPoints: [
      '1211–1215-yillarda Shimoliy Xitoyga yurish qilinib, Pekin (Chjundu) shahri egallandi va qamal texnikasi o‘zlashtirildi.',
      '1218-yilda O‘tror hokimi Inolchiq tomonidan savdo karvonining talanishi O‘rta Osiyo yurishiga bahona bo‘ldi.',
      '1219–1221-yillarda Buxoro, Samarqand, Urganch vayron qilindi; Jaloliddin Manguberdi bosqinchilarga qarshi mardonavor kurashdi.',
      '1236–1242-yillarda Botuxon boshchiligidagi qo‘shin Volga Bolgariyasi, Rus knyazliklari, Polsha va Vengriyani bosib oldi.'
    ],
    terms: [
      { term: 'O‘tror fojiasi', meaning: '1218-yilda mo‘g‘ul savdo karvonining O‘trorda qirib tashlanishi' },
      { term: 'Manjaniq', meaning: 'Shahar devorlarini buzishda qo‘llanilgan tosh otuvchi qamal quroli' },
      { term: 'Tulugma', meaning: 'Dushmanni ikki qanotdan o‘rab olib zarba berish harbiy usuli' },
      { term: 'Soxta chekinish', meaning: 'Dushmanni pistirmaga boshlab kiruvchi dasht jang taktikasi' }
    ],
    image: '/src/assets/images/card_mongol_cavalry_1795541344198.jpg',
    imageCaption: 'Intizomli mo‘g‘ul otliq kamonchilarining jangovar saflanishi'
  }
];

export const MILITARY_TIERS: MilitaryTier[] = [
  {
    id: 'onlik',
    name: 'O‘nlik (Arban)',
    count: 10,
    commander: 'O‘nboshi',
    role: 'Eng kichik jangovar bo‘linma. Jangchilar bir-biri uchun shaxsan javobgar bo‘lgan.',
    disciplineNote: 'Buyuk Yasoga ko‘ra, o‘nlikdan bir kishi jangdan qochsa, butun o‘nlik qattiq jazolangan.',
    multiplierLabel: '1 ta o‘nlik = 10 nafar suvori'
  },
  {
    id: 'yuzlik',
    name: 'Yuzlik (Jagun)',
    count: 100,
    commander: 'Yuzboshi',
    role: '10 ta o‘nlikdan tashkil topgan tezkor taktik eskadron.',
    disciplineNote: 'Jang maydonida mustaqil manevr qilish va razvedka olib borish vazifasini bajargan.',
    multiplierLabel: '10 ta o‘nlik = 100 nafar suvori'
  },
  {
    id: 'minglik',
    name: 'Minglik (Mingan)',
    count: 1000,
    commander: 'Mingboshi (No‘yon)',
    role: '10 ta yuzlikni birlashtirgan asosiy ma’muriy va harbiy birlik.',
    disciplineNote: 'Chingizxon mingliklarni qabilaviy bo‘linishni yo‘qotish uchun aralash tarkibda tuzgan.',
    multiplierLabel: '100 ta o‘nlik = 1 000 nafar suvori'
  },
  {
    id: 'tuman',
    name: 'Tuman (Tumen)',
    count: 10000,
    commander: 'Tumanboshi',
    role: '10 ta minglikdan iborat eng yirik strategik qo‘shin birlashmasi.',
    disciplineNote: 'Mustaqil frontlarda yirik davlatlarga qarshi yurish olib borishga qodir bo‘lgan.',
    multiplierLabel: '1 000 ta o‘nlik = 10 000 nafar suvori'
  },
  {
    id: 'keshik',
    name: 'Keshik (Shaxsiy gvardiya)',
    count: 10000,
    commander: 'To‘g‘ridan-to‘g‘ri Ulug‘ Xon',
    role: 'Xon qarorgohini qo‘riqlovchi eng sara jangchilar va bo‘lajak sarkardalar maktabi.',
    disciplineNote: 'Keshikdagi oddiy jangchi oddiy mingboshidan yuqori maqomga ega hisoblangan.',
    multiplierLabel: 'Kun va tun navbatchi saralangan qo‘shin'
  }
];

export const ULUS_STATES: UlusState[] = [
  {
    id: 'joji',
    name: 'Jo‘ji ulusi (Oltin O‘rda)',
    altName: 'Dashti Qipchoq va Sharqiy Yevropa',
    founder: 'Botuxon (Jo‘jining o‘g‘li)',
    period: '1242–1502-yillar',
    capital: 'Saroy-Botu (Quyi Volga)',
    region: 'Quyi Volga, Shimoliy Qora dengiz bo‘ylari, Xorazmning shimoli va Rus knyazliklari',
    description:
      'Botuxon G‘arb yurishidan qaytgach, Quyi Volga bo‘yida qudratli Oltin O‘rda davlatiga asos soldi. Rus knyazliklari uzoq vaqt Oltin O‘rdaga qaram bo‘lib, soliq to‘lab turgan.',
    keyFact: 'Berke xon davrida islom dini davlat hayotida muhim o‘rin egallay boshladi.'
  },
  {
    id: 'chigatoy',
    name: 'Chig‘atoy ulusi',
    altName: 'O‘rta Osiyo ulusi',
    founder: 'Chig‘atoyxon (Chingizxonning 2-o‘g‘li)',
    period: '1227–1370-yillar',
    capital: 'Olmaliq, keyinchalik Qarshi',
    region: 'Movarounnahr, Yettisuv va Sharqiy Turkiston',
    description:
      'O‘rta Osiyoning katta qismini o‘z ichiga olgan ushbu ulus dastlab ko‘chmanchi an’analarni saqlagan bo‘lsa, XIV asrda Kebekxon davrida shaharlar tiklanib, pul islohoti o‘tkazilgan.',
    keyFact: 'Movarounnahrdagi ichki nizolar XIV asrda Amir Temur davlati yuksalishiga zamin yaratdi.'
  },
  {
    id: 'huloku',
    name: 'Hulokuiylar davlati (Elxoniylar)',
    altName: 'Yaqin va O‘rta Sharq ulusi',
    founder: 'Hulokuxon (Chingizxonning nabirasi)',
    period: '1256–1335-yillar',
    capital: 'Marog‘a, Tabriz, Sultoniyya',
    region: 'Eron, Iroq, Ozarbayjon, Armaniston va Kichik Osiyoning sharqi',
    description:
      'Hulokuxon 1258-yilda Bag‘dodni egallab, Abbosiylar xalifaligiga barham berdi. G‘ozonxon davrida islom dini qabul qilinib, ilm-fan va me’morchilik rivojlandi.',
    keyFact: 'Mashhur olim Nasriddin Tusiy Marog‘a rasadxonasini Elxoniylar homiyligida qurdirgan.'
  },
  {
    id: 'yuan',
    name: 'Yuan imperiyasi (Buyuk Xon ulusi)',
    altName: 'Xitoy va Mo‘g‘uliston',
    founder: 'Xubilayxon (Chingizxonning nabirasi)',
    period: '1271–1368-yillar',
    capital: 'Xonbaliq (hozirgi Pekin)',
    region: 'Butun Xitoy, Mo‘g‘uliston va Koreya yarimoroli',
    description:
      'Xubilayxon Xitoyning janubidagi Sun sulolasini ham bo‘ysundirib, 1271-yilda Yuan sulolasiga asos soldi va poytaxtni Qoraqurumdan Xonbaliqqa ko‘chirdi.',
    keyFact: 'Venetsiyalik sayyoh Marko Polo Xubilayxon saroyida 17 yil xizmat qilgan.'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: '1162',
    title: 'Temuchinning tug‘ilishi',
    category: 'davlat',
    categoryLabel: 'Davlat tuzilishi',
    detail: 'Bo‘lajak Chingizxon Onon daryosi yaqinidagi Deligun-Buldaq mavzesida tug‘ilgan.'
  },
  {
    year: '1206',
    title: 'Umummo‘g‘ul Qurultoyi va Davlat tuzilishi',
    category: 'davlat',
    categoryLabel: 'Davlat tuzilishi',
    detail: 'Onon daryosi bo‘yida Temuchin “Chingizxon” deb e’lon qilindi va Buyuk Yaso qabul qilindi.'
  },
  {
    year: '1211',
    title: 'Shimoliy Xitoyga yurishning boshlanishi',
    category: 'yurish',
    categoryLabel: 'Harbiy yurish',
    detail: 'Mo‘g‘ullar Sin imperiyasiga hujum qilib, 1215-yilda Pekin (Chjundu)ni egalladilar.'
  },
  {
    year: '1218',
    title: 'O‘tror fojiasi va Yettisuvning olinishi',
    category: 'yurish',
    categoryLabel: 'Harbiy yurish',
    detail: 'O‘trorda savdo karvonining qirilishi Xorazmshohlar davlatiga qarshi urushga bahona bo‘ldi.'
  },
  {
    year: '1219–1221',
    title: 'O‘rta Osiyoning bosib olinishi',
    category: 'yurish',
    categoryLabel: 'Harbiy yurish',
    detail: 'Buxoro, Samarqand, Urganch egallandi; Jaloliddin Manguberdi Sind daryosi bo‘yida jang qildi.'
  },
  {
    year: '1227',
    title: 'Chingizxonning vafoti',
    category: 'davlat',
    categoryLabel: 'Davlat tuzilishi',
    detail: 'Tangut davlatiga yurish chog‘ida vafot etdi. Taxtga o‘g‘li O‘qtoyxon o‘tirdi.'
  },
  {
    year: '1236–1242',
    title: 'Botuxonning G‘arbga (Sharqiy Yevropaga) yurishi',
    category: 'yurish',
    categoryLabel: 'Harbiy yurish',
    detail: 'Volga Bolgariyasi, Rus knyazliklari, Polsha va Vengriya hududlariga yurish amalga oshirildi.'
  },
  {
    year: '1242',
    title: 'Oltin O‘rda (Jo‘ji ulusi) tashkil topishi',
    category: 'ulus',
    categoryLabel: 'Uluslar davri',
    detail: 'Botuxon Quyi Volga bo‘yida Saroy-Botu shahrini markaz qilib Oltin O‘rdaga asos soldi.'
  },
  {
    year: '1258',
    title: 'Hulokuxon tomonidan Bag‘dodning olinishi',
    category: 'ulus',
    categoryLabel: 'Uluslar davri',
    detail: 'Abbosiylar xalifaligi tugatilib, Eron va Iroqda Hulokuiylar (Elxoniylar) davlati qaror topdi.'
  },
  {
    year: '1271',
    title: 'Xubilayxonning Yuan sulolasiga asos solishi',
    category: 'ulus',
    categoryLabel: 'Uluslar davri',
    detail: 'Poytaxt Xonbaliqqa (Pekinga) ko‘chirilib, butun Xitoy Yuan imperiyasi tarkibiga kirdi.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    category: 'Joylashuv va turmush',
    question: 'Mo‘g‘ul qabilalari qadimdan qaysi hududlarda yashab kelgan?',
    options: [
      'O‘rta Osiyo va Kavkazorti',
      'Janubiy Sibir, Manchjuriya va Mo‘g‘uliston',
      'Sharqiy Yevropa va Ural tog‘lari',
      'Kichik Osiyo va Hindiston shimoli'
    ],
    correctIndex: 1,
    explanation: 'Mo‘g‘ul qabilalarining asl vatani Janubiy Sibir, Manchjuriya va Mo‘g‘uliston dashtlari bo‘lgan.'
  },
  {
    id: 2,
    category: 'Joylashuv va turmush',
    question: 'Mo‘g‘ul qabilalarining asosiy xo‘jalik mashg‘uloti nima edi?',
    options: [
      'Sug‘orma dehqonchilik',
      'Dengiz savdosi va baliqchilik',
      'Ko‘chmanchi chorvachilik va ovchilik',
      'Shahar hunarmandchiligi'
    ],
    correctIndex: 2,
    explanation: 'Mo‘g‘ullar ot, qo‘y, qoramol va tuya boqishga asoslangan ko‘chmanchi chorvachilik bilan shug‘ullangan.'
  },
  {
    id: 3,
    category: 'Ijtimoiy tuzum',
    question: 'XII asrning 2-yarmida urug‘chilik jamoalari parchalanib, qanday alohida ko‘chmanchi xo‘jaliklar vujudga keldi?',
    options: ['Ayl', 'Volost', 'Kishlak', 'Polis'],
    correctIndex: 0,
    explanation: 'Urug‘ jamoalari o‘rnida alohida oilaviy ko‘chmanchi xo‘jaliklar — ayllar shakllangan.'
  },
  {
    id: 4,
    category: 'Ijtimoiy tuzum',
    question: 'Mo‘g‘ul jamiyatida zodagonlar va harbiy boshliqlar tabaqasi qanday atalgan?',
    options: ['Qora xalq', 'No‘yonlar', 'Samarlar', 'Ritsarlari'],
    correctIndex: 1,
    explanation: 'Zodagonlar, qabila oqsuyaklari va harbiy sarkardalar no‘yonlar deb nomlangan.'
  },
  {
    id: 5,
    category: 'Ijtimoiy tuzum',
    question: 'Mo‘g‘ul jamiyatida qaram ahvoldagi oddiy ko‘chmanchi chorvadorlar qanday atalgan?',
    options: ['Baxshilar', 'No‘yonlar', 'Qora xalq', 'Tumanboshi'],
    correctIndex: 2,
    explanation: 'Oddiy mehnatkash ko‘chmanchilar “qora xalq” deb atalib, no‘yonlarga soliq to‘lagan.'
  },
  {
    id: 6,
    category: 'Madaniyat va e’tiqod',
    question: 'Davlat tashkil topgunga qadar mo‘g‘ullar orasida qaysi diniy e’tiqod ustun bo‘lgan?',
    options: ['Shomonlik', 'Katolitsizm', 'Zardushtiylik', 'Iudaizm'],
    correctIndex: 0,
    explanation: 'Mo‘g‘ullar tabiat kuchlari, osmon (Tengri) va ajdodlar ruhiga sig‘inuvchi shomonlik e’tiqodida bo‘lgan.'
  },
  {
    id: 7,
    category: 'Chingizxon davri',
    question: 'Mo‘g‘ullar davlatining asoschisi Temuchin nechanchi yilda tug‘ilgan?',
    options: ['1145-yilda', '1162-yilda', '1189-yilda', '1200-yilda'],
    correctIndex: 1,
    explanation: '7-sinf Jahon tarixi darsligiga ko‘ra Temuchin 1162-yilda tug‘ilgan.'
  },
  {
    id: 8,
    category: 'Chingizxon davri',
    question: 'Mo‘g‘ullar davlati qachon va qayerdagi qurultoyda tashkil topgan?',
    options: [
      '1200-yilda, Qoraqurumda',
      '1206-yilda, Onon daryosi bo‘yida',
      '1211-yilda, Xonbaliqda',
      '1219-yilda, O‘tror yaqinida'
    ],
    correctIndex: 1,
    explanation: '1206-yilda Onon daryosi bo‘yidagi umummo‘g‘ul qurultoyida Temuchin oliy hukmdor deb e’lon qilingan.'
  },
  {
    id: 9,
    category: 'Chingizxon davri',
    question: '1206-yilgi qurultoyda Temuchinga qanday unvon berilgan?',
    options: ['Sulton', 'Chingizxon', 'Imperator', 'Knyaz'],
    correctIndex: 1,
    explanation: 'Temuchinga “Chingizxon” (ulug‘ xon, cheksiz qudrat egasi) unvoni berilgan.'
  },
  {
    id: 10,
    category: 'Davlat poytaxti',
    question: 'Mo‘g‘ullar davlatining ilk poytaxti qaysi shahar (qarorgoh) bo‘lgan?',
    options: ['Saroy-Botu', 'Xonbaliq', 'Avarga', 'Samarqand'],
    correctIndex: 2,
    explanation: 'Dastlabki qarorgoh-poytaxt Avarga bo‘lgan, keyinchalik poytaxt Qoraqurumga ko‘chirilgan.'
  },
  {
    id: 11,
    category: 'Davlat poytaxti',
    question: 'O‘qtoyxon davrida kengaytirilib, mo‘g‘ul imperiyasining markaziy poytaxtiga aylangan shahar qaysi?',
    options: ['Qoraqurum', 'Marog‘a', 'Olmaliq', 'Tabriz'],
    correctIndex: 0,
    explanation: 'O‘rxun daryosi vodiysidagi Qoraqurum shahri imperiyaning bosh poytaxtiga aylangan.'
  },
  {
    id: 12,
    category: 'Qonunchilik',
    question: 'Chingizxon joriy qilgan mo‘g‘ullarning yozma qonunlar majmuasi qanday nomlangan?',
    options: ['Qonunnoma', 'Buyuk Yaso (Yasoq)', 'Adolat nizomi', 'Temur tuzuklari'],
    correctIndex: 1,
    explanation: '“Buyuk Yaso” (Yasoq) davlat tartibi, harbiy intizom va jazo choralarini belgilovchi bosh qonun edi.'
  },
  {
    id: 13,
    category: 'Harbiy tizim',
    question: 'Chingizxon qo‘shini qanday tartibda tashkil etilgan?',
    options: [
      'Faqat yollanma ritsarlardan',
      'O‘nlik, yuzlik, minglik va tuman (o‘n minglik) tizimida',
      'Qabilaviy guruhlar bo‘yicha tarqoq holda',
      'Faqat piyoda askarlar sifatida'
    ],
    correctIndex: 1,
    explanation: 'Qat’iy o‘nlik tizimi — o‘nlik, yuzlik, minglik va tumanlar mo‘g‘ul armiyasining asosini tashkil etgan.'
  },
  {
    id: 14,
    category: 'Harbiy tizim',
    question: 'Mo‘g‘ul qo‘shinidagi eng yirik harbiy bo‘linma — “tuman” necha jangchidan iborat bo‘lgan?',
    options: ['1 000 kishi', '5 000 kishi', '10 000 kishi', '50 000 kishi'],
    correctIndex: 2,
    explanation: 'Bir tuman 10 ta minglikdan, ya’ni 10 000 nafar jangchidan iborat bo‘lgan.'
  },
  {
    id: 15,
    category: 'Harbiy tizim',
    question: 'Xon va uning oilasini qo‘riqlaydigan maxsus saralangan shaxsiy gvardiya nima deb atalgan?',
    options: ['Keshik', 'Yanichar', 'Drujina', 'Mamluk'],
    correctIndex: 0,
    explanation: 'Keshik — Chingizxonning shaxsiy gvardiyasi bo‘lib, eng sadoqatli jangchilardan tuzilgan.'
  },
  {
    id: 16,
    category: 'Harbiy tizim',
    question: 'Buyuk Yaso qonuniga ko‘ra, agar o‘nlikdan bir jangchi jang maydonidan qochsa, qanday jazo qo‘llanilgan?',
    options: [
      'Faqat qochoqning o‘zi jarima to‘lagan',
      'Butun o‘nlik jazolangan (o‘limga hukm qilingan)',
      'Uning oti tortib olingan',
      'Hech qanday chora ko‘rilmagan'
    ],
    correctIndex: 1,
    explanation: 'O‘zaro kafillik qoidasiga ko‘ra, bir kishining xiyonati yoki qochoqligi uchun butun o‘nlik javobgar bo‘lgan.'
  },
  {
    id: 17,
    category: 'Boshqaruv va aloqa',
    question: 'Imperiya bo‘ylab xabarlarni tezkor yetkazib beruvchi pochta-bekat tizimi nima deb atalgan?',
    options: ['Karvonsaroy', 'Yam', 'Rabot', 'Choparxona'],
    correctIndex: 1,
    explanation: 'Yam tizimi bo‘ylab joylashgan bekatlarda choparlarga dam olgan yangi otlar berilgan.'
  },
  {
    id: 18,
    category: 'Boshqaruv va aloqa',
    question: 'Elchi va amaldorlarga yo‘llarda daxlsizlik hamda imtiyoz beruvchi maxsus metall yorliq nima deyilgan?',
    options: ['Payza', 'Tamg‘a', 'Sikka', 'Vaqf'],
    correctIndex: 0,
    explanation: 'Payza — xon nomidan beriladigan oltin, kumush yoki yog‘och yorliq bo‘lib, egasiga maxsus vakolat bergan.'
  },
  {
    id: 19,
    category: 'Madaniyat va yozuv',
    question: 'Chingizxon davrida mo‘g‘ullar o‘z davlat yozuvini qaysi yozuv asosida qabul qilganlar?',
    options: ['Lotin yozuvi', 'Uyg‘ur yozuvi', 'Kirill yozuvi', 'Klinopis (mixxat)'],
    correctIndex: 1,
    explanation: 'Mo‘g‘ullar davlat hujjatlarini yuritish uchun uyg‘ur yozuvidan foydalanishni joriy etganlar.'
  },
  {
    id: 20,
    category: 'Istilochilik yurishlari',
    question: 'Chingizxon Shimoliy Xitoy (Sin davlati)ga qarshi yirik yurishni nechanchi yilda boshlagan?',
    options: ['1206-yilda', '1211-yilda', '1218-yilda', '1224-yilda'],
    correctIndex: 1,
    explanation: '1211-yilda boshlangan yurish natijasida 1215-yilga kelib Pekin (Chjundu) qo‘lga kiritildi.'
  },
  {
    id: 21,
    category: 'Istilochilik yurishlari',
    question: '1218-yilda Mo‘g‘ullar va Xorazmshohlar davlati o‘rtasida urush boshlanishiga nima bahona bo‘lgan?',
    options: [
      'O‘trorda mo‘g‘ul savdo karvonining talon-toroj qilinib, odamlarning o‘ldirilishi',
      'Samarqandda soliqlarning oshirilishi',
      'Buxoroda suv toshqini yuz berishi',
      'Xitoy elchilarining kelishi'
    ],
    correctIndex: 0,
    explanation: 'O‘tror hokimi Inolchiq tomonidan karvonning qirib tashlanishi (“O‘tror fojiasi”) urushga sabab bo‘lgan.'
  },
  {
    id: 22,
    category: 'Istilochilik yurishlari',
    question: 'Chingizxon qo‘shinlari O‘rta Osiyodagi Xorazmshohlar davlatini qaysi yillarda bosib olgan?',
    options: ['1206–1209-yillar', '1211–1215-yillar', '1219–1221-yillar', '1236–1240-yillar'],
    correctIndex: 2,
    explanation: '1219-yilda boshlangan yurish davomida 1221-yilgacha O‘rta Osiyoning asosiy shaharlari bosib olingan.'
  },
  {
    id: 23,
    category: 'Istilochilik yurishlari',
    question: 'Xorazmshohlar davlatida mo‘g‘ul bosqinchilariga qarshi qahramonona kurash olib borgan sarkarda kim?',
    options: ['Temur Malik va Jaloliddin Manguberdi', 'Alpomish', 'To‘xtamishxon', 'Botuxon'],
    correctIndex: 0,
    explanation: 'Jaloliddin Manguberdi va Xo‘jand hokimi Temur Malik mo‘g‘ullarga qarshi qattiq qarshilik ko‘rsatgan.'
  },
  {
    id: 24,
    category: 'Istilochilik yurishlari',
    question: 'Mo‘g‘ullar shahar qamallarida devorlarni buzish va yonuvchi aralashmalar otish uchun Xitoydan o‘zlashtirgan qurollar nima deb atalgan?',
    options: ['Manjaniq va palaxmonlar', 'Miltiq va zambaraklar', 'Qalqon va nayzalar', 'Kema to‘plari'],
    correctIndex: 0,
    explanation: 'Xitoylik muhandislar yordamida mo‘g‘ullar manjaniq va turli qamal mashinalaridan mohirona foydalangan.'
  },
  {
    id: 25,
    category: 'Vorislar davri',
    question: 'Chingizxon vafot etgan yil va undan keyin Ulug‘ qoon etib saylangan o‘g‘li kim?',
    options: [
      '1227-yil, O‘qtoyxon',
      '1235-yil, Chig‘atoyxon',
      '1242-yil, Botuxon',
      '1250-yil, Xubilayxon'
    ],
    correctIndex: 0,
    explanation: 'Chingizxon 1227-yilda vafot etgan, 1229-yilgi qurultoyda uchinchi o‘g‘li O‘qtoyxon Ulug‘ qoon bo‘lgan.'
  },
  {
    id: 26,
    category: 'G‘arbga yurishlar',
    question: '1236–1242-yillarda Sharqiy Yevropaga (Rus knyazliklari, Polsha, Vengriya) yurishga kim boshchilik qilgan?',
    options: ['O‘qtoyxon', 'Botuxon', 'Xubilayxon', 'Munkexon'],
    correctIndex: 1,
    explanation: 'Chingizxonning nabirasi, Jo‘jining o‘g‘li Botuxon 1236–1242-yillarda G‘arb yurishini boshqargan.'
  },
  {
    id: 27,
    category: 'Uluslar davri',
    question: 'Quyi Volga bo‘yida Botuxon asos solgan, poytaxti Saroy-Botu bo‘lgan davlat qanday atalgan?',
    options: ['Chig‘atoy ulusi', 'Oltin O‘rda (Jo‘ji ulusi)', 'Yuan imperiyasi', 'Hulokuiylar davlati'],
    correctIndex: 1,
    explanation: 'Sharqiy Yevropa va Dashti Qipchoq hududlarini qamrab olgan davlat Oltin O‘rda (Jo‘ji ulusi) deb atalgan.'
  },
  {
    id: 28,
    category: 'Uluslar davri',
    question: 'Movarounnahr, Yettisuv va Sharqiy Turkiston hududlari mo‘g‘ullarning qaysi ulusi tarkibiga kirgan?',
    options: ['Chig‘atoy ulusi', 'Jo‘ji ulusi', 'Hulokuiylar davlati', 'Yuan imperiyasi'],
    correctIndex: 0,
    explanation: 'O‘rta Osiyoning markaziy qismi Chingizxonning ikkinchi o‘g‘li Chig‘atoyga berilgan.'
  },
  {
    id: 29,
    category: 'Uluslar davri',
    question: '1258-yilda Bag‘dodni egallab, Eron va Iroqda Hulokuiylar (Elxoniylar) davlatiga kim asos solgan?',
    options: ['Botuxon', 'Hulokuxon', 'O‘qtoyxon', 'Kebekxon'],
    correctIndex: 1,
    explanation: 'Chingizxonning nabirasi Hulokuxon Eron, Iroq va Ozarbayjon hududlarida Elxoniylar davlatini tuzgan.'
  },
  {
    id: 30,
    category: 'Uluslar davri',
    question: 'Butun Xitoyni bo‘ysundirib, 1271-yilda Yuan sulolasiga asos solgan va poytaxtni Xonbaliqqa ko‘chirgan hukmdor kim?',
    options: ['O‘qtoyxon', 'Xubilayxon', 'Chig‘atoyxon', 'Jo‘jixon'],
    correctIndex: 1,
    explanation: 'Xubilayxon Xitoyda Yuan imperiyasiga asos solib, poytaxtni Xonbaliq (hozirgi Pekin) shahriga ko‘chirgan.'
  }
];
