const navLinksData = [
  { href: '#about', label: { ru: 'О нас', en: 'About' } },
  { href: '#services', label: { ru: 'Услуги', en: 'Services' } },
  { href: '#advantages', label: { ru: 'Преимущества', en: 'Benefits' } },
  { href: '#accommodation', label: { ru: 'Размещение', en: 'Stays' } },
  { href: '#contacts', label: { ru: 'Контакты', en: 'Contacts' } },
];

const servicesData = [
  {
    id: 'concierge',
    image: '/assets/img/10.jpg',
    title: {
      ru: 'Персональный консьерж 24/7',
      en: '24/7 personal concierge',
    },
    description: {
      ru: 'Выделенный куратор маршрута решает вопросы с трансферами, ресторанами и событиями ещё до прибытия.',
      en: 'A dedicated trip curator handles transfers, dining, and events long before you arrive.',
    },
  },
  {
    id: 'gastronomy',
    image: '/assets/img/12.jpg',
    title: {
      ru: 'Гастрономические истории Lagoona',
      en: 'Lagoona gastronomic stories',
    },
    description: {
      ru: 'Совместные ужины с шефами из гидов Michelin, локальные рынки и закрытые дегустации для гостей 2025 года.',
      en: 'Chef’s tables with Michelin collaborators, local markets, and private tastings curated for 2025 guests.',
    },
  },
  {
    id: 'wellness',
    image: '/assets/img/15.jpg',
    title: {
      ru: 'Wellness-программы нового сезона',
      en: 'New-season wellness programs',
    },
    description: {
      ru: 'Детокс-ретриты, трекинги на рассвете и VR-медитации в студиях с биометрическим подбором нагрузок.',
      en: 'Detox retreats, sunrise trekking, and VR meditation with biometric coaching.',
    },
  },
  {
    id: 'business',
    image: '/assets/img/41.jpg',
    title: {
      ru: 'Бизнес-сопровождение PRO',
      en: 'Business PRO assistance',
    },
    description: {
      ru: 'Закрытые переговорные, гибридные студии и команда IT-инженеров для событий любого масштаба.',
      en: 'Private meeting suites, hybrid studios, and IT engineers for events of any scale.',
    },
  },
];

const advantagesData = [
  {
    id: 'spa',
    icon: '/assets/img/bathtub@2x.png',
    text: {
      ru: 'SPA-комплексы с морскими и арктическими программами восстановления.',
      en: 'SPA complexes with marine and arctic recovery rituals.',
    },
  },
  {
    id: 'style',
    icon: '/assets/img/hanger@2x.png',
    text: {
      ru: 'Новые коллекции униформы и аромат бренда от европейских дизайнеров.',
      en: 'New uniform collections and signature scent from European designers.',
    },
  },
  {
    id: 'eco',
    icon: '/assets/img/heating@2x.png',
    text: {
      ru: 'Экодома с интеллектуальным климатом и нейтральным углеродным следом.',
      en: 'Eco lodges with smart climate control and a neutral carbon footprint.',
    },
  },
  {
    id: 'reception',
    icon: '/assets/img/hotel-key@2x.png',
    text: {
      ru: 'Бесконтактное заселение и управление номером с помощью Lagoona App.',
      en: 'Contactless check-in and room control via the Lagoona App.',
    },
  },
  {
    id: 'parking',
    icon: '/assets/img/parking@2x.png',
    text: {
      ru: 'Подземный паркинг с зарядными станциями для электрокаров во всех регионах.',
      en: 'Underground parking with EV charging stations in every region.',
    },
  },
  {
    id: 'support',
    icon: '/assets/img/reception@2x.png',
    text: {
      ru: 'Мультиязычная команда поддержки, готовая к редким и срочным запросам.',
      en: 'A multilingual support team ready for rare and urgent requests.',
    },
  },
  {
    id: 'secure',
    icon: '/assets/img/security-box@2x.png',
    text: {
      ru: 'Усиленная кибербезопасность и защищённые личные кабинеты гостей.',
      en: 'Enhanced cybersecurity and protected guest cabinets.',
    },
  },
  {
    id: 'pool',
    icon: '/assets/img/swimming-pool@2x.png',
    text: {
      ru: 'Инфинити-бассейны с арт-инсталляциями и вечерними лайв-сетами.',
      en: 'Infinity pools with art installations and evening live sets.',
    },
  },
];

const hotelsSource = [
  {
    id: 'aurora-bay',
    name: 'Lagoona Aurora Bay',
    nightlyRate: 9800,
    rating: 4.9,
    availableOffers: 18,
    image: '/assets/img/31.jpg',
    specialOfferImage: '/assets/img/22.jpg',
    copy: {
      ru: {
        city: 'Сочи',
        location: 'Сочи, Россия',
        defaultRoomType: 'Премиум с видом на море',
        description:
          'Флагманский курорт на побережье Чёрного моря с панорамными сьютами, частным пляжем и авторской гастрономией.',
        highlights: [
          'Частный пирс для яхт класса Premium',
          'Новая студия thalasso & sound терапий',
          'Sky-бар с вечерними лайв-сетами резидентов Lagoona',
        ],
      },
      en: {
        city: 'Sochi',
        location: 'Sochi, Russia',
        defaultRoomType: 'Premium sea view suite',
        description:
          'Flagship resort on the Black Sea coastline with panoramic suites, a private beach, and signature dining.',
        highlights: [
          'Private pier for premium-class yachts',
          'New thalasso & sound therapy studio',
          'Sky bar with evening live sets by Lagoona residents',
        ],
      },
    },
  },
  {
    id: 'fjord-spa',
    name: 'Lagoona Nordic Fjord',
    nightlyRate: 11200,
    rating: 4.8,
    availableOffers: 11,
    image: '/assets/img/23.jpg',
    specialOfferImage: '/assets/img/15.jpg',
    copy: {
      ru: {
        city: 'Берген',
        location: 'Берген, Норвегия',
        defaultRoomType: 'Suite Panorama Fjord',
        description:
          'Спа-комплекс на берегу фьорда с панорамными купелями, северными экспедициями и кухней new nordic.',
        highlights: [
          'Авторские круизы на электрических катерах',
          'Ледяная сауна с дикими травами',
          'Экскурсии к полярному сиянию с фотографами Lagoona',
        ],
      },
      en: {
        city: 'Bergen',
        location: 'Bergen, Norway',
        defaultRoomType: 'Panorama fjord suite',
        description:
          'Spa retreat on the fjord shoreline with panoramic plunge pools, northern expeditions, and new Nordic cuisine.',
        highlights: [
          'Signature cruises aboard electric boats',
          'Ice sauna infused with wild herbs',
          'Aurora tours led by Lagoona photographers',
        ],
      },
    },
  },
  {
    id: 'desert-dawn',
    name: 'Lagoona Desert Dawn',
    nightlyRate: 12400,
    rating: 4.7,
    availableOffers: 9,
    image: '/assets/img/24.jpg',
    specialOfferImage: '/assets/img/carlo-d-agnolo-aFxSh_l4fbY-unsplash.jpg',
    copy: {
      ru: {
        city: 'Абу-Даби',
        location: 'Абу-Даби, ОАЭ',
        defaultRoomType: 'Grand Desert Pool Villa',
        description:
          'Резорт среди дюн с приватными бассейнами, хай-тек павильонами и сафари на рассвете.',
        highlights: [
          'Сафари на электрокарах и верблюдах из собственной конюшни',
          'VR-обзор древних оазисов и интерактивный музей культуры',
          'Кулинарные мастер-классы с шефами из Дубая',
        ],
      },
      en: {
        city: 'Abu Dhabi',
        location: 'Abu Dhabi, UAE',
        defaultRoomType: 'Grand Desert Pool Villa',
        description:
          'Sand-dune resort with private pools, high-tech pavilions, and sunrise safari adventures.',
        highlights: [
          'Electric-car and camel safaris from the private stable',
          'VR journey through ancient oases and an interactive culture museum',
          'Culinary masterclasses with Dubai-based chefs',
        ],
      },
    },
  },
  {
    id: 'alpine-lodge',
    name: 'Lagoona Alpine Lodge',
    nightlyRate: 13900,
    rating: 4.95,
    availableOffers: 7,
    image: '/assets/img/29.jpg',
    specialOfferImage: '/assets/img/30.jpg',
    copy: {
      ru: {
        city: 'Церматт',
        location: 'Церматт, Швейцария',
        defaultRoomType: 'Matterhorn Panorama Loft',
        description:
          'Высокогорный шале с канатной дорогой Lagoona, шеф-экспедициями и авторскими spa-процедурами.',
        highlights: [
          'Приватный трансфер на снегоходах Lagoona Air',
          'Complimentary ski-butler и прогрев экипировки',
          'Резиденция шоколатье с дегустациями bean-to-bar',
        ],
      },
      en: {
        city: 'Zermatt',
        location: 'Zermatt, Switzerland',
        defaultRoomType: 'Matterhorn panorama loft',
        description:
          'High-altitude chalet with Lagoona cableway, chef expeditions, and signature spa rituals.',
        highlights: [
          'Private transfers on Lagoona Air snowmobiles',
          'Complimentary ski butler with heated gear prep',
          'Chocolatier residence with bean-to-bar tastings',
        ],
      },
    },
  },
  {
    id: 'tokyo-lights',
    name: 'Lagoona Tokyo Lights',
    nightlyRate: 11750,
    rating: 4.85,
    availableOffers: 14,
    image: '/assets/img/27.jpg',
    specialOfferImage: '/assets/img/26.jpg',
    copy: {
      ru: {
        city: 'Токио',
        location: 'Токио, Япония',
        defaultRoomType: 'Neo Tokyo Sky Suite',
        description:
          'Ультрасовременный небоскрёб с интеллектуальными номерами и коллаборациями с галереями Ginza.',
        highlights: [
          'VR-гид по вечернему Токио с live-переводчиком',
          'Ночной бар с hi-fi аудиосистемой и виниловой библиотекой',
          'Традиционные чайные церемонии в sky-оранжерее',
        ],
      },
      en: {
        city: 'Tokyo',
        location: 'Tokyo, Japan',
        defaultRoomType: 'Neo Tokyo Sky Suite',
        description:
          'Ultra-modern high-rise with intelligent rooms and collaborations with Ginza galleries.',
        highlights: [
          'VR guide across night Tokyo with live interpreter',
          'Night bar with hi-fi sound and vinyl library',
          'Traditional tea ceremonies in the sky greenhouse',
        ],
      },
    },
  },
  {
    id: 'amazonia-eco',
    name: 'Lagoona Amazonia Eco',
    nightlyRate: 9600,
    rating: 4.6,
    availableOffers: 10,
    image: '/assets/img/30.jpg',
    specialOfferImage: '/assets/img/12.jpg',
    copy: {
      ru: {
        city: 'Манаус',
        location: 'Манаус, Бразилия',
        defaultRoomType: 'Rainforest Canopy Villa',
        description:
          'Экологичный курорт на стыке рек Риу-Негру и Солимойнс с экспедициями и лабораторией биоразнообразия.',
        highlights: [
          'Ночная экспедиция с биологами Lagoona Labs',
          'Лодочные сафари к розовым дельфинам',
          'Фермерская кухня из суперфудов Амазонии',
        ],
      },
      en: {
        city: 'Manaus',
        location: 'Manaus, Brazil',
        defaultRoomType: 'Rainforest Canopy Villa',
        description:
          'Eco resort at the meeting of Rio Negro and Solimões with expeditions and a biodiversity lab.',
        highlights: [
          'Night expedition with Lagoona Labs biologists',
          'Boat safari to pink river dolphins',
          'Farm-to-table cuisine featuring Amazonian superfoods',
        ],
      },
    },
  },
];

const ui = {
  ru: {
    header: {
      cabinetLabel: 'Личный кабинет',
      cabinetAria: 'Перейти к бронированию',
      searchPlaceholder: 'Поиск по направлениям',
      searchAria: 'Найдите город или отель',
      searchButtonLabel: 'Показать варианты размещения',
      languageToggleLabel: 'EN',
      languageToggleAria: 'Switch to English version',
      loginLabel: 'Войти',
      signupLabel: 'Регистрация',
      logoutLabel: 'Выйти',
      profileLabel: 'Профиль',
      menuOpenAria: 'Открыть меню',
      menuCloseAria: 'Закрыть меню',
    },
    reservation: {
      subtitle: 'Быстрая бронь',
      title: 'Мгновенное бронирование',
      description:
        'Подберите направление, уточните даты и оставьте заявку — команда Lagoona подтвердит бронь в течение 15 минут.',
      specialBadge: 'Спецпредложение',
      specialButton: 'Забронировать сейчас',
      priceTemplate: 'от {price} ₽ / ночь',
      form: {
        placeholders: {
          selectHotel: 'Выберите отель',
          city: 'Город',
          roomType: 'Категория номера',
          checkIn: 'Дата заселения',
          nights: 'Количество ночей',
          guests: 'Количество гостей',
          name: 'Имя',
          phone: 'Телефон',
        },
        button: {
          submit: 'Забронировать',
          loading: 'Отправляем...',
        },
        offersText: '{count} предложений доступно',
        selectedTemplate: 'Вы выбрали {hotel}. Категория: {roomType}',
      },
    },
    about: {
      subtitle: 'О нас',
      title: 'Lagoona в 2025 году',
      paragraphs: [
        'Мы обновили коллекцию Lagoona, чтобы подарить гостям новые впечатления: авторские маршруты, устойчивые технологии и сервис, который предвосхищает желания. Команда планирует путешествия любой сложности, а цифровой кабинет сохраняет историю поездок и персональные предпочтения.',
        'Гостям доступны VIP-консьерж, персонализированные wellness-программы, гастрономические коллаборации и цифровой ассистент Lagoona App — бронируйте и управляйте поездкой из любой точки мира.',
      ],
      imageAlt: 'Команда Lagoona',
    },
    services: {
      subtitle: 'Услуги',
      title: 'Сервисы Lagoona 2025',
      description: 'Индивидуальные маршруты, digital-сопровождение и доступ к закрытым событиям — всё, что делает поездку особенной.',
    },
    advantages: {
      subtitle: 'Преимущества',
      title: 'Почему выбирают Lagoona',
    },
    accommodation: {
      subtitle: 'Размещение',
      title: 'Коллекция отелей 2025',
      description: 'Подборка курортов Lagoona в Европе, Азии и Латинской Америке — с авторскими программами и поддержкой 24/7.',
      emptyTitle: 'Мы не нашли подходящих вариантов',
      emptyDescription: 'Попробуйте изменить запрос или сбросить фильтр, чтобы увидеть все предложения.',
      resetButton: 'Сбросить поиск',
      viewAllTitle: 'Посмотреть все варианты',
      viewAllButton: 'Каталог размещений',
      panelBadge: 'Вы смотрите',
      meta: {
        available: 'Свободных категорий',
        rating: 'Рейтинг гостей',
      },
      bookButton: 'Бронировать {hotel}',
      pricePrefix: 'от',
      priceSuffix: '/ ночь',
    },
    rating: {
      ariaLabel: '{label}: рейтинг {rating} из 5',
      filledAlt: 'Заполненная звезда рейтинга',
      emptyAlt: 'Пустая звезда рейтинга',
    },
    actions: {
      more: 'Подробнее',
      book: 'Забронировать',
    },
    contacts: {
      subtitle: 'Контакты',
      title: 'Всегда на связи',
      intro: 'Офис Lagoona работает ежедневно. Позвоните или напишите нам — менеджер ответит в течение 10 минут.',
      items: [
        {
          label: 'Адрес',
          lines: ['Москва, наб. Пресненская, 12, башня Lagoona HQ'],
        },
        {
          label: 'Телефоны',
          links: [
            { href: 'tel:+74959352025', label: '+7 (495) 935-20-25' },
            { href: 'tel:+78001002525', label: '8 (800) 100-25-25' },
          ],
        },
        {
          label: 'Email',
          links: [
            { href: 'mailto:booking@lagoona.ru', label: 'booking@lagoona.ru — по вопросам бронирования' },
            { href: 'mailto:partners@lagoona.ru', label: 'partners@lagoona.ru — для сотрудничества' },
          ],
        },
        {
          label: 'График',
          lines: ['Каждый день, с 09:00 до 21:00 (время Москвы)'],
        },
      ],
      routeButton: 'Построить маршрут',
      form: {
        subtitle: 'Напишите нам',
        title: 'Останемся на связи',
        helperText: 'Запрос попадет к персональному менеджеру; обычно отвечаем в течение 10 минут.',
        placeholders: {
          name: 'Имя',
          phone: 'Телефон',
          message: 'Сообщение',
        },
        button: {
          submit: 'Отправить',
          loading: 'Отправляем...',
        },
      },
    },
    footer: {
      copyright: '© 2012-2025 Управляющая компания объединённой сети «Lagoona Hotels»',
      disclaimer: 'Информация на сайте представлена в ознакомительных целях и не является публичной офертой.',
      privacy: 'Политика конфиденциальности',
      address: 'Москва, наб. Пресненская, 12, башня Lagoona HQ',
      phones: [
        { href: 'tel:+74959352025', label: '+7 (495) 935-20-25' },
        { href: 'tel:+78001002525', label: '8 (800) 100-25-25' },
      ],
      emails: [
        { href: 'mailto:booking@lagoona.ru', label: 'booking@lagoona.ru' },
        { href: 'mailto:partners@lagoona.ru', label: 'partners@lagoona.ru' },
      ],
      socials: [
        { href: 'https://www.tripadvisor.ru/', icon: '/assets/img/tripadvisor.png', label: 'TripAdvisor' },
        { href: 'https://twitter.com/', icon: '/assets/img/twitter.png', label: 'Twitter' },
        { href: 'https://www.facebook.com/', icon: '/assets/img/facebook.png', label: 'Facebook' },
        { href: 'https://vk.com/', icon: '/assets/img/social.png', label: 'VK' },
        { href: 'https://mail.google.com/', icon: '/assets/img/google-plus-social-logotype.png', label: 'Google' },
      ],
    },
    profile: {
      subtitle: 'С возвращением',
      bookingsTitle: 'Ваши бронирования',
      emptyState: 'Пока нет активных заявок. Забронируйте отель, и здесь появится история запросов.',
      noSessionRedirect: '/login?callbackUrl=/profile',
      labels: {
        id: 'Код заявки',
        hotel: 'Отель',
        checkIn: 'Заезд',
        nights: 'Ночей',
        guests: 'Гостей',
        created: 'Создано',
        loading: 'Загружаем данные...',
      },
    },
    auth: {
      login: {
        subtitle: 'Lagoona Identity',
        title: 'Вход в аккаунт',
        description: 'Авторизуйтесь, чтобы управлять бронированиями и видеть персональные предложения.',
        emailLabel: 'Email',
        passwordLabel: 'Пароль',
        button: 'Войти',
        loading: 'Входим...',
        error: 'Неверный email или пароль. Попробуйте снова.',
        cta: 'Нет аккаунта? Зарегистрироваться',
      },
      signup: {
        subtitle: 'Join Lagoona',
        title: 'Создать аккаунт',
        helper: 'Регистрация только для демонстрации интерфейса. Форма не создает настоящие учетные записи.',
        nameLabel: 'Имя',
        emailLabel: 'Email',
        passwordLabel: 'Пароль',
        companyLabel: 'Компания (необязательно)',
        button: 'Запросить доступ',
        success: 'Спасибо! Менеджер Lagoona свяжется с вами в течение рабочего дня.',
        backToLogin: 'Уже есть аккаунт? Войти',
        features: [
          'Smart concierge и цифровые ассистенты для гостей Lagoona.',
          'Доступ к закрытым предложениям и мероприятиям сети.',
          'Отслеживание истории путешествий и персональных предпочтений.',
        ],
      },
    },
    messages: {
      bookingSending: 'Отправляем ваш запрос...',
      bookingSuccess: 'Заявка №{ref} успешно отправлена. Мы свяжемся с вами в ближайшее время!',
      bookingError: 'Не получилось отправить запрос. Повторите попытку позже.',
      contactSending: 'Отправляем сообщение...',
      contactSuccess: 'Спасибо! Сообщение №{ref} отправлено, команда ответит в течение часа.',
      contactError: 'Не удалось отправить сообщение. Попробуйте снова.',
    },
  },
  en: {
    header: {
      cabinetLabel: 'Client area',
      cabinetAria: 'Go to booking section',
      searchPlaceholder: 'Search destinations',
      searchAria: 'Find a city or hotel',
      searchButtonLabel: 'Show accommodation options',
      languageToggleLabel: 'RU',
      languageToggleAria: 'Switch to Russian version',
      loginLabel: 'Log in',
      signupLabel: 'Sign up',
      logoutLabel: 'Log out',
      profileLabel: 'Profile',
      menuOpenAria: 'Open navigation',
      menuCloseAria: 'Close navigation',
    },
    reservation: {
      subtitle: 'Quick booking',
      title: 'Instant reservation',
      description:
        'Choose a destination, set your dates, and send a request — the Lagoona team confirms bookings within 15 minutes.',
      specialBadge: 'Special offer',
      specialButton: 'Book now',
      priceTemplate: 'from {price} ₽ / night',
      form: {
        placeholders: {
          selectHotel: 'Select a hotel',
          city: 'City',
          roomType: 'Room category',
          checkIn: 'Check-in date',
          nights: 'Number of nights',
          guests: 'Number of guests',
          name: 'Name',
          phone: 'Phone',
        },
        button: {
          submit: 'Book',
          loading: 'Sending...',
        },
        offersText: '{count} offers available',
        selectedTemplate: 'You selected {hotel}. Room category: {roomType}',
      },
    },
    about: {
      subtitle: 'About',
      title: 'Lagoona in 2025',
      paragraphs: [
        'We refreshed the Lagoona collection to deliver new experiences: signature itineraries, sustainable tech, and service that anticipates every wish. Our team plans journeys of any complexity while the digital cabinet stores trip history and personal preferences.',
        'Guests enjoy VIP concierge service, tailored wellness programs, gastronomic collaborations, and the Lagoona App assistant — book and manage your stay from anywhere in the world.',
      ],
      imageAlt: 'Lagoona team',
    },
    services: {
      subtitle: 'Services',
      title: 'Lagoona services 2025',
      description: 'Bespoke itineraries, digital assistance, and access to private events — everything that makes travel special.',
    },
    advantages: {
      subtitle: 'Benefits',
      title: 'Why guests choose Lagoona',
    },
    accommodation: {
      subtitle: 'Stays',
      title: '2025 hotel collection',
      description: 'Lagoona resorts across Europe, Asia, and Latin America with signature programs and 24/7 support.',
      emptyTitle: 'No matches found',
      emptyDescription: 'Try adjusting your query or reset the filter to view every offer.',
      resetButton: 'Reset search',
      viewAllTitle: 'See every option',
      viewAllButton: 'Open full catalogue',
      panelBadge: 'Now viewing',
      meta: {
        available: 'Available categories',
        rating: 'Guest rating',
      },
      bookButton: 'Book {hotel}',
      pricePrefix: 'from',
      priceSuffix: '/ night',
    },
    rating: {
      ariaLabel: '{label}: rated {rating} out of 5',
      filledAlt: 'Filled rating star',
      emptyAlt: 'Empty rating star',
    },
    actions: {
      more: 'Details',
      book: 'Book',
    },
    contacts: {
      subtitle: 'Contacts',
      title: 'We are always in touch',
      intro: 'The Lagoona office operates every day. Call or write—our manager replies within 10 minutes.',
      items: [
        {
          label: 'Address',
          lines: ['Moscow, Presnenskaya Emb., 12, Lagoona HQ tower'],
        },
        {
          label: 'Phones',
          links: [
            { href: 'tel:+74959352025', label: '+7 (495) 935-20-25' },
            { href: 'tel:+78001002525', label: '8 (800) 100-25-25' },
          ],
        },
        {
          label: 'Email',
          links: [
            { href: 'mailto:booking@lagoona.ru', label: 'booking@lagoona.ru — reservations' },
            { href: 'mailto:partners@lagoona.ru', label: 'partners@lagoona.ru — partnerships' },
          ],
        },
        {
          label: 'Schedule',
          lines: ['Daily, 09:00–21:00 (Moscow time)'],
        },
      ],
      routeButton: 'Get directions',
      form: {
        subtitle: 'Drop us a line',
        title: 'Stay in touch',
        helperText: 'A personal manager will pick up the thread and reply within 10 minutes.',
        placeholders: {
          name: 'Name',
          phone: 'Phone',
          message: 'Message',
        },
        button: {
          submit: 'Send',
          loading: 'Sending...',
        },
      },
    },
    footer: {
      copyright: '© 2012-2025 Lagoona Hotels unified management company',
      disclaimer: 'All information is provided for reference and does not constitute a public offer.',
      privacy: 'Privacy policy',
      address: 'Moscow, Presnenskaya Emb., 12, Lagoona HQ tower',
      phones: [
        { href: 'tel:+74959352025', label: '+7 (495) 935-20-25' },
        { href: 'tel:+78001002525', label: '8 (800) 100-25-25' },
      ],
      emails: [
        { href: 'mailto:booking@lagoona.ru', label: 'booking@lagoona.ru' },
        { href: 'mailto:partners@lagoona.ru', label: 'partners@lagoona.ru' },
      ],
      socials: [
        { href: 'https://www.tripadvisor.com/', icon: '/assets/img/tripadvisor.png', label: 'TripAdvisor' },
        { href: 'https://twitter.com/', icon: '/assets/img/twitter.png', label: 'Twitter' },
        { href: 'https://www.facebook.com/', icon: '/assets/img/facebook.png', label: 'Facebook' },
        { href: 'https://vk.com/', icon: '/assets/img/social.png', label: 'VK' },
        { href: 'https://mail.google.com/', icon: '/assets/img/google-plus-social-logotype.png', label: 'Google' },
      ],
    },
    profile: {
      subtitle: 'Welcome back',
      bookingsTitle: 'Your bookings',
      emptyState: 'No active requests yet. Place a booking and your history will appear here.',
      noSessionRedirect: '/login?callbackUrl=/profile',
      labels: {
        id: 'Booking ID',
        hotel: 'Hotel',
        checkIn: 'Check-in',
        nights: 'Nights',
        guests: 'Guests',
        created: 'Created',
        loading: 'Loading bookings...',
      },
    },
    auth: {
      login: {
        subtitle: 'Lagoona Identity',
        title: 'Sign in to your account',
        description: 'Sign in to manage bookings, preferences, and private offers.',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        button: 'Sign in',
        loading: 'Signing in...',
        error: 'Incorrect email or password. Please try again.',
        cta: 'No account yet? Sign up',
      },
      signup: {
        subtitle: 'Join Lagoona',
        title: 'Create account',
        helper: 'Registration is for demo purposes only and will not create a real account.',
        nameLabel: 'Name',
        emailLabel: 'Email',
        passwordLabel: 'Password',
        companyLabel: 'Company (optional)',
        button: 'Request access',
        success: 'Thanks! A Lagoona manager will reach out within one business day.',
        backToLogin: 'Already have an account? Sign in',
        features: [
          'Smart concierge and digital assistants for Lagoona guests.',
          'Access to private offers and brand-only events.',
          'Travel history tracking with personal preferences.',
        ],
      },
    },
    messages: {
      bookingSending: 'Sending your request...',
      bookingSuccess: 'Request #{ref} sent successfully. We will contact you shortly!',
      bookingError: 'Could not submit the request. Please try again later.',
      contactSending: 'Sending message...',
      contactSuccess: 'Thanks! Message #{ref} is sent, the team will reply within an hour.',
      contactError: 'Could not send the message. Please try again.',
    },
  },
};

export const DEFAULT_LANGUAGE = 'ru';
export const LANGUAGES = ['ru', 'en'];

export const getNavLinks = (language) => navLinksData.map((link) => ({ href: link.href, label: link.label[language] }));

export const getServices = (language) =>
  servicesData.map((service) => ({
    id: service.id,
    image: service.image,
    title: service.title[language],
    description: service.description[language],
  }));

export const getAdvantages = (language) =>
  advantagesData.map((item) => ({
    id: item.id,
    icon: item.icon,
    text: item.text[language],
  }));

export const getHotels = (language) =>
  hotelsSource.map((hotel) => ({
    id: hotel.id,
    name: hotel.name,
    nightlyRate: hotel.nightlyRate,
    rating: hotel.rating,
    availableOffers: hotel.availableOffers,
    image: hotel.image,
    specialOfferImage: hotel.specialOfferImage,
    city: hotel.copy[language].city,
    location: hotel.copy[language].location,
    defaultRoomType: hotel.copy[language].defaultRoomType,
    description: hotel.copy[language].description,
    highlights: hotel.copy[language].highlights,
  }));

export const getUi = (language) => ui[language];
