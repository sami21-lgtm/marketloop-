// --- INITIAL STATE & 50 DIVERSE PRODUCTS DATA ---
let products = [
    // --- MOBILES & TABLETS (14 Items) ---
    {
        id: 101,
        title: "Tecno Camon 30 Pro 5G",
        category: "MOBILES",
        subCategory: "5G Mobiles",
        brand: "Tecno",
        price: 32990,
        stock: 12,
        specs: "12GB RAM | 256GB ROM | 50MP OIS Camera",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80"
    },
    {
        id: 102,
        title: "Realme GT 6 AI Smartphone",
        category: "MOBILES",
        subCategory: "AI Smartphones",
        brand: "Realme",
        price: 54999,
        stock: 19,
        specs: "Snapdragon 8s Gen 3 | 120Hz AMOLED",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80"
    },
    {
        id: 103,
        title: "Xiaomi Redmi Note 13 Pro",
        category: "MOBILES",
        subCategory: "Best Camera",
        brand: "Xiaomi",
        price: 28500,
        stock: 14,
        specs: "200MP OIS Camera | 67W Turbo Charge",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80"
    },
    {
        id: 104,
        title: "Samsung Galaxy A55 5G",
        category: "MOBILES",
        subCategory: "5G Mobiles",
        brand: "Samsung",
        price: 48999,
        stock: 21,
        specs: "Exynos 1480 | IP67 Water Resistance",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&q=80"
    },
    {
        id: 105,
        title: "Tecno Pova 6 Pro 5G",
        category: "MOBILES",
        subCategory: "Best Battery",
        brand: "Tecno",
        price: 24990,
        stock: 16,
        specs: "6000mAh Battery | 70W Ultra Charge",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80"
    },
    {
        id: 106,
        title: "Realme C67 4G",
        category: "MOBILES",
        subCategory: "Best Camera",
        brand: "Realme",
        price: 18999,
        stock: 11,
        specs: "108MP 3X In-sensor Zoom | Snapdragon 685",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&q=80"
    },
    {
        id: 107,
        title: "Xiaomi Poco X6 Pro 5G",
        category: "MOBILES",
        subCategory: "5G Mobiles",
        brand: "Xiaomi",
        price: 36999,
        stock: 18,
        specs: "Dimensity 8300-Ultra | 120Hz FiFlow AMOLED",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80"
    },
    {
        id: 108,
        title: "Vivo V30 5G AI Phone",
        category: "MOBILES",
        subCategory: "AI Smartphones",
        brand: "Vivo",
        price: 45999,
        stock: 13,
        specs: "Aura Light Portrait | Snapdragon 7 Gen 3",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80"
    },
    {
        id: 109,
        title: "Samsung Galaxy M15 5G",
        category: "MOBILES",
        subCategory: "Best Battery",
        brand: "Samsung",
        price: 19999,
        stock: 20,
        specs: "6000mAh Battery | Super AMOLED Display",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80"
    },
    {
        id: 110,
        title: "Tecno Spark 20 Pro+",
        category: "MOBILES",
        subCategory: "Best Camera",
        brand: "Tecno",
        price: 21500,
        stock: 15,
        specs: "108MP Camera | Curved 120Hz AMOLED",
        image: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=400&q=80"
    },
    {
        id: 111,
        title: "Realme 12 Pro+ 5G",
        category: "MOBILES",
        subCategory: "Best Camera",
        brand: "Realme",
        price: 42999,
        stock: 10,
        specs: "64MP Periscope Telephoto | Luxury Watch Design",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&q=80"
    },
    {
        id: 112,
        title: "Xiaomi Redmi 13C",
        category: "MOBILES",
        subCategory: "Best Battery",
        brand: "Xiaomi",
        price: 14499,
        stock: 17,
        specs: "5000mAh | 50MP AI Dual Camera",
        image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400&q=80"
    },
    {
        id: 113,
        title: "Google Pixel 8a AI Phone",
        category: "MOBILES",
        subCategory: "AI Smartphones",
        brand: "Google",
        price: 64999,
        stock: 12,
        specs: "Tensor G3 | Gemini AI Integrated",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80"
    },
    {
        id: 114,
        title: "OnePlus Nord CE 4 5G",
        category: "MOBILES",
        subCategory: "5G Mobiles",
        brand: "OnePlus",
        price: 34999,
        stock: 19,
        specs: "Snapdragon 7 Gen 3 | 100W SUPERVOOC",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80"
    },

    // --- WOMEN FASHION (10 Items) ---
    {
        id: 115,
        title: "Handloom Pure Cotton Jamdani Saree",
        category: "WOMEN",
        subCategory: "Saree",
        brand: "Aarong Earth",
        price: 8500,
        stock: 14,
        specs: "Traditional Handloom | Pure Cotton Thread Work",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"
    },
    {
        id: 116,
        title: "Embroidered Silk Shalwar Kameez Set",
        category: "WOMEN",
        subCategory: "Shalwar Kameez",
        brand: "Taaga",
        price: 4200,
        stock: 21,
        specs: "Fine Silk Fabric | Elegant Necklines & Dupatta",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80"
    },
    {
        id: 117,
        title: "Designer Muslin Silk Saree",
        category: "WOMEN",
        subCategory: "Saree",
        brand: "Aarong Earth",
        price: 14500,
        stock: 16,
        specs: "Handpainted Floral Pattern | Pure Muslin",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80"
    },
    {
        id: 118,
        title: "Cotton Casual Kurti & Pants",
        category: "WOMEN",
        subCategory: "Kurta & Tops",
        brand: "Taaga",
        price: 2800,
        stock: 11,
        specs: "Breathable Cotton | Block Print Work",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80"
    },
    {
        id: 119,
        title: "Dhakai Half-Silk Jamdani Saree",
        category: "WOMEN",
        subCategory: "Saree",
        brand: "Anokhi",
        price: 6500,
        stock: 18,
        specs: "Intricate Geometric Weave | Festive Collection",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
    },
    {
        id: 120,
        title: "Georgette Printed Shalwar Kameez",
        category: "WOMEN",
        subCategory: "Shalwar Kameez",
        brand: "Sailor",
        price: 3800,
        stock: 13,
        specs: "3-Piece Premium Lawn & Georgette Dupatta",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80"
    },
    {
        id: 121,
        title: "Handcrafted Katan Silk Saree",
        category: "WOMEN",
        subCategory: "Saree",
        brand: "Monipuri",
        price: 18500,
        stock: 20,
        specs: "Zari Embroidery | Traditional Festive Wear",
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80"
    },
    {
        id: 122,
        title: "Linen Printed Tunic Top",
        category: "WOMEN",
        subCategory: "Kurta & Tops",
        brand: "Taaga",
        price: 2200,
        stock: 15,
        specs: "Comfortable Summer Fit | Contemporary Cut",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80"
    },
    {
        id: 123,
        title: "Organza Designer Party Kameez",
        category: "WOMEN",
        subCategory: "Shalwar Kameez",
        brand: "Cats Eye",
        price: 5500,
        stock: 10,
        specs: "Heavy Stone & Zari Embroidery",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80"
    },
    {
        id: 124,
        title: "Tangail Soft Cotton Saree",
        category: "WOMEN",
        subCategory: "Saree",
        brand: "Aarong Earth",
        price: 3200,
        stock: 17,
        specs: "100% Handloom Cotton | Daily Wear",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80"
    },

    // --- MEN FASHION (9 Items) ---
    {
        id: 125,
        title: "Premium Handcrafted Cotton Panjabi",
        category: "MEN",
        subCategory: "Panjabi",
        brand: "Taaga",
        price: 3500,
        stock: 12,
        specs: "100% Organic Cotton | Slim Fit | Designer Buttons",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80"
    },
    {
        id: 126,
        title: "Semi-Kabli Silk Panjabi Set",
        category: "MEN",
        subCategory: "Panjabi",
        brand: "Aarong Earth",
        price: 4800,
        stock: 19,
        specs: "Jacquard Weave Silk | Matching Pajama",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80"
    },
    {
        id: 127,
        title: "Casual Printed Short Kurta",
        category: "MEN",
        subCategory: "Short Kurta",
        brand: "Sailor",
        price: 1950,
        stock: 14,
        specs: "Breathable Cotton | Mandarin Collar",
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&q=80"
    },
    {
        id: 128,
        title: "Slim Fit Chino Trousers",
        category: "MEN",
        subCategory: "Trousers",
        brand: "Cats Eye",
        price: 2450,
        stock: 21,
        specs: "Stretchable Cotton Twill | Smart Casual",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80"
    },
    {
        id: 129,
        title: "Royal Velvet Embroidered Panjabi",
        category: "MEN",
        subCategory: "Panjabi",
        brand: "Illiyeen",
        price: 8900,
        stock: 16,
        specs: "Luxury Velvet Trim | Wedding Special",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80"
    },
    {
        id: 130,
        title: "Formal Executive Shirt",
        category: "MEN",
        subCategory: "Short Kurta",
        brand: "Richman",
        price: 2200,
        stock: 11,
        specs: "100% Egyptian Cotton | Easy Iron",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&q=80"
    },
    {
        id: 131,
        title: "Casual Denim Jeans Pant",
        category: "MEN",
        subCategory: "Trousers",
        brand: "Sailor",
        price: 2800,
        stock: 18,
        specs: "Stretch Denim | Modern Tapered Fit",
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&q=80"
    },
    {
        id: 132,
        title: "Handloom Cotton Panjabi",
        category: "MEN",
        subCategory: "Panjabi",
        brand: "Yellow",
        price: 2990,
        stock: 13,
        specs: "Traditional Crafting | Breathable Fit",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80"
    },
    {
        id: 133,
        title: "Regular Fit Linen Short Shirt",
        category: "MEN",
        subCategory: "Short Kurta",
        brand: "Taaga",
        price: 1850,
        stock: 20,
        specs: "Pure Linen | Lightweight Summer Style",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80"
    },

    // --- HOME DÉCOR (7 Items) ---
    {
        id: 134,
        title: "Traditional Nokshi Kantha Bedcover Set",
        category: "HOME DÉCOR",
        subCategory: "Bedcovers",
        brand: "Aarong Earth",
        price: 2800,
        stock: 15,
        specs: "King Size | Hand Stitched | Premium Fabric",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80"
    },
    {
        id: 135,
        title: "Handcrafted Brass Dinnerware Set (6 Person)",
        category: "HOME DÉCOR",
        subCategory: "Dining",
        brand: "Aarong Earth",
        price: 12500,
        stock: 10,
        specs: "Pure Brass | Antique Bengali Craftsmanship",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80"
    },
    {
        id: 136,
        title: "Ceramic Tea Set & Wooden Serving Tray",
        category: "HOME DÉCOR",
        subCategory: "Dining",
        brand: "Clay Station",
        price: 3400,
        stock: 17,
        specs: "6 Cups & Teapot | Eco-friendly Tray",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&q=80"
    },
    {
        id: 137,
        title: "Printed Cotton Double King Bed Sheet",
        category: "HOME DÉCOR",
        subCategory: "Bedcovers",
        brand: "Home Tex",
        price: 1850,
        stock: 12,
        specs: "100% Cotton | Includes 2 Pillow Covers",
        image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&q=80"
    },
    {
        id: 138,
        title: "Handwoven Jute Table Runner & Mats",
        category: "HOME DÉCOR",
        subCategory: "Dining",
        brand: "Aarong Earth",
        price: 1400,
        stock: 19,
        specs: "Natural Jute Fiber | Eco-Friendly",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80"
    },
    {
        id: 139,
        title: "Porcelain Dinner Set 32 Pieces",
        category: "HOME DÉCOR",
        subCategory: "Dining",
        brand: "Shinepukur",
        price: 8900,
        stock: 14,
        specs: "Scratch Resistant | Microwave Safe",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80"
    },
    {
        id: 140,
        title: "Quilted Cotton Kantha Throw Pillow Cases",
        category: "HOME DÉCOR",
        subCategory: "Bedcovers",
        brand: "Kothon",
        price: 1200,
        stock: 21,
        specs: "Set of 4 | Colorful Patchwork",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=400&q=80"
    },

    // --- SKIN & HAIR (7 Items) ---
    {
        id: 141,
        title: "Organic Glow Face Mask & Herbal Pack",
        category: "SKIN & HAIR",
        subCategory: "Face Care",
        brand: "Aarong Earth",
        price: 950,
        stock: 16,
        specs: "100% Natural Turmeric & Neem Formulation",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80"
    },
    {
        id: 142,
        title: "Pure Cold Pressed Coconut Hair Oil (250ml)",
        category: "SKIN & HAIR",
        subCategory: "Hair Care",
        brand: "Aarong Earth",
        price: 450,
        stock: 11,
        specs: "Deep Root Nourishment | Organic",
        image: "https://images.unsplash.com/photo-1608248597261-833257647009?w=400&q=80"
    },
    {
        id: 143,
        title: "Herbal Anti-Dandruff Shampoo (300ml)",
        category: "SKIN & HAIR",
        subCategory: "Hair Care",
        brand: "Kumarika",
        price: 380,
        stock: 18,
        specs: "Enriched with Aloe Vera & Tea Tree",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80"
    },
    {
        id: 144,
        title: "Saffron & Sandalwood Brightening Cream",
        category: "SKIN & HAIR",
        subCategory: "Face Care",
        brand: "Bio-Xin",
        price: 1450,
        stock: 13,
        specs: "Dermatologically Tested | Skin Hydration",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80"
    },
    {
        id: 145,
        title: "Pure Raw Honey & Oat Face Scrub",
        category: "SKIN & HAIR",
        subCategory: "Face Care",
        brand: "Ribana",
        price: 850,
        stock: 20,
        specs: "Exfoliating & Deep Cleansing",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80"
    },
    {
        id: 146,
        title: "Natural Herbal Hair Fall Solution Oil",
        category: "SKIN & HAIR",
        subCategory: "Hair Care",
        brand: "Parachute",
        price: 520,
        stock: 15,
        specs: "Onion & Hibiscus Infused Extract",
        image: "https://images.unsplash.com/photo-1608248597261-833257647009?w=400&q=80"
    },
    {
        id: 147,
        title: "Rose Water & Aloe Facial Toner",
        category: "SKIN & HAIR",
        subCategory: "Face Care",
        brand: "Aarong Earth",
        price: 650,
        stock: 10,
        specs: "Hydrating Mist | 100% Organic",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400&q=80"
    },

    // --- ADDITIONAL VARIATIONS (To complete 50 unique listings) ---
    {
        id: 148,
        title: "Tecno Camon 30 Ultra 5G",
        category: "MOBILES",
        subCategory: "5G Mobiles",
        brand: "Tecno",
        price: 36289,
        stock: 7,
        specs: "12GB RAM | 512GB ROM | 50MP OIS Camera",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80"
    },
    {
        id: 149,
        title: "Realme GT 6 Master Edition",
        category: "MOBILES",
        subCategory: "AI Smartphones",
        brand: "Realme",
        price: 60498,
        stock: 10,
        specs: "Snapdragon 8 Gen 3 | 120Hz Curved Display",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=80"
    },
    {
        id: 150,
        title: "Xiaomi Redmi Note 13 Pro Max",
        category: "MOBILES",
        subCategory: "Best Camera",
        brand: "Xiaomi",
        price: 31350,
        stock: 13,
        specs: "200MP Camera | 120W Fast Charging",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&q=80"
    }
];

let cart = [];
let wishlist = [];
let compareList = [];
let orders = [];

let currentUser = { name: "Guest", role: "customer" };
let selectedCategory = "ALL";
let selectedSubCategory = "ALL";
let minPrice = 0;
let maxPrice = 999999;
let viewMode = "grid";
let appliedDiscount = 0;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    filterProducts();
    updateBadges();
    renderSellerInventory();
    renderAdminStats();
});

// --- ROLE & VIEW MANAGEMENT ---
function requestRoleSwitch(role) {
    const customerView = document.getElementById("customer-view");
    const sellerView = document.getElementById("seller-view");
    const adminView = document.getElementById("admin-view");

    if (!customerView || !sellerView || !adminView) return;

    customerView.classList.add("hidden");
    sellerView.classList.add("hidden");
    adminView.classList.add("hidden");

    if (role === 'customer') {
        customerView.classList.remove("hidden");
        currentUser.role = "customer";
        document.getElementById("user-status-text").innerHTML = `Active User: <strong>${currentUser.name} (Customer)</strong>`;
        filterProducts();
    } else if (role === 'seller') {
        sellerView.classList.remove("hidden");
        currentUser.role = "seller";
        document.getElementById("user-status-text").innerHTML = `Active User: <strong>Store Seller</strong>`;
        renderSellerInventory();
    } else if (role === 'admin') {
        adminView.classList.remove("hidden");
        currentUser.role = "admin";
        document.getElementById("user-status-text").innerHTML = `Active User: <strong>System Admin</strong>`;
        renderAdminStats();
    }
}

// --- PORTAL MODAL TAB SWITCHING & AUTH ---
function switchPortalTab(tab) {
    const guestTab = document.getElementById("guest-portal-content");
    const staffTab = document.getElementById("staff-portal-content");
    const guestBtn = document.getElementById("tab-guest-btn");
    const staffBtn = document.getElementById("tab-staff-btn");

    if (tab === 'guest') {
        if(guestTab) guestTab.classList.remove("hidden");
        if(staffTab) staffTab.classList.add("hidden");
        if(guestBtn) guestBtn.classList.add("active");
        if(staffBtn) staffBtn.classList.remove("active");
    } else {
        if(guestTab) guestTab.classList.add("hidden");
        if(staffTab) staffTab.classList.remove("hidden");
        if(guestBtn) guestBtn.classList.remove("active");
        if(staffBtn) staffBtn.classList.add("active");
    }
}

function handleCustomerAccess(event) {
    event.preventDefault();
    const nameInput = document.getElementById("guest-name");
    const name = nameInput ? nameInput.value : "Customer";
    currentUser = { name: name, role: "customer" };
    closeModal("auth-modal");
    requestRoleSwitch("customer");
}

function enterAsGuest() {
    currentUser = { name: "Guest User", role: "customer" };
    closeModal("auth-modal");
    requestRoleSwitch("customer");
}

function handleStaffAccess(event) {
    event.preventDefault();
    const roleSelect = document.getElementById("staff-role-select").value;
    closeModal("auth-modal");
    requestRoleSwitch(roleSelect);
}

// --- MODAL CONTROL ---
function openModal(modalId) {
    const elem = document.getElementById(modalId);
    if (elem) elem.classList.add("active");
    if (modalId === 'cart-modal') renderCart();
    if (modalId === 'wishlist-modal') renderWishlist();
    if (modalId === 'compare-modal') renderCompare();
    if (modalId === 'orders-modal') renderOrders();
}

function closeModal(modalId) {
    const elem = document.getElementById(modalId);
    if (elem) elem.classList.remove("active");
}

// --- PRODUCT FILTERING & RENDERING ---
function setCategoryFilter(cat) {
    selectedCategory = cat;
    selectedSubCategory = "ALL";
    const selectElem = document.getElementById("search-category-select");
    if (selectElem) selectElem.value = cat;
    requestRoleSwitch("customer");
    filterProducts();
}

function setSubCategoryFilter(subCat) {
    selectedSubCategory = subCat;
    requestRoleSwitch("customer");
    filterProducts();
}

function setPriceRange(min, max) {
    minPrice = min;
    maxPrice = max;
    
    document.querySelectorAll(".price-pills .pill-btn").forEach(btn => btn.classList.remove("active"));
    if (window.event && window.event.target) window.event.target.classList.add("active");
    
    filterProducts();
}

function setViewMode(mode) {
    viewMode = mode;
    const gridBtn = document.getElementById("grid-view-btn");
    const listBtn = document.getElementById("list-view-btn");
    if (gridBtn) gridBtn.classList.toggle("active", mode === 'grid');
    if (listBtn) listBtn.classList.toggle("active", mode === 'list');
    filterProducts();
}

function filterProducts() {
    const searchVal = (document.getElementById("search-input")?.value || "").toLowerCase();
    const catVal = document.getElementById("search-category-select")?.value || "ALL";
    const brandVal = document.getElementById("brand-select")?.value || "ALL";
    const sortVal = document.getElementById("sort-select")?.value || "default";

    if (catVal !== "ALL") selectedCategory = catVal;

    let filtered = products.filter(p => {
        const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
        const matchesSubCat = selectedSubCategory === "ALL" || p.subCategory === selectedSubCategory;
        const matchesBrand = brandVal === "ALL" || p.brand === brandVal;
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice;
        const matchesSearch = p.title.toLowerCase().includes(searchVal) || 
                              p.brand.toLowerCase().includes(searchVal) ||
                              p.specs.toLowerCase().includes(searchVal);

        return matchesCategory && matchesSubCat && matchesBrand && matchesPrice && matchesSearch;
    });

    if (sortVal === "low-high") {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === "high-low") {
        filtered.sort((a, b) => b.price - a.price);
    }

    const heading = document.getElementById("current-filter-heading");
    if (heading) {
        let label = `Products (${filtered.length})`;
        if (selectedCategory !== "ALL") label = `${selectedCategory} ${selectedSubCategory !== "ALL" ? '> ' + selectedSubCategory : ''} (${filtered.length})`;
        heading.innerText = label;
    }

    renderProducts(filtered);
}

function renderProducts(items) {
    const container = document.getElementById("product-grid");
    if (!container) return;

    if (items.length === 0) {
        container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #64748b;">
            <i class="fa-solid fa-box-open" style="font-size: 48px; margin-bottom: 12px;"></i>
            <h3>No products found matching your filters</h3>
        </div>`;
        return;
    }

    container.style.display = viewMode === "grid" ? "grid" : "block";

    container.innerHTML = items.map(p => {
        const isWish = wishlist.includes(p.id);
        const isComp = compareList.includes(p.id);

        if (viewMode === "grid") {
            return `
            <div class="product-card" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; background: #fff; display:flex; flex-direction:column; justify-between;">
                <img src="${p.image}" alt="${p.title}" style="width:100%; height:180px; object-fit:cover; border-radius:6px;">
                <div style="margin-top:10px; flex:1;">
                    <small style="color:#64748b; font-weight:600; text-transform:uppercase;">${p.brand} | ${p.category}</small>
                    <h4 style="margin: 5px 0; font-size:15px; color:#1e293b;">${p.title}</h4>
                    <p style="font-size:12px; color:#64748b; min-height:34px; margin-bottom:10px;">${p.specs}</p>
                    <div style="display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:bold; font-size:17px; color:#2563eb;">৳${p.price.toLocaleString()}</span>
                        <span style="font-size:11px; font-weight:600; padding:2px 6px; border-radius:4px; background:${p.stock > 0 ? '#dcfce7' : '#fee2e2'}; color:${p.stock > 0 ? '#166534' : '#991b1b'};">
                            ${p.stock > 0 ? 'Stock: ' + p.stock : 'Stock Out'}
                        </span>
                    </div>
                </div>
                <div style="margin-top:12px; display:flex; gap:6px;">
                    <button class="btn-primary" style="flex:1; padding:8px 10px; font-size:13px;" onclick="addToCart(${p.id})">
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                    <button onclick="toggleWishlist(${p.id})" style="padding:8px 12px; border:1px solid #cbd5e1; border-radius:4px; background:${isWish ? '#fee2e2' : '#fff'}; cursor:pointer;">
                        <i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart" style="color:${isWish ? '#ef4444' : '#64748b'};"></i>
                    </button>
                    <button onclick="toggleCompare(${p.id})" style="padding:8px 12px; border:1px solid #cbd5e1; border-radius:4px; background:${isComp ? '#dbeafe' : '#fff'}; cursor:pointer;">
                        <i class="fa-solid fa-scale-balanced" style="color:${isComp ? '#2563eb' : '#64748b'};"></i>
                    </button>
                </div>
            </div>`;
        } else {
            return `
            <div class="product-card-list" style="display:flex; gap:20px; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; background: #fff; margin-bottom:12px; align-items:center;">
                <img src="${p.image}" alt="${p.title}" style="width:120px; height:100px; object-fit:cover; border-radius:6px;">
                <div style="flex:1;">
                    <small style="color:#64748b; font-weight:600;">${p.brand} | ${p.category}</small>
                    <h4 style="margin: 2px 0;">${p.title}</h4>
                    <p style="font-size:13px; color:#475569;">${p.specs}</p>
                </div>
                <div style="text-align:right;">
                    <h3 style="color:#2563eb; margin:0 0 10px 0;">৳${p.price.toLocaleString()}</h3>
                    <div style="display:flex; gap:6px;">
                        <button class="btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
                        <button onclick="toggleWishlist(${p.id})" style="padding:8px; border:1px solid #cbd5e1; border-radius:4px;"><i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart" style="color:${isWish ? '#ef4444' : '#64748b'}"></i></button>
                    </div>
                </div>
            </div>`;
        }
    }).join('');
}

// --- CART & WISHLIST & COMPARE ACTIONS ---
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    if (!item) return;

    const existing = cart.find(c => c.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateBadges();
    alert(`"${item.title}" cart-এ যোগ করা হয়েছে!`);
}

function updateCartQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            cart = cart.filter(c => c.id !== id);
        }
    }
    renderCart();
    updateBadges();
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    renderCart();
    updateBadges();
}

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }
    updateBadges();
    filterProducts();
}

function toggleCompare(id) {
    if (compareList.includes(id)) {
        compareList = compareList.filter(item => item !== id);
    } else {
        if (compareList.length >= 3) {
            alert("সর্বোচ্চ ৩টি প্রোডাক্ট তুলনা করা যাবে।");
            return;
        }
        compareList.push(id);
    }
    updateBadges();
    filterProducts();
}

function updateBadges() {
    const cartBadge = document.getElementById("cart-count");
    const wishBadge = document.getElementById("wishlist-count");
    const compBadge = document.getElementById("compare-count");
    const orderBadge = document.getElementById("orders-count");

    if (cartBadge) cartBadge.innerText = cart.reduce((acc, curr) => acc + curr.qty, 0);
    if (wishBadge) wishBadge.innerText = wishlist.length;
    if (compBadge) compBadge.innerText = compareList.length;
    if (orderBadge) orderBadge.innerText = orders.length;
}

// --- RENDER MODALS DATA ---
function renderCart() {
    const container = document.getElementById("cart-items-container");
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>Your cart is empty.</p>";
        document.getElementById("cart-subtotal").innerText = "0";
        document.getElementById("cart-discount").innerText = "0";
        document.getElementById("cart-grand-total").innerText = "0";
        return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map(item => {
        const total = item.price * item.qty;
        subtotal += total;
        return `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e2e8f0; padding:10px 0;">
            <div>
                <strong>${item.title}</strong><br>
                <small style="color:#64748b;">৳${item.price.toLocaleString()} x ${item.qty}</small>
            </div>
            <div style="display:flex; align-items:center;">
                <button style="padding:2px 8px;" onclick="updateCartQty(${item.id}, -1)">-</button>
                <span style="margin:0 8px; font-weight:bold;">${item.qty}</span>
                <button style="padding:2px 8px;" onclick="updateCartQty(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" style="margin-left:12px; color:#ef4444; border:none; background:none; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;
    }).join('');

    const discountAmount = (subtotal * appliedDiscount) / 100;
    const grandTotal = subtotal - discountAmount;

    document.getElementById("cart-subtotal").innerText = subtotal.toLocaleString();
    document.getElementById("cart-discount").innerText = discountAmount.toLocaleString();
    document.getElementById("cart-grand-total").innerText = grandTotal.toLocaleString();
}

function applyCoupon() {
    const input = document.getElementById("coupon-code");
    const code = input ? input.value.trim().toUpperCase() : "";
    if (code === "WELCOME20") {
        appliedDiscount = 20;
        alert("কুপন সফলভাবে প্রয়োগ হয়েছে! ২০% ডিসকাউন্ট যোগ করা হলো।");
    } else {
        alert("অবৈধ কুপন কোড! চেষ্টা করুন: WELCOME20");
    }
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("কার্ট খালি!");
        return;
    }

    const orderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    orders.push({
        id: orderId,
        items: [...cart],
        amount: totalAmount,
        status: "Processing",
        date: new Date().toLocaleDateString()
    });

    cart = [];
    appliedDiscount = 0;
    updateBadges();
    closeModal("cart-modal");
    alert(`অর্ডার সফলভাবে সম্পন্ন হয়েছে! আপনার Order ID: ${orderId}`);
    renderAdminStats();
    renderSellerInventory();
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items-container");
    if (!container) return;

    const items = products.filter(p => wishlist.includes(p.id));

    if (items.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>Wishlist is empty.</p>";
        return;
    }

    container.innerHTML = items.map(p => `
    <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #e2e8f0;">
        <span>${p.title} - <strong>৳${p.price.toLocaleString()}</strong></span>
        <div>
            <button class="btn-sm btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
            <button onclick="toggleWishlist(${p.id})" style="color:#ef4444; border:none; background:none; cursor:pointer; margin-left:8px;"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`).join('');
}

function renderCompare() {
    const container = document.getElementById("compare-items-container");
    if (!container) return;

    const items = products.filter(p => compareList.includes(p.id));

    if (items.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>No items selected for comparison.</p>";
        return;
    }

    container.innerHTML = `
    <table style="width:100%; border-collapse:collapse; text-align:left; font-size:14px;">
        <thead>
            <tr style="border-bottom:2px solid #cbd5e1; background:#f8fafc;">
                <th style="padding:8px;">Feature</th>
                ${items.map(p => `<th style="padding:8px;">${p.title}</th>`).join('')}
            </tr>
        </thead>
        <tbody>
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px;"><strong>Price</strong></td>
                ${items.map(p => `<td style="padding:8px; color:#2563eb; font-weight:bold;">৳${p.price.toLocaleString()}</td>`).join('')}
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px;"><strong>Brand</strong></td>
                ${items.map(p => `<td style="padding:8px;">${p.brand}</td>`).join('')}
            </tr>
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:8px;"><strong>Category</strong></td>
                ${items.map(p => `<td style="padding:8px;">${p.category}</td>`).join('')}
            </tr>
            <tr>
                <td style="padding:8px;"><strong>Specs</strong></td>
                ${items.map(p => `<td style="padding:8px; font-size:12px; color:#475569;">${p.specs}</td>`).join('')}
            </tr>
        </tbody>
    </table>`;
}

function renderOrders() {
    const container = document.getElementById("orders-items-container");
    if (!container) return;

    if (orders.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>No orders placed yet.</p>";
        return;
    }

    container.innerHTML = orders.map(o => `
    <div style="border:1px solid #e2e8f0; border-radius:6px; padding:12px; margin-bottom:10px; background:#fff;">
        <div style="display:flex; justify-content:space-between; font-weight:bold;">
            <span>Order ID: ${o.id}</span>
            <span style="color:#2563eb;">${o.status}</span>
        </div>
        <small style="color:#64748b;">Date: ${o.date}</small>
        <hr style="margin:8px 0; border:none; border-top:1px solid #e2e8f0;">
        <div>Total Amount: <strong>৳${o.amount.toLocaleString()}</strong></div>
    </div>`).join('');
}

// --- SELLER DASHBOARD LOGIC ---
function renderSellerInventory() {
    const tbody = document.getElementById("seller-inventory-table");
    if (!tbody) return;

    tbody.innerHTML = products.map(p => `
    <tr>
        <td>#${p.id}</td>
        <td><strong>${p.title}</strong></td>
        <td>${p.category}</td>
        <td>${p.brand}</td>
        <td>৳${p.price.toLocaleString()}</td>
        <td>${p.stock}</td>
        <td><button class="btn-sm btn-danger" onclick="deleteProduct(${p.id})" style="padding:4px 8px; border-radius:4px; border:none; background:#ef4444; color:#fff; cursor:pointer;">Delete</button></td>
    </tr>`).join('');

    const sellerSalesTotal = orders.reduce((sum, o) => sum + o.amount, 0);
    const totalSalesElem = document.getElementById("seller-total-sales");
    const activeProductsElem = document.getElementById("seller-active-products");
    const totalOrdersElem = document.getElementById("seller-total-orders");

    if (totalSalesElem) totalSalesElem.innerText = `৳ ${sellerSalesTotal.toLocaleString()}`;
    if (activeProductsElem) activeProductsElem.innerText = products.length;
    if (totalOrdersElem) totalOrdersElem.innerText = orders.length;
}

function saveProduct(event) {
    event.preventDefault();
    const name = document.getElementById("new-prod-name")?.value;
    const cat = document.getElementById("new-prod-category")?.value;
    const brand = document.getElementById("new-prod-brand")?.value;
    const subcat = document.getElementById("new-prod-subcat")?.value;
    const price = parseFloat(document.getElementById("new-prod-price")?.value || 0);
    const stock = parseInt(document.getElementById("new-prod-stock")?.value || 0);
    const spec = document.getElementById("new-prod-spec")?.value || "";
    const img = document.getElementById("new-prod-img")?.value;

    const newProd = {
        id: Date.now(),
        title: name,
        category: cat,
        subCategory: subcat,
        brand: brand,
        price: price,
        stock: stock,
        specs: spec,
        image: img || "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&q=80"
    };

    products.unshift(newProd);
    closeModal("product-modal");
    document.getElementById("add-product-form")?.reset();
    renderSellerInventory();
    filterProducts();
    alert("নতুন প্রোডাক্ট সফলভাবে ইনভেন্টরিতে যুক্ত হয়েছে!");
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    renderSellerInventory();
    filterProducts();
}

// --- ADMIN DASHBOARD LOGIC ---
function renderAdminStats() {
    const gross = orders.reduce((sum, o) => sum + o.amount, 0);
    const grossElem = document.getElementById("admin-gross-revenue");
    const ordersElem = document.getElementById("admin-platform-orders");

    if (grossElem) grossElem.innerText = `৳ ${gross.toLocaleString()}`;
    if (ordersElem) ordersElem.innerText = orders.length;
}

function approveSeller(storeId) {
    const target = storeId.toLowerCase();
    const statusElem = document.getElementById(`status-${target}`);
    const actionElem = document.getElementById(`action-${target}`);

    if (statusElem) {
        statusElem.className = "tag tag-success";
        statusElem.innerText = "VERIFIED";
    }
    if (actionElem) {
        actionElem.innerHTML = `<button class="btn-sm btn-disabled" disabled style="padding:4px 8px; border-radius:4px; border:none; background:#cbd5e1;">Approved</button>`;
    }
}

function rejectSeller(storeId) {
    const target = storeId.toLowerCase();
    const statusElem = document.getElementById(`status-${target}`);
    const actionElem = document.getElementById(`action-${target}`);

    if (statusElem) {
        statusElem.className = "tag tag-danger";
        statusElem.innerText = "REJECTED";
    }
    if (actionElem) {
        actionElem.innerHTML = `<button class="btn-sm btn-disabled" disabled style="padding:4px 8px; border-radius:4px; border:none; background:#cbd5e1;">Rejected</button>`;
    }
}
