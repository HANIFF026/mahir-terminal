console.log("=====================");
console.log("HSI Product Explorer Phase 5");

const API_URL = 'https://dummyjson.com/products';
const productGrid = document.getElementById('product-grid');
const loadingState = document.getElementById('loading-state');
const resultSummary = document.getElementById('result-summary');
const categorySelect = document.getElementById('category-select');
const sortSelect = document.getElementById('sort-select'); 
const resetBtn = document.getElementById('reset-btn');
const searchInput = document.getElementById('search-input');

// FIXED: Penampung data produk lokal
let allProducts = [];

// Fungsi merender produk ke DOM
function renderproducts(dataproducts) {
  if (resultSummary) resultSummary.hidden = true;
  if (loadingState) loadingState.hidden = true;
  productGrid.hidden = false;

  const cardsHtml = dataproducts.map((dataproduct) => {
    const { id, title, price, category, thumbnail, rating } = dataproduct;

    return `
      <article class="product-card">
        <div class="product-image-wrap">
          <img class="product-image" src="${thumbnail}" alt="${title}" loading="lazy">
        </div>

        <div class="product-body">
          <span class="product-category">
            ${category}
          </span>

          <h3 class="product-title">
            ${title}
          </h3>

          <div class="product-meta">
            <span class="product-price">
              $${price}
            </span>

            <span class="product-rating">
              ⭐️ ${rating}
            </span>
          </div>

          <button type="button" class="detail-btn" data-id="${id}">
            Lihat Detail
          </button>
        </div>
      </article>
    `;
  }).join('');

  productGrid.innerHTML = cardsHtml;
}

// Fungsi mengambil data produk
const getProductsAPI = async (category = '') => {
  try {
    if (loadingState) loadingState.hidden = false;
    productGrid.hidden = true;

    const targetUrl = (category && category !== 'all') 
      ? `${API_URL}/category/${category}` 
      : API_URL;

    const response = await fetch(targetUrl);
    const data = await response.json();
    
    // FIXED: Simpan data ke variabel global allProducts
    allProducts = data.products || [];

    // Terapkan sorting yang sedang terpilih pada data baru
    if (sortSelect && sortSelect.value !== 'default') {
      sortProducts(sortSelect.value);
    } else {
      renderproducts(allProducts);
    }

  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Fungsi mengambil daftar kategori
const getproductsCategoriesAPI = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`); 
    const categoriesData = await response.json();

    // Sesuaikan nilai default dengan option di HTML ("all")
    categorySelect.innerHTML = `<option value="all">Semua kategori</option>`;

    categoriesData.forEach((item) => {
      const { slug, name } = item;
      categorySelect.innerHTML += `<option value="${slug}">${name}</option>`;
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

// Fungsi mengurutkan produk
function sortProducts(sortBy) {
  let sortedProducts = [...allProducts];

  switch (sortBy) {
    case 'price-asc':
      sortedProducts.sort((a, b) => a.price - b.price);
      break; 
    case 'price-desc':
      sortedProducts.sort((a, b) => b.price - a.price);
      break; 
    case 'rating-desc':
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break; 
    case 'name-asc':
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      sortedProducts = [...allProducts];
      break;
  }

  renderproducts(sortedProducts);

  // Jika ada keyword pencarian, jalankan filter ulang
  if (searchInput.value.trim() !== '') {
    filterProducts(searchInput.value.toLowerCase().trim());
  }
}

// Fungsi filter pencarian lokal
function filterProducts(keyword) {
  const productsCard = document.querySelectorAll('.product-card');

  productsCard.forEach((card) => {
    const productsName = card.querySelector('.product-title').textContent.toLowerCase();

    if (productsName.includes(keyword)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// --- EVENT LISTENERS ---

// 1. Dropdown Kategori
categorySelect.addEventListener('change', () => {
  const selectedCategory = categorySelect.value;
  getProductsAPI(selectedCategory);
});

// 2. FIXED: Dropdown Sort (Urutkan)
if (sortSelect) {
  sortSelect.addEventListener('change', () => {
    sortProducts(sortSelect.value);
  });
}

// 3. Tombol Reset
resetBtn.addEventListener('click', () => {
  categorySelect.value = 'all';
  if (sortSelect) sortSelect.value = 'default';
  searchInput.value = '';
  getProductsAPI();
});

// 4. Input Pencarian
searchInput.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase().trim();
  filterProducts(keyword);
});

// Jalankan fungsi awal
getproductsCategoriesAPI();
getProductsAPI();