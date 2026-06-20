// ===== MENU DATA =====
let menuItems = [
  // Breakfast
  { name: "Idly", price: 80, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300" },
  { name: "Wada", price: 105, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300" },
  { name: "Sambar Wada", price: 120, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=300" },
  { name: "Masala Dosa", price: 89, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Plain Dosa", price: 60, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Ghee Dosa", price: 135, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Butter Dosa", price: 135, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Set Dosa", price: 120, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Onion Rawa Dosa", price: 130, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Rawa Dosa", price: 120, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Raagi Dosa", price: 130, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Karam Dosa", price: 120, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Utappa", price: 105, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=300" },
  { name: "Pesarattu", price: 120, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=300" },
  { name: "Puri", price: 105, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300" },
  { name: "Chapathi", price: 105, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300" },
  { name: "Parotha", price: 105, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300" },
  { name: "South Indian Thali", price: 265, category: "breakfast", veg: true, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300" },

  // Biryani
  { name: "Chicken Biryani", price: 347, category: "biryani", veg: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
  { name: "Mutton Biryani", price: 420, category: "biryani", veg: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
  { name: "Gongura Chicken Biryani", price: 419, category: "biryani", veg: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
  { name: "Egg Biryani", price: 325, category: "biryani", veg: false, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
  { name: "Veg Biryani", price: 325, category: "biryani", veg: true, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },

  // Chinese
  { name: "Chicken Fried Rice", price: 368, category: "chinese", veg: false, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300" },
  { name: "Veg Fried Rice", price: 303, category: "chinese", veg: true, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300" },
  { name: "Gobi Manchurian", price: 250, category: "chinese", veg: true, img: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=300" },
  { name: "Veg Manchurian", price: 250, category: "chinese", veg: true, img: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=300" },
  { name: "Veg Hot N Sour Soup", price: 162, category: "chinese", veg: true, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },
  { name: "Manchow Soup Veg", price: 162, category: "chinese", veg: true, img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300" },

  // Starters
  { name: "Chicken 65", price: 380, category: "starters", veg: false, img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300" },
  { name: "Pepper Chicken", price: 380, category: "starters", veg: false, img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300" },
  { name: "Chilli Chicken", price: 380, category: "starters", veg: false, img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300" },
  { name: "Chicken Majestic", price: 380, category: "starters", veg: false, img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300" },
  { name: "Apollo Fish", price: 467, category: "starters", veg: false, img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },
  { name: "Gobi 65", price: 250, category: "starters", veg: true, img: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?w=300" },
  { name: "Paneer Tikka", price: 350, category: "starters", veg: true, img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=300" },

  // Curry
  { name: "Paneer Butter Masala", price: 336, category: "curry", veg: true, img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=300" },
  { name: "Kaju Paneer", price: 326, category: "curry", veg: true, img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=300" },
  { name: "Kadai Paneer", price: 336, category: "curry", veg: true, img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=300" },
  { name: "Methi Chaman", price: 314, category: "curry", veg: true, img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d6?w=300" },
  { name: "Butter Chicken", price: 391, category: "curry", veg: false, img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300" },
  { name: "Chicken Curry", price: 391, category: "curry", veg: false, img: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=300" },

  // Beverages
  { name: "Masala Chai", price: 25, category: "beverages", veg: true, img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300" },
  { name: "Lemon Tea", price: 30, category: "beverages", veg: true, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
  { name: "Buttermilk", price: 30, category: "beverages", veg: true, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300" },
  { name: "Fresh Lime Soda", price: 40, category: "beverages", veg: true, img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300" },
  { name: "Lassi", price: 60, category: "beverages", veg: true, img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300" },

  // Desserts
  { name: "Vanilla Ice Cream", price: 119, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
  { name: "Butterscotch", price: 129, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
  { name: "Chocolate", price: 119, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300" },
  { name: "Strawberry", price: 119, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
  { name: "Pista", price: 129, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
  { name: "Tutty Fruity", price: 119, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
  { name: "Fried Icecream", price: 175, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
  { name: "Pineapple Boat", price: 209, category: "desserts", veg: true, img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300" },
];

// Load admin added items from localStorage
function loadMenuFromStorage() {
  try {
    const saved = localStorage.getItem('adminMenu');
    if (saved) menuItems = JSON.parse(saved);
  } catch(e) {}
}

// ===== CART =====
let cart = [];
let discount = 0;
let currentCategory = 'all';

// ===== RENDER MENU =====
function renderMenu(items) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  grid.innerHTML = '';
  if (items.length === 0) {
    grid.innerHTML = '<p style="color:#999;grid-column:span 3;text-align:center;padding:20px;">No items found.</p>';
    return;
  }
  items.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'menu-card';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300'">
      <span class="veg-dot ${item.veg ? 'veg' : 'nonveg'}"></span>
      <div class="menu-card-info">
        <h4>${item.name}</h4>
        <div class="menu-card-bottom">
          <span class="price">₹${item.price}</span>
          <button onclick="addToCart('${item.name}')">ADD</button>
        </div>
      </div>`;
    grid.appendChild(div);
  });
}

// ===== FILTERS =====
function filterCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  applyFilters();
}

function filterMenu() {
  applyFilters();
}

function applyFilters() {
  const searchEl = document.getElementById('searchInput');
  const search = searchEl ? searchEl.value.toLowerCase() : '';
  const filtered = menuItems.filter(item => {
    const matchCat = currentCategory === 'all' || item.category === currentCategory;
    const matchSearch = item.name.toLowerCase().includes(search);
    return matchCat && matchSearch;
  });
  renderMenu(filtered);
}

// ===== CART =====
function addToCart(name) {
  const item = menuItems.find(i => i.name === name);
  if (!item) return;
  const existing = cart.find(c => c.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
}

function changeQty(name, change) {
  const index = cart.findIndex(c => c.name === name);
  if (index === -1) return;
  cart[index].qty += change;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cartItems');
  const totalDiv = document.getElementById('cartTotal');
  const totalSpan = document.getElementById('totalAmount');
  if (!cartDiv) return;

  if (cart.length === 0) {
    cartDiv.innerHTML = '<p class="empty-cart">Add items from the menu to get started</p>';
    if (totalDiv) totalDiv.style.display = 'none';
    return;
  }

  let total = 0;
  cartDiv.innerHTML = '';
  cart.forEach((item) => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <span>${item.name}</span>
      <div class="qty-controls">
        <button onclick="changeQty('${item.name}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.name}', 1)">+</button>
      </div>
      <span>₹${item.price * item.qty}</span>`;
    cartDiv.appendChild(div);
  });

  const finalTotal = total - discount;
  if (totalDiv) totalDiv.style.display = 'block';
  if (totalSpan) totalSpan.textContent = finalTotal;
}

// ===== PAYMENT TOGGLE =====
function initPaymentToggle() {
  document.querySelectorAll('input[name="payment"]').forEach(radio => {
    radio.addEventListener('change', function() {
      ['upi', 'card', 'cod'].forEach(s => {
        const el = document.getElementById(s + 'Details');
        if (el) el.style.display = 'none';
      });
      const active = document.getElementById(this.value + 'Details');
      if (active) active.style.display = 'block';
    });
  });
}

// ===== COUPON =====
function applyCoupon() {
  const codeEl = document.getElementById('couponCode');
  const msgEl = document.getElementById('couponMsg');
  if (!codeEl || !msgEl) return;
  const code = codeEl.value.toUpperCase().trim();
  const coupons = { 'SAVE10': 10, 'WELCOME20': 20, 'FOOD50': 50 };
  if (coupons[code]) {
    discount = coupons[code];
    msgEl.style.color = 'green';
    msgEl.textContent = `✅ Coupon applied! ₹${discount} off`;
    updateCart();
  } else {
    discount = 0;
    msgEl.style.color = 'red';
    msgEl.textContent = '❌ Invalid coupon code';
  }
}

// ===== PLACE ORDER =====
function placeOrder() {
  const name = document.getElementById('custName')?.value.trim();
  const phone = document.getElementById('custPhone')?.value.trim();
  const time = document.getElementById('pickupTime')?.value;
  const paymentEl = document.querySelector('input[name="payment"]:checked');
  const payment = paymentEl ? paymentEl.value : 'cod';

  if (!name) { alert('Please enter your name!'); return; }
  if (!phone || phone.length < 10) { alert('Please enter a valid mobile number!'); return; }
  if (cart.length === 0) { alert('Please add items to cart!'); return; }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0) - discount;
  const items = cart.map(i => `${i.name} x${i.qty}`).join(', ');

  const summaryEl = document.getElementById('orderSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <strong>${name}</strong> | 📞 ${phone}<br>
      🍽️ ${items}<br>
      💰 Total: ₹${total}<br>
      💳 Payment: ${payment.toUpperCase()}<br>
      ⏰ Pickup: ${time || 'ASAP'}`;
  }

  const modal = document.getElementById('orderModal');
  if (modal) modal.style.display = 'flex';

  setTimeout(() => {
    const s2 = document.getElementById('step2');
    if (s2) s2.classList.add('active');
  }, 3000);
  setTimeout(() => {
    const s3 = document.getElementById('step3');
    if (s3) s3.classList.add('active');
  }, 6000);

  const waMsg = `🍽️ New Order!\nName: ${name}\nPhone: ${phone}\nItems: ${items}\nTotal: ₹${total}\nPayment: ${payment.toUpperCase()}\nPickup: ${time || 'ASAP'}`;
  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`);

  cart = [];
  discount = 0;
  updateCart();
}

function closeModal() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.style.display = 'none';
  const s2 = document.getElementById('step2');
  const s3 = document.getElementById('step3');
  if (s2) s2.classList.remove('active');
  if (s3) s3.classList.remove('active');
}

// ===== TABLE BOOKING =====
function bookTable() {
  const name = document.getElementById('bookName')?.value.trim();
  const phone = document.getElementById('bookPhone')?.value.trim();
  const date = document.getElementById('bookDate')?.value;
  const time = document.getElementById('bookTime')?.value;
  const guests = document.getElementById('bookGuests')?.value;
  const msg = document.getElementById('bookingMsg');
  if (!msg) return;

  if (!name || !phone || !date || !time) {
    msg.style.color = 'red';
    msg.textContent = 'Please fill all fields!';
    return;
  }

  msg.style.color = 'green';
  msg.textContent = `✅ Table booked for ${name} on ${date} at ${time} for ${guests}!`;

  const waMsg = `🪑 Table Booking!\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`;
  window.open(`https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`);
}

// ===== FEEDBACK =====
let rating = 0;
let feedbacks = [];
try { feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || []; } catch(e) { feedbacks = []; }

function setRating(r) {
  rating = r;
  const text = document.getElementById('ratingText');
  if (text) text.textContent = ['','⭐ Poor','⭐⭐ Fair','⭐⭐⭐ Good','⭐⭐⭐⭐ Very Good','⭐⭐⭐⭐⭐ Excellent'][r];
}

function submitFeedback() {
  const name = document.getElementById('fbName')?.value.trim();
  const message = document.getElementById('fbMessage')?.value.trim();
  const category = document.getElementById('fbCategory')?.value;
  const success = document.getElementById('fbSuccess');
  if (!success) return;

  if (!name || !message) {
    success.style.color = 'red';
    success.textContent = 'Please fill name and feedback!';
    return;
  }

  const fb = { name, message, category, rating, date: new Date().toLocaleDateString() };
  feedbacks.push(fb);
  try { localStorage.setItem('feedbacks', JSON.stringify(feedbacks)); } catch(e) {}

  success.style.color = 'green';
  success.textContent = '✅ Thank you for your feedback!';
  document.getElementById('fbName').value = '';
  document.getElementById('fbMessage').value = '';
  rating = 0;
  loadFeedbacks();
}

function loadFeedbacks() {
  const list = document.getElementById('feedbackList');
  if (!list) return;
  if (feedbacks.length === 0) {
    list.innerHTML = '<p style="color:#999">No feedback yet.</p>';
    return;
  }
  list.innerHTML = feedbacks.slice().reverse().map(f => `
    <div class="feedback-item">
      <div class="fb-header">
        <strong>${f.name}</strong>
        <span>${'⭐'.repeat(f.rating || 0)}</span>
        <small>${f.date}</small>
      </div>
      <p class="fb-category">${f.category || ''}</p>
      <p>${f.message}</p>
    </div>`).join('');
}

// ===== ADMIN =====
function getAdminMenu() {
  try { return JSON.parse(localStorage.getItem('adminMenu')) || [...menuItems]; } catch(e) { return [...menuItems]; }
}

function saveAdminMenu(items) {
  try { localStorage.setItem('adminMenu', JSON.stringify(items)); } catch(e) {}
}

let adminMenuItems = [];

function adminLogin() {
  const user = document.getElementById('adminUser')?.value.trim();
  const pass = document.getElementById('adminPass')?.value;
  const err = document.getElementById('loginError');
  if (user === 'admin' && pass === 'sampoorna123') {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    adminMenuItems = getAdminMenu();
    loadAdminData();
  } else {
    if (err) err.textContent = '❌ Wrong username or password!';
  }
}

function adminLogout() {
  document.getElementById('loginPage').style.display = 'flex';
  document.getElementById('adminDashboard').style.display = 'none';
}

function showTab(tab) {
  document.querySelectorAll('.admin-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.admin-sidebar li').forEach(l => l.classList.remove('active'));
  const tabEl = document.getElementById(tab);
  const tabBtn = document.getElementById('tab-' + tab);
  if (tabEl) tabEl.style.display = 'block';
  if (tabBtn) tabBtn.classList.add('active');
}

function loadAdminData() {
  adminMenuItems = getAdminMenu();
  const totalEl = document.getElementById('totalMenuItems');
  const fbEl = document.getElementById('totalFeedback');
  if (totalEl) totalEl.textContent = adminMenuItems.length;
  if (fbEl) fbEl.textContent = feedbacks.length;
  renderAdminMenu(adminMenuItems);
  loadAdminFeedback();
  loadSpecialPreview();
}

function addNewItem() {
  const name = document.getElementById('newItemName')?.value.trim();
  const price = parseInt(document.getElementById('newItemPrice')?.value);
  const category = document.getElementById('newItemCategory')?.value;
  const veg = document.getElementById('newItemVeg')?.value === 'true';
  const img = document.getElementById('newItemImg')?.value.trim() ||
    'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300';
  const msg = document.getElementById('addItemMsg');

  if (!name || !price || price <= 0) {
    if (msg) { msg.style.color = 'red'; msg.textContent = 'Please enter valid name and price!'; }
    return;
  }

  if (adminMenuItems.find(i => i.name.toLowerCase() === name.toLowerCase())) {
    if (msg) { msg.style.color = 'red'; msg.textContent = '❌ Item already exists!'; }
    return;
  }

  const newItem = { name, price, category, veg, img };
  adminMenuItems.push(newItem);
  saveAdminMenu(adminMenuItems);
  menuItems.push(newItem);

  if (msg) { msg.style.color = 'green'; msg.textContent = `✅ "${name}" added!`; }
  document.getElementById('newItemName').value = '';
  document.getElementById('newItemPrice').value = '';
  document.getElementById('newItemImg').value = '';

  const totalEl = document.getElementById('totalMenuItems');
  if (totalEl) totalEl.textContent = adminMenuItems.length;
  renderAdminMenu(adminMenuItems);
}

function renderAdminMenu(items) {
  const list = document.getElementById('adminMenuList');
  if (!list) return;
  if (items.length === 0) {
    list.innerHTML = '<p style="color:#999">No items found.</p>';
    return;
  }
  list.innerHTML = items.map((item, i) => `
    <div class="admin-menu-item">
      <span>${item.veg ? '🟢' : '🔴'}</span>
      <span class="item-name">${item.name}</span>
      <span class="item-cat">${item.category}</span>
      <span class="item-price">₹${item.price}</span>
      <button class="delete-btn" onclick="deleteItem(${i})">🗑️ Delete</button>
    </div>`).join('');
}

function deleteItem(index) {
  if (!confirm('Delete this item?')) return;
  const deleted = adminMenuItems.splice(index, 1)[0];
  saveAdminMenu(adminMenuItems);
  const mi = menuItems.findIndex(i => i.name === deleted.name);
  if (mi !== -1) menuItems.splice(mi, 1);
  renderAdminMenu(adminMenuItems);
  const totalEl = document.getElementById('totalMenuItems');
  if (totalEl) totalEl.textContent = adminMenuItems.length;
}

function filterAdminMenu(cat, btn) {
  document.querySelectorAll('.menu-filter-admin .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = cat === 'all' ? adminMenuItems : adminMenuItems.filter(i => i.category === cat);
  renderAdminMenu(filtered);
}

function saveSpecial() {
  const special = {
    name: document.getElementById('specialName')?.value.trim(),
    offer: document.getElementById('specialOffer')?.value,
    original: document.getElementById('specialOriginal')?.value,
    badge: document.getElementById('specialBadge')?.value.trim(),
    desc: document.getElementById('specialDesc')?.value.trim()
  };
  if (!special.name || !special.offer) {
    const msg = document.getElementById('specialMsg');
    if (msg) { msg.style.color = 'red'; msg.textContent = 'Please enter dish name and price!'; }
    return;
  }
  try { localStorage.setItem('todaySpecial', JSON.stringify(special)); } catch(e) {}
  const msg = document.getElementById('specialMsg');
  if (msg) { msg.style.color = 'green'; msg.textContent = "✅ Today's special saved!"; }
  loadSpecialPreview();
}

function loadSpecialPreview() {
  try {
    const special = JSON.parse(localStorage.getItem('todaySpecial'));
    const preview = document.getElementById('specialPreview');
    if (!preview || !special) return;
    preview.innerHTML = `
      <h3>Preview:</h3>
      <div class="special-card">
        <span class="special-badge">${special.badge || 'Special'}</span>
        <h3>${special.name}</h3>
        <p>${special.desc || ''}</p>
        <span class="offer-price">₹${special.offer}</span>
        ${special.original ? `<span class="original-price">₹${special.original}</span>` : ''}
      </div>`;
  } catch(e) {}
}

function loadAdminFeedback() {
  const list = document.getElementById('adminFeedbackList');
  if (!list) return;
  if (feedbacks.length === 0) {
    list.innerHTML = '<p style="color:#999">No feedback yet.</p>';
    return;
  }
  list.innerHTML = feedbacks.map(f => `
    <div class="feedback-item">
      <div class="fb-header">
        <strong>${f.name}</strong>
        <span>${'⭐'.repeat(f.rating || 0)}</span>
        <small>${f.date}</small>
      </div>
      <p>${f.message}</p>
    </div>`).join('');
}

// ===== INIT =====
loadMenuFromStorage();
loadFeedbacks();
initPaymentToggle();
renderMenu(menuItems);