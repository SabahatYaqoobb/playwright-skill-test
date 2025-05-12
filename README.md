# Playwright Test Project

This project contains Playwright test challenges for evaluating JavaScript end-to-end testing skills using Playwright.

---

## 📝 Tasks Overview

### Basic Page Navigation & Assertion

- Open [https://example.com](https://example.com)
- Click on the **“More information…”** link
- Verify the new page's URL contains `iana.org`
- Verify the heading contains “IANA”

---

### Form Interaction & Validation

- Open: [https://www.selenium.dev/selenium/web/web-form.html](https://www.selenium.dev/selenium/web/web-form.html)
- Fill the form with:
  - Text: "Playwright Test"
  - Password: "Secret123"
  - Date: today’s date
  - Dropdown: "Option 2"
- Click the **Submit** button
- Assert confirmation message contains "Received!"

---

### Dynamic Table & Filter Test

- Visit: [https://datatables.net/examples/data_sources/ajax.html](https://datatables.net/examples/data_sources/ajax.html)
- Wait for the table to load
- Type `"London"` in the search box
- Verify:
  - All results have “London” in the **Office** column
  - Number of visible rows is correct

---

## ▶️ How to Run Tests

### 🖥 In Gitpod or VS Code Terminal

1. **Open Terminal**
   - Gitpod: Click `Terminal` → `New Terminal` from the top menu.
   - VS Code: Use shortcut <kbd>Ctrl</kbd> + <kbd>`</kbd> (backtick) or open via `Terminal` menu.

2. **Install dependencies**
   ```bash
   npm install



