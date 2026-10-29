Markdown

# Mangaung Digital Art Print Website

A  multi-page web platform built using semantic HTML this project serves as a website for **Mangaung Digital Art Print** a registered community focused Non-Profit Oraganisation located in Section A Botshabelo. The organizations primary focus areas include youth empowerment digital skills development artistic expression and job creation using digital art phtography graphic design and print technology.

Purpose of website
* Our primary focus is to drive youth empowerment and job creation within Mangung We achieve this ny providing access to modern creative tools, training and support.
* Mangaung Digital Art Print provides youth and students in underprivileged communities with high-quality creative projects and easily accessible digital print services.
* By use art as an alternative intervention, we hope to reduce school dropout rate technological digital skills and promote long-lasting socio-economic empowerment at the local level.
* **Mangung Dighital Art Print** provides you with services such as:
Digital Art and Illustration - Comprehensive training on digital drawing tablets and modern illustration software to help youth express their creativity.
Photography and Visual Media - Teaching the fundamentals of camera operation lighting and photo editing tp capture the stories of our community.
Graphic Design Essentials - Preparing students for the workplace by teaching them how to design logos,posters and professional branding.
Modern Print Technology - Taking digital crations into the physical world we teach the operation of professional printers to create self-sustaining business opportunities.




Features
**Semantic HTML Structure:** Bult following strict guildelines using modern structural elements ('<header>', '<nav>', '<main>', '<footer>')
**Multi-Page Navigation:** Seamless connection across all 3 main pages with validated local file linking.
**Professional Layout** Includes clean data lists structured dropdown forms and advanced appliction form with custom fieldsets/radio options and a side by side informational grid.
**Interactive Media** Embedded direct map location fram and optimized asset paths for program graphics.

Project Structure
```text

/
├── index.html              #Homepage with organization introduction
├── AboutUs.html            # NPO history, Core Mission and Vision Statement
├── ContactUs.html          # Address details operating hours map and contact form
├── Enquiry.html            # Grid styled engagement options and strctured message form
├── Services.html           # Catalog of the digital training programs offered
├── README.md               # Documetation for project overview
├── CHANGELOG.md            # Documentation for updates and development history
|            
└─── images/                # Local directiroy containing asset graphic
     ├── digital-art.jpg
     ├── photography.jeg
     ├── graphic-design.jpg
     └─── printing.jpg

--Part 2---

# Mangaung Digital Art Print

## Project Overview
This project is a 5-page static website developed for an academic web development assignment. It serves as the digital front door for Mangaung Digital Art Print, a Non-Profit Organisation (NPO) dedicated to youth empowerment and digital skills development in Botshabelo, Free State. 

## Technical Stack
* *HTML5:* Semantic structuring (Header, Nav, Main, Section, Article, Footer).
* *CSS3:* Advanced styling using CSS Variables (:root), Flexbox, CSS Grid, and Media Queries for responsive design.
* *Version Control:* Git & GitHub.
* *Hosting/Deployment:* Netlify.

## Page Structure & Features
1. *Home (index.html):* Modern, minimalist Uber-style layout featuring a split-screen hero section and an interactive 4-card "Suggestions" grid with icons.
2. *About (AboutUs.html):* A custom magazine-style split layout featuring vertical typography, overlapping color blocks, and responsive image scaling.
3. *Services (Services.html):* A 4-column CSS Grid showcasing the core NPO offerings inside interactive, shadow-lifted UI cards.
4. *Enquiry (Enquiry.html):* A two-column minimalist layout featuring a full-width hero background image, "line-only" input fields, and a custom pill-shaped submit button.
5. *Contact Us (ContactUs.html):* A split 2-column layout containing organizational details, an embedded live Google Map, and a user form.

## Design System
* *Global Navigation:* Features hover state animations and active-page highlighting using aria-current="page".
* *Footer:* Comprehensive 4-column layout containing brand logo, quick links, service routing, and external social media links.
* *Responsiveness:* All pages collapse gracefully into single-column layouts for mobile devices (max-width: 600px) and adapt for tablet viewing (max-width: 900px).

## Recent Updates & Enhancements (Part 3)

### Contact Page Architecture
* **Structured Information Cards:** Refactored the contact details section into a two-card layout dividing physical/postal address details and structured operational hours.
* **Tabular Schedule Rows:** Replaced unstyled bullet lists with key-value flex rows, subtle divider lines, and clear typography for daily opening and closing times.
* **Actionable Direct Links:** Wired telephone and email entries to native dialer (`tel:`) and mail client (`mailto:`) protocols for frictionless mobile user experience.
* **Integrated Location & Action:** Positioned the verified Botshabelo Google Maps embed directly beneath the physical address alongside a dedicated directions button.
* **Card Form Refactor:** Restyled the inquiry form inside an elevated card featuring rounded input controls and a gold accent pill button.

### Footer Alignment & Usability
* **4-Column CSS Grid:** Fixed footer alignment across wide displays using a centralized container constraint (`width: min(90%, 1200px)`) and balanced column spacing.
* **Direct Navigation & External Linking:** Added functional external social links (`Facebook`, `Instagram`, `X`, `YouTube`) configured with `target="_blank"` and `rel="noopener noreferrer"` for secure browsing.
* **CSS Engine Cleanup:** Resolved duplicate property rules, normalized vendor styling bugs, and ensured consistent color contrast ratios across dark and light themes.
* **Responsive Breakpoints:** Configured cascading rules for desktop (4-column), tablet (2-column at $\le$ 900px), and mobile (single-column stack at $\le$ 600px).


# Mangaung Digital Art Print Website

A multi-page responsive web platform built using semantic HTML5, modern CSS3, and vanilla JavaScript. This project serves as the digital front door for **Mangaung Digital Art Print**, a registered community-focused Non-Profit Organisation (NPO) located at 2044 Section A, Botshabelo, 9781, Mangaung, Free State.

## Purpose of the Website
- **Youth Empowerment & Job Creation:** Drives youth empowerment and job creation within Mangaung by providing access to modern creative tools, structured training, and support.
- **Community Access:** Provides youth and students in underprivileged communities with high-quality creative projects and accessible digital print services.
- **Socio-Economic Impact:** Uses art and technology as an alternative intervention to reduce school dropout rates and promote long-lasting socio-economic empowerment at the local level.
- **Core Services Provided:**
  - *Digital Art & Illustration:* Comprehensive training on digital drawing tablets and modern illustration software to help youth express their creativity.
  - *Photography & Visual Media:* Teaching the fundamentals of camera operation, lighting, and photo editing to capture the stories of our community.
  - *Graphic Design Essentials:* Preparing students for the workplace by teaching them how to design logos, posters, and professional branding.
  - *Modern Print Technology:* Taking digital creations into the physical world by teaching the operation of professional printers to create self-sustaining business opportunities.

## Technical Stack
- **HTML5:** Semantic structuring (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<fieldset>`, `<footer>`).
- **CSS3:** Custom properties (`:root`), Flexbox, CSS Grid, hover transformations, validation states (`.input-error`, `.error-message`), and responsive `@media` queries (`900px`, `768px`, `600px`).
- **JavaScript (ES6+):** Client-side interactivity (`main.js`, `validation.js`, `lightbox.js`, `search.js`) and EmailJS v4 SDK integration.
- **Version Control:** Git & GitHub.
- **Hosting/Deployment:** Netlify.

## Page Structure & Features
1. **Home (`index.html`):** Modern Uber-inspired layout featuring a split-screen hero section, a live JavaScript filter bar, and an interactive 4-card "Primary Focus Areas" grid with icons and lightbox support.
2. **About (`pages/AboutUs.html`):** Magazine-style split layout featuring vertical typography, overlapping color blocks, mission/vision statements, and responsive image scaling.
3. **Services (`pages/Services.html`):** A 4-column CSS Grid showcasing the core NPO offerings inside interactive, shadow-lifted UI cards with live search filtering and image lightbox previews.
4. **Enquiry (`pages/Enquiry.html`):** A 2-column minimalist layout featuring a full-width hero background image, FAQs, bottom-border input fields, radio fieldsets, a pill-shaped submit button, and real-time red error validation.
5. **Contact Us (`pages/ContactUs.html`):** A split 2-column layout containing organizational details, clickable `tel:` and `mailto:` protocols, tabular opening hours, an embedded Botshabelo Google Map, and a validated inquiry form card.

## JavaScript Modules (Part 3 Enhancements)
- **`main.js`:** Handles active navigation state highlighting (`aria-current="page"`), injects a smooth-scroll "Back to Top" button when scrolling down, and updates the footer year dynamically.
- **`validation.js`:** Provides real-time and submit-event form validation for `ContactUs.html` and `Enquiry.html`. Applies red error outlines (`.input-error`) and reveals inline red error text (`.error-message`) beneath invalid inputs before displaying a green confirmation banner (`#formStatus`) on valid submission.
- **`lightbox.js`:** Generates a centered dark modal overlay when users click service, focus card, hero, or about images, supporting backdrop click and `Escape` key closing.
- **`search.js`:** Injects a rounded live search input bar that filters focus area cards and service cards dynamically by title and description keywords.
- **EmailJS Integration (`script.js`):** Connects the contact form to the EmailJS browser SDK (`@emailjs/browser@4`) to send real-time user messages directly to the organisation's email inbox.

## Project Structure
```text
/
├── index.html                  # Homepage with split hero, live search & focus cards
├── README.md                   # Documentation for project overview
├── CHANGELOG.md                # Documentation for updates and development history
│
├── pages/                      # Secondary website pages
│   ├── AboutUs.html            # NPO history, Core Mission and Vision Statement
│   ├── Services.html           # Catalog of the digital training programs offered
│   ├── Enquiry.html            # FAQ grid and validated minimalist enquiry form
│   └── ContactUs.html          # Address details, operating hours, map and contact form
│
├── CSS/                        # Stylesheets
│   └── Style.Css               # Global variables, Grid/Flex layouts, responsive rules & validation styles
│
├── JS(JAVA SCRIPT)/            # JavaScript files
│   ├── main.js                 # Active nav highlighting, Back-to-Top button & footer helpers
│   ├── validation.js           # Client-side form validation for ContactUs & Enquiry forms
│   ├── lightbox.js             # Full-screen modal image viewer
│   └── search.js               # Live search filtering for cards
│
└── Images/                     # Local directory containing graphic assets
    ├── Logo.png
    ├── Hero card.jpeg
    ├── Index digital arts.jpeg
    ├── Index media.jpeg
    ├── Index grapghic.jpeg
    ├── index print.jpg
    ├── digital art.jpg
    └── WhatsApp Image 2026-09-09 at 1.56.06 PM.jpeg

    Finish Read Me Poe  for fynal sumbmission 

**GitHub Link** [https://github.com/Damian-21-student/DAMIAN-FORBES-WED5020-ASSIGNMENT-1-PART1](https://github.com/Damian-21-student/DAMIAN-FORBES-WED5020-ASSIGNMENT-1-PART1)
**Netilfy Link**[https://app.netlify.com/projects/elaborate-stardust-447a92/deploys/6a7c9ce9978a1a7b65ee6862](https://app.netlify.com/projects/elaborate-stardust-447a92/deploys/6a7c9ce9978a1a7b65ee6862)
