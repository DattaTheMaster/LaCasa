function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    }
    
    loadSampleProperties();
});

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

function loadSampleProperties() {
    const propertyGrid = document.getElementById('property-grid');
    if (!propertyGrid) return;
    
    const sampleProperties = [
        {
            title: 'Modern Family Home',
            location: 'Gachibowli, HYD',
            price: '₹1,22,00,000',
            image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400',
            beds: 4,
            baths: 3,
            sqft: '2,400'
        },
        {
            title: 'Downtown Condo',
            location: 'Banjara Hills, HYD',
            price: '₹85,00,000',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400',
            beds: 2,
            baths: 2,
            sqft: '1,200'
        },
        {
            title: 'Suburban Villa',
            location: 'Jubilee Hills, HYD',
            price: '₹97,50,000',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400',
            beds: 5,
            baths: 4,
            sqft: '3,100'
        },
        {
            title: 'Cozy Townhouse',
            location: 'Ameerpet, HYD',
            price: '₹52,50,000',
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400',
            beds: 3,
            baths: 2,
            sqft: '1,800'
        },
        {
            title: 'Luxury Apartment',
            location: 'Madhapur, HYD',
            price: '₹95,00,000',
            image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400',
            beds: 3,
            baths: 3,
            sqft: '1,900'
        },
        {
            title: 'Ranch Style Home',
            location: 'LB Nagar, HYD',
            price: '₹32,00,000',
            image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400',
            beds: 4,
            baths: 3,
            sqft: '2,600'
        }
    ];
    
    propertyGrid.innerHTML = sampleProperties.map(property => `
        <div class="property-card">
            <div class="property-image" style="background-image: url('${property.image}')">
                <div class="property-price">${property.price}</div>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${property.location}</p>
                <div class="property-features">
                    <span><i class="fas fa-bed"></i> ${property.beds} beds</span>
                    <span><i class="fas fa-bath"></i> ${property.baths} baths</span>
                    <span><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</span>
                </div>
                <button class="btn btn-primary" onclick="showPrototypeAlert()">View Details</button>
            </div>
        </div>
    `).join('');
}

function showPrototypeAlert() {
    alert("🚧 Frontend Prototype Notice 🚧\n\nWe apologize, but this feature is not yet implemented in this frontend prototype. This is a demonstration of the user interface and design.\n\nIn the full version, this would connect to our backend services to provide real functionality.\n\nThank you for your understanding!");
}

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navMenu = document.querySelector('.nav-menu');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

function selectUserType(userType) {
    const buttons = document.querySelectorAll('.user-type-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.type === userType) {
            btn.classList.add('active');
        }
    });
    
    const forms = document.querySelectorAll('.user-form');
    forms.forEach(form => {
        form.classList.remove('active');
    });
    
    const targetForm = document.getElementById(`${userType}-form`);
    if (targetForm) {
        targetForm.classList.add('active');
    }
    
    const results = document.getElementById('form-results');
    results.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const buyerForm = document.getElementById('buyer-form');
    if (buyerForm) {
        buyerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleBuyerForm();
        });
    }
    
    const sellerForm = document.getElementById('seller-form');
    if (sellerForm) {
        sellerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleSellerForm();
        });
    }
    
    const tenantForm = document.getElementById('tenant-form');
    if (tenantForm) {
        tenantForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleTenantForm();
        });
    }
});

function handleBuyerForm() {
    const location = document.getElementById('buyer-location').value;
    const bhk = document.getElementById('buyer-bhk').value;
    const budget = document.getElementById('buyer-budget').value;
    
    if (!location || !bhk || !budget) {
        alert('Please fill in all fields');
        return;
    }
    
    const results = generateBuyerResults(location, bhk, budget);
    displayResults(results, 'buyer');
}

function generateBuyerResults(location, bhk, budget) {
    const locationNames = {
        'san-francisco': 'San Francisco, CA',
        'new-york': 'New York, NY',
        'los-angeles': 'Los Angeles, CA',
        'chicago': 'Chicago, IL',
        'miami': 'Miami, FL',
        'seattle': 'Seattle, WA',
        'austin': 'Austin, TX',
        'denver': 'Denver, CO',
        'boston': 'Boston, MA',
        'atlanta': 'Atlanta, GA'
    };
    
    return {
        type: 'buyer',
        location: locationNames[location] || location,
        bhk: bhk,
        budget: budget,
        message: `Thank you for your property search request! We have received your inquiry for ${bhk} BHK properties in ${locationNames[location] || location} within your budget of ${budget.replace('-', ' - $')}. Our team will process your request and get back to you with suitable options within 24-48 hours.`
    };
}

function handleSellerForm() {
    const propertyType = document.getElementById('seller-property-type').value;
    const location = document.getElementById('seller-location').value;
    const price = document.getElementById('seller-price').value;
    
    if (!propertyType || !location || !price) {
        alert('Please fill in all fields');
        return;
    }
    
    const results = {
        type: 'seller',
        propertyType: propertyType,
        location: location,
        price: price,
        message: `Thank you for your interest in selling your ${propertyType} in ${location}. Based on current market conditions, your expected price of ${price} will be evaluated by our expert agents.`
    };
    
    displayResults(results, 'seller');
}

function handleTenantForm() {
    const location = document.getElementById('tenant-location').value;
    const budget = document.getElementById('tenant-rent-budget').value;
    const moveDate = document.getElementById('tenant-move-date').value;
    
    if (!location || !budget || !moveDate) {
        alert('Please fill in all fields');
        return;
    }
    
    const results = {
        type: 'tenant',
        location: location,
        budget: budget,
        moveDate: moveDate,
        message: `We're searching for rental properties in ${location} within your budget of ${budget.replace('-', ' - $')} with availability around ${new Date(moveDate).toLocaleDateString()}.`
    };
    
    displayResults(results, 'tenant');
}

function displayResults(results, userType) {
    const resultsSection = document.getElementById('form-results');
    const resultsContent = document.getElementById('results-content');
    
    if (userType === 'buyer' && results.properties && results.properties.length > 0) {
        resultsContent.innerHTML = `
            <div class="search-summary">
                <p><strong>Search Results:</strong> ${results.bhk} BHK properties in ${results.location} within ${results.budget.replace('-', ' - $')}</p>
                <p><strong>Found:</strong> ${results.properties.length} matching properties</p>
            </div>
            <div class="results-grid">
                ${results.properties.map(property => `
                    <div class="result-card">
                        <h4>${property.title}</h4>
                        <p><i class="fas fa-map-marker-alt"></i> ${property.address}</p>
                        <p><i class="fas fa-ruler-combined"></i> ${property.sqft} sqft</p>
                        <p class="price">${property.price}</p>
                        <span class="match-score">${property.match} Match</span>
                        <br><br>
                        <button class="btn btn-primary" onclick="showPrototypeAlert()">View Details</button>
                        <button class="btn btn-secondary" onclick="showPrototypeAlert()">Schedule Tour</button>
                    </div>
                `).join('')}
            </div>
        `;
    } else if (userType === 'buyer' && results.message) {
        resultsContent.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search" style="font-size: 3rem; color: var(--secondary-color); margin-bottom: 20px;"></i>
                <p>${results.message}</p>
                <button class="btn btn-primary" onclick="showPrototypeAlert()">Contact Agent</button>
            </div>
        `;
    } else {
        resultsContent.innerHTML = `
            <div class="form-response">
                <i class="fas fa-check-circle" style="font-size: 3rem; color: var(--tertiary-color); margin-bottom: 20px;"></i>
                <p>${results.message}</p>
                <div style="margin-top: 20px;">
                    <button class="btn btn-primary" onclick="showPrototypeAlert()">Contact Agent</button>
                    <button class="btn btn-secondary" onclick="showPrototypeAlert()">Schedule Consultation</button>
                </div>
            </div>
        `;
    }
    
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    const resultsSection = document.getElementById('form-results');
    resultsSection.classList.add('hidden');
    
    document.querySelectorAll('.user-form').forEach(form => {
        form.reset();
    });
    
    document.getElementById('user-form').scrollIntoView({ behavior: 'smooth' });
}
