# 🧪 Companies House QA Assessment – README

This repository contains a test automation suite for [https://automationintesting.online](https://automationintesting.online), created as part of the Lead Test Engineer assessment.

---

## 📁 Project Overview

- ✅ Automated tests using **Playwright + TypeScript**
- ✅ Functional test coverage of booking, navigation, validation, and UI feedback
- ✅ Bug reports for usability, scroll behavior, error handling, and more
- ✅ Documented test plan, how-to instructions, and sample test data

---

## 📦 Prerequisites

Ensure the following are installed:
- **Node.js** – [https://nodejs.org](https://nodejs.org)
- **npm** (comes with Node.js)
- **VS Code** 
- **Git** 

---

## 🚀 Setup & Run Instructions

### 1. Clone or download the project
```bash
git clone https://github.com/yourusername/companies-house-assessment.git
cd companies-house-assessment
```

### 2. Install dependencies
```bash
npm install
npx playwright install
```

### 3. Run the test suite
```bash
npx playwright test         # Run all tests (headless)
npx playwright test --ui   # Interactive mode
npx playwright test --headed   # Run with visible browser
```

### 4. View test reports
```bash
npx playwright show-report
```

---

## 🧪 Test Coverage Summary

| Area Tested         | Description                                           |
|---------------------|-------------------------------------------------------|
| Booking flow        | End-to-end from homepage to confirmation              |
| Navigation links    | Rooms, Booking, Amenities, Contact                   |
| Form validation     | Field-level messages and error deduplication         |
| Crash detection     | Intercepts client-side exception during submission   |

---

## 🐞 Bug Reports
Refer to the Word documentation for full list of bugs:
- BR01: Amenities dead link
- BR02: Placeholder room descriptions
- BR03: Booking menu anchor misaligned
- BR04: Room cards flicker and reload missing content
- BR05: Booking scroll shows both booking and rooms sections
- BR06: Cannot amend dates on booking calendar page
- BR07: Confusing validation messages
- BR08: Client-side crash after booking (intermittent)

---

## 👤 Author
Karen Mungai  
Email: karen.gakuo@gmail.com  
LinkedIn: [linkedin.com/in/karenmungai](https://www.linkedin.com/in/karenmungai)

---
