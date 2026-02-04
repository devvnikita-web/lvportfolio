# Portfolio Nikita Čučajevs - Latviešu/English versija

## 🎯 Izmaiņas / Changes

### ✅ Izpildīts / Completed:

1. **Valodas / Languages:**
   - 🇱🇻 Latviešu valoda kā galvenā / Latvian as main language
   - 🇬🇧 Angļu valodas atbalsts / English language support
   - 🔄 Valodas pārslēdzējs augšējā labajā stūrī / Language switcher in top right

2. **Valūta / Currency:**
   - 💶 Visas cenas tagad euro (€) / All prices now in euro (€)
   - Landing Pages: no 150€ (was 3000₽)
   - Vizītkartes: no 225€ (was 4500₽)
   - Portfolio: no 200€ (was 4000₽)

3. **Klikabele kontakti / Clickable contacts:**
   - ✉️ Email: mailto:chuchnikita@gmail.com
   - 💬 Telegram: https://t.me/alpinmeimfine
   - 📱 WhatsApp: https://wa.me/37120018338
   - Visi kontakti tagad ir klikabeli un atveras atbilstošajā aplikācijā

4. **Izņemts / Removed:**
   - ❌ Kwork sadaļa pilnībā izņemta no kontaktu lapas

## 📁 Failu struktūra / File Structure

```
portfolio-lv/
├── index.html          # Galvenā HTML lapa ar LV/EN tulkojumiem
├── css/
│   └── style.css      # Stili ar valodas pārslēdzēja dizainu
└── js/
    └── script.js      # JavaScript ar valodu funkcionalitāti
```

## 🚀 Kā izmantot / How to Use

### 1. Atvērt lokāli / Open Locally:
- Atarhivējiet failus / Unzip the files
- Atveriet `index.html` pārlūkprogrammā / Open `index.html` in browser
- Pārslēdziet valodu ar LV/EN pogām / Switch language with LV/EN buttons

### 2. Publicēt uz servera / Publish to Server:
- Augšupielādējiet visus failus uz jūsu hostingu
- Pārliecinieties, ka saglabāta mapju struktūra
- Mājaslapa būs pieejama jūsu domēnā

### 3. GitHub Pages:
```bash
git init
git add .
git commit -m "Initial commit - LV/EN portfolio"
git branch -M main
git remote add origin [your-repo-url]
git push -u origin main
```

## 🎨 Funkcionalitāte / Features

### Valodu pārslēgšana / Language Switching:
- Klikšķiniet uz LV vai EN pogas
- Viss saturs automātiski pārvēršas
- Izvēle saglabājas pārlūkprogrammā (localStorage)
- Darbojas ar visiem tekstiem, pogām, formām

### Klikabele kontakti / Clickable Contacts:
- **Email**: Atver e-pasta klientu ar jūsu adresi
- **Telegram**: Tieša saite uz Telegram čatu
- **WhatsApp**: Tieša saite uz WhatsApp čatu
- Hover efekts, lai parādītu, ka elementi ir klikabeli

### Adaptīvs dizains / Responsive Design:
- Darbojas perfekti uz datoriem
- Optimizēts mobilajām ierīcēm
- Valodu pārslēdzējs pielāgojas maziem ekrāniem

## 🛠️ Pielāgošana / Customization

### Mainīt kontaktu informāciju / Change Contact Info:

**index.html (rindiņa ~501):**
```html
<!-- Email -->
<a href="mailto:JŪSU_EMAIL@example.com" class="contact-method">
    
<!-- Telegram -->
<a href="https://t.me/JŪSU_USERNAME" target="_blank" class="contact-method">

<!-- WhatsApp -->
<a href="https://wa.me/JŪSU_NUMURS" target="_blank" class="contact-method">
```

### Mainīt cenas / Change Prices:

**index.html (rindiņa ~233, 254, 273):**
```html
<div class="service-price">
    <span data-lv="no" data-en="from">no</span> JŪSU_CENA€
</div>
```

### Pievienot jaunu valodu / Add New Language:

1. Pievienojiet pogu HTML:
```html
<button class="lang-btn" data-lang="ru">RU</button>
```

2. Pievienojiet tulkojumus visiem elementiem:
```html
<span data-lv="Latviešu" data-en="English" data-ru="Русский">Latviešu</span>
```

3. Atjauniniet JavaScript funkciju `switchLanguage()`

## 📝 Papildu piezīmes / Additional Notes

- Form submission izmanto Web3Forms (bezmaksas)
- Google Fonts (Inter) ielādējas no CDN
- Font Awesome ikonas no CDN
- Bez jQuery vai citām lielām bibliotēkām
- Tīrs, semantisks HTML5 kods
- Mūsdienīgs CSS ar CSS variables
- Vanilla JavaScript (bez framework)

## 🐛 Zināmās problēmas / Known Issues

Nav zināmu problēmu / No known issues

## 📧 Kontakti / Contact

Ja jums ir jautājumi par šo vietni:
If you have questions about this site:

- **Email**: chuchnikita@gmail.com
- **Telegram**: @alpinmeimfine
- **WhatsApp**: +371 20 018 338

---

**Versija / Version**: 2.0 (Latviešu/English)  
**Datums / Date**: 2026-02-03  
**Autors / Author**: Nikita Čučajevs
