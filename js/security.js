/**
 * RASHZZ TOPUP - Security & Privacy Module
 * Hardened client-side protections for GitHub Pages deployment
 */

(function (global) {
    'use strict';

    // 1. Anti-Clickjacking / Framebusting
    try {
        if (window.top !== window.self) {
            window.top.location = window.self.location;
        }
    } catch (e) {
        console.warn('Framebusting prevented by cross-origin policy:', e);
    }

    const Security = {
        /**
         * Escape HTML to prevent DOM-based Cross Site Scripting (XSS)
         * @param {string} str 
         * @returns {string} Safe escaped string
         */
        escapeHTML: function (str) {
            if (typeof str !== 'string') return '';
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return str.replace(/[&<>"']/g, function (m) {
                return map[m];
            });
        },

        /**
         * Sanitize Player UID to ensure purely numeric digits (5-11 chars)
         * @param {string} uid 
         * @returns {string}
         */
        sanitizeUID: function (uid) {
            if (!uid) return '';
            return String(uid).replace(/\D/g, '').slice(0, 11);
        },

        /**
         * Validate image receipt file for safety and size limits (< 5MB)
         * @param {File} file 
         * @returns {{valid: boolean, message: string}}
         */
        validateReceiptImage: function (file) {
            if (!file) {
                return { valid: false, message: 'No file selected.' };
            }

            // Max file size: 5 MB
            const MAX_SIZE_BYTES = 5 * 1024 * 1024;
            if (file.size > MAX_SIZE_BYTES) {
                return { valid: false, message: 'Image size exceeds 5MB limit. Please upload a smaller screenshot.' };
            }

            // Whitelist safe image MIME types
            const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
            if (!allowedTypes.includes(file.type.toLowerCase())) {
                return { valid: false, message: 'Invalid file type. Only JPG, PNG, and WEBP receipts are permitted.' };
            }

            return { valid: true, message: 'Receipt image valid.' };
        },

        /**
         * Build WhatsApp redirect URL securely with URI encoding
         * @param {string} phone 
         * @param {string} rawText 
         * @returns {string} Safe WhatsApp URL
         */
        buildWhatsAppLink: function (phone, rawText) {
            const cleanPhone = String(phone).replace(/\D/g, '');
            const encodedText = encodeURIComponent(rawText);
            return `https://wa.me/${cleanPhone}?text=${encodedText}`;
        },

        /**
         * Safe clipboard copy with fallback
         * @param {string} text 
         * @returns {Promise<boolean>}
         */
        copyToClipboard: async function (text) {
            if (!text) return false;
            try {
                if (navigator.clipboard && window.isSecureContext) {
                    await navigator.clipboard.writeText(text);
                    return true;
                }
            } catch (err) {
                // Fallback below
            }

            try {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.left = '-9999px';
                textarea.style.top = '-9999px';
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(textarea);
                return successful;
            } catch (err) {
                console.error('Clipboard copy fallback error:', err);
                return false;
            }
        }
    };

    global.Security = Object.freeze(Security);
})(window);
