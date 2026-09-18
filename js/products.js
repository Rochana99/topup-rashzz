/**
 * RASHZZ TOPUP - Product Catalog & Vector Assets
 * Tamper-proof frozen product definitions & metallic card SVGs
 */

(function (global) {
    'use strict';

    // High quality Metallic SVG Membership Card graphics matching reference exactly
    const CARD_SVGS = Object.freeze({
        w_lite: `
            <svg class="w-16 h-11 card-svg-container" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="190" height="120" rx="16" fill="url(#w_lite_bg)" stroke="url(#w_lite_border)" stroke-width="6"/>
                <rect x="15" y="15" width="170" height="100" rx="10" fill="none" stroke="#00d8ff" stroke-width="1.5" stroke-dasharray="8 4" opacity="0.6"/>
                <!-- Metallic Bevel Inner Line -->
                <path d="M 22 25 L 178 25 A 6 6 0 0 1 184 31 L 184 99 A 6 6 0 0 1 178 105 L 22 105 A 6 6 0 0 1 16 99 L 16 31 A 6 6 0 0 1 22 25 Z" fill="none" stroke="#00ffff" stroke-width="1" opacity="0.4"/>
                <!-- W LITE Emblem -->
                <g transform="translate(45, 30)">
                    <path d="M10 10 L25 55 L38 22 L50 55 L65 10 L52 10 L44 40 L35 15 L26 40 L18 10 Z" fill="#00f0ff" filter="drop-shadow(0 0 6px #00f0ff)"/>
                    <text x="65" y="48" fill="#ffffff" font-family="'Teko', sans-serif" font-weight="800" font-size="28" letter-spacing="1">LITE</text>
                </g>
                <defs>
                    <linearGradient id="w_lite_bg" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#021f38"/>
                        <stop offset="50%" stop-color="#08385a"/>
                        <stop offset="100%" stop-color="#011224"/>
                    </linearGradient>
                    <linearGradient id="w_lite_border" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#00f0ff"/>
                        <stop offset="50%" stop-color="#006699"/>
                        <stop offset="100%" stop-color="#00f0ff"/>
                    </linearGradient>
                </defs>
            </svg>`,
        weekly: `
            <svg class="w-16 h-11 card-svg-container" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="190" height="120" rx="16" fill="url(#weekly_bg)" stroke="url(#weekly_border)" stroke-width="6"/>
                <rect x="15" y="15" width="170" height="100" rx="10" fill="none" stroke="#ffb703" stroke-width="1.5" opacity="0.7"/>
                <!-- Gold / Purple Metallic Inner Ring -->
                <path d="M 22 25 L 178 25 L 184 31 L 184 99 L 178 105 L 22 105 L 16 99 L 16 31 Z" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.5"/>
                <!-- W WEEKLY Emblem -->
                <g transform="translate(32, 22)">
                    <path d="M 20 8 L 38 60 L 52 24 L 66 60 L 84 8 L 68 8 L 58 44 L 48 18 L 38 44 L 28 8 Z" fill="url(#gold_emblem)" filter="drop-shadow(0 0 8px rgba(255,183,3,0.8))"/>
                    <text x="68" y="78" text-anchor="middle" fill="#ffea00" font-family="'Teko', sans-serif" font-weight="800" font-size="24" letter-spacing="2">WEEKLY</text>
                </g>
                <defs>
                    <linearGradient id="weekly_bg" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#2a0845"/>
                        <stop offset="50%" stop-color="#1b0033"/>
                        <stop offset="100%" stop-color="#120024"/>
                    </linearGradient>
                    <linearGradient id="weekly_border" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#ffe600"/>
                        <stop offset="50%" stop-color="#ff9900"/>
                        <stop offset="100%" stop-color="#ffea00"/>
                    </linearGradient>
                    <linearGradient id="gold_emblem" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="30%" stop-color="#ffee55"/>
                        <stop offset="100%" stop-color="#ff8800"/>
                    </linearGradient>
                </defs>
            </svg>`,
        monthly: `
            <svg class="w-16 h-11 card-svg-container" viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="5" width="190" height="120" rx="16" fill="url(#monthly_bg)" stroke="url(#monthly_border)" stroke-width="6"/>
                <!-- Carbon fiber texture line simulation -->
                <line x1="10" y1="20" x2="190" y2="20" stroke="#ff003c" stroke-opacity="0.3" stroke-width="1"/>
                <line x1="10" y1="110" x2="190" y2="110" stroke="#ff003c" stroke-opacity="0.3" stroke-width="1"/>
                <!-- M MONTHLY Emblem -->
                <g transform="translate(35, 20)">
                    <path d="M 15 60 L 15 10 L 50 42 L 85 10 L 85 60 L 70 60 L 70 28 L 50 50 L 30 28 L 30 60 Z" fill="url(#red_gold_emblem)" filter="drop-shadow(0 0 10px rgba(255,0,60,0.8))"/>
                    <text x="50" y="80" text-anchor="middle" fill="#ffffff" font-family="'Teko', sans-serif" font-weight="800" font-size="24" letter-spacing="2">MONTHLY</text>
                </g>
                <defs>
                    <linearGradient id="monthly_bg" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#210006"/>
                        <stop offset="50%" stop-color="#0f0205"/>
                        <stop offset="100%" stop-color="#000000"/>
                    </linearGradient>
                    <linearGradient id="monthly_border" x1="0" y1="0" x2="200" y2="130" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#ff003c"/>
                        <stop offset="50%" stop-color="#ffd700"/>
                        <stop offset="100%" stop-color="#e60000"/>
                    </linearGradient>
                    <linearGradient id="red_gold_emblem" x1="0" y1="0" x2="0" y2="60" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#ffffff"/>
                        <stop offset="40%" stop-color="#ff3366"/>
                        <stop offset="100%" stop-color="#e60000"/>
                    </linearGradient>
                </defs>
            </svg>`,
        diamond_pack: `
            <svg class="w-14 h-11 card-svg-container" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,10 85,35 50,90 15,35" fill="url(#cyan_gem)" stroke="#ffffff" stroke-width="2" filter="drop-shadow(0 0 8px #00f0ff)"/>
                <polygon points="50,10 85,35 50,38 15,35" fill="#ffffff" opacity="0.4"/>
                <polygon points="50,38 85,35 50,90" fill="#0099cc" opacity="0.6"/>
                <defs>
                    <linearGradient id="cyan_gem" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#a5f3fc"/>
                        <stop offset="50%" stop-color="#06b6d4"/>
                        <stop offset="100%" stop-color="#0891b2"/>
                    </linearGradient>
                </defs>
            </svg>`,
        level_pass: `
            <svg class="w-14 h-11 card-svg-container" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 20 70 L 50 30 L 80 70 L 65 70 L 50 50 L 35 70 Z" fill="#10b981" filter="drop-shadow(0 0 8px #10b981)"/>
                <path d="M 20 45 L 50 5 L 80 45 L 65 45 L 50 25 L 35 45 Z" fill="#34d399" opacity="0.8"/>
            </svg>`
    });

    const PRODUCTS = Object.freeze([
        {
            id: 'weekly_lite',
            name: 'WEEKLY LITE',
            category: 'memberships',
            details: 'Instant 💎 20 + 💎 10 Daily (7 Days)',
            instant: '20 💎',
            daily: '10 💎 / day',
            total_diamonds: 90,
            price_lkr: 110,
            badge: 'Lite Pass',
            cards: [
                { type: 'w_lite', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }
            ]
        },
        {
            id: 'weekly',
            name: 'WEEKLY',
            category: 'memberships',
            details: 'Instant 💎 200 + 💎 35 Daily (7 Days)',
            instant: '200 💎',
            daily: '35 💎 / day',
            total_diamonds: 445,
            price_lkr: 520,
            badge: 'Popular',
            cards: [
                { type: 'weekly', count: '1x', badgeColor: 'bg-amber-950 text-amber-300 border-amber-500/50' }
            ]
        },
        {
            id: 'monthly',
            name: 'MONTHLY',
            category: 'memberships',
            details: 'Instant 💎 1,000 + 💎 50 Daily (30 Days)',
            instant: '1,000 💎',
            daily: '50 💎 / day',
            total_diamonds: 2500,
            price_lkr: 2600,
            badge: 'Best VIP Value',
            cards: [
                { type: 'monthly', count: '1x', badgeColor: 'bg-purple-950 text-purple-300 border-purple-500/50' }
            ]
        },
        {
            id: 'weekly_max',
            name: 'WEEKLY MAX',
            category: 'vip-bundles',
            details: '1 Weekly (💎445) + 1 Weekly Lite (💎90)',
            instant: '220 💎',
            daily: 'Combo Daily',
            total_diamonds: 535,
            price_lkr: 630,
            badge: 'Combo Pass',
            cards: [
                { type: 'weekly', count: '1x', badgeColor: 'bg-amber-950 text-amber-300 border-amber-500/50' },
                { type: 'w_lite', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }
            ]
        },
        {
            id: 'vip_bundle',
            name: 'VIP BUNDLE',
            category: 'vip-bundles',
            details: '1 Weekly (💎445) + 1 Monthly (💎2500)',
            instant: '1,200 💎',
            daily: 'Combo Daily',
            total_diamonds: 2945,
            price_lkr: 3120,
            badge: 'Hot Bundle',
            cards: [
                { type: 'weekly', count: '1x', badgeColor: 'bg-amber-950 text-amber-300 border-amber-500/50' },
                { type: 'monthly', count: '1x', badgeColor: 'bg-purple-950 text-purple-300 border-purple-500/50' }
            ]
        },
        {
            id: 'vip_max_bundle',
            name: 'VIP MAX BUNDLE',
            category: 'vip-bundles',
            details: '1 Weekly (💎445) + 1 Monthly (💎2500) + 1 Weekly Lite (💎90)',
            instant: '1,220 💎',
            daily: 'Max Daily',
            total_diamonds: 3035,
            price_lkr: 3230,
            badge: 'VIP Ultimate',
            cards: [
                { type: 'weekly', count: '1x', badgeColor: 'bg-amber-950 text-amber-300 border-amber-500/50' },
                { type: 'monthly', count: '1x', badgeColor: 'bg-purple-950 text-purple-300 border-purple-500/50' },
                { type: 'w_lite', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }
            ]
        },
        {
            id: 'svip_bundle',
            name: 'SVIP BUNDLE',
            category: 'vip-bundles',
            details: '4 Weekly (💎1780) + 1 Monthly (💎2500)',
            instant: '1,800 💎',
            daily: 'SVIP Daily',
            total_diamonds: 4280,
            price_lkr: 4680,
            badge: 'Super VIP',
            cards: [
                { type: 'weekly', count: '4x', badgeColor: 'bg-amber-950 text-amber-300 border-amber-500/50' },
                { type: 'monthly', count: '1x', badgeColor: 'bg-purple-950 text-purple-300 border-purple-500/50' }
            ]
        },
        {
            id: 'svip_max_bundle',
            name: 'SVIP MAX BUNDLE',
            category: 'vip-bundles',
            details: '4 Weekly (💎1780) + 1 Monthly (💎2500) + 4 Weekly Lite (💎360)',
            instant: '1,880 💎',
            daily: 'SVIP Max Daily',
            total_diamonds: 4640,
            price_lkr: 5120,
            badge: 'Maximum Pack',
            cards: [
                { type: 'weekly', count: '4x', badgeColor: 'bg-amber-950 text-amber-300 border-amber-500/50' },
                { type: 'monthly', count: '1x', badgeColor: 'bg-purple-950 text-purple-300 border-purple-500/50' },
                { type: 'w_lite', count: '4x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }
            ]
        },
        {
            id: 'diamond_x_3000',
            name: 'DIAMOND X 3000',
            category: 'vip-bundles',
            details: '3x Monthly Tier Diamond Boost',
            instant: '3,000 💎 Boost',
            daily: 'Tier Bonus',
            total_diamonds: 3000,
            price_lkr: 3200,
            badge: '3x Boost',
            cards: [
                { type: 'monthly', count: '3x', badgeColor: 'bg-red-950 text-red-300 border-red-500/50' }
            ]
        },
        {
            id: 'diamond_x_5000',
            name: 'DIAMOND X 5000 (5X BOOST)',
            category: 'vip-bundles',
            details: '5x Monthly Tier Diamond Boost',
            instant: '5,000 💎 Boost',
            daily: 'Mega Tier Bonus',
            total_diamonds: 5000,
            price_lkr: 5200,
            badge: '5x Mega Boost',
            cards: [
                { type: 'monthly', count: '5x', badgeColor: 'bg-red-950 text-red-300 border-red-500/50' }
            ]
        },
        { id: 'd25', name: '25 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '25 💎', daily: 'None', total_diamonds: 25, price_lkr: 80, badge: null, cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd100', name: '100 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '100 💎', daily: 'None', total_diamonds: 100, price_lkr: 250, badge: null, cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd310', name: '310 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '310 💎', daily: 'None', total_diamonds: 310, price_lkr: 910, badge: null, cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd520', name: '520 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '520 💎', daily: 'None', total_diamonds: 520, price_lkr: 1260, badge: 'Best Value', cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd1060', name: '1060 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '1,060 💎', daily: 'None', total_diamonds: 1060, price_lkr: 2500, badge: null, cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd2180', name: '2180 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '2,180 💎', daily: 'None', total_diamonds: 2180, price_lkr: 5000, badge: null, cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd5600', name: '5600 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '5,600 💎', daily: 'None', total_diamonds: 5600, price_lkr: 12340, badge: null, cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'd11500', name: '11500 Diamonds', category: 'diamonds', details: 'Direct Instant Top-up', instant: '11,500 💎', daily: 'None', total_diamonds: 11500, price_lkr: 25500, badge: 'Wholesale Pack', cards: [{ type: 'diamond_pack', count: '1x', badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-500/50' }] },
        { id: 'lvl6', name: 'Level Up - Level 6', category: 'level-up', details: 'Level 6 Unlock Rewards', instant: 'Pass Unlock', daily: 'N/A', total_diamonds: 200, price_lkr: 100, badge: 'Lvl 6', cards: [{ type: 'level_pass', count: '1x', badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500/50' }] },
        { id: 'lvl10', name: 'Level Up - Level 10', category: 'level-up', details: 'Level 10 Unlock Rewards', instant: 'Pass Unlock', daily: 'N/A', total_diamonds: 400, price_lkr: 215, badge: 'Lvl 10', cards: [{ type: 'level_pass', count: '1x', badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500/50' }] },
        { id: 'lvl15', name: 'Level Up - Level 15', category: 'level-up', details: 'Level 15 Unlock Rewards', instant: 'Pass Unlock', daily: 'N/A', total_diamonds: 600, price_lkr: 215, badge: 'Lvl 15', cards: [{ type: 'level_pass', count: '1x', badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500/50' }] },
        { id: 'lvl20', name: 'Level Up - Level 20', category: 'level-up', details: 'Level 20 Unlock Rewards', instant: 'Pass Unlock', daily: 'N/A', total_diamonds: 800, price_lkr: 215, badge: 'Lvl 20', cards: [{ type: 'level_pass', count: '1x', badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500/50' }] },
        { id: 'lvl25', name: 'Level Up - Level 25', category: 'level-up', details: 'Level 25 Unlock Rewards', instant: 'Pass Unlock', daily: 'N/A', total_diamonds: 1000, price_lkr: 215, badge: 'Lvl 25', cards: [{ type: 'level_pass', count: '1x', badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500/50' }] },
        { id: 'lvl30', name: 'Level Up - Level 30', category: 'level-up', details: 'Level 30 Unlock Rewards', instant: 'Pass Unlock', daily: 'N/A', total_diamonds: 1200, price_lkr: 310, badge: 'Lvl 30', cards: [{ type: 'level_pass', count: '1x', badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-500/50' }] }
    ]);

    global.CARD_SVGS = CARD_SVGS;
    global.PRODUCTS = PRODUCTS;
})(window);
