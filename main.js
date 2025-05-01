// Config and default data
const CONFIG = {
    // Discord webhook URL for order notifications
    DISCORD_WEBHOOK_URL: '',
    
    // Admin credentials (for demo purposes)
    ADMIN_CREDENTIALS: {
        username: 'admin',
        password: 'admin123'
    },

    // Category structure
    CATEGORIES: {
        'gaming-pcs': 'تجميعات جاهزة',
        'pc-components': 'مكونات الكمبيوتر',
        'processors': 'المعالجات',
        'motherboards': 'اللوحات الأم',
        'graphics-cards': 'كروت الشاشة',
        'memory': 'الذاكرة',
        'storage': 'أجهزة التخزين',
        'power-supply': 'مزودات الطاقة',
        'cooling': 'التبريد',
        'cases': 'كيسات',
        'monitors': 'شاشات',
        'ups': 'مجهز الطاقة',
        'ups-online': 'اونلاين',
        'ups-offline': 'اوفلاين',
        'ups-battrey': 'بطاريات',
        'ups-inverters': 'عاكسات',
        'accessories': 'إكسسوارات',
        'chairs': 'كراسي',
        'mouse': 'ماوس',
        'keyboard': 'لوحة مفاتيح',
        'tables': 'طاولات'
    },

    // Category parent relationships
    CATEGORY_PARENTS: {
        'processors': 'pc-components',
        'motherboards': 'pc-components',
        'graphics-cards': 'pc-components',
        'memory': 'pc-components',
        'storage': 'pc-components',
        'power-supply': 'pc-components',
        'cooling': 'pc-components',
        'cases': 'pc-components',
        'chairs': 'accessories',
        'mouse': 'accessories',
        'keyboard': 'accessories',
        'tables': 'accessories',
        'ups-online': 'ups',
        'ups-offline': 'ups',
        'ups-inverters': 'ups',
        'ups-battrey': 'ups',
    }
};

// Base64 placeholder image to prevent console spam
const PLACEHOLDER_IMAGE_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjAzRkFDODdGQkUyNjExRTlBNkVDODFCNkYyNEMzNUJEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjAzRkFDODgwQkUyNjExRTlBNkVDODFCNkYyNEMzNUJEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDNGQUM4N0RCRTIwMTFFOUE2RUM4MUI2RjI0QzM1QkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDNGQUM4N0VCRTIwMTFFOUE2RUM4MUI2RjI0QzM1QkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5aJzp/AAAABlBMVEXZ2dkAAABiL77ZAAAACXBIWXMAAC4jAAAuIwF4pT92AAACEklEQVR42uzd0W6CMBRA0eLk/395XLLFmEHpvdBAe84bxq+T9jIiKYoJlVKKMe6vb+N9eJnnebn9p1/X7fbrdvsv/5qm9f7r+uqYl+Xn9fWE9v3fvy7L7fU8rx8f4+dZbf/cEQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBEARBkNNFSilGREQslxDLJb5HlFWU87w8x3Gb6LrerXvpEbXtXxo5PbbXbexPp/RIQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCT5k+AAQDwepGQyUdlQQAAAABJRU5ErkJggg==';

// Database file paths
const DB_PATHS = {
    products: 'DataBase/products.json',
    orders: 'DataBase/orders.json', 
    cart: 'DataBase/cart.json',
    settings: 'DataBase/settings.json'
};

// Cache mechanism for DB data to prevent excessive file operations
const DB_CACHE = {
    products: null,
    orders: null,
    cart: null,
    settings: null,
    timestamp: {
        products: 0,
        orders: 0,
        cart: 0,
        settings: 0
    }
};

/**
 * File-based database utility functions with advanced error handling and caching
 */
const DB = {
    /**
     * Read data from a file with caching strategy
     * @param {string} filePath - Path to the file
     * @param {boolean} bypassCache - Force fresh read from file ignoring cache
     * @returns {Promise<any>} - Promise resolving to the file contents
     */
    read: function(filePath, bypassCache = false) {
        return new Promise((resolve, reject) => {
            // Extract type from filePath for cache matching
            const type = filePath.split('/').pop().split('.')[0];
            
            // Check cache first unless bypassing
            if (!bypassCache && DB_CACHE[type] !== null) {
                const currentTime = Date.now();
                const cacheAge = currentTime - DB_CACHE.timestamp[type];
                
                // Use cache if less than 5 seconds old
                if (cacheAge < 5000) {
                    console.log(`Using cached data for ${filePath} (age: ${cacheAge}ms)`);
                    return resolve(JSON.parse(JSON.stringify(DB_CACHE[type]))); // Return deep copy
                }
            }
            
            // Otherwise fetch from file
            console.log(`Reading from ${filePath}...`);
            
            fetch(filePath + '?t=' + Date.now()) // Add timestamp to prevent caching
                .then(response => {
                    if (!response.ok) {
                        // If file doesn't exist, fall back to localStorage
                        if (type === 'products') {
                            const localData = localStorage.getItem('products');
                            if (localData) {
                                console.log(`File ${filePath} not found, using localStorage data`);
                                return localData;
                            }
                        } else if (type === 'cart') {
                            const localData = localStorage.getItem('cart');
                            if (localData) {
                                console.log(`File ${filePath} not found, using localStorage data`);
                                return localData;
                            }
                        } else if (type === 'orders') {
                            const localData = localStorage.getItem('orders');
                            if (localData) {
                                console.log(`File ${filePath} not found, using localStorage data`);
                                return localData;
                            }
                        } else if (type === 'settings') {
                            const username = localStorage.getItem('adminUsername') || CONFIG.ADMIN_CREDENTIALS.username;
                            const password = localStorage.getItem('adminPassword') || CONFIG.ADMIN_CREDENTIALS.password;
                            const darkMode = localStorage.getItem('darkMode') === 'true';
                            const webhookUrl = localStorage.getItem('discordWebhookUrl') || '';
                            
                            return JSON.stringify({
                                adminUsername: username,
                                adminPassword: password,
                                adminLoggedIn: localStorage.getItem('adminLoggedIn') === 'true',
                                discordWebhookUrl: webhookUrl,
                                darkMode: darkMode
                            });
                        }
                        
                        // Default empty data
                        return type === 'settings' ? '{}' : '[]';
                    }
                    return response.text();
                })
                .then(data => {
                    try {
                        const parsedData = JSON.parse(data);
                        
                        // Update cache
                        DB_CACHE[type] = parsedData;
                        DB_CACHE.timestamp[type] = Date.now();
                        
                        // Also set in localStorage as fallback
                        if (type !== 'settings') {
                            localStorage.setItem(type, JSON.stringify(parsedData));
                        } else {
                            // Store individual settings in localStorage
                            if (parsedData.adminUsername) localStorage.setItem('adminUsername', parsedData.adminUsername);
                            if (parsedData.adminPassword) localStorage.setItem('adminPassword', parsedData.adminPassword);
                            if (parsedData.adminLoggedIn !== undefined) localStorage.setItem('adminLoggedIn', parsedData.adminLoggedIn);
                            if (parsedData.discordWebhookUrl) localStorage.setItem('discordWebhookUrl', parsedData.discordWebhookUrl);
                            if (parsedData.darkMode !== undefined) localStorage.setItem('darkMode', parsedData.darkMode);
                        }
                        
                        console.log(`Successfully read data from ${filePath}`);
                        resolve(parsedData);
                    } catch (e) {
                        console.error(`Failed to parse JSON from ${filePath}:`, e);
                        
                        // Fall back to localStorage if available
                        if (type === 'products' || type === 'cart' || type === 'orders') {
                            const localData = localStorage.getItem(type);
                            if (localData) {
                                try {
                                    const localParsed = JSON.parse(localData);
                                    return resolve(localParsed);
                                } catch (e2) {
                                    // If parsing localStorage also fails, return empty
                                }
                            }
                        }
                        
                        // Return empty array/object if all fails
                        resolve(type === 'settings' ? {} : []);
                    }
                })
                .catch(error => {
                    console.error(`Error reading file ${filePath}:`, error);
                    
                    // Fall back to localStorage
                    if (type === 'products' || type === 'cart' || type === 'orders') {
                        const localData = localStorage.getItem(type);
                        if (localData) {
                            try {
                                const localParsed = JSON.parse(localData);
                                return resolve(localParsed);
                            } catch (e) {
                                // If parsing localStorage fails, continue to default
                            }
                        }
                    }
                    
                    // Default values
                    if (type === 'settings') {
                        resolve({
                            adminUsername: localStorage.getItem('adminUsername') || CONFIG.ADMIN_CREDENTIALS.username,
                            adminPassword: localStorage.getItem('adminPassword') || CONFIG.ADMIN_CREDENTIALS.password,
                            adminLoggedIn: localStorage.getItem('adminLoggedIn') === 'true',
                            discordWebhookUrl: localStorage.getItem('discordWebhookUrl') || '',
                            darkMode: localStorage.getItem('darkMode') === 'true'
                        });
                    } else {
                        resolve([]);
                    }
                });
        });
    },
    
    /**
     * Write data to file with smart double-save mechanism
     * @param {string} filePath - Path to the file
     * @param {any} data - Data to write
     * @returns {Promise<boolean>} - Promise resolving to success status
     */
    write: function(filePath, data) {
        return new Promise((resolve, reject) => {
            // Extract type from filePath
            const type = filePath.split('/').pop().split('.')[0];
            
            // Update cache immediately
            DB_CACHE[type] = JSON.parse(JSON.stringify(data)); // Deep copy
            DB_CACHE.timestamp[type] = Date.now();
            
            // Store in localStorage as fallback
            if (type !== 'settings') {
                localStorage.setItem(type, JSON.stringify(data));
            } else {
                // Store individual settings in localStorage
                if (data.adminUsername) localStorage.setItem('adminUsername', data.adminUsername);
                if (data.adminPassword) localStorage.setItem('adminPassword', data.adminPassword);
                if (data.adminLoggedIn !== undefined) localStorage.setItem('adminLoggedIn', data.adminLoggedIn);
                if (data.discordWebhookUrl) localStorage.setItem('discordWebhookUrl', data.discordWebhookUrl);
                if (data.darkMode !== undefined) localStorage.setItem('darkMode', data.darkMode);
            }
            
            console.log(`Writing to ${filePath}...`);
            
            // Send data to server
            fetch('save_data.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filePath: filePath,
                    data: data
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(result => {
                if (result.success) {
                    console.log(`Successfully wrote data to ${filePath}`);
                    
                    // Verify data integrity with a read operation
                    setTimeout(() => {
                        this.read(filePath, true)
                            .then(readData => {
                                if (JSON.stringify(readData) !== JSON.stringify(data)) {
                                    console.warn(`Data integrity check failed for ${filePath}, re-writing...`);
                                    // Try writing again if verification fails
                                    this.retryWrite(filePath, data);
                                }
                            })
                            .catch(err => {
                                console.error(`Data verification error for ${filePath}:`, err);
                            });
                    }, 500); // Wait half a second before verification
                } else {
                    console.error(`Server reported failure writing to ${filePath}`);
                    // Even on server failure, we've updated localStorage as fallback
                }
                resolve(result.success);
            })
            .catch(error => {
                console.error(`Error writing to ${filePath}:`, error);
                // Operation failed, but localStorage backup is in place
                resolve(false);
            });
        });
    },
    
    /**
     * Retry write operation for critical data
     * @param {string} filePath - Path to file
     * @param {any} data - Data to write
     */
    retryWrite: function(filePath, data) {
        console.log(`Retrying write to ${filePath}...`);
        
        fetch('save_data.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                filePath: filePath,
                data: data
            })
        })
        .then(response => response.json())
        .then(result => {
            console.log(`Retry write result for ${filePath}:`, result.success);
        })
        .catch(error => {
            console.error(`Retry write failed for ${filePath}:`, error);
        });
    },
    
    /**
     * Get a setting value with reliable fallbacks
     * @param {string} key - Setting key
     * @param {any} defaultValue - Default value if setting doesn't exist
     * @returns {Promise<any>} - Promise resolving to the setting value
     */
    getSetting: async function(key, defaultValue) {
        try {
            // Check localStorage first for immediate access
            const localValue = localStorage.getItem(key);
            if (localValue !== null) {
                // Special case for boolean settings stored as strings
                if (localValue === 'true' || localValue === 'false') {
                    return localValue === 'true';
                }
                return localValue;
            }
            
            // Then try to get from settings file
            const settings = await this.read(DB_PATHS.settings);
            
            // Check if the setting exists
            if (settings && settings[key] !== undefined) {
                return settings[key];
            }
            
            return defaultValue;
        } catch (error) {
            console.error('Error getting setting:', error);
            return defaultValue;
        }
    },
    
    /**
     * Save a setting value
     * @param {string} key - Setting key
     * @param {any} value - Setting value
     * @returns {Promise<boolean>} - Promise resolving to success status
     */
    saveSetting: async function(key, value) {
        try {
            // Store in localStorage immediately
            localStorage.setItem(key, typeof value === 'boolean' ? value.toString() : value);
            
            // Get current settings
            const settings = await this.read(DB_PATHS.settings);
            
            // Update the setting
            settings[key] = value;
            
            // Save to file
            return await this.write(DB_PATHS.settings, settings);
        } catch (error) {
            console.error('Error saving setting:', error);
            return false;
        }
    },
    
    /**
     * Clear all caches to force fresh reads
     */
    clearCache: function() {
        DB_CACHE.products = null;
        DB_CACHE.orders = null;
        DB_CACHE.cart = null;
        DB_CACHE.settings = null;
    }
};

/**
 * Apply dark mode state immediately on page load
 * This must run before DOM content loaded
 */
(function() {
    // Check for dark mode in localStorage immediately
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }
})();

// Initialize localStorage with default data if empty
async function initializeStorage() {
    console.log("Initializing storage...");
    
    try {
        // Check if DataBase directory exists
        const testResponse = await fetch('DataBase/.test', { method: 'HEAD' });
        const directoryExists = testResponse.ok || testResponse.status === 404;
        
        if (!directoryExists) {
            console.warn("DataBase directory may not exist. Storing data in localStorage as fallback.");
            localStorage.setItem('using_fallback', 'true');
        }
        
        // Initialize settings
        const settings = await DB.read(DB_PATHS.settings);
        const needsSettingsInit = Object.keys(settings).length === 0;
        
        if (needsSettingsInit) {
            const newSettings = {
                adminUsername: CONFIG.ADMIN_CREDENTIALS.username,
                adminPassword: CONFIG.ADMIN_CREDENTIALS.password,
                adminLoggedIn: localStorage.getItem('adminLoggedIn') === 'true' || false,
                discordWebhookUrl: localStorage.getItem('discordWebhookUrl') || CONFIG.DISCORD_WEBHOOK_URL,
                darkMode: localStorage.getItem('darkMode') === 'true' || false
            };
            
            await DB.write(DB_PATHS.settings, newSettings);
            console.log("Settings initialized with defaults");
        }

        // Initialize products
        const products = await DB.read(DB_PATHS.products);
        if (products.length === 0) {
            // Check if we have products in localStorage from previous version
            const localProducts = localStorage.getItem('products');
            if (localProducts) {
                try {
                    const parsedProducts = JSON.parse(localProducts);
                    if (Array.isArray(parsedProducts) && parsedProducts.length > 0) {
                        await DB.write(DB_PATHS.products, parsedProducts);
                        console.log("Migrated products from localStorage to file storage");
                    } else {
                        await DB.write(DB_PATHS.products, []);
                    }
                } catch (e) {
                    await DB.write(DB_PATHS.products, []);
                }
            } else {
                await DB.write(DB_PATHS.products, []);
            }
        }

        // Initialize orders
        const orders = await DB.read(DB_PATHS.orders);
        if (orders.length === 0) {
            const localOrders = localStorage.getItem('orders');
            if (localOrders) {
                try {
                    const parsedOrders = JSON.parse(localOrders);
                    if (Array.isArray(parsedOrders) && parsedOrders.length > 0) {
                        await DB.write(DB_PATHS.orders, parsedOrders);
                        console.log("Migrated orders from localStorage to file storage");
                    } else {
                        await DB.write(DB_PATHS.orders, []);
                    }
                } catch (e) {
                    await DB.write(DB_PATHS.orders, []);
                }
            } else {
                await DB.write(DB_PATHS.orders, []);
            }
        }

        // Initialize cart
        const cart = await DB.read(DB_PATHS.cart);
        if (cart.length === 0) {
            const localCart = localStorage.getItem('cart');
            if (localCart) {
                try {
                    const parsedCart = JSON.parse(localCart);
                    if (Array.isArray(parsedCart) && parsedCart.length > 0) {
                        await DB.write(DB_PATHS.cart, parsedCart);
                        console.log("Migrated cart from localStorage to file storage");
                    } else {
                        await DB.write(DB_PATHS.cart, []);
                    }
                } catch (e) {
                    await DB.write(DB_PATHS.cart, []);
                }
            } else {
                await DB.write(DB_PATHS.cart, []);
            }
        }

        console.log('Database initialized successfully');
    } catch (error) {
        console.error('Error initializing storage:', error);
        localStorage.setItem('using_fallback', 'true');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', async function() {
    // Initialize file-based storage
    await initializeStorage();
    
    // Set up router for page navigation
    setupRouting();
    
    // Initialize dark mode
    await initDarkMode();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize sidebar
    initSidebar();
    
    // Set up event listeners for common elements
    setupEventListeners();
    
    // Update cart count
    await updateCartCount();
});

/**
 * Initialize dark mode functionality
 */
async function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const darkModeToggleSidebar = document.getElementById('darkModeToggleSidebar');
    
    // Check if dark mode is enabled in settings/localStorage
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    
    // Set initial state for both toggles
    if (darkModeToggle) {
        darkModeToggle.checked = darkModeEnabled;
    }
    
    if (darkModeToggleSidebar) {
        darkModeToggleSidebar.checked = darkModeEnabled;
    }
    
    // Ensure body class matches saved state
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
    
    // Toggle functions for both switches
    const toggleDarkMode = async function(isEnabled) {
        if (isEnabled) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
        
        // Also update in file storage, but don't wait for it
        DB.saveSetting('darkMode', isEnabled);
    };
    
    // Set up main toggle event listener
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            toggleDarkMode(this.checked);
            // Sync sidebar toggle
            if (darkModeToggleSidebar) {
                darkModeToggleSidebar.checked = this.checked;
            }
        });
    }
    
    // Set up sidebar toggle event listener
    if (darkModeToggleSidebar) {
        darkModeToggleSidebar.addEventListener('change', function() {
            toggleDarkMode(this.checked);
            // Sync main toggle
            if (darkModeToggle) {
                darkModeToggle.checked = this.checked;
            }
        });
    }
}

/**
 * Initialize sidebar functionality
 */
function initSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (!sidebarToggle || !closeSidebar || !sidebar || !sidebarOverlay) return;
    
    // Toggle sidebar on button click
    sidebarToggle.addEventListener('click', function() {
        sidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling behind sidebar
    });
    
    // Close sidebar when close button is clicked
    closeSidebar.addEventListener('click', function() {
        closeSidebarFunction();
    });
    
    // Close sidebar when overlay is clicked
    sidebarOverlay.addEventListener('click', function() {
        closeSidebarFunction();
    });
    
    // Function to close sidebar
    function closeSidebarFunction() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Set up active navigation state
    const sidebarLinks = sidebar.querySelectorAll('a[data-page]');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            sidebarLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Navigate to the page using existing navigateTo function
            const page = this.dataset.page;
            const category = this.dataset.category || '';
            const productId = this.dataset.productId || '';
            
            navigateTo(page, { category, productId });
            
            // Close sidebar after navigation
            closeSidebarFunction();
        });
    });
    
    // Update active nav link based on current page
    function updateActiveNavLink() {
        const currentPage = window.location.hash.substring(1).split('/')[0] || 'home';
        
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    // Set initial active link
    updateActiveNavLink();
    
    // Listen for hash changes
    window.addEventListener('hashchange', updateActiveNavLink);
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.querySelector('.main-nav');
    
    if (!mobileMenuBtn || !mainNav) return;
    
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('show');
    });
}

/**
 * Single Page Application Router
 */
function setupRouting() {
    // Get all links with data-page attribute
    const navLinks = document.querySelectorAll('a[data-page]');
    
    // Set up click listeners for all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the page to navigate to
            const page = this.dataset.page;
            const category = this.dataset.category || '';
            const productId = this.dataset.productId || '';
            
            // Navigate to the page
            navigateTo(page, { category, productId });
        });
    });
    
    // Handle initial page load with improved URL parsing
    const initialHash = window.location.hash.substring(1);
    
    if (initialHash.startsWith('product-detail/')) {
        // Extract productId from hash
        const hashParts = initialHash.split('/');
        if (hashParts.length >= 2) {
            const productId = hashParts[1];
            navigateTo('product-detail', { productId });
        } else {
            navigateTo('home');
        }
    } else {
        const initialPage = initialHash || 'home';
        navigateTo(initialPage);
    }
}

/**
 * Navigate to a specific page
 * @param {string} page - The page to navigate to
 * @param {Object} params - Additional parameters (category, productId, etc.)
 */
function navigateTo(page, params = {}) {
    // Update URL hash with more detailed information
    if (page === 'product-detail' && params.productId) {
        window.location.hash = `${page}/${params.productId}`;
    } else {
        window.location.hash = page;
    }
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Show the selected page
    const activePage = document.getElementById(`page-${page}`);
    if (activePage) {
        activePage.classList.add('active');
    } else {
        // If page not found, go to home
        document.getElementById('page-home').classList.add('active');
        page = 'home';
    }
    
    // Update navigation active state
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        if (link.dataset.page === page) {
            if (page === 'products' && params.category) {
                if (link.dataset.category === params.category) {
                    link.classList.add('active');
                }
            } else {
                link.classList.add('active');
            }
        }
    });
    
    // Clear caches when navigating to ensure fresh data
    if (page === 'admin' || page === 'products' || page === 'cart') {
        DB.clearCache();
    }
    
    // Update breadcrumb
    updateBreadcrumb(page, params);
    
    // Load page-specific content
    loadPageContent(page, params);
}
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const el = document.getElementById('page-' + pageId);
    if (el) el.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // 1) On initial load, read the URL
    const params = new URLSearchParams(location.search);
    const initial = params.get('page') || 'home';
    showPage(initial);
  
    // 2) Attach handlers to all navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.dataset.page;
        history.pushState({ page }, '', `/?page=${page}`);
        showPage(page);
      });
    });
  
    // 3) Handle browser back/forward
    window.addEventListener('popstate', e => {
      const page = (e.state && e.state.page) || 'home';
      showPage(page);
    });
  });
/**
 * Update breadcrumb based on current page
 * @param {string} page - Current page
 * @param {Object} params - Additional parameters
 */
function updateBreadcrumb(page, params = {}) {
    const breadcrumbList = document.getElementById('breadcrumbList');
    if (!breadcrumbList) return;
    
    // Clear breadcrumb except for home link
    breadcrumbList.innerHTML = '<li><a href="#" data-page="home">الرئيسية</a></li>';
    
    // Add page-specific breadcrumb items
    switch (page) {
        case 'products':
            breadcrumbList.innerHTML += '<li><span>المنتجات</span></li>';
            
            if (params.category) {
                const categoryName = CONFIG.CATEGORIES[params.category] || params.category;
                
                // Check if this is a subcategory
                const parentCategory = CONFIG.CATEGORY_PARENTS[params.category];
                
                if (parentCategory) {
                    const parentCategoryName = CONFIG.CATEGORIES[parentCategory];
                    breadcrumbList.innerHTML = '<li><a href="#" data-page="home">الرئيسية</a></li>' +
                        '<li><a href="#" data-page="products">المنتجات</a></li>' +
                        `<li><a href="#" data-page="products" data-category="${parentCategory}">${parentCategoryName}</a></li>` +
                        `<li><span>${categoryName}</span></li>`;
                } else {
                    breadcrumbList.innerHTML = '<li><a href="#" data-page="home">الرئيسية</a></li>' +
                        '<li><a href="#" data-page="products">المنتجات</a></li>' +
                        `<li><span>${categoryName}</span></li>`;
                }
            }
            break;
            
        case 'product-detail':
            breadcrumbList.innerHTML += '<li><a href="#" data-page="products">المنتجات</a></li>';
            
            if (params.productId) {
                getProduct(params.productId).then(product => {
                    if (product) {
                        const categoryName = CONFIG.CATEGORIES[product.category] || product.category;
                        
                        // Check if this product belongs to a subcategory
                        const parentCategory = CONFIG.CATEGORY_PARENTS[product.category];
                        
                        if (parentCategory) {
                            const parentCategoryName = CONFIG.CATEGORIES[parentCategory];
                            breadcrumbList.innerHTML = '<li><a href="#" data-page="home">الرئيسية</a></li>' +
                                '<li><a href="#" data-page="products">المنتجات</a></li>' +
                                `<li><a href="#" data-page="products" data-category="${parentCategory}">${parentCategoryName}</a></li>` +
                                `<li><a href="#" data-page="products" data-category="${product.category}">${categoryName}</a></li>` +
                                `<li><span>${product.name}</span></li>`;
                        } else {
                            breadcrumbList.innerHTML = '<li><a href="#" data-page="home">الرئيسية</a></li>' +
                                '<li><a href="#" data-page="products">المنتجات</a></li>' +
                                `<li><a href="#" data-page="products" data-category="${product.category}">${categoryName}</a></li>` +
                                `<li><span>${product.name}</span></li>`;
                        }
                    }
                });
            }
            break;
            
        case 'cart':
            breadcrumbList.innerHTML += '<li><span>عربة التسوق</span></li>';
            break;

        case 'about':
            breadcrumbList.innerHTML += '<li><span>من نحن</span></li>';
            break;
            
        case 'admin-login':
            breadcrumbList.innerHTML += '<li><span>تسجيل الدخول للوحة الإدارة</span></li>';
            break;
            
        case 'admin':
            breadcrumbList.innerHTML += '<li><span>لوحة الإدارة</span></li>';
            break;
    }
}

/**
 * Load content for specific page
 * @param {string} page - Page to load content for
 * @param {Object} params - Additional parameters
 */
function loadPageContent(page, params = {}) {
    switch (page) {
        case 'home':
            // Load featured products
            loadProducts('featuredProducts', { limit: 4, sort: 'popularity' });
            
            // Load latest products
            loadProducts('latestProducts', { limit: 8, sort: 'newest' });
            
            // Set up newsletter form
            setupNewsletterForm();
            break;
            
        case 'products':
            if (params.category) {
                // Set the category filter
                const categoryRadio = document.querySelector(`input[name="category"][value="${params.category}"]`);
                if (categoryRadio) {
                    categoryRadio.checked = true;
                }
                
                // Update the products title
                const categoryName = CONFIG.CATEGORIES[params.category] || params.category;
                document.getElementById('productsTitle').textContent = categoryName;
            } else {
                document.getElementById('productsTitle').textContent = 'المنتجات';
            }
            
            // Initialize products page
            initProductsPage(params);
            break;
            
        case 'product-detail':
            loadProductDetail(params.productId);
            break;
            
        case 'cart':
            // Load cart
            loadCart();
            break;
            
        case 'about':
            // No special loading needed for about page
            break;
            
        case 'admin-login':
            setupAdminLogin();
            break;
            
        case 'admin':
            // Check if user is logged in
            const adminLoggedIn = localStorage.getItem('adminLoggedIn') === 'true';
            
            if (adminLoggedIn) {
                // Load admin panel data
                loadAdminData();
            } else {
                // Double-check with file storage
                DB.getSetting('adminLoggedIn', false).then(isLoggedIn => {
                    if (isLoggedIn) {
                        // Update localStorage for consistency
                        localStorage.setItem('adminLoggedIn', 'true');
                        loadAdminData();
                    } else {
                        navigateTo('admin-login');
                    }
                });
            }
            break;
    }
}

/**
 * Set up event listeners for common elements
 */
function setupEventListeners() {
    // Search form
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput && searchInput.value.trim()) {
                navigateTo('products', { search: searchInput.value.trim() });
            }
        });
    }
    
    // Close notification button
    const notificationClose = document.querySelector('.notification-close');
    if (notificationClose) {
        notificationClose.addEventListener('click', function() {
            hideNotification();
        });
    }
    
    // Checkout button
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', openCheckoutModal);
    }
    
    // Close checkout modal
    const closeCheckoutModal = document.getElementById('closeCheckoutModal');
    if (closeCheckoutModal) {
        closeCheckoutModal.addEventListener('click', function() {
            document.getElementById('checkoutModal').classList.remove('show');
        });
    }
    
    // Close confirmation modal
    const closeConfirmationModal = document.getElementById('closeConfirmationModal');
    if (closeConfirmationModal) {
        closeConfirmationModal.addEventListener('click', function() {
            document.getElementById('confirmationModal').classList.remove('show');
            navigateTo('home');
        });
    }
    
    // Submit checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            processOrderSubmit();
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('show');
        }
    });
}

/**
 * Show notification
 * @param {string} message - Message to show
 * @param {string} type - Notification type (success, error, info)
 * @param {number} duration - Duration in milliseconds (default: 3000)
 */
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    // Set message
    const messageElement = notification.querySelector('.notification-message');
    if (messageElement) {
        messageElement.textContent = message;
    }
    
    // Set icon based on type
    const iconElement = notification.querySelector('.notification-icon');
    if (iconElement) {
        // Remove existing classes
        iconElement.className = 'notification-icon';
        
        // Add icon based on type
        if (type === 'success') {
            iconElement.classList.add('fas', 'fa-check-circle');
        } else if (type === 'error') {
            iconElement.classList.add('fas', 'fa-exclamation-circle');
        } else {
            iconElement.classList.add('fas', 'fa-info-circle');
        }
    }
    
    // Set notification type class
    notification.className = 'notification ' + type + ' show';
    
    // Hide notification after duration
    if (duration > 0) {
        setTimeout(() => {
            hideNotification();
        }, duration);
    }
}

/**
 * Hide notification
 */
function hideNotification() {
    const notification = document.getElementById('notification');
    if (!notification) return;
    
    notification.classList.remove('show');
}

/**
 * Set up newsletter form
 */
function setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('تم الاشتراك بنجاح في النشرة البريدية', 'success');
        this.reset();
    });
}

/**
 * PRODUCTS MANAGEMENT
 */

/**
 * Get all products from database
 * @returns {Promise<Array>} Array of products
 */
async function getProducts() {
    try {
        const products = await DB.read(DB_PATHS.products);
        return Array.isArray(products) ? products : [];
    } catch (error) {
        console.error('Error getting products:', error);
        return [];
    }
}

/**
 * Get a single product by ID
 * @param {string} productId - Product ID to get
 * @returns {Promise<Object|null>} Product object or null if not found
 */
async function getProduct(productId) {
    try {
        const products = await getProducts();
        return products.find(product => product.id === productId) || null;
    } catch (error) {
        console.error('Error getting product:', error);
        return null;
    }
}

/**
 * Save products to database
 * @param {Array} products - Products to save
 * @returns {Promise<boolean>} Success status
 */
async function saveProducts(products) {
    try {
        // Validate products array
        if (!Array.isArray(products)) {
            console.error('Invalid products data (not an array)');
            return false;
        }
        
        // Ensure each product has required fields
        products.forEach(product => {
            if (!product.id) product.id = 'p' + Date.now() + Math.floor(Math.random() * 1000);
            if (!product.dateAdded) product.dateAdded = new Date().toISOString();
            if (product.sales === undefined) product.sales = 0;
            if (!product.images) product.images = [];
            if (!product.specifications) product.specifications = {};
        });
        
        return await DB.write(DB_PATHS.products, products);
    } catch (error) {
        console.error('Error saving products:', error);
        return false;
    }
}

/**
 * Load products into a container with filters
 * @param {string} containerId - Container element ID
 * @param {Object} options - Load options (featured, limit, etc.)
 */
async function loadProducts(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Show loading spinner
    container.innerHTML = '<div class="loading-spinner"></div>';
    
    try {
        // Get products
        let products = await getProducts();
        
        // Apply filters
        // Filter by category
        if (options.category) {
            // Check if it's a main category with subcategories
            const isMainCategory = Object.keys(CONFIG.CATEGORY_PARENTS).some(
                subcat => CONFIG.CATEGORY_PARENTS[subcat] === options.category
            );
            
            if (isMainCategory) {
                // Include all subcategories of this main category
                const subcategories = Object.keys(CONFIG.CATEGORY_PARENTS).filter(
                    subcat => CONFIG.CATEGORY_PARENTS[subcat] === options.category
                );
                
                products = products.filter(p => 
                    p.category === options.category || subcategories.includes(p.category)
                );
            } else {
                // Just filter by the exact category
                products = products.filter(p => p.category === options.category);
            }
        }
        
        // Filter by search query
        if (options.search) {
            const searchTerm = options.search.toLowerCase();
            products = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.brand.toLowerCase().includes(searchTerm)
            );
        }
        
        // Filter by price range
        if (options.maxPrice) {
            products = products.filter(p => p.price <= parseInt(options.maxPrice));
        }
        
        // Filter by stock availability
        if (options.inStockOnly) {
            products = products.filter(p => p.stock > 0);
        }
        
        // Sort products
        if (options.sort === 'price-low') {
            products.sort((a, b) => a.price - b.price);
        } else if (options.sort === 'price-high') {
            products.sort((a, b) => b.price - a.price);
        } else if (options.sort === 'popularity') {
            products.sort((a, b) => (b.sales || 0) - (a.sales || 0));
        } else {
            // Default: sort by newest (date added)
            products.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));
        }
        
        // Exclude specific product if needed
        if (options.exclude) {
            products = products.filter(p => p.id !== options.exclude);
        }
        
        // Apply limit
        if (options.limit && products.length > options.limit) {
            products = products.slice(0, options.limit);
        }
        
        // Render products
        renderProducts(products, container);
    } catch (error) {
        console.error('Error loading products:', error);
        container.innerHTML = '<div class="error-message">حدث خطأ أثناء تحميل المنتجات</div>';
    }
}

/**
 * Render products in a container
 * @param {Array} products - Products to render
 * @param {HTMLElement} container - Container element
 */
function renderProducts(products, container) {
    // Clear container
    container.innerHTML = '';
    
    // Update product count if available
    const productsCount = document.getElementById('productsCount');
    if (productsCount) {
        const countSpan = productsCount.querySelector('span');
        if (countSpan) {
            countSpan.textContent = products.length;
        }
    }
    
    // Check if products array is empty
    if (products.length === 0) {
        // Show empty state if available
        const emptyState = document.getElementById('emptyState');
        if (emptyState) {
            emptyState.style.display = 'block';
        } else {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h2>لم يتم العثور على منتجات</h2>
                    <p>جرب تغيير معايير البحث أو الفلترة</p>
                    <a href="#" data-page="products" class="btn-primary">عرض كل المنتجات</a>
                </div>
            `;
        }
        return;
    }
    
    // Hide empty state if there are products
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
        emptyState.style.display = 'none';
    }
    
    // Check if container has list-view class
    const isListView = container.classList.contains('list-view');
    
    // Render each product
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product-card';
        productElement.dataset.id = product.id;
        
        // Add out-of-stock class if stock is 0
        if (product.stock <= 0) {
            productElement.classList.add('out-of-stock');
        }
        
        // Format price
        const formattedPrice = formatCurrency(product.price);
        
        // Get category name
        const categoryName = CONFIG.CATEGORIES[product.category] || product.category;
        
        // Create product HTML
        if (isListView) {
            // List view layout
            productElement.innerHTML = `
                <div class="product-image">
                    <a href="#" data-page="product-detail" data-product-id="${product.id}">
                        <img src="${product.images[0]}" alt="${product.name}" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
                        ${product.stock <= 0 ? '<span class="out-of-stock-label">غير متوفر</span>' : ''}
                    </a>
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span>${product.brand}</span>
                    </div>
                    <h3 class="product-name">
                        <a href="#" data-page="product-detail" data-product-id="${product.id}">${product.name}</a>
                    </h3>
                    <div class="product-price">${formattedPrice}</div>
                </div>
                <div class="product-actions">
                    <a href="#" data-page="product-detail" data-product-id="${product.id}" class="btn-primary">
                        <i class="fas fa-eye"></i>
                        عرض التفاصيل
                    </a>
                    <button class="add-to-cart-btn" data-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i>
                        إضافة للسلة
                    </button>
                </div>
            `;
        } else {
            // Grid view layout (default)
            productElement.innerHTML = `
                <div class="product-image">
                    <a href="#" data-page="product-detail" data-product-id="${product.id}">
                        <img src="${product.images[0]}" alt="${product.name}" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
                        ${product.stock <= 0 ? '<span class="out-of-stock-label">غير متوفر</span>' : ''}
                    </a>
                </div>
                <div class="product-info">
                    <div class="product-meta">
                        <span>${product.brand}</span>
                    </div>
                    <h3 class="product-name">
                        <a href="#" data-page="product-detail" data-product-id="${product.id}">${product.name}</a>
                    </h3>
                    <div class="product-price">${formattedPrice}</div>
                    <div class="product-actions">
                        <button class="add-to-cart-btn" data-id="${product.id}" ${product.stock <= 0 ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i>
                            إضافة للسلة
                        </button>
                        <a href="#" data-page="product-detail" data-product-id="${product.id}" class="quick-view-btn">
                            <i class="fas fa-eye"></i>
                        </a>
                    </div>
                </div>
            `;
        }
        
        // Add to container
        container.appendChild(productElement);
    });
    
    // Setup routing for product detail links
    setupProductDetailLinks(container);
    
    // Add event listeners to add to cart buttons
    container.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.dataset.id;
            addToCart(productId, 1).then(success => {
                if (success) {
                    showNotification('تمت إضافة المنتج إلى عربة التسوق', 'success');
                    updateCartCount(); // Update cart count immediately
                }
            });
        });
    });
}

/**
 * Setup links to product detail pages
 * @param {HTMLElement} container - Container with product links
 */
function setupProductDetailLinks(container) {
    const productLinks = container.querySelectorAll('a[data-page="product-detail"]');
    
    productLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const productId = this.dataset.productId;
            navigateTo('product-detail', { productId });
        });
    });
}

/**
 * Initialize products page with filters
 * @param {Object} params - Page parameters
 */
function initProductsPage(params = {}) {
    // Setup dynamic filters
    setupDynamicCategoryFilters();
    
    // Set current filter values from params
    if (params.category) {
        const categoryRadio = document.querySelector(`input[name="category"][value="${params.category}"]`);
        if (categoryRadio) {
            categoryRadio.checked = true;
            
            // If this is a subcategory, make sure its container is visible
            if (CONFIG.CATEGORY_PARENTS[params.category]) {
                const parentId = CONFIG.CATEGORY_PARENTS[params.category];
                const container = document.querySelector(`.subcategory-container[data-parent="${parentId}"]`);
                if (container) {
                    container.style.display = 'block';
                }
            }
        }
    }
    
    if (params.search) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = params.search;
        }
    }
    
    // Apply initial filters
    const initialFilters = {
        category: params.category || '',
        search: params.search || '',
        maxPrice: 100000,
        inStockOnly: false, // Changed to false by default
        sort: 'newest'
    };
    
    applyProductFilters(initialFilters);
    
    // Set up price range slider
    const priceRange = document.getElementById('priceRange');
    const maxPriceValue = document.getElementById('maxPriceValue');
    
    if (priceRange && maxPriceValue) {
        maxPriceValue.textContent = formatCurrency(priceRange.value);
        
        priceRange.addEventListener('input', function() {
            maxPriceValue.textContent = formatCurrency(this.value);
            // Auto-apply filter on input
            let currentFilters = getCurrentFilters();
            currentFilters.maxPrice = this.value;
            applyProductFilters(currentFilters);
        });
    }
    
    // Set up sort options
    document.querySelectorAll('input[name="sort"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                let currentFilters = getCurrentFilters();
                currentFilters.sort = this.value;
                applyProductFilters(currentFilters);
            }
        });
    });
    
    // In stock checkbox
    const inStockCheckbox = document.getElementById('inStockOnly');
    if (inStockCheckbox) {
        inStockCheckbox.addEventListener('change', function() {
            let currentFilters = getCurrentFilters();
            currentFilters.inStockOnly = this.checked;
            applyProductFilters(currentFilters);
        });
    }
    
    // Set up mobile filters toggle
    const toggleFiltersBtn = document.getElementById('toggleFilters');
    const closeFiltersBtn = document.getElementById('closeFilters');
    const filters_sidebar = document.querySelector('.filters');
    
    if (toggleFiltersBtn && closeFiltersBtn && filters_sidebar) {
        toggleFiltersBtn.addEventListener('click', function() {
            filters_sidebar.classList.add('show');
        });
        
        closeFiltersBtn.addEventListener('click', function() {
            filters_sidebar.classList.remove('show');
        });
    }
    
    // Set up view switcher
    const viewButtons = document.querySelectorAll('.view-btn');
    if (viewButtons) {
        viewButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                viewButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const view = this.dataset.view;
                const productsGrid = document.getElementById('productsGrid');
                
                if (productsGrid) {
                    if (view === 'list') {
                        productsGrid.classList.add('list-view');
                    } else {
                        productsGrid.classList.remove('list-view');
                    }
                    
                    // Re-render products with the new view
                    loadProducts('productsGrid', getCurrentFilters());
                }
            });
        });
    }
}

function setupDynamicCategoryFilters() {
    // Get all category filters
    const categoryFilters = document.getElementById('categoryFilters');
    if (!categoryFilters) return;
    
    // Clear existing filters
    categoryFilters.innerHTML = '';
    
    // Create the "All" option
    const allOption = document.createElement('label');
    allOption.className = 'filter-option';
    allOption.innerHTML = `
        <input type="radio" name="category" value="all" checked>
        <span>الكل</span>
    `;
    categoryFilters.appendChild(allOption);
    
    // Create parent categories with collapsible subcategories
    Object.entries(CONFIG.CATEGORIES).forEach(([categoryId, categoryName]) => {
        // Skip if this is a subcategory
        if (CONFIG.CATEGORY_PARENTS[categoryId]) return;
        
        // Create main category option
        const categoryOption = document.createElement('label');
        categoryOption.className = 'filter-option parent-category';
        categoryOption.innerHTML = `
            <input type="radio" name="category" value="${categoryId}">
            <span>${categoryName}</span>
        `;
        categoryFilters.appendChild(categoryOption);
        
        // Check if this category has subcategories
        const subcategories = [];
        Object.entries(CONFIG.CATEGORY_PARENTS).forEach(([subId, parentId]) => {
            if (parentId === categoryId) {
                subcategories.push({
                    id: subId,
                    name: CONFIG.CATEGORIES[subId]
                });
            }
        });
        
        // If it has subcategories, create a container for them
        if (subcategories.length > 0) {
            const subcategoryContainer = document.createElement('div');
            subcategoryContainer.className = 'subcategory-container';
            subcategoryContainer.dataset.parent = categoryId;
            subcategoryContainer.style.display = 'none'; // Hide initially
            
            // Add each subcategory
            subcategories.forEach(sub => {
                const subOption = document.createElement('label');
                subOption.className = 'filter-option subcategory-filter';
                subOption.innerHTML = `
                    <input type="radio" name="category" value="${sub.id}">
                    <span>${sub.name}</span>
                `;
                subcategoryContainer.appendChild(subOption);
            });
            
            categoryFilters.appendChild(subcategoryContainer);
            
            // Add click event to toggle subcategories
            categoryOption.addEventListener('click', function() {
                const containerId = this.querySelector('input').value;
                const container = document.querySelector(`.subcategory-container[data-parent="${containerId}"]`);
                
                // Hide all subcategory containers first
                document.querySelectorAll('.subcategory-container').forEach(cont => {
                    cont.style.display = 'none';
                });
                
                // Show this category's subcategories
                if (container) {
                    container.style.display = 'block';
                }
            });
        }
    });
    
    // Add event listener to "All" option to hide all subcategories
    allOption.addEventListener('click', function() {
        document.querySelectorAll('.subcategory-container').forEach(cont => {
            cont.style.display = 'none';
        });
    });
    
    // Setup all radio button change events
    document.querySelectorAll('#categoryFilters input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.checked) {
                // Apply filters when a radio button is selected
                let currentFilters = getCurrentFilters();
                applyProductFilters(currentFilters);
                
                // If this is a subcategory, make sure its container is visible
                if (CONFIG.CATEGORY_PARENTS[this.value]) {
                    const parentId = CONFIG.CATEGORY_PARENTS[this.value];
                    const container = document.querySelector(`.subcategory-container[data-parent="${parentId}"]`);
                    if (container) {
                        // Hide all containers first
                        document.querySelectorAll('.subcategory-container').forEach(cont => {
                            cont.style.display = 'none';
                        });
                        // Show this container
                        container.style.display = 'block';
                    }
                }
            }
        });
    });
}

/**
 * Apply filters to products and refresh display
 * @param {Object} filters - Filter parameters
 */
async function applyProductFilters(filters) {
    // Load products with filters
    await loadProducts('productsGrid', filters);
    
    // Set up pagination if not in limited view
    if (!filters.limit) {
        try {
            // Get filtered products for pagination
            let products = await getProducts();
            
            // Filter by category with subcategory support
            if (filters.category) {
                // Check if it's a main category with subcategories
                const isMainCategory = Object.keys(CONFIG.CATEGORY_PARENTS).some(
                    subcat => CONFIG.CATEGORY_PARENTS[subcat] === filters.category
                );
                
                if (isMainCategory) {
                    // Include all subcategories of this main category
                    const subcategories = Object.keys(CONFIG.CATEGORY_PARENTS).filter(
                        subcat => CONFIG.CATEGORY_PARENTS[subcat] === filters.category
                    );
                    
                    products = products.filter(p => 
                        p.category === filters.category || subcategories.includes(p.category)
                    );
                } else {
                    // Just filter by the exact category
                    products = products.filter(p => p.category === filters.category);
                }
            }
            
            if (filters.search) {
                const searchTerm = filters.search.toLowerCase();
                products = products.filter(p => 
                    p.name.toLowerCase().includes(searchTerm) || 
                    p.brand.toLowerCase().includes(searchTerm)
                );
            }
            
            if (filters.maxPrice) {
                products = products.filter(p => p.price <= parseInt(filters.maxPrice));
            }
            
            if (filters.inStockOnly) {
                products = products.filter(p => p.stock > 0);
            }
            
            // Set up pagination
            setupPagination(products);
        } catch (error) {
            console.error('Error applying product filters:', error);
        }
    }
}

/**
 * Get current filter settings
 * @returns {Object} Current filter settings
 */
function getCurrentFilters() {
    // Get selected category
    let category = '';
    document.querySelectorAll('input[name="category"]').forEach(radio => {
        if (radio.checked && radio.value !== 'all') {
            category = radio.value;
        }
    });
    
    // Get price range
    const priceRange = document.getElementById('priceRange');
    const maxPrice = priceRange ? priceRange.value : 100000;
    
    // Get sort option
    let sort = 'newest';
    document.querySelectorAll('input[name="sort"]').forEach(radio => {
        if (radio.checked) {
            sort = radio.value;
        }
    });
    
    // Get in-stock only
    const inStockOnly = document.getElementById('inStockOnly')?.checked || false;
    
    // Get search term
    const searchInput = document.getElementById('searchInput');
    const search = searchInput ? searchInput.value.trim() : '';
    
    return {
        category,
        maxPrice,
        sort,
        inStockOnly,
        search
    };
}

/**
 * Set up pagination
 * @param {Array} products - Array of all products (before pagination)
 */
function setupPagination(products) {
    const paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) return;
    
    // Clear container
    paginationContainer.innerHTML = '';
    
    // Calculate total pages (12 products per page)
    const productsPerPage = 12;
    const totalPages = Math.ceil(products.length / productsPerPage);
    
    // If only one page, don't show pagination
    if (totalPages <= 1) return;
    
    // Create previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'pagination-btn prev';
    prevButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    prevButton.disabled = true; // Disabled by default (first page)
    prevButton.addEventListener('click', function() {
        // Get active page
        const activePage = document.querySelector('.page-number.active');
        if (activePage) {
            const currentPage = parseInt(activePage.dataset.page);
            if (currentPage > 1) {
                // Click the previous page button
                document.querySelector(`.page-number[data-page="${currentPage - 1}"]`).click();
            }
        }
    });
    paginationContainer.appendChild(prevButton);
    
    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('button');
        pageButton.className = 'page-number' + (i === 1 ? ' active' : '');
        pageButton.textContent = i;
        pageButton.dataset.page = i;
        
        pageButton.addEventListener('click', function() {
            // Update active class
            document.querySelectorAll('.page-number').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Get current page
            const currentPage = parseInt(this.dataset.page);
            
            // Enable/disable prev/next buttons
            prevButton.disabled = currentPage === 1;
            nextButton.disabled = currentPage === totalPages;
            
            // Load products for this page
            const start = (currentPage - 1) * productsPerPage;
            const end = Math.min(start + productsPerPage, products.length);
            const pagedProducts = products.slice(start, end);
            
            // Render products
            const productsGrid = document.getElementById('productsGrid');
            if (productsGrid) {
                renderProducts(pagedProducts, productsGrid);
            }
            
            // Scroll to top of products
            const productsSection = document.querySelector('.products-section');
            if (productsSection) {
                productsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        paginationContainer.appendChild(pageButton);
    }
    
    // Create next button
    const nextButton = document.createElement('button');
    nextButton.className = 'pagination-btn next';
    nextButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    nextButton.disabled = totalPages === 1; // Disabled if only one page
    nextButton.addEventListener('click', function() {
        // Get active page
        const activePage = document.querySelector('.page-number.active');
        if (activePage) {
            const currentPage = parseInt(activePage.dataset.page);
            if (currentPage < totalPages) {
                // Click the next page button
                document.querySelector(`.page-number[data-page="${currentPage + 1}"]`).click();
            }
        }
    });
    paginationContainer.appendChild(nextButton);
    
    // Load first page (it's already loaded by default, but this ensures consistency)
    document.querySelector('.page-number[data-page="1"]').click();
}

/**
 * Load product detail
 * @param {string} productId - Product ID to load
 */
async function loadProductDetail(productId) {
    const productDetailContainer = document.getElementById('productDetailContainer');
    const specsTable = document.getElementById('specsTable');
    
    if (!productDetailContainer) return;
    
    // Show loading spinner
    productDetailContainer.innerHTML = '<div class="loading-spinner centered"></div>';
    
    try {
        // Check if productId exists
        if (!productId) {
            // Try to extract from URL hash if productId is not provided
            const urlHash = window.location.hash;
            const hashParts = urlHash.split('/');
            if (hashParts.length >= 2 && hashParts[0] === '#product-detail') {
                productId = hashParts[1];
            }
            
            // If still no productId, show error and return
            if (!productId) {
                productDetailContainer.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-triangle"></i>
                        <h2>المنتج غير موجود</h2>
                        <p>لم يتم العثور على المنتج المطلوب.</p>
                        <a href="#" data-page="products" class="btn-primary">العودة إلى المنتجات</a>
                    </div>
                `;
                setupProductDetailLinks(productDetailContainer);
                return;
            }
        }
        
        // Get product
        const product = await getProduct(productId);
        if (!product) {
            // Product not found
            productDetailContainer.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>المنتج غير موجود</h2>
                    <p>لم يتم العثور على المنتج المطلوب.</p>
                    <a href="#" data-page="products" class="btn-primary">العودة إلى المنتجات</a>
                </div>
            `;
            setupProductDetailLinks(productDetailContainer);
            return;
        }
        
        // Format price
        const formattedPrice = formatCurrency(product.price);
        
        // Determine stock status
        const stockStatus = product.stock > 0 
            ? `<span class="in-stock">${product.stock} في المخزون</span>` 
            : '<span class="out-of-stock">غير متوفر</span>';
        
        // Generate images HTML
        let mainImageHtml = '';
        let thumbnailsHtml = '';
        
        if (product.images && product.images.length > 0) {
            // Main image (show first image by default)
            mainImageHtml = `<img src="${product.images[0]}" alt="${product.name}" id="mainProductImage" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">`;
            
            // Thumbnails
            product.images.forEach((image, index) => {
                thumbnailsHtml += `
                    <div class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${image}">
                        <img src="${image}" alt="${product.name}" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
                    </div>
                `;
            });
        } else {
            mainImageHtml = `<img src=${PLACEHOLDER_IMAGE_BASE64} alt="${product.name}" id="mainProductImage">`;
        }
        
        // Create product detail HTML
        productDetailContainer.innerHTML = `
            <div class="product-images">
                <div class="main-image">
                    ${mainImageHtml}
                </div>
                <div class="image-thumbnails">
                    ${thumbnailsHtml}
                </div>
            </div>
            <div class="product-info">
                <h1>${product.name}</h1>
                <div class="product-meta">
                    <div>العلامة التجارية: ${product.brand}</div>
                </div>
                <div class="product-price">${formattedPrice}</div>
                <div class="product-stock">${stockStatus}</div>
                <div class="quantity-selector">
                    <label for="quantity">الكمية:</label>
                    <div class="quantity-control">
                        <button class="quantity-btn minus" id="decreaseQuantity" ${product.stock <= 0 ? 'disabled' : ''}>
                            <i class="fas fa-minus"></i>
                        </button>
                        <input type="number" id="quantity" value="1" min="1" max="${product.stock}" ${product.stock <= 0 ? 'disabled' : ''}>
                        <button class="quantity-btn plus" id="increaseQuantity" ${product.stock <= 0 ? 'disabled' : ''}>
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn-primary add-to-cart-btn" id="addToCartBtn" ${product.stock <= 0 ? 'disabled' : ''}>
                        <i class="fas fa-cart-plus"></i>
                        إضافة إلى عربة التسوق
                    </button>
                </div>
            </div>
        `;
        
        // Update product specifications
        if (specsTable && product.specifications) {
            let specsHtml = '';
            for (const [key, value] of Object.entries(product.specifications)) {
                specsHtml += `
                    <tr>
                        <td>${key}</td>
                        <td>${value}</td>
                    </tr>
                `;
            }
            specsTable.innerHTML = specsHtml;
        }
        
        // Load related products
        // Find related products based on subcategory relationships
        let relatedCategory = product.category;
        
        // If this is a subcategory product, also include other products from the same parent category
        const parentCategory = CONFIG.CATEGORY_PARENTS[product.category];
        
        if (parentCategory) {
            // Use the parent category to find related products
            loadProducts('relatedProducts', { 
                category: parentCategory, 
                exclude: product.id,
                limit: 4
            });
        } else {
            // If this is a main category, just use the category directly
            loadProducts('relatedProducts', { 
                category: product.category, 
                exclude: product.id,
                limit: 4
            });
        }
        
        // Set up product detail functionality and activate specifications tab
        setTimeout(() => {
            setupProductDetail(product);
            
            // Explicitly activate specifications tab
            const specsTab = document.getElementById('specifications');
            const specsTabBtn = document.querySelector('.tab-btn[data-tab="specifications"]');
            
            if (specsTab && specsTabBtn) {
                // Remove active class from all tabs
                document.querySelectorAll('.tab-content').forEach(tab => {
                    tab.classList.remove('active');
                });
                
                // Remove active class from all tab buttons
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Activate specifications tab
                specsTab.classList.add('active');
                specsTabBtn.classList.add('active');
            }
        }, 100); // Small delay to ensure everything is properly rendered
    } catch (error) {
        console.error('Error loading product detail:', error);
        productDetailContainer.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h2>حدث خطأ</h2>
                <p>حدث خطأ أثناء تحميل تفاصيل المنتج. يرجى المحاولة مرة أخرى.</p>
                <a href="#" data-page="products" class="btn-primary">العودة إلى المنتجات</a>
            </div>
        `;
        setupProductDetailLinks(productDetailContainer);
    }
}

/**
 * Set up product detail functionality
 * @param {Object} product - Product object
 */
function setupProductDetail(product) {
    // Set up image gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Update active class
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update main image
            const mainImage = document.getElementById('mainProductImage');
            if (mainImage) {
                mainImage.src = this.dataset.image;
            }
        });
    });
    
    // Set up quantity controls
    const quantityInput = document.getElementById('quantity');
    const decreaseBtn = document.getElementById('decreaseQuantity');
    const increaseBtn = document.getElementById('increaseQuantity');
    
    if (quantityInput && decreaseBtn && increaseBtn) {
        decreaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            const maxValue = parseInt(quantityInput.max);
            if (currentValue < maxValue) {
                quantityInput.value = currentValue + 1;
            }
        });
        
        quantityInput.addEventListener('change', function() {
            const minValue = parseInt(this.min);
            const maxValue = parseInt(this.max);
            const currentValue = parseInt(this.value);
            
            if (isNaN(currentValue) || currentValue < minValue) {
                this.value = minValue;
            } else if (currentValue > maxValue) {
                this.value = maxValue;
            }
        });
    }
    
    // Set up add to cart button
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const quantity = parseInt(document.getElementById('quantity').value);
            addToCart(product.id, quantity).then(success => {
                if (success) {
                    showNotification('تمت إضافة المنتج إلى عربة التسوق', 'success');
                    updateCartCount(); // Update cart count immediately
                }
            });
        });
    }
    
    // Set up tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (tabBtns.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Hide all tabs
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Hide all tab buttons active state
                tabBtns.forEach(b => {
                    b.classList.remove('active');
                });
                
                // Show selected tab
                const tabId = this.dataset.tab;
                document.getElementById(tabId).classList.add('active');
                this.classList.add('active');
            });
        });
    }
}

/**
 * CART MANAGEMENT
 */

/**
 * Get cart from database
 * @returns {Promise<Array>} Cart items
 */
async function getCart() {
    try {
        const cart = await DB.read(DB_PATHS.cart);
        return Array.isArray(cart) ? cart : [];
    } catch (error) {
        console.error('Error getting cart:', error);
        return [];
    }
}

/**
 * Save cart to database
 * @param {Array} cart - Cart items
 * @returns {Promise<boolean>} Success status
 */
async function saveCart(cart) {
    try {
        // Validate cart array
        if (!Array.isArray(cart)) {
            console.error('Invalid cart data (not an array)');
            return false;
        }
        
        const success = await DB.write(DB_PATHS.cart, cart);
        if (success) {
            updateCartCount();
        }
        return success;
    } catch (error) {
        console.error('Error saving cart:', error);
        return false;
    }
}

/**
 * Update cart count in header
 */
async function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    if (!cartCountElements.length) return;
    
    try {
        // Calculate total items in cart
        const cart = await getCart();
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        
        // Update all cart count elements
        cartCountElements.forEach(element => {
            element.textContent = itemCount;
        });
    } catch (error) {
        console.error('Error updating cart count:', error);
    }
}

/**
 * Add item to cart
 * @param {string} productId - Product ID
 * @param {number} quantity - Quantity to add
 * @returns {Promise<boolean>} Success status
 */
async function addToCart(productId, quantity = 1) {
    try {
        // Get product
        const product = await getProduct(productId);
        if (!product) {
            showNotification('المنتج غير موجود', 'error');
            return false;
        }
        
        // Check if product is in stock
        if (product.stock <= 0) {
            showNotification('المنتج غير متوفر في المخزون', 'error');
            return false;
        }
        
        // Validate quantity
        if (quantity <= 0) {
            quantity = 1;
        } else if (quantity > product.stock) {
            quantity = product.stock;
        }
        
        // Get current cart
        const cart = await getCart();
        
        // Check if product already exists in cart
        const existingItemIndex = cart.findIndex(item => item.id === productId);
        
        if (existingItemIndex !== -1) {
            // Update quantity if product already exists
            cart[existingItemIndex].quantity += quantity;
            
            // Make sure quantity doesn't exceed stock
            if (cart[existingItemIndex].quantity > product.stock) {
                cart[existingItemIndex].quantity = product.stock;
            }
        } else {
            // Add new item if product doesn't exist
            cart.push({
                id: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        // Save updated cart
        const saveSuccess = await saveCart(cart);
        
        // Force update cart count immediately regardless of save success
        updateCartCount();
        
        return saveSuccess;
    } catch (error) {
        console.error('Error adding to cart:', error);
        showNotification('حدث خطأ أثناء إضافة المنتج إلى عربة التسوق', 'error');
        return false;
    }
}

/**
 * Remove item from cart
 * @param {string} productId - Product ID
 * @returns {Promise<boolean>} Success status
 */
async function removeFromCart(productId) {
    try {
        // Get current cart
        let cart = await getCart();
        
        // Remove item
        cart = cart.filter(item => item.id !== productId);
        
        // Save updated cart
        const success = await saveCart(cart);
        
        if (success) {
            // Show notification
            showNotification('تم حذف المنتج من عربة التسوق', 'success');
            // Force update cart count immediately
            updateCartCount();
        }
        
        return success;
    } catch (error) {
        console.error('Error removing from cart:', error);
        showNotification('حدث خطأ أثناء حذف المنتج من عربة التسوق', 'error');
        return false;
    }
}

/**
 * Update cart item quantity
 * @param {string} productId - Product ID
 * @param {number} quantity - New quantity
 * @returns {Promise<boolean>} Success status
 */
async function updateCartItemQuantity(productId, quantity) {
    try {
        // Validate quantity
        if (quantity <= 0) {
            return await removeFromCart(productId);
        }
        
        // Get product
        const product = await getProduct(productId);
        if (!product) {
            return false;
        }
        
        // Make sure quantity doesn't exceed stock
        if (quantity > product.stock) {
            quantity = product.stock;
        }
        
        // Get current cart
        const cart = await getCart();
        
        // Find item
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex === -1) {
            return false;
        }
        
        // Update quantity
        cart[itemIndex].quantity = quantity;
        
        // Save updated cart
        const success = await saveCart(cart);
        
        // Force update cart count immediately regardless of save success
        updateCartCount();
        
        return success;
    } catch (error) {
        console.error('Error updating cart item quantity:', error);
        return false;
    }
}

/**
 * Clear cart
 * @returns {Promise<boolean>} Success status
 */
async function clearCart() {
    try {
        const success = await DB.write(DB_PATHS.cart, []);
        
        // Force update cart count immediately
        updateCartCount();
        
        return success;
    } catch (error) {
        console.error('Error clearing cart:', error);
        return false;
    }
}

/**
 * Load cart page
 */
async function loadCart() {
    const emptyCart = document.getElementById('emptyCart');
    const cartLoading = document.getElementById('cartLoading');
    const cartGrid = document.getElementById('cartGrid');
    const cartItems = document.getElementById('cartItems');
    
    if (!cartLoading || !cartGrid || !cartItems) return;
    
    // Show loading
    cartLoading.style.display = 'block';
    cartGrid.style.display = 'none';
    
    if (emptyCart) {
        emptyCart.style.display = 'none';
    }
    
    try {
        // Get cart items
        const cart = await getCart();
        
        // Short timeout to show loading spinner (for better UX)
        setTimeout(() => {
            // Hide loading
            cartLoading.style.display = 'none';
            
            // Check if cart is empty
            if (!cart.length) {
                if (emptyCart) {
                    emptyCart.style.display = 'block';
                }
                return;
            }
            
            // Show cart grid
            cartGrid.style.display = 'grid';
            
            // Render cart items
            renderCartItems(cart);
        }, 300);
    } catch (error) {
        console.error('Error loading cart:', error);
        cartLoading.style.display = 'none';
        cartGrid.style.display = 'none';
        
        // Show error message
        const cartContent = document.getElementById('cartContent');
        if (cartContent) {
            cartContent.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h2>حدث خطأ</h2>
                    <p>حدث خطأ أثناء تحميل عربة التسوق. يرجى المحاولة مرة أخرى.</p>
                </div>
            `;
        }
    }
}

/**
 * Render cart items
 * @param {Array} cart - Cart items
 */
async function renderCartItems(cart) {
    const cartItems = document.getElementById('cartItems');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    if (!cartItems || !subtotalElement || !totalElement) return;
    
    try {
        // Clear cart items
        cartItems.innerHTML = '';
        
        // Calculate subtotal
        let subtotal = 0;
        
        // Get all products
        const products = await getProducts();
        
        // Render each cart item
        let validItemsExist = false;
        
        for (const item of cart) {
            const product = products.find(p => p.id === item.id);
            if (!product) continue;
            
            validItemsExist = true;
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.dataset.id = product.id;
            
            itemElement.innerHTML = `
                <div class="cart-product">
                    <div class="product-image">
                        <img src="${product.images[0]}" alt="${product.name}" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <div class="product-meta">
                        </div>
                    </div>
                </div>
                <div class="cart-price" data-label="السعر">
                    ${formatCurrency(product.price)}
                </div>
                <div class="cart-quantity" data-label="الكمية">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}"><i class="fas fa-minus"></i></button>
                        <input type="number" class="quantity-input" value="${item.quantity}" min="1" max="${product.stock}" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
                <div class="cart-total" data-label="المجموع">
                    ${formatCurrency(itemTotal)}
                </div>
                <div class="cart-actions">
                    <button class="remove-item" data-id="${product.id}"><i class="fas fa-trash"></i></button>
                </div>
            `;
            
            cartItems.appendChild(itemElement);
        }
        
        // Check if we found any valid items (corresponding products)
        if (!validItemsExist) {
            const emptyCart = document.getElementById('emptyCart');
            if (emptyCart) {
                emptyCart.style.display = 'block';
                cartGrid.style.display = 'none';
            }
            
            // Clear the corrupted cart
            await clearCart();
            return;
        }
        
        // Update summary
        const shipping = 5000; // Fixed shipping cost
        const total = subtotal + shipping;
        
        subtotalElement.textContent = formatCurrency(subtotal);
        totalElement.textContent = formatCurrency(total);
        
        // Set up event listeners for quantity controls
        setupCartControls();
    } catch (error) {
        console.error('Error rendering cart items:', error);
        cartItems.innerHTML = '<div class="error-message">حدث خطأ أثناء عرض عناصر عربة التسوق</div>';
    }
}

/**
 * Set up cart controls
 */
function setupCartControls() {
    // Quantity minus buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.id;
            const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            
            if (!input) return;
            
            let currentValue = parseInt(input.value);
            
            if (currentValue > 1) {
                currentValue--;
                input.value = currentValue;
                updateCartItemQuantity(productId, currentValue).then(() => {
                    loadCart(); // Reload cart to reflect changes
                });
            }
        });
    });
    
    // Quantity plus buttons
    document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.id;
            const input = document.querySelector(`.quantity-input[data-id="${productId}"]`);
            
            if (!input) return;
            
            let currentValue = parseInt(input.value);
            const maxValue = parseInt(input.max);
            
            if (currentValue < maxValue) {
                currentValue++;
                input.value = currentValue;
                updateCartItemQuantity(productId, currentValue).then(() => {
                    loadCart(); // Reload cart to reflect changes
                });
            }
        });
    });
    
    // Quantity inputs
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = this.dataset.id;
            let newValue = parseInt(this.value);
            const minValue = parseInt(this.min);
            const maxValue = parseInt(this.max);
            
            if (isNaN(newValue) || newValue < minValue) {
                newValue = minValue;
                this.value = minValue;
            } else if (newValue > maxValue) {
                newValue = maxValue;
                this.value = maxValue;
            }
            
            updateCartItemQuantity(productId, newValue).then(() => {
                loadCart(); // Reload cart to reflect changes
            });
        });
    });
    
    // Remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = this.dataset.id;
            removeFromCart(productId).then(() => {
                loadCart(); // Reload cart to reflect changes
            });
        });
    });
}

/**
 * Open checkout modal
 */
async function openCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    const orderSummary = document.getElementById('orderSummary');
    
    if (!checkoutModal || !orderSummary) return;
    
    try {
        // Get cart items
        const cart = await getCart();
        
        // Check if cart is empty
        if (!cart.length) {
            showNotification('عربة التسوق فارغة', 'error');
            return;
        }
        
        // Get all products
        const products = await getProducts();
        
        // Generate order summary
        let subtotal = 0;
        let itemsHtml = '';
        let validItemsFound = false;
        
        for (const item of cart) {
            const product = products.find(p => p.id === item.id);
            if (!product) continue;
            
            validItemsFound = true;
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            
            itemsHtml += `
                <div class="order-item">
                    <div class="order-item-info">
                        <span class="order-item-name">${product.name}</span>
                        <span class="order-item-quantity">× ${item.quantity}</span>
                    </div>
                    <span class="order-item-price">${formatCurrency(itemTotal)}</span>
                </div>
            `;
        }
        
        // Handle case where no valid products were found in cart
        if (!validItemsFound) {
            showNotification('عربة التسوق تحتوي على منتجات غير موجودة', 'error');
            await clearCart(); // Clear corrupted cart
            return;
        }
        
        const shipping = 5000; // Fixed shipping cost
        const total = subtotal + shipping;
        
        orderSummary.innerHTML = `
            <div class="order-items">
                ${itemsHtml}
            </div>
            <div class="order-totals">
                <div class="order-total-row">
                    <span>إجمالي المنتجات:</span>
                    <span>${formatCurrency(subtotal)}</span>
                </div>
                <div class="order-total-row">
                    <span>رسوم التوصيل:</span>
                    <span>${formatCurrency(shipping)}</span>
                </div>
                <div class="order-total-row total">
                    <span>المجموع:</span>
                    <span>${formatCurrency(total)}</span>
                </div>
            </div>
        `;
        
        // Show modal
        checkoutModal.classList.add('show');
    } catch (error) {
        console.error('Error opening checkout modal:', error);
        showNotification('حدث خطأ أثناء فتح نافذة الطلب', 'error');
    }
}

/**
 * Process order submission
 */
async function processOrderSubmit() {
    try {
        // Show processing indicator
        const submitBtn = document.querySelector('.submit-order-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري المعالجة...';
        }
        
        // Directly get form elements with validation
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const cityInput = document.getElementById('city');
        const areaInput = document.getElementById('area');
        const addressInput = document.getElementById('address');
        const notesInput = document.getElementById('notes');
        
        // Validate required fields exist and have values
        if (!nameInput || !nameInput.value.trim()) {
            showNotification('يرجى إدخال الاسم الكامل', 'error');
            resetSubmitButton(submitBtn);
            return;
        }
        
        if (!phoneInput || !phoneInput.value.trim()) {
            showNotification('يرجى إدخال رقم الهاتف', 'error');
            resetSubmitButton(submitBtn);
            return;
        }
        
        if (!cityInput || !cityInput.value.trim()) {
            showNotification('يرجى اختيار المدينة', 'error');
            resetSubmitButton(submitBtn);
            return;
        }
        
        if (!areaInput || !areaInput.value.trim()) {
            showNotification('يرجى إدخال المنطقة', 'error');
            resetSubmitButton(submitBtn);
            return;
        }
        
        if (!addressInput || !addressInput.value.trim()) {
            showNotification('يرجى إدخال العنوان التفصيلي', 'error');
            resetSubmitButton(submitBtn);
            return;
        }
        
        // Get cart items
        const cart = await getCart();
        if (cart.length === 0) {
            showNotification('عربة التسوق فارغة', 'error');
            resetSubmitButton(submitBtn);
            return;
        }
        
        // Create order data object
        const orderData = {
            customer: {
                name: nameInput.value.trim(),
                phone: phoneInput.value.trim(),
                email: ''
            },
            shipping: {
                city: cityInput.value.trim(),
                area: areaInput.value.trim(),
                address: addressInput.value.trim(),
                notes: notesInput ? notesInput.value.trim() : ''
            },
            payment: {
                method: document.querySelector('input[name="payment_method"]:checked')?.value || 'cash'
            }
        };
        
        // Create final order object
        const finalOrder = await createOrderObject(orderData, cart);
        
        // Store in localStorage as backup
        storeOrderInLocalBackup(finalOrder);
        
        // Try to save to database
        try {
            await saveOrderToStorage(finalOrder);
        } catch (err) {
            console.error('Error saving to database, using localStorage backup:', err);
        }
        
        // Try to send to Discord webhook
        try {
            sendOrderToDiscord(finalOrder).catch(err => {
                console.error('Discord webhook notification failed:', err);
            });
        } catch (err) {
            console.error('Error in Discord notification:', err);
        }
        
        // Show confirmation regardless of storage success
        showOrderConfirmation(finalOrder);
        
        // Clear cart
        await clearCart();
        
        // Reset button
        resetSubmitButton(submitBtn);
        
        // Close checkout modal
        const checkoutModal = document.getElementById('checkoutModal');
        if (checkoutModal) checkoutModal.classList.remove('show');
        
    } catch (error) {
        console.error('Error processing order:', error);
        showNotification('حدث خطأ أثناء معالجة الطلب. يرجى المحاولة مرة أخرى.', 'error');
        resetSubmitButton();
    }
}

/**
 * Reset submit button state
 */
function resetSubmitButton(btn) {
    const submitBtn = btn || document.querySelector('.submit-order-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-check"></i> تأكيد الطلب';
    }
}

/**
 * Store order in local backup
 * @param {Object} order - Order object to store
 */
function storeOrderInLocalBackup(order) {
    try {
        // Get existing orders from localStorage
        const existingOrdersJson = localStorage.getItem('orders');
        let existingOrders = [];
        
        if (existingOrdersJson) {
            try {
                existingOrders = JSON.parse(existingOrdersJson);
                if (!Array.isArray(existingOrders)) existingOrders = [];
            } catch (e) {
                console.warn('Could not parse existing orders, starting with empty array');
                existingOrders = [];
            }
        }
        
        // Add new order
        existingOrders.push(order);
        
        // Save back to localStorage
        localStorage.setItem('orders', JSON.stringify(existingOrders));
        console.log('Order backup saved to localStorage successfully');
        return true;
    } catch (err) {
        console.error('Failed to save order backup to localStorage:', err);
        return false;
    }
}

/**
 * Create complete order object with items and totals
 * @param {Object} formData - Form data
 * @param {Array} cartItems - Cart items
 * @returns {Promise<Object>} Complete order object
 */
async function createOrderObject(formData, cartItems) {
    // Ensure we have proper fallback values for all address fields
    const shipping = {
        city: formData.shipping?.city || 'غير متوفر',
        area: formData.shipping?.area || 'غير متوفر',
        address: formData.shipping?.address || 'غير متوفر',
        notes: formData.shipping?.notes || 'لا توجد ملاحظات'
    };

    // Ensure we have proper fallback values for customer fields
    const customer = {
        name: formData.customer?.name || 'غير متوفر',
        phone: formData.customer?.phone || 'غير متوفر',
        email: formData.customer?.email || 'غير متوفر'
    };

    // Get all products for reference
    const products = await getProducts();
    
    // Map cart items to order items
    const orderItems = await Promise.all(cartItems.map(async item => {
        const product = products.find(p => p.id === item.id);
        
        if (!product) {
            return {
                id: item.id,
                name: "منتج غير معروف",
                price: 0,
                quantity: item.quantity,
                subtotal: 0
            };
        }
        
        return {
            id: item.id,
            name: product.name,
            price: product.price,
            quantity: item.quantity,
            subtotal: product.price * item.quantity
        };
    }));
    
    // Calculate totals
    const subtotal = orderItems.reduce((total, item) => total + item.subtotal, 0);
    const shippingCost = 5000; // Fixed shipping cost
    const total = subtotal + shippingCost;
    
    // Generate order number and timestamp
    const orderNumber = 'ORD-' + Math.floor(100000 + Math.random() * 900000);
    const orderDate = new Date();
    
    // Return complete order object with ensured values
    return {
        id: orderNumber,
        orderNumber: orderNumber,
        date: orderDate.toISOString(),
        customer: customer,
        shipping: shipping,
        payment: {
            method: formData.payment?.method || 'cash'
        },
        items: orderItems,
        subtotal: subtotal,
        shipping: shippingCost,
        total: total,
        status: 'pending',
        storeName: 'Muh Store'
    };
}

/**
 * Save order to database
 * @param {Object} order - Order to save
 * @returns {Promise<boolean>} Success status
 */
async function saveOrderToStorage(order) {
    try {
        // Get existing orders
        let orders = await getOrders();
        
        // Ensure orders is always an array
        if (!Array.isArray(orders)) {
            console.warn('Orders data was not an array, initializing empty array');
            orders = [];
        }
        
        // Validate order has required fields
        if (!order.id || !order.orderNumber || !order.date) {
            console.error('Order missing required fields:', order);
            order.id = order.id || 'order-' + Date.now();
            order.orderNumber = order.orderNumber || 'ORD-' + Math.floor(100000 + Math.random() * 900000);
            order.date = order.date || new Date().toISOString();
        }
        
        // Add new order
        orders.push(order);
        
        // Save directly to localStorage first as immediate backup
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Then try to save to database file
        const fileWriteResult = await DB.write(DB_PATHS.orders, orders);
        
        // Log outcome but return true regardless - we have localStorage backup
        if (fileWriteResult) {
            console.log('Order saved successfully to file system:', order.orderNumber);
        } else {
            console.warn('Order saved to localStorage but file system save failed:', order.orderNumber);
        }
        
        return true; // Consider success since localStorage backup exists
    } catch (error) {
        console.error('Error in saveOrderToStorage:', error);
        
        // Last resort: try to save directly to localStorage
        try {
            const existingOrdersJson = localStorage.getItem('orders');
            let existingOrders = [];
            
            if (existingOrdersJson) {
                existingOrders = JSON.parse(existingOrdersJson);
                if (!Array.isArray(existingOrders)) existingOrders = [];
            }
            
            existingOrders.push(order);
            localStorage.setItem('orders', JSON.stringify(existingOrders));
            console.log('Order saved to localStorage as fallback');
            return true;
        } catch (e) {
            console.error('All order saving methods failed:', e);
            return false;
        }
    }
}

/**
 * Show order confirmation
 * @param {Object} order - Order object
 */
function showOrderConfirmation(order) {
    const confirmationModal = document.getElementById('confirmationModal');
    const orderNumberElement = document.getElementById('orderNumber');
    const orderDateElement = document.getElementById('orderDate');
    const orderTotalElement = document.getElementById('orderTotal');
    
    if (!confirmationModal || !orderNumberElement || !orderDateElement || !orderTotalElement) return;
    
    // Set order details
    orderNumberElement.textContent = order.orderNumber;
    orderDateElement.textContent = formatDate(order.date);
    orderTotalElement.textContent = formatCurrency(order.total);
    
    // Show confirmation modal
    confirmationModal.classList.add('show');
}

/**
 * Send order to Discord webhook
 * @param {Object} orderData - Order data
 * @returns {Promise} Promise that resolves when order is sent
 */
async function sendOrderToDiscord(orderData) {
    return new Promise(async (resolve, reject) => {
        try {
            // Get Discord webhook URL
            const webhookUrl = await DB.getSetting('discordWebhookUrl', '');
            
            if (!webhookUrl || webhookUrl.trim() === '') {
                console.warn('Discord webhook URL not set');
                resolve({ success: true, simulated: true });
                return;
            }
            
            // Get shipping details directly from the form
            const cityInput = document.getElementById('city');
            const areaInput = document.getElementById('area');
            const addressInput = document.getElementById('address');
            const notesInput = document.getElementById('notes');
            
            const city = cityInput && cityInput.value ? cityInput.value.trim() : 'غير متوفر';
            const area = areaInput && areaInput.value ? areaInput.value.trim() : 'غير متوفر';
            const address = addressInput && addressInput.value ? addressInput.value.trim() : 'غير متوفر';
            const notes = notesInput && notesInput.value ? notesInput.value.trim() : 'لا توجد ملاحظات';
            
            // Format items
            let itemsFormatted = '';
            if (orderData.items && orderData.items.length) {
                itemsFormatted = orderData.items.map(item => {
                    return `**${item.name || ''}** × ${item.quantity || 0} = ${formatCurrency(item.subtotal || 0)}`;
                }).join('\n');
            } else {
                itemsFormatted = 'لا توجد منتجات';
            }
            
            // Construct location string
            const locationString = 
                `**المدينة:** ${city}\n` +
                `**المنطقة:** ${area}\n` +
                `**العنوان:** ${address}\n` +
                `**ملاحظات:** ${notes}`;
            
            // Create payload
            const payload = {
                embeds: [
                    {
                        title: `طلب جديد - ${orderData.orderNumber || ''}#`,
                        color: 0xf89406,
                        fields: [
                            {
                                name: "📋 معلومات العميل",
                                value: `**الاسم:** ${orderData.customer?.name || 'غير متوفر'}\n**الهاتف:** ${orderData.customer?.phone || ''}`,
                                inline: false
                            },
                            {
                                name: "📍 معلومات التوصيل",
                                value: locationString,
                                inline: false
                            },
                            {
                                name: "🛍️ المنتجات",
                                value: itemsFormatted,
                                inline: false
                            },
                            {
                                name: "💰 ملخص الطلب",
                                value: `**إجمالي المنتجات:** ${formatCurrency(orderData.subtotal || 0)}\n**رسوم التوصيل:** ${formatCurrency(5000)}\n**المجموع:** ${formatCurrency(orderData.total || 0)}`,
                                inline: false
                            },
                            {
                                name: "💳 طريقة الدفع",
                                value: "الدفع عند الاستلام",
                                inline: false
                            }
                        ],
                        timestamp: new Date().toISOString(),
                        footer: { 
                            text: `${orderData.storeName || 'Muh Store'} • ${new Date().toLocaleTimeString('ar-IQ', {
                                hour: '2-digit',
                                minute: '2-digit'
                            })}`
                        }
                    }
                ]
            };
            
            // Send with retry logic
            const sendRequest = async (retryCount = 0) => {
                try {
                    const response = await fetch(webhookUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    
                    if (!response.ok) {
                        throw new Error(`Failed to send order to Discord: ${response.status}`);
                    }
                    
                    console.log('Successfully sent order to Discord webhook');
                    resolve({ success: true });
                } catch (error) {
                    console.error(`Attempt ${retryCount + 1} failed:`, error);
                    
                    if (retryCount < 2) { // Retry up to 3 times
                        setTimeout(() => sendRequest(retryCount + 1), 1000); // Wait 1 second before retrying
                    } else {
                        console.error('All webhook sending attempts failed');
                        resolve({ success: false, error: error.message });
                    }
                }
            };
            
            // Start the sending process
            sendRequest();
        } catch (error) {
            console.error('Error preparing Discord webhook data:', error);
            resolve({ success: false, error: error.message }); // Still resolve to continue order process
        }
    });
}

/**
 * ORDERS MANAGEMENT
 */

/**
 * Get orders from database
 * @returns {Promise<Array>} Array of orders
 */
async function getOrders() {
    try {
        const orders = await DB.read(DB_PATHS.orders);
        return Array.isArray(orders) ? orders : [];
    } catch (error) {
        console.error('Error getting orders:', error);
        return [];
    }
}

/**
 * Generate order detail HTML
 * @param {Object} order - Order object
 * @returns {string} Order detail HTML
 */
function generateOrderDetailHTML(order) {
    // Ensure all customer and shipping data is available with fallbacks
    const customerName = order.customer?.name || 'غير متوفر';
    const customerPhone = order.customer?.phone || 'غير متوفر';
    
    // Format items for display
    let itemsHtml = '';
    if (order.items && order.items.length > 0) {
        order.items.forEach(item => {
            const itemTotal = item.subtotal || (item.price * item.quantity);
            
            itemsHtml += `
                <tr>
                    <td>${item.name}</td>
                    <td>${formatCurrency(item.price)}</td>
                    <td>${item.quantity}</td>
                    <td class="item-total">${formatCurrency(itemTotal)}</td>
                </tr>
            `;
        });
    } else {
        itemsHtml = `
            <tr>
                <td colspan="4" class="no-data">لا توجد منتجات</td>
            </tr>
        `;
    }
    
    // Generate complete HTML for order details
    return `
        <div class="order-detail-grid">
            <div class="detail-card">
                <h4><i class="fas fa-user"></i> معلومات العميل</h4>
                <div class="detail-info">
                    <div class="detail-row">
                        <span class="detail-label">الاسم:</span>
                        <span class="detail-value">${customerName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">الهاتف:</span>
                        <span class="detail-value">${customerPhone}</span>
                    </div>
                </div>
            </div>
        
            
            <div class="detail-card">
                <h4><i class="fas fa-info-circle"></i> معلومات الطلب</h4>
                <div class="detail-info">
                    <div class="detail-row">
                        <span class="detail-label">رقم الطلب:</span>
                        <span class="detail-value">${order.orderNumber || order.id}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">التاريخ:</span>
                        <span class="detail-value">${formatDate(order.date)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">طريقة الدفع:</span>
                        <span class="detail-value">الدفع عند الاستلام</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">الحالة:</span>
                        <span class="detail-value">
                            <span class="order-status status-${order.status}">${getStatusText(order.status)}</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
        <h3>المنتجات</h3>
        <table class="order-items-table">
            <thead>
                <tr>
                    <th>المنتج</th>
                    <th>السعر</th>
                    <th>الكمية</th>
                    <th>المجموع</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHtml}
            </tbody>
        </table>
        
        <div class="order-totals">
            <div class="order-total-row">
                <span>المجموع:</span>
                <span>${formatCurrency(order.subtotal || 0)}</span>
            </div>
            <div class="order-total-row">
                <span>رسوم التوصيل:</span>
                <span>${formatCurrency(order.shipping || 5000)}</span>
            </div>
            <div class="order-total-row">
                <span>المجموع الكلي:</span>
                <span>${formatCurrency(order.total || 0)}</span>
            </div>
        </div>
        
        <div class="order-status-select">
            <label for="orderStatus">حالة الطلب:</label>
            <select id="orderStatus">
                <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>قيد الانتظار</option>
                <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>قيد المعالجة</option>
                <option value="completed" ${order.status === 'completed' ? 'selected' : ''}>مكتمل</option>
                <option value="cancelled" ${order.status === 'cancelled' ? 'selected' : ''}>ملغي</option>
            </select>
        </div>
    `;
}

/**
 * ADMIN PANEL
 */

/**
 * Set up admin login
 */
function setupAdminLogin() {
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (!adminLoginForm) return;
    
    adminLoginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const loginError = document.getElementById('loginError');
        
        // First try default credentials for instant access
        if (username === CONFIG.ADMIN_CREDENTIALS.username && 
            password === CONFIG.ADMIN_CREDENTIALS.password) {
            
            console.log('Admin login successful using default credentials');
            localStorage.setItem('adminLoggedIn', 'true');
            
            // Save to database in background
            DB.saveSetting('adminLoggedIn', true);
            DB.saveSetting('adminUsername', username);
            DB.saveSetting('adminPassword', password);
            
            // Navigate to admin panel
            navigateTo('admin');
            return;
        }
        
        // If not using default credentials, check stored settings
        DB.getSetting('adminUsername', CONFIG.ADMIN_CREDENTIALS.username)
            .then(storedUsername => {
                return DB.getSetting('adminPassword', CONFIG.ADMIN_CREDENTIALS.password)
                    .then(storedPassword => {
                        if (username === storedUsername && password === storedPassword) {
                            console.log('Admin login successful using stored credentials');
                            localStorage.setItem('adminLoggedIn', 'true');
                            DB.saveSetting('adminLoggedIn', true);
                            
                            // Navigate to admin panel
                            navigateTo('admin');
                        } else {
                            // Login failed
                            if (loginError) {
                                loginError.textContent = 'اسم المستخدم أو كلمة المرور غير صحيحة';
                                loginError.style.display = 'block';
                            }
                        }
                    });
            })
            .catch(error => {
                console.error('Error verifying admin credentials:', error);
                
                // Final fallback to default credentials
                if (username === CONFIG.ADMIN_CREDENTIALS.username && 
                    password === CONFIG.ADMIN_CREDENTIALS.password) {
                    
                    localStorage.setItem('adminLoggedIn', 'true');
                    navigateTo('admin');
                } else {
                    if (loginError) {
                        loginError.textContent = 'حدث خطأ أثناء التحقق من بيانات الدخول';
                        loginError.style.display = 'block';
                    }
                }
            });
    });
}

/**
 * Load admin panel data
 */
async function loadAdminData() {
    try {
        // Set admin username in header
        const adminUsername = document.getElementById('adminUsername');
        if (adminUsername) {
            const username = await DB.getSetting('adminUsername', 'مدير');
            adminUsername.textContent = username;
        }
        
        // Set up admin sidebar navigation
        setupAdminNavigation();
        
        // Set up admin panels
        await setupAdminDashboard();
        setupAdminProducts();
        setupAdminOrders();
        setupAdminSettings();
        
        // Set up logout button
        const logoutBtn = document.getElementById('logoutBtn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', async function(e) {
                e.preventDefault();
                
                // Update both localStorage and file-based storage
                localStorage.setItem('adminLoggedIn', 'false');
                await DB.saveSetting('adminLoggedIn', false);
                
                // Navigate to admin login
                navigateTo('admin-login');
            });
        }
    } catch (error) {
        console.error('Error loading admin data:', error);
        showNotification('حدث خطأ أثناء تحميل بيانات لوحة الإدارة', 'error');
    }
}

/**
 * Set up admin sidebar navigation
 */
function setupAdminNavigation() {
    const navLinks = document.querySelectorAll('.admin-nav a');
    if (!navLinks.length) return;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active class
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.dataset.section;
            const sections = document.querySelectorAll('.admin-section');
            sections.forEach(section => section.classList.remove('active'));
            
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Clear cache to ensure fresh data when switching sections
                if (sectionId === 'products' || sectionId === 'orders') {
                    DB.clearCache();
                }
                
                // Refresh data when switching to sections
                if (sectionId === 'products') {
                    loadAdminProducts();
                } else if (sectionId === 'orders') {
                    loadAdminOrders();
                } else if (sectionId === 'dashboard') {
                    setupAdminDashboard();
                }
            }
        });
    });
}

/**
 * Set up admin dashboard
 */
async function setupAdminDashboard() {
    try {
        // Get products and orders
        const products = await getProducts();
        const orders = await getOrders();
        
        // Update stats
        updateDashboardStats(products, orders);
        
        // Update recent orders
        updateRecentOrders(orders);
        
        // Update stock status
        updateStockStatus(products);
    } catch (error) {
        console.error('Error setting up admin dashboard:', error);
        showNotification('حدث خطأ أثناء تحميل لوحة المعلومات', 'error');
    }
}

/**
 * Update dashboard stats
 * @param {Array} products - Products array
 * @param {Array} orders - Orders array
 */
function updateDashboardStats(products, orders) {
    const totalProductsElement = document.getElementById('totalProducts');
    const totalOrdersElement = document.getElementById('totalOrders');
    const outOfStockElement = document.getElementById('outOfStock');
    
    if (totalProductsElement) {
        totalProductsElement.textContent = products.length;
    }
    
    if (totalOrdersElement) {
        totalOrdersElement.textContent = orders.length;
    }
    
    if (outOfStockElement) {
        const outOfStockCount = products.filter(p => p.stock <= 0).length;
        outOfStockElement.textContent = outOfStockCount;
    }
}

/**
 * Update recent orders on dashboard
 * @param {Array} orders - Orders array
 */
function updateRecentOrders(orders) {
    const recentOrdersContainer = document.getElementById('recentOrders');
    if (!recentOrdersContainer) return;
    
    // Sort orders by date (newest first)
    const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Take only the 5 most recent orders
    const recentOrders = sortedOrders.slice(0, 5);
    
    if (recentOrders.length === 0) {
        recentOrdersContainer.innerHTML = `
            <p class="no-data">لا توجد طلبات حالياً</p>
        `;
        return;
    }
    
    // Generate HTML for recent orders
    let html = '';
    
    recentOrders.forEach(order => {
        html += `
            <div class="recent-order">
                <div class="order-info">
                    <span class="order-number">${order.orderNumber || order.id}</span>
                    <span class="order-customer">${order.customer?.name || 'غير متوفر'}</span>
                </div>
                <div class="order-meta">
                    <span class="order-amount">${formatCurrency(order.total || 0)}</span>
                    <span class="order-date">${formatDate(order.date)}</span>
                    <span class="order-status status-${order.status}">${getStatusText(order.status)}</span>
                </div>
            </div>
        `;
    });
    
    recentOrdersContainer.innerHTML = html;
}

/**
 * Update stock status on dashboard
 * @param {Array} products - Products array
 */
function updateStockStatus(products) {
    const stockStatusContainer = document.getElementById('stockStatus');
    if (!stockStatusContainer) return;
    
    // Sort products by stock (lowest first)
    const sortedProducts = [...products].sort((a, b) => a.stock - b.stock);
    
    // Take only the 5 products with lowest stock
    const lowStockProducts = sortedProducts.slice(0, 5);
    
    if (lowStockProducts.length === 0) {
        stockStatusContainer.innerHTML = `
            <p class="no-data">لا توجد منتجات</p>
        `;
        return;
    }
    
    // Generate HTML for low stock products
    let html = '';
    
    lowStockProducts.forEach(product => {
        const stockClass = product.stock <= 0 ? 'out' : (product.stock < 10 ? 'low' : '');
        
        html += `
            <div class="stock-item">
                <div class="stock-item-info">
                    <div class="stock-item-image">
                        <img src="${product.images?.[0] || ''}" alt="${product.name}" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
                    </div>
                    <div class="stock-item-details">
                        <h4>${product.name}</h4>
                    </div>
                </div>
                <span class="stock-quantity ${stockClass}">${product.stock <= 0 ? 'غير متوفر' : product.stock}</span>
            </div>
        `;
    });
    
    stockStatusContainer.innerHTML = html;
}

/**
 * Set up admin products panel
 */
function setupAdminProducts() {
    // Load products
    loadAdminProducts();
    
    // Set up add product button
    const addProductBtn = document.getElementById('addProductBtn');
    if (addProductBtn) {
        addProductBtn.addEventListener('click', function() {
            openProductModal();
        });
    }
    
    // Set up product form
    setupProductForm();
    
    // Set up product search
    const productSearchBtn = document.getElementById('productSearchBtn');
    if (productSearchBtn) {
        productSearchBtn.addEventListener('click', function() {
            const searchValue = document.getElementById('productSearch')?.value;
            loadAdminProducts(searchValue);
        });
    }
    
    // Set up category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            loadAdminProducts(document.getElementById('productSearch')?.value, this.value);
        });
    }
    
    // Set up stock filter
    const stockFilter = document.getElementById('stockFilter');
    if (stockFilter) {
        stockFilter.addEventListener('change', function() {
            loadAdminProducts(document.getElementById('productSearch')?.value, document.getElementById('categoryFilter')?.value, this.value);
        });
    }
}

/**
 * Load admin products
 * @param {string} search - Search term
 * @param {string} category - Category filter
 * @param {string} stock - Stock filter
 */
async function loadAdminProducts(search = '', category = '', stock = '') {
    const productsTableBody = document.getElementById('productsTableBody');
    if (!productsTableBody) return;
    
    // Show loading spinner
    productsTableBody.innerHTML = `
        <tr>
            <td colspan="6" class="loading-cell">
                <div class="loading-spinner"></div>
                <p>جاري تحميل المنتجات...</p>
            </td>
        </tr>
    `;
    
    try {
        // Get products with forced cache refresh
        let products = await DB.read(DB_PATHS.products, true);
        
        // Validate products array
        if (!Array.isArray(products)) {
            console.error('Products data is not an array:', products);
            products = [];
        }
        
        // Apply filters
        if (search) {
            const searchTerm = search.toLowerCase();
            products = products.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.brand.toLowerCase().includes(searchTerm)
            );
        }
        
        if (category) {
            // Check if this is a main category with subcategories
            const isMainCategory = Object.keys(CONFIG.CATEGORY_PARENTS).some(
                subcat => CONFIG.CATEGORY_PARENTS[subcat] === category
            );
            
            if (isMainCategory) {
                // Include all subcategories of this main category
                const subcategories = Object.keys(CONFIG.CATEGORY_PARENTS).filter(
                    subcat => CONFIG.CATEGORY_PARENTS[subcat] === category
                );
                
                products = products.filter(p => 
                    p.category === category || subcategories.includes(p.category)
                );
            } else {
                // Just filter by the exact category
                products = products.filter(p => p.category === category);
            }
        }
        
        if (stock) {
            if (stock === 'in-stock') {
                products = products.filter(p => p.stock > 0);
            } else if (stock === 'out-of-stock') {
                products = products.filter(p => p.stock <= 0);
            }
        }
        
        // Render products
        if (products.length === 0) {
            productsTableBody.innerHTML = `
                <tr>
                    <td colspan="6" class="no-data">لم يتم العثور على منتجات</td>
                </tr>
            `;
            return;
        }
        
        let html = '';
        
        products.forEach(product => {
            const categoryName = CONFIG.CATEGORIES[product.category] || product.category;
            const imageSrc = product.images && product.images.length > 0 ? product.images[0] : '';
            
            html += `
                <tr>
                    <td>
                        <img src="${imageSrc}" alt="${product.name}" class="product-image" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
                    </td>
                    <td>${product.name}</td>
                    <td>${formatCurrency(product.price)}</td>
                    <td>${product.stock}</td>
                    <td>${categoryName}</td>
                    <td>
                        <div class="action-buttons">
                            <button class="edit-btn" onclick="editProduct('${product.id}')" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete-btn" onclick="confirmDelete('${product.id}')" title="حذف">
                                <i class="fas fa-trash"></i>
                            </button>
                            <button class="view-btn" onclick="navigateTo('product-detail', {productId: '${product.id}'})" title="عرض">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });
        
        productsTableBody.innerHTML = html;
    } catch (error) {
        console.error('Error loading admin products:', error);
        productsTableBody.innerHTML = `
            <tr>
                <td colspan="6" class="error-message">حدث خطأ أثناء تحميل المنتجات. يرجى إعادة المحاولة.</td>
            </tr>
        `;
    }
}

/**
 * Open product modal (for add/edit product)
 * @param {string} productId - Product ID for editing (null for new product)
 */
async function openProductModal(productId = null) {
    const productModal = document.getElementById('productModal');
    const productModalTitle = document.getElementById('productModalTitle');
    const productForm = document.getElementById('productForm');
    
    if (!productModal || !productModalTitle || !productForm) return;
    
    // Reset form
    productForm.reset();
    
    // Clear image previews
    const imagePreviews = document.getElementById('imagePreviews');
    if (imagePreviews) {
        imagePreviews.innerHTML = '';
    }
    
    // Clear specifications
    const specificationsContainer = document.getElementById('specificationsContainer');
    if (specificationsContainer) {
        specificationsContainer.innerHTML = `
            <div class="spec-row">
                <div class="form-group">
                    <input type="text" placeholder="اسم المواصفة" class="spec-name">
                </div>
                <div class="form-group">
                    <input type="text" placeholder="قيمة المواصفة" class="spec-value">
                </div>
                <button type="button" class="remove-spec-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;
        
        // Set up remove spec button
        setupRemoveSpecButtons();
    }
    
    if (productId) {
        try {
            // Editing existing product
            const product = await getProduct(productId);
            if (!product) {
                showNotification('المنتج غير موجود', 'error');
                return;
            }
            
            // Set modal title
            productModalTitle.textContent = 'تعديل المنتج';
            
            // Fill form with product data
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productStock').value = product.stock;
            document.getElementById('productBrand').value = product.brand;
            document.getElementById('productCategory').value = product.category;
            
            // Load product images
            if (product.images && product.images.length > 0) {
                product.images.forEach(image => {
                    addImagePreview(image);
                });
            }
            
            // Load product specifications
            if (product.specifications && Object.keys(product.specifications).length > 0) {
                // Clear default spec row
                specificationsContainer.innerHTML = '';
                
                // Add each specification
                for (const [name, value] of Object.entries(product.specifications)) {
                    addSpecificationRow(name, value);
                }
            }
        } catch (error) {
            console.error('Error loading product for editing:', error);
            showNotification('حدث خطأ أثناء تحميل بيانات المنتج', 'error');
            return;
        }
    } else {
        // Adding new product
        productModalTitle.textContent = 'إضافة منتج جديد';
        document.getElementById('productId').value = 'p' + Date.now() + Math.floor(Math.random() * 1000); // Generate unique ID
    }
    
    // Show modal
    productModal.classList.add('show');
}

/**
 * Set up product form
 */
function setupProductForm() {
    const productForm = document.getElementById('productForm');
    if (!productForm) return;
    
    // Form submission
    productForm.addEventListener('submit', function(e) {
        e.preventDefault();
        saveProduct();
    });
    
    // Cancel button
    const cancelProductBtn = document.getElementById('cancelProductBtn');
    if (cancelProductBtn) {
        cancelProductBtn.addEventListener('click', function() {
            closeModal('productModal');
        });
    }

    // Add image button
    const addImageBtn = document.getElementById('addImageBtn');
    if (addImageBtn) {
        addImageBtn.addEventListener('click', function() {
            const imageUrl = document.getElementById('imageUrl').value.trim();
            if (imageUrl) {
                addImagePreview(imageUrl);
                document.getElementById('imageUrl').value = '';
            }
        });
    }

    // Add spec button
    const addSpecBtn = document.getElementById('addSpecBtn');
    if (addSpecBtn) {
        addSpecBtn.addEventListener('click', function() {
            addSpecificationRow();
        });
    }

    // Setup remove spec buttons
    setupRemoveSpecButtons();
}

/**
 * Set up remove spec buttons
 */
function setupRemoveSpecButtons() {
    document.querySelectorAll('.remove-spec-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Make sure we always have at least one spec row
            if (document.querySelectorAll('.spec-row').length > 1) {
                this.closest('.spec-row').remove();
            } else {
                // Clear inputs instead of removing
                const row = this.closest('.spec-row');
                row.querySelector('.spec-name').value = '';
                row.querySelector('.spec-value').value = '';
            }
        });
    });
}

/**
 * Add image preview
 * @param {string} imageUrl - Image URL
 */
function addImagePreview(imageUrl) {
    const imagePreviews = document.getElementById('imagePreviews');
    if (!imagePreviews) return;

    const previewDiv = document.createElement('div');
    previewDiv.className = 'image-preview';
    previewDiv.innerHTML = `
        <img src="${imageUrl}" alt="Image Preview" onerror="this.src=${PLACEHOLDER_IMAGE_BASE64}">
        <button type="button" class="remove-image-btn" data-url="${imageUrl}"><i class="fas fa-times"></i></button>
    `;

    // Add remove button event listener
    const removeBtn = previewDiv.querySelector('.remove-image-btn');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            previewDiv.remove();
        });
    }

    imagePreviews.appendChild(previewDiv);
}

/**
 * Add specification row
 * @param {string} name - Specification name
 * @param {string} value - Specification value
 */
function addSpecificationRow(name = '', value = '') {
    const specificationsContainer = document.getElementById('specificationsContainer');
    if (!specificationsContainer) return;

    const specRow = document.createElement('div');
    specRow.className = 'spec-row';
    specRow.innerHTML = `
        <div class="form-group">
            <input type="text" placeholder="اسم المواصفة" class="spec-name" value="${name}">
        </div>
        <div class="form-group">
            <input type="text" placeholder="قيمة المواصفة" class="spec-value" value="${value}">
        </div>
        <button type="button" class="remove-spec-btn"><i class="fas fa-trash"></i></button>
    `;

    specificationsContainer.appendChild(specRow);

    // Setup remove button
    const removeBtn = specRow.querySelector('.remove-spec-btn');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            // Make sure we always have at least one spec row
            if (document.querySelectorAll('.spec-row').length > 1) {
                specRow.remove();
            } else {
                // Clear inputs instead of removing
                specRow.querySelector('.spec-name').value = '';
                specRow.querySelector('.spec-value').value = '';
            }
        });
    }
}

/**
 * Save product
 */
async function saveProduct() {
    try {
        // Get form values
        const productId = document.getElementById('productId').value;
        const name = document.getElementById('productName').value;
        const price = parseInt(document.getElementById('productPrice').value);
        const stock = parseInt(document.getElementById('productStock').value);
        const brand = document.getElementById('productBrand').value;
        const category = document.getElementById('productCategory').value;
        
        
        // Get images
        const images = [];
        document.querySelectorAll('.image-preview img').forEach(img => {
            if (img.src && img.src !== PLACEHOLDER_IMAGE_BASE64) {
                images.push(img.src);
            }
        });
        
        // Get specifications
        const specifications = {};
        document.querySelectorAll('.spec-row').forEach(row => {
            const nameInput = row.querySelector('.spec-name');
            const valueInput = row.querySelector('.spec-value');
            
            if (nameInput && valueInput && nameInput.value.trim() && valueInput.value.trim()) {
                specifications[nameInput.value.trim()] = valueInput.value.trim();
            }
        });
        
        // Get all products with fresh data
        const products = await getProducts();
        
        // Check if editing or adding
        const existingProductIndex = products.findIndex(p => p.id === productId);
        
        if (existingProductIndex !== -1) {
            // Update existing product
            products[existingProductIndex] = {
                ...products[existingProductIndex],
                name,
                price,
                stock,
                brand,
                category,
                images,
                specifications,
                lastModified: new Date().toISOString()
            };
        } else {
            // Add new product
            products.push({
                id: productId,
                name,
                price,
                stock,
                brand,
                category,
                images,
                specifications,
                dateAdded: new Date().toISOString(),
                lastModified: new Date().toISOString(),
                sales: 0
            });
        }
        
        // Save products with validation
        if (saveProducts(products)) {
            // Show success notification
            showNotification('تم حفظ المنتج بنجاح', 'success');
            
            // Close modal
            closeModal('productModal');
            
            // Clear cache to ensure fresh data
            DB.clearCache();
            
            // Reload products
            setTimeout(() => loadAdminProducts(), 300);
        } else {
            showNotification('حدث خطأ أثناء حفظ المنتج', 'error');
        }
    } catch (error) {
        console.error('Error saving product:', error);
        showNotification('حدث خطأ أثناء حفظ المنتج', 'error');
    }
}

/**
 * Edit product
 * @param {string} productId - Product ID
 */
function editProduct(productId) {
    openProductModal(productId);
}

/**
 * Confirm delete product
 * @param {string} productId - Product ID
 */
function confirmDelete(productId) {
    const deleteConfirmModal = document.getElementById('deleteConfirmModal');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    if (!deleteConfirmModal || !confirmDeleteBtn) return;

    // Set product ID to delete button for reference
    confirmDeleteBtn.dataset.productId = productId;

    // Remove existing event listeners to prevent duplicates
    const oldConfirmBtn = confirmDeleteBtn.cloneNode(true);
    confirmDeleteBtn.parentNode.replaceChild(oldConfirmBtn, confirmDeleteBtn);

    // Set up confirm delete button
    oldConfirmBtn.addEventListener('click', function() {
        const id = this.dataset.productId;
        if (id) {
            deleteProduct(id);
        }
        closeModal('deleteConfirmModal');
    });

    // Set up cancel delete button
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', function() {
            closeModal('deleteConfirmModal');
        });
    }

    // Show modal
    deleteConfirmModal.classList.add('show');
}

/**
 * Delete product
 * @param {string} productId - Product ID
 */
async function deleteProduct(productId) {
    try {
        // Get products
        const products = await getProducts();
        
        // Remove product
        const updatedProducts = products.filter(p => p.id !== productId);
        
        // Save updated products
        const saveResult = await saveProducts(updatedProducts);
        
        if (saveResult) {
            showNotification('تم حذف المنتج بنجاح', 'success');
            
            // Clear cache to ensure fresh data
            DB.clearCache();
            
            // Reload products
            setTimeout(() => loadAdminProducts(), 300);
        } else {
            showNotification('حدث خطأ أثناء حذف المنتج', 'error');
        }
    } catch (error) {
        console.error('Error deleting product:', error);
        showNotification('حدث خطأ أثناء حذف المنتج', 'error');
    }
}

/**
 * Set up admin orders panel
 */
function setupAdminOrders() {
    // Load orders
    loadAdminOrders();

    // Set up order search
    const orderSearchBtn = document.getElementById('orderSearchBtn');
    if (orderSearchBtn) {
        orderSearchBtn.addEventListener('click', function() {
            const searchValue = document.getElementById('orderSearch')?.value;
            loadAdminOrders(searchValue);
        });
    }

    // Set up status filter
    const orderStatusFilter = document.getElementById('orderStatusFilter');
    if (orderStatusFilter) {
        orderStatusFilter.addEventListener('change', function() {
            loadAdminOrders(document.getElementById('orderSearch')?.value, this.value);
        });
    }

    // Set up close order button
    const closeOrderBtn = document.getElementById('closeOrderBtn');
    if (closeOrderBtn) {
        closeOrderBtn.addEventListener('click', function() {
            closeModal('orderModal');
        });
    }
}

/**
 * Load admin orders
 * @param {string} search - Search term
 * @param {string} status - Status filter
 */
async function loadAdminOrders(search = '', status = '') {
    const ordersTableBody = document.getElementById('ordersTableBody');
    if (!ordersTableBody) return;

    // Show loading spinner
    ordersTableBody.innerHTML = `
        <tr>
            <td colspan="7" class="loading-cell">
                <div class="loading-spinner"></div>
                <p>جاري تحميل الطلبات...</p>
            </td>
        </tr>
    `;

    try {
        // Get orders with forced cache refresh
        let orders = await DB.read(DB_PATHS.orders, true);
        
        // Validate orders array
        if (!Array.isArray(orders)) {
            console.error('Orders data is not an array:', orders);
            orders = [];
        }

        // Apply filters
        if (search) {
            const searchTerm = search.toLowerCase();
            orders = orders.filter(o => 
                (o.orderNumber && o.orderNumber.toLowerCase().includes(searchTerm)) || 
                (o.customer?.name && o.customer.name.toLowerCase().includes(searchTerm)) ||
                (o.customer?.phone && o.customer.phone.toLowerCase().includes(searchTerm))
            );
        }

        if (status) {
            orders = orders.filter(o => o.status === status);
        }

        // Sort orders by date (newest first)
        orders.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Render orders
        if (orders.length === 0) {
            ordersTableBody.innerHTML = `
                <tr>
                    <td colspan="7" class="no-data">لم يتم العثور على طلبات</td>
                </tr>
            `;
            return;
        }

        let html = '';

        orders.forEach(order => {
            html += `
                <tr>
                    <td>${order.orderNumber || order.id}</td>
                    <td>${formatDate(order.date)}</td>
                    <td>${order.customer?.name || 'غير متوفر'}</td>
                    <td>${order.shipping?.city || 'غير متوفر'}</td>
                    <td>${formatCurrency(order.total || 0)}</td>
                    <td><span class="order-status status-${order.status}">${getStatusText(order.status)}</span></td>
                    <td>
                        <div class="action-buttons">
                            <button class="view-btn" onclick="viewOrder('${order.id}')" title="عرض">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `;
        });

        ordersTableBody.innerHTML = html;
    } catch (error) {
        console.error('Error loading admin orders:', error);
        ordersTableBody.innerHTML = `
            <tr>
                <td colspan="7" class="error-message">حدث خطأ أثناء تحميل الطلبات. يرجى إعادة المحاولة.</td>
            </tr>
        `;
    }
}

/**
 * View order details
 * @param {string} orderId - Order ID
 */
async function viewOrder(orderId) {
    try {
        // Get order
        const orders = await getOrders();
        const order = orders.find(o => o.id === orderId || o.orderNumber === orderId);
        
        if (!order) {
            showNotification('لم يتم العثور على الطلب', 'error');
            return;
        }
        
        // Get modal elements
        const orderModal = document.getElementById('orderModal');
        const orderDetailId = document.getElementById('orderDetailId');
        const orderDetail = document.getElementById('orderDetail');
        const updateOrderStatusBtn = document.getElementById('updateOrderStatusBtn');
        
        if (!orderModal || !orderDetailId || !orderDetail) return;
        
        // Set order ID in modal header
        orderDetailId.textContent = order.orderNumber || order.id;
        
        // Generate HTML for order details
        orderDetail.innerHTML = generateOrderDetailHTML(order);
        
        // Set order ID to update button
        if (updateOrderStatusBtn) {
            // Remove existing event listeners to prevent duplicates
            const oldUpdateBtn = updateOrderStatusBtn.cloneNode(true);
            updateOrderStatusBtn.parentNode.replaceChild(oldUpdateBtn, updateOrderStatusBtn);
            
            // Set up new event listener
            oldUpdateBtn.dataset.orderId = order.id;
            oldUpdateBtn.addEventListener('click', function() {
                const statusSelect = document.getElementById('orderStatus');
                if (order.id && statusSelect) {
                    updateOrderStatus(order.id, statusSelect.value);
                    closeModal('orderModal');
                }
            });
        }
        
        // Show modal
        orderModal.classList.add('show');
    } catch (error) {
        console.error('Error viewing order:', error);
        showNotification('حدث خطأ أثناء عرض تفاصيل الطلب', 'error');
    }
}

/**
 * Update order status
 * @param {string} orderId - Order ID
 * @param {string} newStatus - New status
 */
async function updateOrderStatus(orderId, newStatus) {
    try {
        // Get orders
        const orders = await getOrders();
        
        // Find order
        const orderIndex = orders.findIndex(o => o.id === orderId);
        if (orderIndex === -1) {
            showNotification('لم يتم العثور على الطلب', 'error');
            return;
        }
        
        // Update status
        orders[orderIndex].status = newStatus;
        orders[orderIndex].lastModified = new Date().toISOString();
        
        // Save orders
        const saveResult = await DB.write(DB_PATHS.orders, orders);
        
        if (saveResult) {
            // Show notification
            showNotification('تم تحديث حالة الطلب بنجاح', 'success');
            
            // Clear cache to ensure fresh data
            DB.clearCache();
            
            // Reload orders
            loadAdminOrders();
            
            // Update dashboard
            setupAdminDashboard();
        } else {
            showNotification('حدث خطأ أثناء تحديث حالة الطلب', 'error');
        }
    } catch (error) {
        console.error('Error updating order status:', error);
        showNotification('حدث خطأ أثناء تحديث حالة الطلب', 'error');
    }
}

/**
 * Set up admin settings panel
 */
function setupAdminSettings() {
    // Load settings
    loadAdminSettings();

    // Set up settings form
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveAdminSettings();
        });
    }

    // Set up test webhook button
    const testWebhookBtn = document.getElementById('testWebhookBtn');
    if (testWebhookBtn) {
        testWebhookBtn.addEventListener('click', function() {
            testDiscordWebhook();
        });
    }
}

/**
 * Load admin settings
 */
async function loadAdminSettings() {
    try {
        const discordWebhook = document.getElementById('discordWebhook');
        const adminUsernameInput = document.getElementById('adminUsernameInput');

        if (discordWebhook) {
            discordWebhook.value = await DB.getSetting('discordWebhookUrl', '');
        }

        if (adminUsernameInput) {
            adminUsernameInput.value = await DB.getSetting('adminUsername', 'admin');
        }
    } catch (error) {
        console.error('Error loading admin settings:', error);
        showNotification('حدث خطأ أثناء تحميل الإعدادات', 'error');
    }
}

/**
 * Save admin settings
 */
async function saveAdminSettings() {
    try {
        const discordWebhook = document.getElementById('discordWebhook');
        const adminUsernameInput = document.getElementById('adminUsernameInput');
        const adminPassword = document.getElementById('adminPassword');
        const adminPasswordConfirm = document.getElementById('adminPasswordConfirm');
        
        // Validate and save Discord webhook URL
        if (discordWebhook) {
            const webhookUrl = discordWebhook.value.trim();
            if (webhookUrl && !webhookUrl.startsWith('https://discord.com/api/webhooks/')) {
                showNotification('رابط Discord webhook غير صالح. يجب أن يبدأ بـ https://discord.com/api/webhooks/', 'error');
                return;
            }
            
            await DB.saveSetting('discordWebhookUrl', webhookUrl);
        }
        
        // Update admin username
        if (adminUsernameInput && adminUsernameInput.value) {
            await DB.saveSetting('adminUsername', adminUsernameInput.value);
            
            // Update username in header
            const adminUsername = document.getElementById('adminUsername');
            if (adminUsername) {
                adminUsername.textContent = adminUsernameInput.value;
            }
        }
        
        // Update admin password
        if (adminPassword && adminPassword.value) {
            if (adminPasswordConfirm && adminPassword.value === adminPasswordConfirm.value) {
                await DB.saveSetting('adminPassword', adminPassword.value);
            } else {
                showNotification('كلمات المرور غير متطابقة', 'error');
                return;
            }
        }
        
        // Show notification
        showNotification('تم حفظ الإعدادات بنجاح', 'success');
    } catch (error) {
        console.error('Error saving settings:', error);
        showNotification('حدث خطأ أثناء حفظ الإعدادات', 'error');
    }
}

/**
 * Test Discord webhook
 */
async function testDiscordWebhook() {
    try {
        // Get Discord webhook URL
        const webhookUrl = await DB.getSetting('discordWebhookUrl', '');
        
        if (!webhookUrl || webhookUrl.trim() === '') {
            showNotification('لم يتم تعيين رابط Discord webhook', 'error');
            return;
        }
        
        // Show processing notification
        showNotification('جاري إرسال رسالة اختبار...', 'info');
        
        // Create payload for test message
        const payload = {
            embeds: [
                {
                    title: "اختبار إشعارات الطلبات",
                    color: 0xf89406,
                    fields: [
                        {
                            name: "📋 معلومات الاختبار",
                            value: "تم إرسال هذه الرسالة من لوحة الإدارة للتأكد من صحة الإعدادات.",
                            inline: false
                        }
                    ],
                    timestamp: new Date().toISOString(),
                    footer: { 
                        text: `Muh Store • ${new Date().toLocaleTimeString('ar-IQ', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}`
                    }
                }
            ]
        };
        
        // Send test message to webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`فشل الاتصال: ${response.status} ${response.statusText}`);
        }
        
        showNotification('تم إرسال رسالة الاختبار بنجاح!', 'success');
    } catch (error) {
        console.error('Error testing webhook:', error);
        showNotification(`فشل إرسال الاختبار: ${error.message}`, 'error');
    }
}

/**
 * Utility Functions
 */

/**
 * Format currency
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency
 */
function formatCurrency(amount) {
    try {
        return new Intl.NumberFormat('ar-IQ').format(amount) + ' IQD';
    } catch (error) {
        return amount + ' IQD';
    }
}

/**
 * Format date
 * @param {string} dateString - Date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-IQ');
    } catch (error) {
        return dateString;
    }
}

/**
 * Get status text
 * @param {string} status - Status code
 * @returns {string} Status text
 */
function getStatusText(status) {
    switch (status) {
        case 'pending':
            return 'قيد الانتظار';
        case 'processing':
            return 'قيد المعالجة';
        case 'completed':
            return 'مكتمل';
        case 'cancelled':
            return 'ملغي';
        default:
            return 'غير معروف';
    }
}

/**
 * Get category name
 * @param {string} categoryId - Category ID
 * @returns {string} Category name
 */
function getCategoryName(categoryId) {
    return CONFIG.CATEGORIES[categoryId] || categoryId;
}

/**
 * Close modal
 * @param {string} modalId - Modal ID
 */
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
    }
}

// Add global functions to window for use in HTML onclick handlers
window.navigateTo = navigateTo;
window.editProduct = editProduct;
window.confirmDelete = confirmDelete;
window.viewOrder = viewOrder;
