# Project Specification: Live Clock Application

## 1. Overview
A minimal, responsive web application built with vanilla web technologies to display the user's current local time.

## 2. Technical Constraints
- **Languages:** Semantic HTML5, Vanilla CSS3, Modern JavaScript (ES6+).
- **Frameworks:** None (Zero external dependencies, no CDNs, no npm packages).
- **Architecture:** Complete separation of concerns across 3 core files.

## 3. Functional Requirements
- **Real-time Updates:** Time must increment dynamically every 1 second without page refreshes.
- **Time Format:** 12-hour format with AM/PM indicator (e.g., `06:30:15 PM`).
- **Metadata:** Display the day of the week and full calendar date underneath the clock.

## 4. UI/UX Design System
- **Layout:** Flexbox or Grid to perfectly center components horizontally and vertically.
- **Theme:** Dark mode aesthetic.
  - Background: `#0f172a` (Slate dark)
  - Text Color: `#f8fafc` (Off-white)
  - Accent Color: `#38bdf8` (Electric blue for the ticking seconds)
- **Typography:** Modern, clean sans-serif font stack system.

## 5. Required Deliverables
The AI must generate three distinct, fully implemented code blocks:
1. `src\index.html` - Structurally well-constructed HTML5 document linking to the asset files.
2. `src\style.css` - Complete styling including reset and layout rules.
3. `src\script.js` - Optimized DOM manipulation logic using `setInterval`.
