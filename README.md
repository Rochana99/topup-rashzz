# 🔥 RASHZZ TOPUP - Free Fire Store & Verification Website

RASHZZ TOPUP සඳහා Free Fire Diamonds, Memberships, VIP Bundles සහ Level Up Passes ලබා දෙන modern gaming e-commerce වෙබ් අඩවිය. මෙම වෙබ් අඩවිය GitHub Pages හරහා **100% නොමිලේ (Free)** host කරගත හැකි පරිදි සහ **1000% Security & Privacy** සහිතව සකසා ඇත.

---

## 🚀 GitHub Pages එකේ Free Host කරගන්නා ආකාරය (Step-by-Step Guide)

කිසිදු සේවාදායක ගාස්තුවක් (Hosting fees) නොමැතිව, විනාඩි 2කින් ඔබේම GitHub ගිණුම හරහා මෙම වෙබ් අඩවිය Live කරගන්න:

### පියවර 1: GitHub එකේ New Repository එකක් සාදන්න
1. [GitHub.com](https://github.com/) වෙත ගොස් ඔබගේ ගිණුමට Login වන්න (ගිණුමක් නැත්නම් Sign Up වන්න).
2. ඉහළ දකුණු කෙළවරේ ඇති `+` ලකුණ ක්ලික් කර **New repository** තෝරන්න.
3. **Repository name** එකට කැමති නමක් දෙන්න (උදා: `topup` හෝ `rashzz-topup`).
4. එය **Public** ලෙස තබන්න.
5. පහළ ඇති **Create repository** බොත්තම ක්ලික් කරන්න.

### පියවර 2: Files Upload කරන්න
1. සාදාගත් Repository එක ඇතුළත ඇති **"uploading an existing file"** ලින්ක් එක ක්ලික් කරන්න.
2. මෙම Folder එක තුළ ඇති සියලුම Files සහ Folders Drag & Drop කර Upload කරන්න:
   - `index.html`
   - `manifest.json`
   - `README.md`
   - `css/` (ඇතුළත ඇති `style.css`)
   - `js/` (ඇතුළත ඇති `app.js`, `products.js`, `security.js`)
3. පහළ ඇති **Commit changes** බොත්තම ක්ලික් කරන්න.

### පියවර 3: GitHub Pages Active කරන්න
1. Repository එකේ උඩ ඇති **Settings** ටැබ් එකට යන්න.
2. වම් පස මෙනුවේ **Pages** (Code and automation යටතේ) ක්ලික් කරන්න.
3. **Branch** යටතේ ඇති `None` වෙනුවට `main` (හෝ `master`) තෝරා **Save** ක්ලික් කරන්න.
4. විනාඩි 1ක් පමණ රැඳී පිටුව Refresh කරන්න. ඉහළින් ඔබගේ Live Website Link එක ලැබෙනු ඇත:
   👉 `https://<your-username>.github.io/<repo-name>/`

---

## 🛡️ Security & Privacy Features (1000% ආරක්ෂාව)

- **Zero Server Leaks / No Database Vulnerabilities**: කිසිදු Database එකක් නොමැති බැවින් Database SQL Injection හෝ Data Breach වීමේ අවදානමක් නැත.
- **Content Security Policy (CSP)**: පිටස්තර අනාරක්ෂිත Scripts ක්‍රියාත්මක වීම වළක්වන High-Grade ආරක්ෂිත ප්‍රතිපත්තිය.
- **Anti-Clickjacking / Framebusting**: වෙනත් අයෙකුගේ වෙබ් අඩවි තුළ ඔබගේ වෙබ් අඩවිය iframe කර තබා Clickjacking ප්‍රහාර එල්ල කිරීම සම්පූර්ණයෙන්ම වළක්වයි.
- **DOM-based XSS Sanitization**: Player UID සහ Nickname ඇතුළත් කිරීම් Strict Escaping කර සකසා ඇත.
- **Tamper-Proof Data (`Object.freeze`)**: Console එක හරහා Packages හෝ මිල ගණන් වෙනස් කිරීමට නොහැකි වන පරිදි Code එක Lock කර ඇත.
- **Client-Side Privacy**: Third-party Tracking Cookies හෝ Analytics නොමැත. ඇණවුම Direct Owner ගේ WhatsApp වෙත End-to-End Encrypted ලෙස පමණක් යැවේ.

---

## ⚙️ Customize කරන්නේ කෙසේද? (How to Edit Details)

අනාගතයේදී Phone Number, Bank Account හෝ Package Prices වෙනස් කිරීමට අවශ්‍ය නම්:

1. **WhatsApp & Bank Details වෙනස් කිරීමට**:
   - `js/app.js` ఫයිල් එක විවෘත කරන්න.
   - උඩම ඇති `CONFIG` කොටසේ අංක වෙනස් කරන්න:
   ```javascript
   const CONFIG = Object.freeze({
       STORE_NAME: 'RASHZZ TOPUP',
       SUPPORT_WHATSAPP: '94767379877',
       BANK_ACCOUNT: '8009124451',
       EZCASH_NUMBER: '0767379877',
       BANK_NAME: 'Commercial Bank',
       ACCOUNT_HOLDER: 'RASHZZ TOPUP'
   });
   ```

2. **Packages & Prices වෙනස් කිරීමට**:
   - `js/products.js` ఫයිල් එක විවෘත කර අදාළ package එකේ `price_lkr` අගය වෙනස් කරන්න.
