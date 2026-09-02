document.addEventListener('DOMContentLoaded', () => {
  let cartItemsCount = 0;

  // 1. Tab Switching Logic
  const buttons = document.querySelectorAll('.switch-btn');
  const panels = document.querySelectorAll('.view-panel');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const targetView = button.getAttribute('data-view');

      buttons.forEach(btn => btn.classList.remove('active'));
      panels.forEach(panel => panel.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(targetView).classList.add('active');
    });
  });

  // 2. Add to Cart Logic
  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  const cartCountElem = document.getElementById('cartCount');

  addToCartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.getAttribute('data-name');
      const price = parseInt(e.currentTarget.getAttribute('data-price')).toLocaleString();
      
      cartItemsCount++;
      cartCountElem.innerText = cartItemsCount;
      alert(`"${name}" added to MarketLoop Cart!\nPrice: ৳ ${price}`);
    });
  });

  document.getElementById('cartWidget').addEventListener('click', () => {
    alert(`Your cart currently has ${cartItemsCount} item(s).`);
  });

  // 3. Search Filter Logic
  const searchInput = document.getElementById('searchInput');
  
  function filterProducts() {
    const inputVal = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
      const title = card.getAttribute('data-title').toLowerCase();
      if (title.includes(inputVal)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  searchInput.addEventListener('keyup', filterProducts);
  document.getElementById('searchBtn').addEventListener('click', filterProducts);

  // 4. Seller Add Product Simulation
  const addProductBtn = document.getElementById('addProductBtn');
  if (addProductBtn) {
    addProductBtn.addEventListener('click', () => {
      alert('Opening Vendor Product Creation Modal...');
    });
  }

  // 5. Admin Approval Actions
  const approveButtons = document.querySelectorAll('.approve-btn');
  const rejectButtons = document.querySelectorAll('.reject-btn');

  approveButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rowId = e.currentTarget.getAttribute('data-row');
      const row = document.getElementById(rowId);
      if (row) {
        row.style.background = "rgba(16, 185, 129, 0.1)";
        row.innerHTML = `<td colspan="6" style="color: var(--accent-seller); text-align: center; font-weight: bold;"><i class="fa-solid fa-circle-check"></i> Seller Approved Successfully & Store Activated!</td>`;
      }
    });
  });

  rejectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rowId = e.currentTarget.getAttribute('data-row');
      const row = document.getElementById(rowId);
      if (row) {
        row.style.background = "rgba(239, 68, 68, 0.1)";
        row.innerHTML = `<td colspan="6" style="color: var(--accent-danger); text-align: center; font-weight: bold;"><i class="fa-solid fa-circle-xmark"></i> Seller Application Rejected</td>`;
      }
    });
  });
});
