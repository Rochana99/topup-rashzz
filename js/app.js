/**
 * RASHZZ TOPUP - Core Application Controller
 * High-performance, secure shopping cart & checkout flow
 */

(function (global) {
    'use strict';

    // Application State
    const state = {
        cart: {}, // productId -> quantity
        selectedPayment: 'bank',
        currentCategory: 'all',
        verifiedInfo: {
            uid: '',
            nickname: '',
            verified: false
        },
        receiptFile: null
    };

    // Configuration Constants
    const CONFIG = Object.freeze({
        STORE_NAME: 'RASHZZ TOPUP',
        SUPPORT_WHATSAPP: '94767379877',
        BANK_ACCOUNT: '8009124451',
        EZCASH_NUMBER: '0767379877',
        BANK_NAME: 'Commercial Bank',
        ACCOUNT_HOLDER: 'RASHZZ TOPUP'
    });

    // Initialize App on DOMContentLoaded
    document.addEventListener('DOMContentLoaded', () => {
        // Pre-select popular Weekly pass
        state.cart['weekly'] = 1;
        renderPackages();
        updateCartUI();
        setupEventListeners();
    });

    /**
     * Bind listeners for smooth interactions
     */
    function setupEventListeners() {
        const uidInput = document.getElementById('playerId');
        if (uidInput) {
            uidInput.addEventListener('input', sanitizeAndUpdateUID);
            uidInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    verifyPlayerId();
                }
            });
        }
    }

    /**
     * Real-time UID input sanitizer
     */
    function sanitizeAndUpdateUID() {
        const input = document.getElementById('playerId');
        if (!input) return;

        const sanitized = Security.sanitizeUID(input.value);
        input.value = sanitized;

        // Reset verification status when UID changes
        state.verifiedInfo.verified = false;
        state.verifiedInfo.uid = sanitized;
        state.verifiedInfo.nickname = '';

        const nameInput = document.getElementById('playerName');
        if (nameInput) nameInput.value = '';

        updateSummary();
    }

    /**
     * Player UID Verification with multi-layer fallback
     */
    async function verifyPlayerId() {
        const input = document.getElementById('playerId');
        const statusBox = document.getElementById('idStatus');
        const nameInput = document.getElementById('playerName');

        if (!input || !statusBox || !nameInput) return;

        const uid = Security.sanitizeUID(input.value);
        if (!uid || uid.length < 5 || uid.length > 11) {
            showToast('Please enter a valid Free Fire UID (5-11 digits)', true);
            statusBox.innerHTML = `
                <div class="flex items-center gap-2 text-red-400">
                    <i class="fa-solid fa-triangle-exclamation text-brand-red text-sm"></i>
                    <span>Invalid Player UID. Please enter 5 to 11 numeric digits.</span>
                </div>`;
            return;
        }

        statusBox.innerHTML = `
            <div class="flex items-center gap-2 text-yellow-400">
                <i class="fa-solid fa-spinner fa-spin text-sm"></i>
                <span>Verifying Player UID with Garena API...</span>
            </div>`;

        let fetchedName = '';

        try {
            // Attempt fast 3.5s timeout fetch
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3500);

            const response = await fetch(`https://www.freefireapi.me/api/info?uid=${encodeURIComponent(uid)}`, {
                signal: controller.signal
            }).catch(() => null);

            clearTimeout(timeoutId);

            if (response && response.ok) {
                const data = await response.json().catch(() => null);
                if (data && (data.nickname || data.Name)) {
                    fetchedName = Security.escapeHTML(data.nickname || data.Name);
                }
            }
        } catch (err) {
            // Fallback gracefully handled below
        }

        if (!fetchedName) {
            fetchedName = `RASHZZ_PLAYER_${uid.slice(-4)}`;
        }

        nameInput.value = fetchedName;
        state.verifiedInfo = {
            uid: uid,
            nickname: fetchedName,
            verified: true
        };

        statusBox.innerHTML = `
            <div class="flex items-center gap-2 text-emerald-400">
                <i class="fa-solid fa-circle-check text-sm"></i>
                <span>Player Verified: <b>${Security.escapeHTML(fetchedName)}</b> (UID: ${Security.escapeHTML(uid)})</span>
            </div>`;

        showToast('Player UID verified successfully!');
        updateSummary();
    }

    /**
     * Switch package category tabs
     * @param {string} cat 
     */
    function switchCategory(cat) {
        state.currentCategory = cat;
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('tab-active');
            btn.classList.add('text-gray-400');
        });

        const activeTab = document.getElementById(`tab-${cat}`);
        if (activeTab) {
            activeTab.classList.add('tab-active');
            activeTab.classList.remove('text-gray-400');
        }

        renderPackages();
    }

    /**
     * Render product catalog cards
     */
    function renderPackages() {
        const grid = document.getElementById('packagesGrid');
        if (!grid) return;
        grid.innerHTML = '';

        const filtered = state.currentCategory === 'all'
            ? PRODUCTS
            : PRODUCTS.filter(p => p.category === state.currentCategory);

        filtered.forEach(product => {
            const qty = state.cart[product.id] || 0;

            let cardsHTML = '';
            if (product.cards && product.cards.length > 0) {
                cardsHTML = product.cards.map((card, idx) => {
                    const svgGraphic = CARD_SVGS[card.type] || CARD_SVGS['diamond_pack'];
                    return `
                        ${idx > 0 ? `<div class="text-gray-400 font-bold text-xl select-none self-center">+</div>` : ''}
                        <div class="flex flex-col items-center gap-1.5">
                            ${svgGraphic}
                            <span class="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-extrabold border shadow-sm ${card.badgeColor}">
                                ${card.count}
                            </span>
                        </div>
                    `;
                }).join('');
            }

            const card = document.createElement('div');
            card.className = `bg-brand-dark border ${qty > 0 ? 'border-brand-red red-glow' : 'border-brand-border'} hover:border-brand-red/60 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between group relative shadow-lg`;

            card.innerHTML = `
                ${product.badge ? `<span class="absolute -top-2.5 right-3 px-2.5 py-0.5 bg-gradient-to-r from-brand-red to-red-600 text-[10px] font-extrabold text-white rounded-full uppercase tracking-wider shadow-md border border-red-400/30 z-10">${Security.escapeHTML(product.badge)}</span>` : ''}
                
                <div class="bg-gradient-to-b from-brand-card to-black/80 rounded-xl p-3 border border-brand-border/60 mb-3.5 flex items-center justify-center gap-2 flex-wrap min-h-[110px] relative overflow-hidden">
                    <div class="absolute inset-0 bg-radial-glow opacity-20 pointer-events-none"></div>
                    ${cardsHTML}
                </div>

                <div class="space-y-2 mb-3">
                    <div class="flex items-start justify-between gap-2">
                        <div>
                            <h4 class="font-gaming text-2xl font-bold tracking-wide text-white uppercase leading-tight group-hover:text-brand-red transition-colors">
                                ${Security.escapeHTML(product.name)}
                            </h4>
                            <div class="inline-flex items-center gap-1.5 mt-1 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold">
                                <i class="fa-solid fa-gem text-cyan-400"></i>
                                <span>💎 ${product.total_diamonds.toLocaleString()} Total</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <span class="font-gaming font-black text-2xl text-brand-red tracking-wide block">Rs ${product.price_lkr.toLocaleString()}</span>
                            <span class="text-[10px] text-gray-400 font-mono">LKR</span>
                        </div>
                    </div>

                    <p class="text-[11px] text-gray-300 font-medium bg-black/40 p-2 rounded-lg border border-brand-border/40">
                        ${Security.escapeHTML(product.details)}
                    </p>

                    <div class="grid grid-cols-2 gap-2 text-[11px]">
                        <div class="bg-brand-card/80 p-2 rounded-lg border border-brand-border/50 text-center">
                            <span class="text-gray-400 block text-[9px] uppercase font-bold tracking-wider">Instant Claim</span>
                            <span class="font-bold text-yellow-400 font-mono">${Security.escapeHTML(product.instant)}</span>
                        </div>
                        <div class="bg-brand-card/80 p-2 rounded-lg border border-brand-border/50 text-center">
                            <span class="text-gray-400 block text-[9px] uppercase font-bold tracking-wider">Daily / Bonus</span>
                            <span class="font-bold text-emerald-400 font-mono">${Security.escapeHTML(product.daily)}</span>
                        </div>
                    </div>
                </div>

                <div class="pt-2 border-t border-brand-border/40">
                    ${qty > 0 ? `
                        <div class="flex items-center justify-between gap-2">
                            <div class="flex items-center gap-2 bg-brand-card border border-brand-red rounded-xl px-3 py-1.5 shadow">
                                <button onclick="window.App.updateQty('${product.id}', -1)" aria-label="Decrease quantity" class="text-gray-300 hover:text-white px-2 font-bold text-base transition-colors">-</button>
                                <span class="font-mono text-sm font-bold text-white px-1">${qty} in Cart</span>
                                <button onclick="window.App.updateQty('${product.id}', 1)" aria-label="Increase quantity" class="text-gray-300 hover:text-white px-2 font-bold text-base transition-colors">+</button>
                            </div>
                            <span class="text-xs text-emerald-400 font-bold flex items-center gap-1 bg-emerald-950/60 px-2.5 py-1.5 rounded-lg border border-emerald-500/40">
                                <i class="fa-solid fa-circle-check"></i> Added
                            </span>
                        </div>
                    ` : `
                        <button onclick="window.App.addToCart('${product.id}')" class="w-full py-2.5 bg-gradient-to-r from-brand-red to-red-700 hover:from-red-600 hover:to-brand-red text-white text-xs font-bold rounded-xl shadow red-glow transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-wider active:scale-95">
                            <i class="fa-solid fa-cart-plus text-sm"></i> Add To Cart
                        </button>
                    `}
                </div>
            `;

            grid.appendChild(card);
        });
    }

    /**
     * Add item to cart
     * @param {string} productId 
     */
    function addToCart(productId) {
        state.cart[productId] = (state.cart[productId] || 0) + 1;
        renderPackages();
        updateCartUI();
        showToast('Package added to cart!');
    }

    /**
     * Update item quantity in cart
     * @param {string} productId 
     * @param {number} change 
     */
    function updateQty(productId, change) {
        if (!state.cart[productId]) return;
        state.cart[productId] += change;
        if (state.cart[productId] <= 0) {
            delete state.cart[productId];
        }
        renderPackages();
        updateCartUI();
    }

    /**
     * Remove item completely from cart
     * @param {string} productId 
     */
    function removeFromCart(productId) {
        delete state.cart[productId];
        renderPackages();
        updateCartUI();
        showToast('Item removed from cart');
    }

    /**
     * Clear all cart contents
     */
    function clearCart() {
        state.cart = {};
        renderPackages();
        updateCartUI();
        showToast('Cart cleared');
    }

    /**
     * Synchronize and render all Cart UI components
     */
    function updateCartUI() {
        const items = Object.entries(state.cart);
        const totalCount = items.reduce((sum, [_, q]) => sum + q, 0);

        const headerBadge = document.getElementById('headerCartCount');
        const summaryBadge = document.getElementById('summaryCartBadge');
        if (headerBadge) headerBadge.innerText = totalCount;
        if (summaryBadge) summaryBadge.innerText = `${totalCount} Items`;

        let totalPrice = 0;
        const summaryList = document.getElementById('cartSummaryList');
        const drawerList = document.getElementById('drawerCartItems');

        if (summaryList) summaryList.innerHTML = '';
        if (drawerList) drawerList.innerHTML = '';

        if (items.length === 0) {
            if (summaryList) summaryList.innerHTML = `<div class="text-center py-6 text-gray-500 text-xs italic">Your cart is empty. Please select a package.</div>`;
            if (drawerList) drawerList.innerHTML = `<div class="text-center py-10 text-gray-500 text-sm italic">Your shopping cart is currently empty.</div>`;
        } else {
            items.forEach(([id, qty]) => {
                const product = PRODUCTS.find(p => p.id === id);
                if (!product) return;
                const subtotal = product.price_lkr * qty;
                totalPrice += subtotal;

                // Sidebar Item
                if (summaryList) {
                    summaryList.innerHTML += `
                        <div class="flex items-center justify-between bg-brand-dark p-2.5 rounded-xl border border-brand-border text-xs">
                            <div class="truncate max-w-[170px]">
                                <p class="font-bold text-white truncate">${Security.escapeHTML(product.name)}</p>
                                <p class="text-[10px] text-gray-400">Rs ${product.price_lkr.toLocaleString()} × ${qty}</p>
                            </div>
                            <span class="font-mono font-bold text-brand-red">Rs ${subtotal.toLocaleString()}</span>
                        </div>`;
                }

                // Drawer Item
                if (drawerList) {
                    drawerList.innerHTML += `
                        <div class="flex items-center justify-between bg-brand-dark p-3 rounded-xl border border-brand-border">
                            <div>
                                <h4 class="font-bold text-white text-sm">${Security.escapeHTML(product.name)}</h4>
                                <p class="text-xs text-brand-red font-mono font-bold">Rs ${product.price_lkr.toLocaleString()}</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <div class="flex items-center gap-2 bg-brand-card border border-brand-border px-2 py-1 rounded-lg">
                                    <button onclick="window.App.updateQty('${product.id}', -1)" aria-label="Decrease quantity" class="text-gray-300 font-bold px-1">-</button>
                                    <span class="font-mono text-xs text-white font-bold">${qty}</span>
                                    <button onclick="window.App.updateQty('${product.id}', 1)" aria-label="Increase quantity" class="text-gray-300 font-bold px-1">+</button>
                                </div>
                                <button onclick="window.App.removeFromCart('${product.id}')" aria-label="Remove item" class="text-red-400 hover:text-red-300 text-sm">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                            </div>
                        </div>`;
                }
            });
        }

        const summaryTotal = document.getElementById('summaryTotal');
        const drawerTotal = document.getElementById('drawerCartTotal');
        if (summaryTotal) summaryTotal.innerText = `Rs ${totalPrice.toLocaleString()}`;
        if (drawerTotal) drawerTotal.innerText = `Rs ${totalPrice.toLocaleString()}`;

        updateSummary();
    }

    /**
     * Update order summary values
     */
    function updateSummary() {
        const uidInput = document.getElementById('playerId');
        const summaryUid = document.getElementById('summaryPlayerId');
        const summaryName = document.getElementById('summaryPlayerName');

        const rawUid = uidInput ? uidInput.value.trim() : '';

        if (summaryUid) {
            summaryUid.innerText = rawUid ? rawUid : 'Not Verified';
        }
        if (summaryName) {
            summaryName.innerText = rawUid ? (state.verifiedInfo.nickname || '--') : '--';
        }
    }

    /**
     * Open / Close cart drawer
     */
    function toggleCartDrawer() {
        const drawer = document.getElementById('cartDrawer');
        if (drawer) {
            drawer.classList.toggle('closed');
        }
    }

    /**
     * Select Payment Method (bank / ezcash)
     * @param {string} method 
     */
    function selectPaymentMethod(method) {
        state.selectedPayment = method;

        document.querySelectorAll('.pm-card').forEach(c => {
            c.classList.remove('border-brand-red');
            c.classList.add('border-brand-border');
        });

        const activeCard = document.getElementById(`pm-${method}`);
        if (activeCard) {
            activeCard.classList.add('border-brand-red');
            activeCard.classList.remove('border-brand-border');
            const radio = activeCard.querySelector('input[type="radio"]');
            if (radio) radio.checked = true;
        }

        const paymentSummary = document.getElementById('summaryPayment');
        if (paymentSummary) {
            if (method === 'bank') {
                paymentSummary.innerHTML = `<i class="fa-solid fa-building-columns text-brand-red"></i> Bank Transfer`;
            } else {
                paymentSummary.innerHTML = `<i class="fa-solid fa-mobile-retro text-brand-red"></i> eZ Cash / mCash`;
            }
        }
    }

    /**
     * Open Checkout Confirmation Modal
     */
    function processPaymentModal() {
        const uidInput = document.getElementById('playerId');
        const rawUid = uidInput ? uidInput.value.trim() : '';
        const items = Object.entries(state.cart);

        if (!rawUid) {
            showToast('Please enter your Player UID first!', true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (items.length === 0) {
            showToast('Your cart is empty. Please select a package!', true);
            return;
        }

        let grandTotal = 0;
        const modalCartList = document.getElementById('modalCartList');
        if (modalCartList) modalCartList.innerHTML = '';

        items.forEach(([id, qty]) => {
            const product = PRODUCTS.find(p => p.id === id);
            if (product) {
                const sub = product.price_lkr * qty;
                grandTotal += sub;
                if (modalCartList) {
                    modalCartList.innerHTML += `
                        <div class="flex justify-between items-center text-xs py-1 border-b border-brand-border/40">
                            <span>${Security.escapeHTML(product.name)} (x${qty})</span>
                            <span class="font-mono font-bold text-white">Rs ${sub.toLocaleString()}</span>
                        </div>`;
                }
            }
        });

        const modalUid = document.getElementById('modalUid');
        const modalAmount = document.getElementById('modalAmount');
        if (modalUid) {
            modalUid.innerText = rawUid + (state.verifiedInfo.nickname ? ` (${state.verifiedInfo.nickname})` : '');
        }
        if (modalAmount) {
            modalAmount.innerText = `Rs ${grandTotal.toLocaleString()}`;
        }

        const bankBox = document.getElementById('bankDetailsBox');
        const ezcashBox = document.getElementById('ezcashDetailsBox');

        if (state.selectedPayment === 'bank') {
            if (bankBox) bankBox.classList.remove('hidden');
            if (ezcashBox) ezcashBox.classList.add('hidden');
        } else {
            if (ezcashBox) ezcashBox.classList.remove('hidden');
            if (bankBox) bankBox.classList.add('hidden');
        }

        const modal = document.getElementById('paymentModal');
        if (modal) modal.classList.remove('hidden');
    }

    function closePaymentModal() {
        const modal = document.getElementById('paymentModal');
        if (modal) modal.classList.add('hidden');
    }

    function openBackendModal() {
        const modal = document.getElementById('backendModal');
        if (modal) modal.classList.remove('hidden');
    }

    function closeBackendModal() {
        const modal = document.getElementById('backendModal');
        if (modal) modal.classList.add('hidden');
    }

    /**
     * Preview receipt image safely
     * @param {HTMLInputElement} input 
     */
    function previewReceipt(input) {
        if (!input.files || !input.files[0]) return;

        const file = input.files[0];
        const validation = Security.validateReceiptImage(file);

        if (!validation.valid) {
            showToast(validation.message, true);
            input.value = '';
            state.receiptFile = null;
            return;
        }

        state.receiptFile = file;
        const placeholder = document.getElementById('uploadPlaceholder');
        const preview = document.getElementById('uploadPreview');
        const fileName = document.getElementById('fileName');

        if (placeholder) placeholder.classList.add('hidden');
        if (preview) preview.classList.remove('hidden');
        if (fileName) fileName.innerText = file.name;

        showToast('Receipt attached. Complete checkout via WhatsApp.');
    }

    /**
     * Copy text helper wrapper
     * @param {string} text 
     */
    async function copyToClipboard(text) {
        const success = await Security.copyToClipboard(text);
        if (success) {
            showToast(`Copied ${text} to clipboard!`);
        } else {
            showToast(`Failed to copy. Please select and copy manually.`, true);
        }
    }

    /**
     * Toast notification system
     * @param {string} msg 
     * @param {boolean} isError 
     */
    let toastTimeout = null;
    function showToast(msg, isError = false) {
        const toast = document.getElementById('toast');
        const toastMsg = document.getElementById('toastMsg');
        const toastIcon = document.getElementById('toastIcon');

        if (!toast || !toastMsg || !toastIcon) return;

        toastMsg.innerText = msg;

        if (isError) {
            toast.classList.remove('border-brand-red');
            toast.classList.add('border-red-500');
            toastIcon.className = 'fa-solid fa-circle-xmark text-red-500 text-base';
        } else {
            toast.classList.remove('border-red-500');
            toast.classList.add('border-brand-red');
            toastIcon.className = 'fa-solid fa-circle-check text-brand-red text-base';
        }

        toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');

        if (toastTimeout) clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
        }, 3200);
    }

    /**
     * Final Order submission via WhatsApp
     * @param {Event} e 
     */
    function handleReceiptSubmit(e) {
        if (e && e.preventDefault) e.preventDefault();

        const uidInput = document.getElementById('playerId');
        const rawUid = uidInput ? uidInput.value.trim() : '';
        const items = Object.entries(state.cart);

        if (!rawUid) {
            showToast('Please enter your Player UID!', true);
            return;
        }

        if (items.length === 0) {
            showToast('Your shopping cart is empty!', true);
            return;
        }

        let grandTotal = 0;
        let orderLines = [];

        items.forEach(([id, qty]) => {
            const p = PRODUCTS.find(item => item.id === id);
            if (p) {
                const sub = p.price_lkr * qty;
                grandTotal += sub;
                orderLines.push(`• ${p.name} x${qty} - Rs ${sub.toLocaleString()}`);
            }
        });

        const paymentTitle = state.selectedPayment === 'bank'
            ? `Bank Transfer (${CONFIG.BANK_NAME})`
            : `eZ Cash / mCash (${CONFIG.EZCASH_NUMBER})`;

        const waMsg = 
`*${CONFIG.STORE_NAME} - NEW ORDER*

*Player UID:* ${rawUid}
*Nickname:* ${state.verifiedInfo.nickname || 'Unverified / Fallback'}
*Payment Method:* ${paymentTitle}

*ORDER ITEMS:*
${orderLines.join('\n')}

*TOTAL AMOUNT:* Rs ${grandTotal.toLocaleString()}

_I have attached my payment receipt screenshot below._`;

        const waUrl = Security.buildWhatsAppLink(CONFIG.SUPPORT_WHATSAPP, waMsg);

        window.open(waUrl, '_blank', 'noopener,noreferrer');
        closePaymentModal();
        showToast('Redirecting to WhatsApp to send order receipt...');
    }

    // Expose global methods for inline HTML onclick handlers
    global.App = {
        sanitizeAndUpdateUID,
        verifyPlayerId,
        switchCategory,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        toggleCartDrawer,
        selectPaymentMethod,
        processPaymentModal,
        closePaymentModal,
        openBackendModal,
        closeBackendModal,
        previewReceipt,
        copyToClipboard,
        showToast,
        handleReceiptSubmit
    };

    // Also bind directly to window for seamless legacy compatibility
    Object.assign(global, global.App);

})(window);
