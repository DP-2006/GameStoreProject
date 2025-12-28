let cart = [];
let currentLang = 'fa';

window.onload = function() {
    renderProducts();
};

function renderProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    products.forEach(p => {
        const title = p[`title_${currentLang}`];
        const html = `
            <div class="product-card">
                <img src="${p.img}" alt="${title}" class="product-img">
                <div class="product-info">
                    <h3 class="product-title">${title}</h3>
                    <span class="product-price">${p.price} ${translations[currentLang].currency}</span>
                    <button class="add-to-cart" onclick="addToCart(${p.id})">${translations[currentLang].btn_buy}</button>
                </div>
            </div>
        `;
        container.innerHTML += html;
    });
}

function addToCart(id) {
    cart.push(products.find(p => p.id === id));
    updateCartUI();
    showToast();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.innerText = translations[currentLang].toast_added;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function openCheckout() {
    if (cart.length === 0) {
        alert(currentLang === 'ar' ? 'السلة فارغة' : (currentLang === 'en' ? 'Cart is empty' : 'سبد خرید خالی است'));
        return;
    }
    document.getElementById('checkout-modal').style.display = 'flex';
    document.getElementById('modal-count').innerText = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('modal-price').innerText = total;
    document.getElementById('checkout-error').style.display = 'none';
}

function closeCheckout() {
    document.getElementById('checkout-modal').style.display = 'none';
}

function processPayment() {
    const terms = document.getElementById('terms-check');
    if (!terms.checked) {
        document.getElementById('checkout-error').style.display = 'block';
        return;
    }
    alert(currentLang === 'ar' ? 'جاري المعالجة...' : (currentLang === 'en' ? 'Processing...' : 'در حال پردازش...'));
    cart = [];
    updateCartUI();
    closeCheckout();
}

function changeLanguage(lang) {
    currentLang = lang;
    const doc = document.documentElement;
    const isRtl = lang === 'fa' || lang === 'ar';
    
    doc.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    doc.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    renderProducts();
}


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function toggleMenu() {
    document.getElementById('main-nav').classList.toggle('active');
}

// تابع کمکی (درخواست مشاوره)
function showConsultationAlert() {
    alert('به زودی فرم مشاوره فعال می‌شود.');
}
