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
        image: "images (17).jpg"
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
        image: "images (18).jpg"
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
        image: "images (19).jpg"
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
        image: "images (20).jpg"
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
        image: "images (21).jpg"
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
        image: "images (22).jpg"
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
        image: "images (23).jpg"
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
        image: "images (24).jpg"
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
        image: "images (25).jpg"
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
        image: "images (26).jpg"
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
        image: "images (27).jpg"
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
        image: "images (28).jpg"
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
        image: "images (29).jpg"
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
        image: "images (30).jpg"
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
        image: "images (31).jpg"
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
        image: "images (32).jpg"
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
        image: "images (33).jpg"
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
        image: "images (34).jpg"
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
        image: "images (35).jpg"
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
        image: "images (36).jpg"
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
        image: "images (37).jpg"
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
        image: "images (38).jpg"
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
        image: "images (39).jpg"
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
        image: "images (40).jpg"
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
        image: "images (41).jpg"
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
        image: "images (42).jpg"
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
        image: "images (43).jpg"
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
        image: "images (44).jpg"
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
        image: "images (45).jpg"
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
        image: "images (46).jpg"
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
        image: "images (47).jpg"
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
        image: "images (48).jpg"
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
        image: "images (49).jpg"
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
        image: "images (50).jpg"
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
        image: "images (51).jpg"
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
        image: "images (52).jpg"
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
        image: "images (53).jpg"
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
        image: "images (54).jpg"
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
        image: "images (55).jpg"
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
        image: "images (56).jpg"
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
        image: "images (58).jpg"
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
        image: "images (59).jpg"
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
        image: "images (71).jpg"
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
        image: "images (61).jpg"
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
        image: "images (62).jpg"
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
        image: "images (63).jpg"
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
        image: "images (64).jpg"
    },

    // --- ADDITIONAL VARIATIONS (4 Items) ---
    {
        id: 148,
        title: "Tecno Camon 30 Ultra 5G",
        category: "MOBILES",
        subCategory: "5G Mobiles",
        brand: "Tecno",
        price: 36289,
        stock: 7,
        specs: "12GB RAM | 512GB ROM | 50MP OIS Camera",
        image: "images (65).jpg"
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
        image: "images (66).jpg"
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
        image: "images (67).jpg"
    },
    {
        id: 151,
        title: "Iphone 15 Pro",
        category: "MOBILES",
        subCategory: "Best Camera",
        brand: "Apple",
        price: 110000,
        stock: 13,
        specs: "46MP Camera | 3,274 mAh Fast Charging",
        image: "images (68).jpg"
    }
];

let cart = [];
let wishlist = [];
let compareList = [];
let orders = [];

// --- AD CAMPAIGN STATE ---
let ads = [
    { id: 1, storeId: "STR-801", storeName: "Aarong Fashion Store", ownerEmail: "vendor1@aarong.com", slot: "Hero Main Banner", price: 2500, duration: "7 Days", status: "APPROVED" },
    { id: 2, storeId: "STR-802", storeName: "MobileDokan BD", ownerEmail: "contact@mobiledokan.bd", slot: "Category Banner", price: 1500, duration: "5 Days", status: "PENDING" }
];

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
    const statusText = document.getElementById("user-status-text");

    if (customerView) customerView.classList.add("hidden");
    if (sellerView) sellerView.classList.add("hidden");
    if (adminView) adminView.classList.add("hidden");

    if (role === 'customer') {
        if (customerView) customerView.classList.remove("hidden");
        currentUser.role = "customer";
        if (statusText) statusText.innerHTML = `Active User: <strong>${currentUser.name} (Customer)</strong>`;
        filterProducts();
    } else if (role === 'seller') {
        if (sellerView) sellerView.classList.remove("hidden");
        currentUser.role = "seller";
        if (statusText) statusText.innerHTML = `Active User: <strong>Store Seller</strong>`;
        renderSellerInventory();
    } else if (role === 'admin') {
        if (adminView) adminView.classList.remove("hidden");
        currentUser.role = "admin";
        if (statusText) statusText.innerHTML = `Active User: <strong>System Admin</strong>`;
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
        if (guestTab) guestTab.classList.remove("hidden");
        if (staffTab) staffTab.classList.add("hidden");
        if (guestBtn) guestBtn.classList.add("active");
        if (staffBtn) staffBtn.classList.remove("active");
    } else {
        if (guestTab) guestTab.classList.add("hidden");
        if (staffTab) staffTab.classList.remove("hidden");
        if (guestBtn) guestBtn.classList.remove("active");
        if (staffBtn) staffBtn.classList.add("active");
    }
}

function handleCustomerAccess(event) {
    if (event && event.preventDefault) event.preventDefault();
    const nameInput = document.getElementById("guest-name");
    const name = nameInput && nameInput.value.trim() !== "" ? nameInput.value : "Customer";
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
    if (event && event.preventDefault) event.preventDefault();
    const roleSelect = document.getElementById("staff-role-select");
    const selectedRole = roleSelect ? roleSelect.value : 'seller';
    closeModal("auth-modal");
    requestRoleSwitch(selectedRole);
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
    if (currentUser.role === "customer") requestRoleSwitch("customer");
    filterProducts();
}

function setSubCategoryFilter(subCat) {
    selectedSubCategory = subCat;
    if (currentUser.role === "customer") requestRoleSwitch("customer");
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
            <div class="product-card" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; background: #fff; display:flex; flex-direction:column; justify-content:space-between;">
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

    if (item.stock <= 0) {
        alert("দুঃখিত, এই প্রোডাক্টটি বর্তমানে স্টক আউট!");
        return;
    }

    const existing = cart.find(c => c.id === productId);
    if (existing) {
        if (existing.qty < item.stock) {
            existing.qty++;
        } else {
            alert(`স্টকে শুধুমাত্র ${item.stock} টি আইটেম উপলব্ধ আছে।`);
            return;
        }
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateBadges();
    alert(`"${item.title}" কার্ডে যোগ করা হয়েছে!`);
}

function updateCartQty(id, delta) {
    const item = cart.find(c => c.id === id);
    const prod = products.find(p => p.id === id);

    if (item) {
        if (delta > 0 && item.qty >= prod.stock) {
            alert(`স্টকে সর্বমোট ${prod.stock} টি প্রোডাক্ট রয়েছে।`);
            return;
        }
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

// --- RENDER CART MODAL ---
function renderCart() {
    const container = document.getElementById("cart-items-container");
    const subtotalElem = document.getElementById("cart-subtotal");
    const discountElem = document.getElementById("cart-discount");
    const totalElem = document.getElementById("cart-grand-total");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>Your cart is empty.</p>";
        if (subtotalElem) subtotalElem.innerText = "0";
        if (discountElem) discountElem.innerText = "0";
        if (totalElem) totalElem.innerText = "0";
        return;
    }

    let subtotal = 0;
    container.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        return `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e2e8f0; padding:10px 0;">
            <div style="display:flex; align-items:center; gap:12px;">
                <img src="${item.image}" alt="${item.title}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
                <div>
                    <h5 style="margin:0; font-size:14px;">${item.title}</h5>
                    <small style="color:#64748b;">৳${item.price.toLocaleString()} x ${item.qty}</small>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
                <button onclick="updateCartQty(${item.id}, -1)" style="padding:2px 8px; border:1px solid #cbd5e1; border-radius:4px;">-</button>
                <span>${item.qty}</span>
                <button onclick="updateCartQty(${item.id}, 1)" style="padding:2px 8px; border:1px solid #cbd5e1; border-radius:4px;">+</button>
                <button onclick="removeFromCart(${item.id})" style="color:#ef4444; border:none; background:none; cursor:pointer; margin-left:10px;"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>`;
    }).join('');

    const discountAmount = Math.round((subtotal * appliedDiscount) / 100);
    const grandTotal = subtotal - discountAmount;

    if (subtotalElem) subtotalElem.innerText = subtotal.toLocaleString();
    if (discountElem) discountElem.innerText = discountAmount.toLocaleString();
    if (totalElem) totalElem.innerText = grandTotal.toLocaleString();
}

// --- COUPON APPLICATION & CHECKOUT ---
function applyCoupon() {
    const input = document.getElementById("coupon-code") || document.getElementById("coupon-input");
    const code = input ? input.value.trim().toUpperCase() : "";

    if (code === "SAMISA20") {
        appliedDiscount = 20;
        alert("🎉 অভিনন্দন! 'SAMISA20' কুপনে ২০% ডিসকাউন্ট প্রয়োগ করা হয়েছে!");
    } else if (code === "PROMO10" || code === "DISCOUNT10") {
        appliedDiscount = 10;
        alert("🎉 ১০% ডিসকাউন্ট কুপন সফলভাবে প্রয়োগ করা হয়েছে!");
    } else {
        appliedDiscount = 0;
        alert("❌ অবৈধ কুপন কোড! সঠিক কোড প্রয়োগ করুন।");
    }
    renderCart();
}

function processCheckout() {
    if (cart.length === 0) {
        alert("আপনার কার্ট খালি!");
        return;
    }
    let subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let discountAmount = Math.round((subtotal * appliedDiscount) / 100);
    let grandTotal = subtotal - discountAmount;

    const newOrder = {
        id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('bn-BD'),
        items: [...cart],
        totalAmount: grandTotal,
        status: "Processing"
    };

    orders.push(newOrder);

    cart.forEach(cartItem => {
        let prod = products.find(p => p.id === cartItem.id);
        if (prod) prod.stock -= cartItem.qty;
    });

    cart = [];
    appliedDiscount = 0;
    updateBadges();
    closeModal("cart-modal");
    alert(`✅ অর্ডার সফল হয়েছে! Order ID: ${newOrder.id}`);
    filterProducts();
    renderAdminStats();
}

// --- WISHLIST, COMPARE & ORDERS RENDERERS ---
function renderWishlist() {
    const container = document.getElementById("wishlist-items-container");
    if (!container) return;
    let wishProducts = products.filter(p => wishlist.includes(p.id));
    if (wishProducts.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>Wishlist is empty.</p>";
        return;
    }
    container.innerHTML = wishProducts.map(p => `
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #e2e8f0; padding:10px 0;">
            <div style="display:flex; align-items:center; gap:12px;">
                <img src="${p.image}" alt="${p.title}" style="width:50px; height:50px; object-fit:cover; border-radius:4px;">
                <div>
                    <h5 style="margin:0;">${p.title}</h5>
                    <small style="color:#2563eb; font-weight:bold;">৳${p.price.toLocaleString()}</small>
                </div>
            </div>
            <div style="display:flex; gap:8px;">
                <button class="btn-primary" style="padding:4px 10px; font-size:12px;" onclick="addToCart(${p.id})">Add to Cart</button>
                <button onclick="toggleWishlist(${p.id})" style="border:none; background:none; color:#ef4444; cursor:pointer;"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    `).join('');
}

function renderCompare() {
    const container = document.getElementById("compare-items-container");
    if (!container) return;
    let compProducts = products.filter(p => compareList.includes(p.id));
    if (compProducts.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>No items selected for comparison.</p>";
        return;
    }
    container.innerHTML = `
        <div style="display:grid; grid-template-columns: repeat(${compProducts.length}, 1fr); gap:15px;">
            ${compProducts.map(p => `
                <div style="border:1px solid #cbd5e1; border-radius:8px; padding:10px; text-align:center;">
                    <img src="${p.image}" style="width:100%; height:100px; object-fit:cover; border-radius:4px;">
                    <h5 style="margin:8px 0 4px 0; font-size:13px;">${p.title}</h5>
                    <p style="color:#2563eb; font-weight:bold; margin:0 0 8px 0;">৳${p.price.toLocaleString()}</p>
                    <p style="font-size:11px; color:#64748b;">${p.specs}</p>
                    <button onclick="toggleCompare(${p.id})" style="margin-top:8px; color:#ef4444; border:1px solid #fee2e2; background:#fff; padding:4px 8px; border-radius:4px; font-size:11px; cursor:pointer;">Remove</button>
                </div>
            `).join('')}
        </div>
    `;
}

function renderOrders() {
    const container = document.getElementById("orders-items-container");
    if (!container) return;
    if (orders.length === 0) {
        container.innerHTML = "<p style='text-align:center; padding:20px; color:#64748b;'>No order history found.</p>";
        return;
    }
    container.innerHTML = orders.map(ord => `
        <div style="border:1px solid #e2e8f0; border-radius:6px; padding:12px; margin-bottom:10px; background:#f8fafc;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <strong>${ord.id}</strong>
                <span style="font-size:12px; color:#64748b;">${ord.date}</span>
            </div>
            <div style="font-size:13px; color:#475569;">
                Items: ${ord.items.map(i => `${i.title} (x${i.qty})`).join(', ')}
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; margin-top:8px; font-weight:bold;">
                <span>Total: ৳${ord.totalAmount.toLocaleString()}</span>
                <span style="color:#16a34a; font-size:12px;">Status: ${ord.status}</span>
            </div>
        </div>
    `).join('');
}

// --- SELLER & ADMIN DASHBOARD MANAGEMENT WITH AD CAMPAIGNS ---
function renderSellerInventory() {
    const container = document.getElementById("seller-inventory-table");
    if (!container) return;
    container.innerHTML = products.slice(0, 10).map(p => `
        <tr>
            <td>#${p.id}</td>
            <td><strong>${p.title}</strong></td>
            <td>${p.category}</td>
            <td>৳${p.price.toLocaleString()}</td>
            <td>${p.stock}</td>
            <td><span style="color:#16a34a; font-weight:600;">Active</span></td>
        </tr>
    `).join('');
}

function requestNewAdCampaign(storeName, slot, price) {
    const newAd = {
        id: Date.now(),
        storeId: "STR-" + Math.floor(1000 + Math.random() * 9000),
        storeName: storeName || "My Store",
        ownerEmail: "seller@marketloop.com",
        slot: slot || "Hero Main Banner",
        price: price || 2000,
        duration: "7 Days",
        status: "PENDING"
    };
    ads.push(newAd);
    alert("✅ আপনার অ্যাড প্রমোশন রিকোয়েস্ট সফলভাবে জমা দেওয়া হয়েছে! এডমিন অ্যাপ্রুভ করলে এটি চালু হবে।");
    renderAdminStats();
}

function renderAdminStats() {
    const revenueElem = document.getElementById("stat-gross-revenue");
    const sellersElem = document.getElementById("stat-registered-sellers");
    const ordersElem = document.getElementById("stat-platform-orders");
    const adEarningsElem = document.getElementById("stat-ad-earnings");

    let totalGrossRevenue = orders.reduce((acc, o) => acc + o.totalAmount, 0);
    let totalAdRevenue = ads.filter(a => a.status === "APPROVED").reduce((acc, a) => acc + a.price, 0);
    let activeAdsCount = ads.filter(a => a.status === 'APPROVED').length;

    if (revenueElem) revenueElem.innerText = "৳ " + totalGrossRevenue.toLocaleString();
    if (sellersElem) sellersElem.innerText = "2 Active";
    if (ordersElem) ordersElem.innerText = orders.length;
    if (adEarningsElem) adEarningsElem.innerText = `৳ ${totalAdRevenue.toLocaleString()} (${activeAdsCount} Active)`;

    // Render Ad Approvals Table in Admin Dashboard
    const adTableContainer = document.getElementById("admin-ad-approvals-table");
    if (adTableContainer) {
        adTableContainer.innerHTML = ads.map(ad => `
            <tr>
                <td>${ad.storeId}</td>
                <td><strong>${ad.storeName}</strong></td>
                <td>${ad.slot} (${ad.duration})</td>
                <td>৳${ad.price.toLocaleString()}</td>
                <td>
                    <span style="padding:3px 8px; border-radius:4px; font-size:11px; font-weight:bold; 
                        background:${ad.status === 'APPROVED' ? '#dcfce7' : ad.status === 'REJECTED' ? '#fee2e2' : '#fef3c7'}; 
                        color:${ad.status === 'APPROVED' ? '#15803d' : ad.status === 'REJECTED' ? '#b91c1c' : '#b45309'};">
                        ${ad.status}
                    </span>
                </td>
                <td>
                    ${ad.status === 'PENDING' ? `
                        <button onclick="updateAdStatus(${ad.id}, 'APPROVED')" style="background:#22c55e; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; font-size:12px;">Approve</button>
                        <button onclick="updateAdStatus(${ad.id}, 'REJECTED')" style="background:#ef4444; color:#fff; border:none; padding:4px 8px; border-radius:4px; cursor:pointer; font-size:12px;">Reject</button>
                    ` : `<span style="color:#64748b; font-size:12px;">Completed</span>`}
                </td>
            </tr>
        `).join('');
    }
}

function updateAdStatus(adId, status) {
    const ad = ads.find(a => a.id === adId);
    if (ad) {
        ad.status = status;
        alert(`অ্যাড প্রমোশন রিকোয়েস্ট ${status === 'APPROVED' ? 'অনুমোদন (Approve)' : 'বাতিল (Reject)'} করা হয়েছে!`);
        renderAdminStats();
    }
}
