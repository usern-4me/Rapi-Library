# 🎨 Rust + Tauri Desktop Image Gallery App

A lightweight, cross-platform image gallery app built with Tauri (Rust + React frontend). Select from popular image APIs like Wallhaven or add your own custom API later. Browse, search, and download images — all from a sleek native desktop UI.

---

## 🚀 Features

* Built-in support for popular image APIs (e.g., Wallhaven)
* Optional custom API input (after startup)
* Fast native performance using Rust and Tauri
* Responsive grid layout with image previews
* Download any image with one click
* Search & filter images by title or URL

---

## 📦 Dependencies & Setup

Make sure you have the following installed:

* [Rust + Cargo](https://www.rust-lang.org/tools/install)
* [Node.js + pnpm](https://pnpm.io/)
* [Tauri CLI](https://tauri.app/v1/guides/getting-started/prerequisites/)

```bash
npm install -g @tauri-apps/cli
```

---

## 🛠️ Setup Instructions

```bash
# Scaffold a new project
npm create tauri-app

# Choose React + TypeScript + pnpm during setup

# Enter the project
cd rapi-library

# Install frontend dependencies
pnpm install

# Run the app in dev mode
pnpm tauri dev
```

---

## 📁 Folder Structure

```
├── src-tauri/           # Rust backend code
│   ├── main.rs          # Tauri commands and logic
│   └── download.rs      # (optional) image downloading logic
├── src/                 # Frontend code (React + TypeScript)
│   └── App.tsx          # Main UI logic
```

---

## 🗂️ Development Plan

### ✅ Phase 1: Foundation & Menu UI

* [ ] Initialize Git repository and commit base project
* [ ] Define project structure
* [ ] Setup basic Tauri backend and frontend wiring
* [ ] Create **startup menu UI**:

  * Buttons for built-in sources like:

    * Wallhaven
    * Unsplash
    * Pexels (optional)
  * Button to “Enter Custom API URL” (opens modal or input field)
* [ ] Store selected source in frontend state

---

### 🌐 Phase 2: API Fetching & Grid Rendering

* [ ] When source selected, fetch JSON from that API

  * Use predefined URLs for built-in APIs
  * Use input URL if custom
* [ ] Define expected JSON format (e.g. `[ { url, title? } ]`)
* [ ] Store fetched image data in state
* [ ] Render image grid

  * Show thumbnails using `<img>`
  * Add hover or overlay with "Download" button
* [ ] Handle fetch errors gracefully (invalid URL, API down, etc.)

---

### 📥 Phase 3: Downloading Images (Rust Backend)

* [ ] Add Rust Tauri command: `download_image(url: String, filename: String)`

  * Use `reqwest` to fetch image bytes
  * Save file using `std::fs`
* [ ] Connect frontend download button to Tauri command
* [ ] Show success/failure notification
* [ ] Optional: Let user choose save location with dialog

---

### 🔍 Phase 4: Search & Filtering

* [ ] Add search bar above the grid
* [ ] Filter images based on:

  * URL string
  * Optional title/description
* [ ] Live update of image grid as user types
* [ ] Clear search resets the grid

---

### 🎨 Phase 5: UI Polish & Packaging

* [ ] Add responsive layout (CSS Grid or Flexbox)
* [ ] Show loading spinners during fetch/download
* [ ] Show empty state if no results
* [ ] Add hover effects, smooth transitions
* [ ] Build final Tauri release package
* [ ] Test installation & downloading on all platforms

---

### 🚀 Stretch Goals (Optional)

* [ ] Support multiple pages (pagination / infinite scroll)
* [ ] Save & load last-used API source
* [ ] Drag and drop custom API URLs
* [ ] Add sorting (e.g., by title, time)
* [ ] Cache thumbnails locally

---

## 🔧 Example Files to Edit

| Phase | File                                   | Purpose                         |
| ----- | -------------------------------------- | ------------------------------- |
| 1     | `src-tauri/src/main.rs`                | Define backend Tauri commands   |
| 1–5   | `src/App.tsx`                          | Frontend UI & interaction logic |
| 3     | `src-tauri/src/download.rs` (optional) | Rust download helper module     |

---

## 🧪 Running the App

```bash
# Start in dev mode
pnpm tauri dev

# Build for production
pnpm tauri build
```

After building, the release binaries will be located at:

```
src-tauri/target/release/
```

---

## 📄 License

**Apache-2.0**

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).

---
