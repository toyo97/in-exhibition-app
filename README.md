<div align="center">

<img src="public/logo.png" alt="IN logo" width="140"/>

# IN · Inclusive Intersectional Interactive

**The companion web app of _an exhibition about equality_**

<a href="https://toyo97.github.io/in-exhibition-app">
  <img src="https://img.shields.io/badge/TRY_IT-LIVE_DEMO-F5C02D?style=for-the-badge&labelColor=1C2D46" alt="Live demo">
</a>

<br/>

<img src="https://img.shields.io/badge/project-ASP%20%C2%B7%20PoliMi%20%2B%20PoliTo-1C2D46?style=flat-square" alt="ASP programme">
<img src="https://img.shields.io/badge/exhibition-SDGs%20%C2%B7%20equality-147351?style=flat-square&labelColor=1C2D46" alt="SDGs">
<img src="https://img.shields.io/badge/built_with-Vue.js%20%C2%B7%20Vuetify-3C9EB7?style=flat-square&labelColor=1C2D46" alt="Vue.js · Vuetify">
<img src="https://img.shields.io/badge/interacts_with-QR%20%C2%B7%20RFID%2FNFC%20%C2%B7%20sensors%20%C2%B7%20LEDs-DD573A?style=flat-square&labelColor=1C2D46" alt="QR · RFID/NFC · sensors · LEDs">
<img src="https://img.shields.io/badge/gamified-quizzes%20%C2%B7%20scores-D587AE?style=flat-square&labelColor=1C2D46" alt="Gamified">

</div>

---

## About

**IN** is the web app of *IN — Inclusive Intersectional Interactive, an exhibition about equality*: an interactive exhibition on the UN **Sustainable Development Goals** designed and built for the [ASP — Alta Scuola Politecnica](https://www.asp-poli.it/) programme.

During the visit it acts as a guide and companion: it walks visitors through the exhibition, prompts **quizzes** related to each exhibit and lets them interact with the **sensors** hidden in the exhibits — turning the whole path into a **gamified** experience.

**▶ [Try the live demo](https://toyo97.github.io/in-exhibition-app)**

<p align="center">
  <img src="docs/app-screenshot.png" alt="IN app — home screen" width="270"/>
</p>

## Behind the exhibits

<p align="center">
  <img src="docs/tech-stack.png" alt="Schema of the tech stack behind the exhibits" width="700"/>
</p>

- Visitors interact from their own phone: the app scans the **QR code** at each exhibit and unlocks its content.
- The exhibits themselves talk through **RFID/NFC tags + readers, sensors and LED lights**, driven by a backend and a database.
- Every interaction is collected for **data visualization** — and feeds the visitor's score.

| | |
|---|---|
| 🧩 **Frontend** | Vue.js · Vuex · Vue Router · Vuetify |
| 📷 **Exhibit interaction** | QR-code scanning (`vue-qrcode-reader`) |
| 🔊 **Media** | in-app audio stories & playback (`vue-audio-better`) |
| 🚀 **Deployment** | GitHub Actions → GitHub Pages |

## Run it locally

```bash
git clone https://github.com/toyo97/in-exhibition-app
cd in-exhibition-app
npm install
npm run serve   # → http://localhost:8080
```

## Acknowledgements

**Co-authors** — app designed & developed by [@toyo97](https://github.com/toyo97) with the ASP project team: academic tutors *Franca Garzotto · Pietro Crovari · Fabio Catania* (Politecnico di Milano) and *Irene Barcarolo · Sergio Degiacomi · Valentina Ferreri · Alessia Kayalibay · Anika Rieth · Valeriia Vapelnyk · Vittorio Zampinetti · Francesca Zoccarato*.

**External institutions & companies** — Impactscool · On-Air · I3d LAB.

---

<div align="center">

<img src="https://img.shields.io/badge/-DD573A" alt="#DD573A"/> <img src="https://img.shields.io/badge/-3C9EB7" alt="#3C9EB7"/> <img src="https://img.shields.io/badge/-D587AE" alt="#D587AE"/> <img src="https://img.shields.io/badge/-E3DFD3" alt="#E3DFD3"/> <img src="https://img.shields.io/badge/-147351" alt="#147351"/> <img src="https://img.shields.io/badge/-F5C02D" alt="#F5C02D"/> <img src="https://img.shields.io/badge/-1C2D46" alt="#1C2D46"/>

<sub>_exhibition palette · IN — an exhibition about equality_</sub>

</div>
