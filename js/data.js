const products = [
    { id: 1, type: 'game', price: 150, img: 'https://picsum.photos/seed/cyberpunk/300/200', title_fa: 'Cyberpunk 2077', title_en: 'Cyberpunk 2077', title_ar: 'سايبربانك 2077' },
    { id: 2, type: 'game', price: 200, img: 'https://picsum.photos/seed/gta5/300/200', title_fa: 'GTA V Premium', title_en: 'GTA V Premium', title_ar: 'جي تي اي 5' },
    { id: 3, type: 'digital', price: 50, img: 'https://picsum.photos/seed/windows/300/200', title_fa: 'Windows 11 Pro Key', title_en: 'Windows 11 Pro Key', title_ar: 'ويندوز 11 برو' },
    { id: 4, type: 'assembly', price: 2500, img: 'https://picsum.photos/seed/rtx4090/300/200', title_fa: 'PC Build RTX 4090', title_en: 'PC Build RTX 4090', title_ar: 'كمبيوتر RTX 4090' }
];

const translations = {
    fa: {
        nav_home: "خانه", nav_games: "بازی‌های PC", nav_digital: "محصولات دیجیتال", nav_assembly: "سفارش مونتاژ",
        hero_title: "دنیای بی‌نهایت گیمینگ", hero_desc: "بهترین بازی‌ها، لایسنس‌های اورجینال و سیستم‌های حرفه‌ای را با ما تجربه کنید.",
        cta_shop: "مشاهده محصولات",
        cat_games: "بازی‌های کامپیوتری", cat_games_desc: "کی‌های استیم و اپیک گیمز",
        cat_digital: "محصولات دیجیتال", cat_digital_desc: "اشتراک‌ها و نرم‌افزارها",
        cat_assembly: "خدمات مونتاژ", cat_assembly_desc: "ساخت PC بر اساس بودجه شما",
        featured_products: "محصولات منتخب", btn_buy: "افزودن به سبد",
        service_title: "خدمات مونتاژ حرفه‌ای", service_desc: "سیستم مورد نظر خود را انتخاب کنید، ما آن را با بهترین قطعات مونتاژ کرده و تست‌های فشار را برای شما انجام می‌دهیم.",
        btn_consult: "درخواست مشاوره رایگان", saudi_center: "مركز السعودي للاعمال", footer_desc: "ارائه دهنده خدمات نوین در زمینه گیمینگ و تجهیزات دیجیتال با مجوز رسمی.",
        footer_links: "لینک‌های مفید", link_rules: "قوانین و مقررات", link_warranty: "ضمانت محصولات",
        payment_methods: "روش‌های پرداخت", checkout_title: "تکمیل خرید", total_items: "تعداد اقلام:", total_price: "مبلغ قابل پرداخت:",
        terms_text: "من قوانین و مقررات فروشگاه را مطالعه کرده و می‌پذیرم.", btn_pay: "پرداخت نهایی", error_terms: "لطفاً تایید کنید که قوانین را خوانده‌اید.",
        toast_added: "محصول به سبد خرید اضافه شد", currency: "ریال"
    },
    ar: {
        nav_home: "الرئيسية", nav_games: "ألعاب الكمبيوتر", nav_digital: "منتجات رقمية", nav_assembly: "خدمة التجميع",
        hero_title: "عالم الألعاب اللامتناهي", hero_desc: "استمتع بأفضل الألعاب والتراخيص الأصلية والأنظمة الاحترافية معنا.",
        cta_shop: "تصفح المنتجات", cat_games: "ألعاب الكمبيوتر", cat_games_desc: "مفاتيح ستيم وإيبك",
        cat_digital: "منتجات رقمية", cat_digital_desc: "اشتراكات وبرامج", cat_assembly: "خدمة التجميع", cat_assembly_desc: "بناء جهاز الكمبيوتر حسب ميزانيتك",
        featured_products: "منتجات مختارة", btn_buy: "أضف للسلة",
        service_title: "خدمة التجميع الاحترافية", service_desc: "اختر النظام المطلوب، وسنقوم بتجميعه بأفضل القطع وإجراء اختبارات الأداء لك.",
        btn_consult: "طلب استشارة مجانية", saudi_center: "مركز الأعمال السعودي", footer_desc: "مقدم خدمات مبتكرة في مجال الألعاب والمعدات الرقمية بترخيص رسمي.",
        footer_links: "روابط مفيدة", link_rules: "القوانين والشروط", link_warranty: "ضمان المنتجات", payment_methods: "طرق الدفع",
        checkout_title: "إتمام الشراء", total_items: "عدد العناصر:", total_price: "المبلغ الإجمالي:",
        terms_text: "لقد قرأت ووافقت على شروط وأحكام المتجر.", btn_pay: "الدفع النهائي", error_terms: "يرجى التأكيد على أنك قرأت الشروط.",
        toast_added: "تمت إضافة المنتج إلى السلة", currency: "ر.س"
    },
    en: {
        nav_home: "Home", nav_games: "PC Games", nav_digital: "Digital Products", nav_assembly: "Assembly Service",
        hero_title: "Infinite Gaming World", hero_desc: "Experience the best games, original licenses, and professional systems with us.",
        cta_shop: "View Products", cat_games: "PC Games", cat_games_desc: "Steam & Epic Keys",
        cat_digital: "Digital Products", cat_digital_desc: "Subscriptions & Software", cat_assembly: "Assembly Service", cat_assembly_desc: "Build PC based on your budget",
        featured_products: "Featured Products", btn_buy: "Add to Cart",
        service_title: "Pro Assembly Service", service_desc: "Choose your desired system, and we will assemble it with the best parts and run benchmarks for you.",
        btn_consult: "Free Consultation", saudi_center: "Saudi Business Center", footer_desc: "Provider of innovative services in gaming and digital equipment with official license.",
        footer_links: "Useful Links", link_rules: "Terms & Rules", link_warranty: "Warranty", payment_methods: "Payment Methods",
        checkout_title: "Checkout", total_items: "Items:", total_price: "Total Price:",
        terms_text: "I have read and agree to the store's terms and conditions.", btn_pay: "Final Payment", error_terms: "Please confirm that you have read the terms.",
        toast_added: "Product added to cart", currency: "SAR"
    }
};
