// EXPANDED PRODUCT DATASET (25 PRODUCTS WITH ACCURATE IMAGES)
let products = [
    // --- MOBILES & TABLETS ---
    {
        id: 201,
        title: "Tecno Camon Slim 5G",
        category: "MOBILES",
        subcategory: "5G Mobiles",
        brand: "Tecno",
        price: 59999,
        stock: 12,
        seller: "MobileDokan BD",
        spec: "Ultra Slim, Dimensity 8020 5G, 64MP OIS Camera",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 202,
        title: "Realme C100x Power",
        category: "MOBILES",
        subcategory: "Best Battery",
        brand: "Realme",
        price: 28500,
        stock: 8,
        seller: "MobileDokan BD",
        spec: "8000mAh Monster Battery, 67W Fast Charging",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 203,
        title: "Xiaomi AI Pro 5G",
        category: "MOBILES",
        subcategory: "AI Smartphones",
        brand: "Xiaomi",
        price: 42000,
        stock: 15,
        seller: "MobileDokan BD",
        spec: "AI Quad Camera System, 120Hz AMOLED Display",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 204,
        title: "Samsung Galaxy S24 Ultra",
        category: "MOBILES",
        subcategory: "Best Camera",
        brand: "Samsung",
        price: 135000,
        stock: 6,
        seller: "Gadget Central BD",
        spec: "200MP Zoom Camera, Snapdragon 8 Gen 3, S-Pen",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 205,
        title: "iPhone 15 Pro Max Titanium",
        category: "MOBILES",
        subcategory: "5G Mobiles",
        brand: "Apple",
        price: 165000,
        stock: 5,
        seller: "Apple Gadgets BD",
        spec: "A17 Pro Chip, Titanium Body, 5x Optical Zoom",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80"
    },

    // --- WOMEN'S FASHION ---
    {
        id: 101,
        title: "Traditional Handcrafted Jamdani Saree",
        category: "WOMEN",
        subcategory: "Saree",
        brand: "Taaga",
        price: 12500,
        stock: 5,
        seller: "Aarong Store",
        spec: "Pure Cotton Handloom Weave, Red & Gold Border",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 102,
        title: "Royal Silk Banarasi Saree",
        category: "WOMEN",
        subcategory: "Saree",
        brand: "Taaga",
        price: 18900,
        stock: 4,
        seller: "Aarong Store",
        spec: "Pure Silk Fabric, Intricate Zari Embroidery",
        image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 103,
        title: "Embroidered Cotton Shalwar Kameez",
        category: "WOMEN",
        subcategory: "Shalwar Kameez",
        brand: "Taaga",
        price: 6500,
        stock: 10,
        seller: "Aarong Store",
        spec: "3-Piece Outfit, Chiffon Dupatta, Organic Cotton",
        image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 104,
        title: "Printed Summer Kurta & Top",
        category: "WOMEN",
        subcategory: "Kurta & Tops",
        brand: "Taaga",
        price: 2450,
        stock: 14,
        seller: "Aarong Store",
        spec: "Breathable Lawn Cotton, Casual Floral Print",
        image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80"
    },

    // --- MEN'S FASHION ---
    {
        id: 301,
        title: "Men's Designer Silk Panjabi",
        category: "MEN",
        subcategory: "Panjabi",
        brand: "Taaga",
        price: 4500,
        stock: 10,
        seller: "Aarong Store",
        spec: "Premium Raw Silk Blend, Mandarin Collar",
        image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 302,
        title: "Cotton Slim-Fit Kabli Panjabi",
        category: "MEN",
        subcategory: "Panjabi",
        brand: "Taaga",
        price: 3200,
        stock: 8,
        seller: "Aarong Store",
        spec: "100% Breathable Cotton, Modern Cut",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 303,
        title: "Casual Short Kurta Shirt",
        category: "MEN",
        subcategory: "Short Kurta",
        brand: "Taaga",
        price: 1850,
        stock: 20,
        seller: "Aarong Store",
        spec: "Full Sleeve Cotton Short Kurta",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 304,
        title: "Stretch Cotton Chino Trousers",
        category: "MEN",
        subcategory: "Trousers",
        brand: "Taaga",
        price: 2600,
        stock: 15,
        seller: "Aarong Store",
        spec: "Slim Fit Twill Cotton Chino Pants",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80"
    },

    // --- HOME DÉCOR ---
    {
        id: 401,
        title: "Quilted Nakshi Kantha Bedcover",
        category: "HOME DÉCOR",
        subcategory: "Bedcovers",
        brand: "Aarong Earth",
        price: 5800,
        stock: 6,
        seller: "Aarong Store",
        spec: "Traditional Stitch Handmade Cotton Spread",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 402,
        title: "Luxury Ceramic Dinnerware Set (24 Pcs)",
        category: "HOME DÉCOR",
        subcategory: "Dining",
        brand: "Aarong Earth",
        price: 8900,
        stock: 3,
        seller: "Aarong Store",
        spec: "Microwave Safe Stoneware Dinner Plates & Bowls",
        image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 403,
        title: "Handcrafted Wooden Serving Tray Set",
        category: "HOME DÉCOR",
        subcategory: "Dining",
        brand: "Aarong Earth",
        price: 2100,
        stock: 12,
        seller: "Aarong Store",
        spec: "Solid Teak Wood Trays with Brass Handles",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },

    // --- SKIN & HAIR ---
    {
        id: 501,
        title: "Aarong Earth Orange Peel Face Pack",
        category: "SKIN & HAIR",
        subcategory: "Face Care",
        brand: "Aarong Earth",
        price: 450,
        stock: 30,
        seller: "Aarong Store",
        spec: "100% Natural Organic Clay Brightening Mask",
        image: "https://images.unsplash.com/photo-1567928257400-f137810776b1?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 502,
        title: "Cold-Pressed Herbal Hair Growth Oil",
        category: "SKIN & HAIR",
        subcategory: "Hair Care",
        brand: "Aarong Earth",
        price: 780,
        stock: 25,
        seller: "Aarong Store",
        spec: "Amla, Bhringraj & Coconut Blend (200ml)",
        image: "https://images.unsplash.com/photo-1608248597261-833244675b1d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 503,
        title: "Vitamin C Radiance Glowing Serum",
        category: "SKIN & HAIR",
        subcategory: "Face Care",
        brand: "Aarong Earth",
        price: 1250,
        stock: 18,
        seller: "Aarong Store",
        spec: "15% Pure Vitamin C + Hyaluronic Acid Formula",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 504,
        title: "Nourishing Argan Oil Shampoo",
        category: "SKIN & HAIR",
        subcategory: "Hair Care",
        brand: "Aarong Earth",
        price: 950,
        stock: 22,
        seller: "Aarong Store",
        spec: "Sulfate-Free Hair Repairing Shampoo (350ml)",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80"
    }
];

// REGISTERED USERS SYSTEM
let registeredUsers = [
    { name: "System Admin", email: "admin@marketloop.com", id: "admin", phone: "01700000000", pass: "admin123", role: "admin" },
    { name: "Demo Seller", email: "seller@marketloop.com", id: "seller", phone: "01800000000", pass: "seller123", role: "seller" },
    { name: "Customer User", email: "customer@gmail.com", id: "01900000000", phone: "01900000000", pass: "123456", role: "customer" }
];

let currentUser = null;
let cart = [];
let wishlist = [];
let compareList = [];
let orders = [];
let appliedDiscount = 0;

let currentCategory = "ALL";
let currentSubCategory = "ALL";
let minPrice = 0;
let maxPrice = 999999;
let currentViewMode = "grid";

// INITIALIZATION (PAGE LOAD ENHANCEMENT)
document.addEventListener("DOMContentLoaded", () => {
    filterProducts();
    updateBadges();

    // পেজ লোড হলে পুরো ওয়েবসাইট লুকানো থাকবে এবং লগইন উইন্ডো খোলা থাকবে
    if (!currentUser) {
        hideMainApp();
        openModal('auth-modal');
    }
});

// UI VISIBILITY CONTROL
function showMainApp() {
    const appWrapper = document.getElementById("app-wrapper");
    if (appWrapper) appWrapper.style.display = "block";
}

function hideMainApp() {
    const appWrapper = document.getElementById("app-wrapper");
    if (appWrapper) appWrapper.style.display = "none";
}

// PORTAL TAB SWITCHER
function switchPortalTab(tab) {
    const guestBtn = document.getElementById("tab-guest-btn");
    const staffBtn = document.getElementById("tab-staff-btn");
    const guestContent = document.getElementById("guest-portal-content");
    const staffContent = document.getElementById("staff-portal-content");

    if (tab === 'guest') {
        if(guestBtn) guestBtn.classList.add("active");
        if(staffBtn) staffBtn.classList.remove("active");
        if(guestContent) guestContent.classList.remove("hidden");
        if(staffContent) staffContent.classList.add("hidden");
    } else {
        if(staffBtn) staffBtn.classList.add("active");
        if(guestBtn) guestBtn.classList.remove("active");
        if(staffContent) staffContent.classList.remove("hidden");
        if(guestContent) guestContent.classList.add("hidden");
    }
}

// ROLE ACCESS REQUEST
function requestRoleSwitch(role) {
    if (role === 'customer') {
        switchRole('customer');
        return;
    }

    if (!currentUser || currentUser.role !== role) {
        switchPortalTab('staff');
        const roleSelect = document.getElementById("staff-role-select");
        if(roleSelect) roleSelect.value = role;
        openModal('auth-modal');
        alert(`Authentication Required: Please login with ${role.toUpperCase()} credentials.`);
    } else {
        switchRole(role);
    }
}

function switchRole(role) {
    document.querySelectorAll(".btn-role").forEach(btn => btn.classList.remove("active"));
    
    const custView = document.getElementById("customer-view");
    const sellView = document.getElementById("seller-view");
    const adminView = document.getElementById("admin-view");

    if (custView) custView.classList.add("hidden");
    if (sellView) sellView.classList.add("hidden");
    if (adminView) adminView.classList.add("hidden");

    if (role === 'customer' && custView) custView.classList.remove("hidden");
    if (role === 'seller' && sellView) {
        sellView.classList.remove("hidden");
        renderSellerInventory();
    }
    if (role === 'admin' && adminView) {
        adminView.classList.remove("hidden");
        updateAdminStats();
    }
}

// CUSTOMER ACCESS (NAME, PHONE, PASS)
function handleCustomerAccess(e) {
    if(e) e.preventDefault();
    const nameInput = document.getElementById("guest-name");
    const phoneInput = document.getElementById("guest-phone");
    const passInput = document.getElementById("guest-pass");

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const pass = passInput ? passInput.value : "";

    if (!name || !phone || !pass) {
        alert("দয়া করে নাম, ফোন নম্বর এবং পাসওয়ার্ড পূরণ করুন।");
        return;
    }

    let user = registeredUsers.find(u => u.phone === phone);
    
    if (!user) {
        user = { name, email: "", phone, id: phone, pass, role: "customer" };
        registeredUsers.push(user);
    }

    currentUser = user;
    updateUserStatus();
    closeModal('auth-modal');
    showMainApp(); // সফলভাবে লগইন করলে ওয়েবসাইট আনলক হবে
    switchRole('customer');
    alert(`স্বাগতম, ${user.name}!`);
}

// STAFF ACCESS (ADMIN / SELLER)
function handleStaffAccess(e) {
    if(e) e.preventDefault();
    const role = document.getElementById("staff-role-select").value;
    const idInput = document.getElementById("staff-id").value.trim();
    const passInput = document.getElementById("staff-pass").value;

    const user = registeredUsers.find(u => 
        (u.email === idInput || u.phone === idInput || u.id === idInput) && 
        u.pass === passInput && 
        u.role === role
    );

    if (user) {
        currentUser = user;
        updateUserStatus();
        closeModal('auth-modal');
        showMainApp();
        switchRole(role);
        alert(`Logged in successfully as ${user.name} (${user.role.toUpperCase()})`);
    } else {
        alert("Access Denied! Invalid Staff ID or Password.");
    }
}

// GUEST ACCESS OPTION
function enterAsGuest() {
    currentUser = null;
    updateUserStatus();
    closeModal('auth-modal');
    showMainApp();
    switchRole('customer');
}

function updateUserStatus() {
    const statusText = document.getElementById("user-status-text");
    const authBtn = document.getElementById("auth-btn");

    if (currentUser) {
        if(statusText) statusText.innerHTML = `Logged in: <strong>${currentUser.name} (${currentUser.role.toUpperCase()})</strong>`;
        if(authBtn) {
            authBtn.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Logout`;
            authBtn.onclick = handleLogout;
        }
    } else {
        if(statusText) statusText.innerHTML = `Active User: <strong>Guest</strong>`;
        if(authBtn) {
            authBtn.innerHTML = `<i class="fa-solid fa-shield-halved"></i> Access Portal`;
            authBtn.onclick = () => openModal('auth-modal');
        }
    }
}

function handleLogout() {
    currentUser = null;
    updateUserStatus();
    hideMainApp(); // ওয়েবসাইট লুকিয়ে দেওয়া হবে
    switchRole('customer');
    alert("Logged out successfully.");
    openModal('auth-modal');
}

// PRODUCT FILTERS
function setCategoryFilter(cat) {
    currentCategory = cat;
    currentSubCategory = "ALL";
    const catSelect = document.getElementById("search-category-select");
    if(catSelect) catSelect.value = cat;
    const heading = document.getElementById("current-filter-heading");
    if(heading) heading.innerText = `Products: ${cat}`;
    filterProducts();
}

function setSubCategoryFilter(subcat) {
    currentSubCategory = subcat;
    const heading = document.getElementById("current-filter-heading");
    if(heading) heading.innerText = `Category: ${subcat}`;
    filterProducts();
}

function setPriceRange(min, max) {
    minPrice = min;
    maxPrice = max;
    document.querySelectorAll(".pill-btn").forEach(btn => btn.classList.remove("active"));
    if(event && event.target) event.target.classList.add("active");
    filterProducts();
}

function setViewMode(mode) {
    currentViewMode = mode;
    const gridBtn = document.getElementById("grid-view-btn");
    const listBtn = document.getElementById("list-view-btn");
    if(gridBtn) gridBtn.classList.toggle("active", mode === 'grid');
    if(listBtn) listBtn.classList.toggle("active", mode === 'list');
    
    const grid = document.getElementById("product-grid");
    if (grid) {
        if (mode === 'list') grid.classList.add("list-view");
        else grid.classList.remove("list-view");
    }
}

function filterProducts() {
    const queryEl = document.getElementById("search-input");
    const catEl = document.getElementById("search-category-select");
    const brandEl = document.getElementById("brand-select");
    const sortEl = document.getElementById("sort-select");

    const query = queryEl ? queryEl.value.toLowerCase() : "";
    const selectCat = catEl ? catEl.value : "ALL";
    const brand = brandEl ? brandEl.value : "ALL";
    const sort = sortEl ? sortEl.value : "default";

    let filtered = products.filter(p => {
        const matchesQuery = p.title.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
        const matchesCat = (selectCat === "ALL" && currentCategory === "ALL") || p.category === selectCat || p.category === currentCategory;
        const matchesSub = currentSubCategory === "ALL" || p.subcategory.toLowerCase().includes(currentSubCategory.toLowerCase());
        const matchesBrand = brand === "ALL" || p.brand === brand;
        const matchesPrice = p.price >= minPrice && p.price <= maxPrice;

        return matchesQuery && matchesCat && matchesSub && matchesBrand && matchesPrice;
    });

    if (sort === "low-high") filtered.sort((a,b) => a.price - b.price);
    if (sort === "high-low") filtered.sort((a,b) => b.price - a.price);

    renderProducts(filtered);
}

// RENDER PRODUCTS
function renderProducts(items) {
    const grid = document.getElementById("product-grid");
    if(!grid) return;
    
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; padding: 30px; text-align:center;'>No products found matching your filters.</p>";
        return;
    }

    items.forEach(p => {
        const isWish = wishlist.includes(p.id);
        const isCompared = compareList.includes(p.id);

        grid.innerHTML += `
            <div class="product-card">
                <span class="wishlist-icon" onclick="toggleWishlist(${p.id})">
                    <i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart" style="color: ${isWish ? '#ef4444' : '#64748b'}"></i>
                </span>
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <div class="product-details">
                    <span class="product-cat">${p.brand} • ${p.subcategory}</span>
                    <h4 class="product-title">${p.title}</h4>
                    <p class="product-spec">${p.spec}</p>
                    <div class="product-meta">
                        <span class="price">৳${p.price.toLocaleString()}</span>
                        <span class="stock-tag">${p.stock > 0 ? 'Stock: ' + p.stock : 'Out of Stock'}</span>
                    </div>
                    <button class="btn-primary full-width" ${p.stock <= 0 ? 'disabled' : ''} onclick="addToCart(${p.id})">
                        ${p.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <label class="compare-check">
                        <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="toggleCompare(${p.id})"> Compare Specs
                    </label>
                </div>
            </div>
        `;
    });
}

// COMPARE FEATURE
function toggleCompare(id) {
    const idx = compareList.indexOf(id);
    if (idx > -1) compareList.splice(idx, 1);
    else {
        if (compareList.length >= 3) {
            alert("Maximum 3 products can be compared at once.");
            filterProducts();
            return;
        }
        compareList.push(id);
    }
    updateBadges();
}

function renderCompareModal() {
    const container = document.getElementById("compare-items-container");
    if(!container) return;
    
    if (compareList.length === 0) {
        container.innerHTML = "<p>No products selected for comparison.</p>";
        return;
    }

    const selectedProds = products.filter(p => compareList.includes(p.id));
    let tableHTML = `<table class="data-table"><thead><tr><th>Specs</th>`;
    
    selectedProds.forEach(p => { tableHTML += `<th>${p.title}</th>`; });
    tableHTML += `</tr></thead><tbody>`;

    tableHTML += `<tr><td><strong>Price</strong></td>` + selectedProds.map(p => `<td>৳${p.price.toLocaleString()}</td>`).join('') + `</tr>`;
    tableHTML += `<tr><td><strong>Brand</strong></td>` + selectedProds.map(p => `<td>${p.brand}</td>`).join('') + `</tr>`;
    tableHTML += `<tr><td><strong>Category</strong></td>` + selectedProds.map(p => `<td>${p.category} (${p.subcategory})</td>`).join('') + `</tr>`;
    tableHTML += `<tr><td><strong>Specifications</strong></td>` + selectedProds.map(p => `<td>${p.spec}</td>`).join('') + `</tr>`;
    tableHTML += `<tr><td><strong>Seller Store</strong></td>` + selectedProds.map(p => `<td>${p.seller}</td>`).join('') + `</tr>`;

    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
}

// CART & WISHLIST SYSTEM
function addToCart(id) {
    const prod = products.find(p => p.id === id);
    const inCart = cart.find(c => c.id === id);

    if (inCart) {
        if (inCart.qty < prod.stock) inCart.qty++;
        else alert("Stock limit reached!");
    } else {
        cart.push({ ...prod, qty: 1 });
    }
    updateBadges();
    alert(`${prod.title} added to shopping cart!`);
}

function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    updateBadges();
    renderCart();
}

function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    if (index > -1) wishlist.splice(index, 1);
    else wishlist.push(id);
    updateBadges();
    filterProducts();
}

function updateBadges() {
    const cartEl = document.getElementById("cart-count");
    const wishEl = document.getElementById("wishlist-count");
    const compEl = document.getElementById("compare-count");
    const ordEl = document.getElementById("orders-count");

    if(cartEl) cartEl.innerText = cart.reduce((s, i) => s + i.qty, 0);
    if(wishEl) wishEl.innerText = wishlist.length;
    if(compEl) compEl.innerText = compareList.length;
    if(ordEl) ordEl.innerText = orders.length;
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    if(!container) return;
    
    container.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your shopping cart is currently empty.</p>";
    }

    cart.forEach(item => {
        subtotal += item.price * item.qty;
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #f1f5f9; padding-bottom:8px;">
                <div>
                    <strong>${item.title}</strong><br>
                    <small>৳${item.price.toLocaleString()} x ${item.qty}</small>
                </div>
                <div style="display:flex; align-items:center; gap:10px;">
                    <strong>৳${(item.price * item.qty).toLocaleString()}</strong>
                    <button class="btn-sm btn-danger" onclick="removeFromCart(${item.id})"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
    });

    const subEl = document.getElementById("cart-subtotal");
    const discEl = document.getElementById("cart-discount");
    const grandEl = document.getElementById("cart-grand-total");

    const grand = Math.max(0, subtotal - appliedDiscount);
    if(subEl) subEl.innerText = subtotal.toLocaleString();
    if(discEl) discEl.innerText = appliedDiscount.toLocaleString();
    if(grandEl) grandEl.innerText = grand.toLocaleString();
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items-container");
    if(!container) return;
    
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = "<p>Your wishlist is empty.</p>";
        return;
    }

    const items = products.filter(p => wishlist.includes(p.id));
    items.forEach(item => {
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid #f1f5f9; padding-bottom:8px;">
                <div>
                    <strong>${item.title}</strong><br>
                    <small>৳${item.price.toLocaleString()}</small>
                </div>
                <button class="btn-primary btn-sm" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
    });
}

function applyCoupon() {
    const codeEl = document.getElementById("coupon-code");
    const code = codeEl ? codeEl.value.trim() : "";

    if (code === "WELCOME20") {
        appliedDiscount = 500;
        alert("Coupon Applied! ৳500 Discount.");
    } else {
        alert("Invalid Coupon Code!");
        appliedDiscount = 0;
    }
    renderCart();
}

function checkout() {
    if (cart.length === 0) return alert("Your cart is empty!");

    cart.forEach(c => {
        const p = products.find(prod => prod.id === c.id);
        if (p) p.stock -= c.qty;
    });

    const orderTotal = Math.max(0, cart.reduce((s, i) => s + (i.price * i.qty), 0) - appliedDiscount);
    const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);

    orders.push({
        id: orderId,
        items: [...cart],
        total: orderTotal,
        status: 'Processing'
    });

    cart = [];
    appliedDiscount = 0;
    updateBadges();
    filterProducts();
    closeModal('cart-modal');
    alert(`Order Placed Successfully! Order ID: ${orderId}`);
}

// ORDERS TRACKING
function renderOrders() {
    const container = document.getElementById("orders-items-container");
    if(!container) return;
    
    container.innerHTML = "";

    if (orders.length === 0) {
        container.innerHTML = "<p>No orders placed yet.</p>";
        return;
    }

    orders.forEach(o => {
        container.innerHTML += `
            <div style="border: 1px solid #e2e8f0; padding:15px; border-radius:8px; margin-bottom:12px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                    <strong>Order ID: ${o.id}</strong>
                    <span class="tag tag-warning">${o.status}</span>
                </div>
                <p><small>Total Items: ${o.items.length}</small></p>
                <p><strong>Total Amount: ৳${o.total.toLocaleString()}</strong></p>
            </div>
        `;
    });
}

// SELLER & ADMIN UTILS
function renderSellerInventory() {
    const tbody = document.getElementById("seller-inventory-table");
    if(!tbody) return;
    
    tbody.innerHTML = "";
    
    let totalSales = orders.reduce((s, o) => s + o.total, 0);
    const salesEl = document.getElementById("seller-total-sales");
    const activeEl = document.getElementById("seller-active-products");
    const ordersEl = document.getElementById("seller-total-orders");

    if(salesEl) salesEl.innerText = `৳ ${totalSales.toLocaleString()}`;
    if(activeEl) activeEl.innerText = products.length;
    if(ordersEl) ordersEl.innerText = orders.length;

    products.forEach(p => {
        tbody.innerHTML += `
            <tr>
                <td>${p.id}</td>
                <td>${p.title}</td>
                <td>${p.category}</td>
                <td>${p.brand}</td>
                <td>৳${p.price.toLocaleString()}</td>
                <td>${p.stock}</td>
                <td><button class="btn-sm btn-danger" onclick="deleteProduct(${p.id})">Delete</button></td>
            </tr>
        `;
    });
}

function saveProduct(e) {
    if(e) e.preventDefault();
    const newProd = {
        id: Date.now(),
        title: document.getElementById("new-prod-name").value,
        category: document.getElementById("new-prod-category").value,
        brand: document.getElementById("new-prod-brand").value,
        subcategory: document.getElementById("new-prod-subcat").value,
        price: parseFloat(document.getElementById("new-prod-price").value),
        stock: parseInt(document.getElementById("new-prod-stock").value),
        spec: document.getElementById("new-prod-spec").value || "N/A",
        seller: currentUser ? currentUser.name : "Seller Store",
        image: document.getElementById("new-prod-img").value
    };

    products.push(newProd);
    filterProducts();
    renderSellerInventory();
    closeModal('product-modal');
    alert("New product published successfully!");
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    filterProducts();
    renderSellerInventory();
}

function updateAdminStats() {
    const rev = orders.reduce((s, o) => s + o.total, 0);
    const revEl = document.getElementById("admin-gross-revenue");
    const ordEl = document.getElementById("admin-platform-orders");

    if(revEl) revEl.innerText = `৳ ${rev.toLocaleString()}`;
    if(ordEl) ordEl.innerText = orders.length;
}

function approveSeller(id) {
    const statusEl = document.getElementById(`status-${id.toLowerCase()}`);
    const actionEl = document.getElementById(`action-${id.toLowerCase()}`);

    if(statusEl) {
        statusEl.className = "tag tag-success";
        statusEl.innerText = "VERIFIED";
    }
    if(actionEl) {
        actionEl.innerHTML = `<button class="btn-sm btn-disabled" disabled>Approved</button>`;
    }
}

function rejectSeller(id) {
    const statusEl = document.getElementById(`status-${id.toLowerCase()}`);
    const actionEl = document.getElementById(`action-${id.toLowerCase()}`);

    if(statusEl) {
        statusEl.className = "tag tag-danger";
        statusEl.innerText = "REJECTED";
    }
    if(actionEl) {
        actionEl.innerHTML = `<button class="btn-sm btn-disabled" disabled>Rejected</button>`;
    }
}

// MODAL CONTROLLERS
function openModal(id) {
    if (id === 'cart-modal') renderCart();
    if (id === 'wishlist-modal') renderWishlist();
    if (id === 'orders-modal') renderOrders();
    if (id === 'compare-modal') renderCompareModal();
    
    const targetModal = document.getElementById(id);
    if (targetModal) targetModal.style.display = 'flex';
}

function closeModal(id) {
    const targetModal = document.getElementById(id);
    if (targetModal) targetModal.style.display = 'none';
}
