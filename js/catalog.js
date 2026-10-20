/* ============================================
   CATALOG JAVASCRIPT - Product Management

1: 'Stock your vessel with pantry staples, packaged foods, beverages, and everyday provisions for the crew.',
2: 'Source practical deck and engine-room stores, tools, and consumables to support routine vessel operations.',
3: 'Find cabin and galley essentials to help keep crew living areas comfortable, clean, and well supplied.',
4: 'Equip your crew with personal protective equipment and essential safety gear for work on board.',
5: 'Get general marine consumables and everyday materials for vessel upkeep and onboard tasks.',
6: 'Keep onboard machinery running reliably with scheduled engine inspections, servicing, and maintenance.',
7: 'Diagnose and address mechanical issues with repair support for vessel machinery and equipment.',
8: 'Maintain engine performance with routine checks and servicing tailored to your vessel’s equipment.',
9: 'Source replacement engine components to support repairs, planned maintenance, and vessel readiness.',
10: 'Get practical technical guidance to help troubleshoot marine equipment and plan maintenance work.',
11: 'Arrange vessel cleaning to help maintain tidy, hygienic onboard spaces and working areas.',
12: 'Keep accommodation spaces and exposed decks clean with cleaning support for vessel interiors and exterior surfaces.',
13: 'Arrange careful engine-room cleaning to remove built-up dirt and help keep machinery spaces orderly.',
14: 'Request fumigation services to help manage pests in vessels and other marine facilities.',
15: 'Get cleaning chemicals and materials for routine sanitation and upkeep across your vessel.',
16: 'Choose lubricating oils for marine machinery to support smooth operation and routine equipment care.',
17: 'Source marine greases for lubricating and protecting moving components in demanding onboard conditions.',
18: 'Find hydraulic oils for vessel systems and equipment that rely on hydraulic power.',
19: 'Source cleaning chemicals for shipboard maintenance, sanitation, and general cleaning tasks.',
20: 'Stock technical consumables used for routine marine maintenance, repairs, and equipment servicing.',
21: 'Arrange fresh and potable water delivery to vessels to support crew needs and onboard operations.',
22: 'Support vessel upkeep with maintenance assistance to help keep onboard systems and equipment serviceable.',
23: 'Arrange marine repair support for vessel equipment and onboard systems.',
24: 'Source marine equipment and spare parts for vessel repairs, upgrades, and routine maintenance.',
25: 'Coordinate logistics and boat supply to help deliver stores and essentials to vessels.',
   ============================================ */

// Sample product data

//Ship Chandler
const products = [
    {
     id: 1,
     name: 'Provision and Food Supplies',
     category: 'ship chandling',
     description: 'Stock your vessel with pantry staples, packaged foods, beverages, and everyday provisions for the crew',
     image: 'images/food1.jpg'
    },

    {
     id: 2,
     name: 'Deck and Engine Stores',
     category: 'ship chandling',
     description: 'Source practical deck and engine-room stores, tools, and consumables to support routine vessel operations',
     image: 'images/deck engine store.jpg'
    },

    {
     id: 3,
     name: 'Cabin and Gallery Supplies',
     category: 'ship chandling',
     description: 'Find cabin and galley essentials to help keep crew living areas comfortable, clean, and well supplied',
     image: 'images/Galley.jpg'
    },

    {
     id: 4,
     name: 'Safety Equipment and PPE',
     category: 'ship chandling',
     description: 'Equip your crew with personal protective equipment and essential safety gear for work on board',
     image: 'images/ppe.jpg'
    },

    {
     id: 5,
     name: 'General Marine Materials',
     category: 'ship chandling',
     description: 'Get general marine consumables and everyday materials for vessel upkeep and onboard tasks',
     image: 'images/general marine consumables.jpg'
    },
    
    // Engine & Mechanical Services
    {
      id: 6,
      name: 'Engine Servicing',
      category: 'engines',
      description: 'Keep onboard machinery running reliably with scheduled engine inspections, servicing, and maintenance',
      image: 'images/engine servicing.jpg'
    },

    {
      id: 7,
      name: 'Mechanical Repairs',
      category: 'engines',
      description: 'Diagnose and address mechanical issues with repair support for vessel machinery and equipment',
      image: 'images/mechanical repair.jpg'
    },

    {
      id: 8,
      name: 'Maintenance Services',
      category: 'engines',
      description: 'Maintain engine performance with routine checks and servicing tailored to your vessel’s equipment',
      image: 'images/maintenance engine.jpg'
    },

    {
      id: 9,
      name: 'Engine Spare Parts',
      category: 'engines',
      description: 'Source replacement engine components to support repairs, planned maintenance, and vessel readiness',
      image: 'images/engine spare part.jpg'
    },

    {
      id: 10,
      name: 'General Technical Support',
      category: 'engines',
      description: 'Get practical technical guidance to help troubleshoot marine equipment and plan maintenance work',
      image: 'images/general technical support.jpg'
    },
    
    // Cleaning and Fumigation
    {
      id: 11,
      name: 'Vessel Cleaning',
      category: 'cleaning',
      description: 'Arrange vessel cleaning to help maintain tidy, hygienic onboard spaces and working areas',
      image: 'images/vessel cleaning.jpg'
    },

    {
      id: 12,
      name: 'Accomodation and Deck Cleaning',
      category: 'cleaning',
      description: 'Keep accommodation spaces and exposed decks clean with cleaning support for vessel interiors and exterior surfaces',
      image: 'images/deck cleaning.jpg'
    },

    {
      id: 13,
      name: 'Engine-Room Cleaning',
      category: 'cleaning',
      description: 'Arrange careful engine-room cleaning to remove built-up dirt and help keep machinery spaces orderly',
      image: 'images/engine room clean.jpg'
    },

    {
      id: 14,
      name: 'Fumigation Services',
      category: 'cleaning',
      description: 'Request fumigation services to help manage pests in vessels and other marine facilities',
      image: 'images/fumigation.jpg'
    },

    {
      id: 15,
      name: 'Cleaning Chemicals and Materials',
      category: 'cleaning',
      description: 'Get cleaning chemicals and materials for routine sanitation and upkeep across your vessel',
      image: 'images/cleaning chemical materials.jpg'
    },
    
    // Lubricating
    {
      id: 16,
      name: 'Lubricating Oils',
      category: 'lubrication',
      description: 'Choose lubricating oils for marine machinery to support smooth operation and routine equipment care',
      image: 'images/lube oils.jpg'
    },

    {
      id: 17,
      name: 'Marine Greases',
      category: 'lubrication',
      description: 'Source marine greases for lubricating and protecting moving components in demanding onboard conditions',
      image: 'images/marine grease.jpg'
    },

    {
      id: 18,
      name: 'Hydraulic Oils',
      category: 'lubrication',
      description: 'Find hydraulic oils for vessel systems and equipment that rely on hydraulic power',
      image: 'images/hydraulic oil.jpg'
    },

    {
      id: 19,
      name: 'Cleaning Chemicals',
      category: 'lubrication',
      description: 'Source cleaning chemicals for shipboard maintenance, sanitation, and general cleaning tasks',
      image: 'images/cleaning chemicals.jpg'
    },

    {
      id: 20,
      name: 'Technical Consumables',
      category: 'lubrication',
      description: 'Stock technical consumables used for routine marine maintenance, repairs, and equipment servicing',
      image: 'images/technical consumables.jpg'
    },
    
    // Fresh Water
    {
      id: 21,
      name: 'Fresh & Portable Water Supply to Vessels',
      category: 'water supply',
      description: 'Arrange fresh and potable water delivery to vessels to support crew needs and onboard operation',
      image: 'images/fresh water.jpg'
    },

    // General Marine Services
    {
        id: 22,
        name: 'Vessel Maintenance Supports',
        category: 'marine service',
        description: 'Support vessel upkeep with maintenance assistance to help keep onboard systems and equipment serviceable',
        image: 'images/maintenance.jpg'
    },

    {
        id: 23,
        name: 'Marine Repairs',
        category: 'marine service',
        description: 'Arrange marine repair support for vessel equipment and onboard systems',
        image: 'images/marine repairs.jpg'
    },

    {
        id: 24,
        name: 'Supply of Equipment and Spare Parts',
        category: 'marine service',
        description: 'Source marine equipment and spare parts for vessel repairs, upgrades, and routine maintenance',
        image: 'images/spare parts supply.jpg'
    },

    {
        id: 25,
        name: 'Logistics and Boat Supply',
        category: 'marine service',
        description: 'Coordinate logistics and boat supply to help deliver stores and essentials to vessels',
        image: 'images/logistics.jpg'
    },

];

/**
 * Load and display products
 */
function loadProducts() {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');

    const selectedCategory = categoryFilter ? categoryFilter.value : '';
    const maxPrice = priceFilter ? parseInt(priceFilter.value) : 5000;

    // Filter products
    const filteredProducts = products.filter(product => {
        const categoryMatch = !selectedCategory || product.category === selectedCategory;
        const priceMatch = product.price == null || product.price <= maxPrice;
        return categoryMatch && priceMatch;
    });

    // Display results
    if (filteredProducts.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No products found matching your criteria.</p>';
        return;
    }

    container.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image
                ? `<img src="${product.image}" alt="${product.name}" loading="lazy">`
                : product.emoji || ''}</div>
            <div class="product-body">
                <span class="product-category">${formatCategory(product.category)}</span>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${product.price == null ? `
                    <div class="product-actions">
                        <a class="btn btn-primary" href="yannis-contact.html">Contact for details</a>
                    </div>
                ` : `
                    <div class="product-price">${formatCurrency(product.price)}</div>
                    <div class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                        ${product.stock > 0 ? `✓ ${product.stock} in stock` : '✗ Out of stock'}
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary" ${product.stock === 0 ? 'disabled' : ''} onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                        <button class="btn btn-secondary" onclick="addToFavorites(${product.id})">
                            ❤️ Save
                        </button>
                    </div>
                `}
            </div>
        </div>
    `).join('');
}

/**
 * Format category name
 */
function formatCategory(category) {
    const categoryMap = {
        'ship chandling': 'Ship Chandling & Marine Supplies',
        'engines': 'Engine & Mechanical Services',
        'cleaning': 'Cleaning & Fumigation',
        'lubrication': 'Lubricating Oil & Marine Chemicals',
        'water supply': 'Fresh Water Supply',
        'marine service': 'General Marine Services'
    };
    return categoryMap[category] || category;
}

/**
 * Add product to cart
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get existing cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show notification
    showNotification(`✓ ${product.name} added to cart!`, 'success');
}

/**
 * Add product to favorites
 */
function addToFavorites(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Get existing favorites
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if already favorited
    if (favorites.find(f => f.id === productId)) {
        favorites = favorites.filter(f => f.id !== productId);
        showNotification(`✗ Removed from favorites`, 'success');
    } else {
        favorites.push({
            id: productId,
            name: product.name,
            price: product.price
        });
        showNotification(`❤️ Added to favorites!`, 'success');
    }

    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

/**
 * Filter products based on selection
 */
function filterProducts() {
    loadProducts();
}

/**
 * Keep the displayed price range in sync with the slider.
 */
function updatePriceFilterLabel() {
    const priceFilter = document.getElementById('priceFilter');
    const priceValue = document.getElementById('priceValue');

    if (priceFilter && priceValue) {
        priceValue.textContent = `$0 - $${Number(priceFilter.value).toLocaleString()}`;
    }
}

/**
 * Get URL parameters
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/**
 * Initialize catalog page
 */
document.addEventListener('DOMContentLoaded', function() {
    // Set category filter from URL if present
    const categoryParam = getUrlParameter('category');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (categoryParam && categoryFilter) {
        categoryFilter.value = categoryParam;
    }

    // Load products on page load
    updatePriceFilterLabel();
    loadProducts();

    // Add event listeners to filters
    if (categoryFilter) {
        categoryFilter.addEventListener('change', loadProducts);
    }

    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) {
        priceFilter.addEventListener('input', function() {
            updatePriceFilterLabel();
            loadProducts();
        });
    }
});
