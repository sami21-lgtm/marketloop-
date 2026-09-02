// PRODUCT DATASET
let products = [
    {
        id: 201,
        title: "Tecno Camon Slim 5G",
        category: "MOBILES",
        subcategory: "5G Mobiles",
        brand: "Tecno",
        price: 59999,
        stock: 12,
        seller: "MobileDokan BD",
        spec: "Ultra Slim, 5G Chipset, 64MP OIS Camera",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 202,
        title: "Realme C100x (8000mAh Battery)",
        category: "MOBILES",
        subcategory: "Best Battery",
        brand: "Realme",
        price: 80000,
        stock: 8,
        seller: "MobileDokan BD",
        spec: "8000mAh Battery, EMI Available",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 203,
        title: "Xiaomi AI Smartphone Pro",
        category: "MOBILES",
        subcategory: "AI Smartphones",
        brand: "Xiaomi",
        price: 42000,
        stock: 15,
        seller: "MobileDokan BD",
        spec: "AI Quad Camera, 120Hz AMOLED",
        image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 101,
        title: "Traditional Jamdani Saree",
        category: "WOMEN",
        subcategory: "Saree",
        brand: "Taaga",
        price: 12500,
        stock: 5,
        seller: "Aarong Store",
        spec: "Handcrafted Premium Jamdani Cotton",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 102,
        title: "Men's Premium Designer Kurta",
        category: "MEN",
        subcategory: "Panjabi",
        brand: "Taaga",
        price: 3200,
        stock: 10,
        seller: "Aarong Store",
        spec: "100% Fine Organic Cotton",
        image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 104,
        title: "Quilted Nakshi Kantha Bedcover",
        category: "HOME DÉCOR",
        subcategory: "Bedcovers",
        brand: "Aarong Earth",
        price: 4800,
        stock: 4,
        seller: "Aarong Store",
        spec: "Traditional Stitch Handmade Cotton",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 105,
        title: "Aarong Earth Orange Peel Face Pack",
        category: "SKIN & HAIR",
        subcategory: "Face Care",
        brand: "Aarong Earth",
        price: 450,
        stock: 30,
        seller: "Aarong Store",
        spec: "100% Natural Glow Clay Mask",
        image: "https://images.unsplash.com/photo-1567928257400-f137810776b1?auto=format&fit=crop&w=600&q=80"
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

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    filterProducts();
    updateBadges();
});

// PORTAL TAB SWITCHER (LIKE IMAGE UI)
function switchPortalTab(tab) {
    const guestBtn = document.getElementById("tab-guest-btn");
    const staffBtn = document.getElementById("tab-staff-btn");
    const guestContent = document.getElementById("guest-portal-content");
    const staffContent = document.getElementById("staff-portal-content");

    if (tab === 'guest') {
        guestBtn.classList.add("active");
        staffBtn.classList.remove("active");
        guestContent.classList.remove("hidden");
        staffContent.classList.add("hidden");
    } else {
        staffBtn.classList.add("active");
        guestBtn.classList.remove("active");
        staffContent.classList.remove("hidden");
        guestContent.classList.add("hidden");
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
        document.getElementById("staff-role-select").value = role;
        openModal('auth-modal');
        alert(`Authentication Required: Please login with ${role.toUpperCase()} credentials.`);
    } else {
        switchRole(role);
    }
}

function switchRole(role) {
    document.querySelectorAll(".btn-role").forEach(btn => btn.classList.remove("active"));
    
    document.getElementById("customer-view").classList.add("hidden");
    document.getElementById("seller-view").classList.add("hidden");
    document.getElementById("admin-view").classList.add("hidden");

    if (role === 'customer') document.getElementById("customer-view").classList.remove("hidden");
    if (role === 'seller') {
        document.getElementById("seller-view").classList.remove("hidden");
        renderSellerInventory();
    }
    if (role === 'admin') {
        document.getElementById("admin-view").classList.remove("hidden");
        updateAdminStats();
    }
}

// HANDLERS FOR PORTAL FORMS
function handleCustomerAccess(e) {
    e.preventDefault();
    const name = document.getElementById("guest-name").value;
    const email = document.getElementById("guest-email").value;
    const phone = document.getElementById("guest-phone").value;
    const pass = document.getElementById("guest-pass").value;

    let user = registeredUsers.find(u => u.email === email || u.phone === phone);
    
    if (!user) {
        user = { name, email, phone, id: phone, pass, role: "customer" };
        registeredUsers.push(user);
    }

    currentUser = user;
    updateUserStatus();
    closeModal('auth-modal');
    switchRole('customer');
    alert(`Welcome to Customer Portal, ${user.name}!`);
}

function handleStaffAccess(e) {
    e.preventDefault();
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
        switchRole(role);
        alert(`Logged in successfully as ${user.name} (${user.role.toUpperCase()})`);
    } else {
        alert("Access Denied! Invalid Staff ID or Password.");
    }
}

function updateUserStatus() {
    if (currentUser) {
        document.getElementById("user-status-text").innerHTML = `Logged in: <strong>${currentUser.name} (${currentUser.role.toUpperCase()})</strong>`;
        document.getElementById("auth-btn").innerHTML = `<i class="fa-solid fa-right-from-bracket"></i> Logout`;
        document.getElementById("auth-btn").onclick = handleLogout;
    } else {
        document.getElementById("user-status-text").innerHTML = `Active User: <strong>Guest</strong>`;
        document.getElementById("auth-btn").innerHTML = `<i class="fa-solid fa-shield-halved"></i> Access Portal`;
        document.getElementById("auth-btn").onclick = () => openModal('auth-modal');
    }
}

function handleLogout() {
    currentUser = null;
    updateUserStatus();
    switchRole('customer');
    alert("Logged out successfully.");
}

// PRODUCT FILTERS
function setCategoryFilter(cat) {
    currentCategory = cat;
    currentSubCategory = "ALL";
    document.getElementById("search-category-select").value = cat;
    document.getElementById("current-filter-heading").innerText = `Products: ${cat}`;
    filterProducts();
}

function setSubCategoryFilter(subcat) {
    currentSubCategory = subcat;
    document.getElementById("current-filter-heading").innerText = `Category: ${subcat}`;
    filterProducts();
}

function setPriceRange(min, max) {
    minPrice = min;
    maxPrice = max;
    document.querySelectorAll(".pill-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
    filterProducts();
}

function setViewMode(mode) {
    currentViewMode = mode;
    document.getElementById("grid-view-btn").classList.toggle("active", mode === 'grid');
    document.getElementById("list-view-btn").classList.toggle("active", mode === 'list');
    
    const grid = document.getElementById("product-grid");
    if (mode === 'list') grid.classList.add("list-view");
    else grid.classList.remove("list-view");
}

function filterProducts() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const selectCat = document.getElementById("search-category-select").value;
    const brand = document.getElementById("brand-select").value;
    const sort = document.getElementById("sort-select").value;

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
    grid.innerHTML = "";

    if (items.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; padding: 20px;'>No products found matching your filters.</p>";
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
                <img src="${p.image}" alt="${p.title}">
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
                        <input type="checkbox" ${isCompared ? 'checked' : ''} onchange="toggleCompare(${p.id})"> Compare
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
    tableHTML += `<tr><td><strong>Subcategory</strong></td>` + selectedProds.map(p => `<td>${p.subcategory}</td>`).join('') + `</tr>`;
    tableHTML += `<tr><td><strong>Details</strong></td>` + selectedProds.map(p => `<td>${p.spec}</td>`).join('') + `</tr>`;
    tableHTML += `<tr><td><strong>Seller</strong></td>` + selectedProds.map(p => `<td>${p.seller}</td>`).join('') + `</tr>`;

    tableHTML += `</tbody></table>`;
    container.innerHTML = tableHTML;
}

// CART & WISHLIST
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
    alert(`${prod.title} added to cart!`);
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
    document.getElementById("cart-count").innerText = cart.reduce((s, i) => s + i.qty, 0);
    document.getElementById("wishlist-count").innerText = wishlist.length;
    document.getElementById("compare-count").innerText = compareList.length;
    document.getElementById("orders-count").innerText = orders.length;
}

function renderCart() {
    const container = document.getElementById("cart-items-container");
    container.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
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

    document.getElementById("cart-subtotal").innerText = subtotal.toLocaleString();
    const grand = Math.max(0, subtotal - appliedDiscount);
    document.getElementById("cart-discount").innerText = appliedDiscount.toLocaleString();
    document.getElementById("cart-grand-total").innerText = grand.toLocaleString();
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items-container");
    container.innerHTML = "";

    if (wishlist.length === 0) {
        container.innerHTML = "<p>Wishlist is empty.</p>";
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
    const code = document.getElementById("coupon-code").value.trim();
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
    if (cart.length === 0) return alert("Cart is empty!");

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
    tbody.innerHTML = "";
    
    let totalSales = orders.reduce((s, o) => s + o.total, 0);
    document.getElementById("seller-total-sales").innerText = `৳ ${totalSales.toLocaleString()}`;
    document.getElementById("seller-active-products").innerText = products.length;
    document.getElementById("seller-total-orders").innerText = orders.length;

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
    e.preventDefault();
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
    alert("Product Added!");
}

function deleteProduct(id) {
    products = products.filter(p => p.id !== id);
    filterProducts();
    renderSellerInventory();
}

function updateAdminStats() {
    const rev = orders.reduce((s, o) => s + o.total, 0);
    document.getElementById("admin-gross-revenue").innerText = `৳ ${rev.toLocaleString()}`;
    document.getElementById("admin-platform-orders").innerText = orders.length;
}

function approveSeller(id) {
    document.getElementById(`status-${id.toLowerCase()}`).className = "tag tag-success";
    document.getElementById(`status-${id.toLowerCase()}`).innerText = "VERIFIED";
    document.getElementById(`action-${id.toLowerCase()}`).innerHTML = `<button class="btn-sm btn-disabled" disabled>Approved</button>`;
}

function rejectSeller(id) {
    document.getElementById(`status-${id.toLowerCase()}`).className = "tag tag-danger";
    document.getElementById(`status-${id.toLowerCase()}`).innerText = "REJECTED";
    document.getElementById(`action-${id.toLowerCase()}`).innerHTML = `<button class="btn-sm btn-disabled" disabled>Rejected</button>`;
}

// MODAL UTILS
function openModal(id) {
    if (id === 'cart-modal') renderCart();
    if (id === 'wishlist-modal') renderWishlist();
    if (id === 'orders-modal') renderOrders();
    if (id === 'compare-modal') renderCompareModal();
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}
