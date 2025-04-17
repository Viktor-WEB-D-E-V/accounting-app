# Employee Management App

A simple employee management interface built with **React** and **class components**. That allows users to:
- Add new employees
- Delete employees
- Search employees by name
- Filter employees based on criteria (e.g., salary, increase status)
- Toggle properties like promotion status or raise eligibility


---
## 🧰 Technologies Used

- **React** – For building the user interface  
- **Class Components** – ES6-based stateful components  
- **CSS Modules** – Locally scoped and modular styles  
- **Modern Normalize** – For consistent cross-browser styling  
- **JavaScript (ES6+)** – Modern features like arrow functions and destructuring  
- **Vite**  – Lightning-fast dev server and build tool 

---
## 🛠️ Features

- Class-based components with clear state management
- CSS Modules for scoped and maintainable styling
- Search and filter functionality
- Dynamic list with toggleable employee properties
- Data-driven UI with reusable subcomponents

---
## Installation & Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/Viktor-WEB-D-E-V/accounting-app.git
   cd accounting-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the application:
   ```sh
   npm run dev
   ```
4. Open `http://localhost:5173/` (or the specified port) in your browser.

---
## 📁 Folder Structure
```
src/
├── index.css                   # Global styles
├── main.jsx                    # App entry point
└── components/                 # Reusable UI components
    ├── App/                    # Root component with main app logic
    │   ├── App.jsx
    │   └── App.module.css
    ├── AppInfo/                # Displays summary info about employees
    ├── AppFilter/              # Filter buttons (e.g. raise, salary > 1000)
    ├── SearchPanel/            # Search bar for filtering employees by name
    ├── EmployeesList/          # Renders the list of employee items
    ├── EmployeesListItem/      # Individual employee with actions
    └── EmployeesAddForm/       # Form to add new employees
```
