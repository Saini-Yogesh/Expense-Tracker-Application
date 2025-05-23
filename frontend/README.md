# 💸 Expense Tracker Frontend

This is the **frontend** of a full-stack Expense Tracker application built using **React.js**.  
It allows users to register, log in, manage expenses, and visualize their spending with interactive charts.

---

## 🌟 Features

- 🔐 **User Authentication** (Login/Register required to access the app)
- ➕ **Add / Edit / Delete Expenses**
- 📄 **Pagination** on Dashboard for better data handling
- 🗂️ **Category Filter** for easy browsing of expenses
- 📊 **Summary Page with Toggle** between Pie and Bar charts
- 📅 **Date Range Filters** in Summary:
  - Last 7 Days
  - Last 30 Days
  - This Month
  - This Year
  - Last Year
  - All Time
  - Custom Range
- 🧭 **Navbar Includes**:
  - About Us (Developer Info)
  - Summary
  - Dashboard
  - Logout
  - Greeting with user’s first name (e.g., Hi, John)
- 🎨 Clean, responsive UI with meaningful feedback and validations
- 🚨 Global error handling with Toast notifications
- 🔐 **Protected Routes**: Only accessible after login

---

## 🧾 Expense Categories

Used for filtering and summary breakdowns:

- All
- Food
- Groceries
- Transport
- Rent
- Healthcare
- Entertainment
- Shopping
- Subscriptions
- Education
- Other

---

## 🗂️ Project Structure

```
frontend/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── api.js
│
│   ├── components/
│   │   ├── ActionDeleteButtons.js
│   │   ├── ExpenseForm.js
│   │   ├── ExpenseList.js
│   │   ├── Filter.js
│   │   └── Navbar.js
│
│   ├── context/
│   │   └── AuthContext.js
│
│   ├── Css/
│   │   ├── About.css
│   │   ├── ActionDeleteButtons.css
│   │   ├── AuthForm.css
│   │   ├── ExpenseForm.css
│   │   ├── ExpenseList.css
│   │   ├── Navbar.css
│   │   └── Summary.css
│
│   ├── pages/
│   │   ├── About.js
│   │   ├── Dashboard.js
│   │   ├── Login.js
│   │   ├── NotFound.js
│   │   ├── NotFound.css
│   │   ├── Profile.js
│   │   ├── Register.js
│   │   ├── Summary.js
│   │   └── self_image.jpg
│
│   ├── utils/
│   │   └── ProtectedRoute.js
│
│   ├── App.js
│   ├── App.css
│   ├── App.test.js
│   ├── index.js
│   ├── index.css
│   ├── dummyData.json
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── RequirementsOfProject.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🖼️ Screenshots

### 📋 Dashboard View

![image](https://github.com/user-attachments/assets/f1ab0731-5b14-4072-b7a0-0b864d2190b8)

### 📊 Summary View – Pie Chart

![image](https://github.com/user-attachments/assets/33bdf7f8-0378-4b5f-924b-0b5e883a9ad4)

### 📈 Summary View – Bar Chart

![image](https://github.com/user-attachments/assets/d18120c1-3405-4591-9063-da6429b3d8d2)

### 📱 Mobile Dashboard Responsive View

![image](https://github.com/user-attachments/assets/8cd16937-ddff-4d0e-b67f-b6a298314956)

### 📱 Mobile Summary View – Pie Chart

![image](https://github.com/user-attachments/assets/6fbd3572-65db-467d-85e1-ba4a72e68066)

### 📱 Mobile Summary View – Bar Chart

![image](https://github.com/user-attachments/assets/97189172-afbc-4b77-a166-123e5ed965ca)

---

## 🧪 Required Dependencies

Only the necessary libraries used in this project:

- **react**
- **react-router-dom**
- **chart.js**
- **react-chartjs-2**
- **react-toastify**
- **react-icons**

---

## ▶️ Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Saini-Yogesh/Expense-Tracker-frontend.git
cd Expense-Tracker-frontend

# 2. Install dependencies
npm install

# 3. Create .env file
touch .env
```

### 🔑 .env File Example

```env
REACT_APP_BASE_URL=http://localhost:5000/api
```

> Replace the base URL with your deployed backend URL if hosting.

```bash
# 4. Start the development server
npm start
```

---

## 🧠 Developer Notes

- Authentication is handled via Context API.
- The dashboard supports pagination and CRUD operations.
- Summary view is visualized using Chart.js (pie/bar) based on toggle selection.
- Code is modular, readable, and extendable.

---

## 📄 License

This is a **personal project** developed for learning and portfolio purposes.  
Feel free to fork, explore, or contribute!
