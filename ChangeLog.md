```markdown
# Changelog

All notable changes to the Managung Dighital Art Print website project are documented

##[1.0.0] - 2026-08-07
##Added
* Initialized local project repository enviroment.
* Created baseline boilerplate core files: 'index.html','AboutUs.html' and ;ContactUs.html'.
* Implemented primary structural layout elements including the'<header>', '<nav>', <main>' and '<footer>' layout sections

##[1.0.1] - 2026-08-09
### Fixed
* Corred internal directory path case misatches across the navigation tree links to completely resolve persistent web page 'ERR_FILE_NOT_FOUND' routing expections
* Sychronized global '<nav>' structure meunus across all individual project file arrays.

## Fixed
* Removed line break('<br>') aligment blocks causing text fields to wrap improperly below input boxes right alongside item text labels.

##[1.1.0] - 2026-08-11
### Added
* Created a newly expanded interactive form inside 'ContactUs.html' with functional dropdowns ('<select>'), text areas ('<textarea>') and specialized contact attributes.
* Formatted the organizations operating hours and address specifications inside a clear '<section>' format block.

##[1.2.0] - 2026-08-12
### Added
* Created the 'Servant.html' layout highlighting program offerings (Digital Art Photography Graphic Design Printing)
* Created the advanced 'Enquiry.html' layout utilizing an HTML tables layout.
* Added form elements to 'Enquiry.html' including a custom '<fieldset>' and '<input type="radio">' choice options.
* Autgired clean standardized 'README.md' and 'CHANGELOG.md' assignment files.


## Part 2

# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-09-16

### Added
- *Global:* Configured custom CSS variables (:root) for cohesive brand coloring across all pages.
- *Global:* Added a comprehensive 4-column footer containing the NPO logo, quick links, and functional social media links.
- *Home:* Built a new Uber-inspired split-screen hero layout with action buttons.
- *Home:* Added a bottom grid featuring 4 interactive suggestion cards with inline icons.
- *About:* Implemented a new custom split-screen layout with vertical writing-mode typography and responsive image framing.
- *Enquiry:* Added a full-width background hero image with centered, text-shadowed typography.
- *Contact:* Embedded a live Google Map iframe inside the contact details column.

### Changed
- *Global:* Updated the <nav> links to include aria-current="page" to dynamically highlight the active page.
- *Services:* Converted standard text lists into a 4-column CSS Grid service-card layout with hover transformation and shadow effects.
- *Enquiry:* Completely redesigned the form into a minimalist 2-column UI, featuring bottom-border-only input fields and a slate-blue pill-shaped submit button.
- *Contact:* Restructured the main content into a 2-column CSS Grid, separating the company details/map from the interactive user form.

### Fixed
- *Global:* Corrected broken HTML wrapper elements (div, section) to ensure CSS Grid and Flexbox rules apply correctly.
- *Global:* Implemented @media queries at 900px and 600px breakpoints to fix layout breaking on tablet and mobile devices.
- *Navigation:* Resolved typography and underline issues in the header by properly scoping the .site-nav a and .brand CSS classes.

####  CSS Fixes & Enhancements
Syntax & Error Cleanup: Fixed an unclosed comment block (* The Updated Grey Cards */) that was breaking card rendering, corrected the invalid @media (media-width:600px) query to @media (max-width: 600px), and resolved a numerical typo (margin: 0.0.1rem 0;) on footer headings.

Footer Layout Realignment: Replaced the wide layout with a constrained, auto-centered CSS Grid (repeat(4, 1fr)) inside a dedicated container to balance all four columns evenly across the viewport.

Contact Cards Modernization: Rebuilt the contact boxes into clean card containers featuring light borders, subtle box shadows, and uniform internal padding.

Opening Hours Grid: Converted the unstructured bulleted list into distinct two-column flex rows with subtle dividing lines, aligning the days to the left and times to the right.

Form & Button Styling: Styled the contact inputs and text areas with sleek light-gray borders, gold accent focus outlines, and a pill-shaped submit button.

Mobile Responsiveness: Added structured media query breakpoints (900px, 768px, and 600px) so the split sections, contact grids, and footer columns collapse into single-column layouts on smaller devices.


#### HTML & Structural Updates
Two-Column Contact Section: Reorganized the layout into two balanced parent columns: contact info and interactive map on the left, and the inquiry form card on the right.

Interactive Protocols: Upgraded the plain text contact details into clickable actions using tel:+27... for mobile phone dialing and mailto:... for direct emailing.

External Link Security: Added target="_blank" alongside rel="noopener noreferrer" attributes to all social media links to protect security and keep the user on the primary site.

Copy & Typo Corrections: Corrected the header spelling from "Phyical Address" to "Physical Address" and restored the original business details:

Address: 2044 Section A, Botshabelo, 9781, Mangaung

Telephone: 08263 6371

Map & Action Layout: Integrated the Google Maps iframe within a framed container directly below the physical address text, complemented by an outline directions button.