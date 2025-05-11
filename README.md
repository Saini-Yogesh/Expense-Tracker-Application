# 💰 **Expense Tracker Application**

This is a **full-stack** Expense Tracker application built using **React.js** for the frontend, **Node.js** and **Express** for the backend, and **MongoDB** for data storage. The application allows users to manage and track their expenses, visualize their spending, and perform CRUD operations securely.

![image](https://github.com/user-attachments/assets/4c11a317-9c7a-49df-8586-2f5d3b6193ae)

---

## 🌟 **Features**

### **Frontend Features**:
- 🔐 **User Authentication** (Login/Register to access the app)
- ➕ **Add/Edit/Delete Expenses**
- 📄 **Pagination** for better data handling in the dashboard
- 🗂️ **Category Filter** for easy browsing of expenses (e.g., Food, Rent, Transport)
- 📊 **Summary Page with Toggle** between Pie and Bar charts for expense visualization
- 📅 **Date Range Filters**:
  - Last 7 Days
  - Last 30 Days
  - This Month
  - This Year
  - Last Year
  - All Time
  - Custom Range
- 🧭 **Navbar**:
  - About Us (Developer Info)
  - Summary
  - Dashboard
  - Logout
  - Personalized Greeting (e.g., Hi, John)
- 🎨 **Clean, responsive UI** with validation and meaningful feedback
- 🚨 **Global error handling** with Toast notifications
- 🔐 **Protected Routes** (only accessible after login)

### **Backend Features**:
- 🔒 **User Authentication** with JWT-based login and registration
- 🗃️ **CRUD operations** for managing expenses
- 🌐 **Protected Routes** (only accessible after login)
- 🧑‍💻 **JWT Authentication** middleware for secure API access
- 🛠️ **Environment Variables** for configuration (MongoDB URI, JWT Secret)

---

## 🧾 **Expense Categories**

Expense categories available for filtering and summary breakdown:
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

## 🗂️ **Project Structure**

```
Expense-Tracker-Application/
│
├── backend/ 
│ ├── config/ 
│ ├── controllers/ 
│ ├── middleware/ 
│ ├── models/ 
│ ├── routes/ 
│ ├── .env 
│ ├── index.js 
│ ├── package.json
│ └── README.md # Backend-specific README
│
├── frontend/ 
│ ├── public/ 
│ ├── src/ 
│ ├── .env 
│ ├── package.json 
│ ├── README.md # Frontend-specific README
│ └── index.js 
│
└── README.md # Main README for the full-stack application

```



## 🌐 **API Endpoints**

### **Auth Routes** (Backend)
| Method | Endpoint    | Description            |
|--------|-------------|------------------------|
| POST   | `/register` | Register a new user    |
| POST   | `/login`    | Login user & get token |
| GET    | `/me`       | Get logged-in user     |

> Requires JWT token in `Authorization` header for `/me` route.

### **Expense Routes** (Backend)
| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| POST   | `/api/expenses/` | Add a new expense        |
| GET    | `/api/expenses/` | Get all expenses         |
| PUT    | `/api/expenses/:id` | Update an expense by ID |
| DELETE | `/api/expenses/:id` | Delete an expense by ID |

---

## 🔐 **Environment Variables**

Create a `.env` file in both **frontend** and **backend** directories:

### **Backend .env**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
### **Frontend .env**

```env
REACT_APP_BASE_URL=http://localhost:5000/api
```

> Replace the base URL with your deployed backend URL if hosting.

## ▶️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Saini-Yogesh/Expense-Tracker-Application.git
cd Expense-Tracker-Application
```

### 2.🛠️ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install
```

### 📦 Backend `.env` file

Create a `.env` file inside the `backend/` folder and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```


### ▶️ Start the Backend Server

Run the following command to start the backend server:

```bash
nodemon start
```

### 3.💻 Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### 📦 Frontend `.env` file

Create a `.env` file inside the `frontend/` folder and add the following:

```bash
REACT_APP_BASE_URL=http://localhost:5000/api
```

### ▶️ Start the Frontend Server

Run the following command to start the backend server:

```bash
npm start
```

## 📦 Dependencies

### 🔙 Backend

- express  
- mongoose  
- jsonwebtoken  
- bcryptjs  
- dotenv  

### 🔜 Frontend

- react  
- react-router-dom  
- chart.js  
- react-chartjs-2  
- react-toastify  
- react-icons  

---


## 🧪 Testing

Use tools like **Postman** or **Thunder Client** to test API endpoints. Don't forget to include the **Bearer Token** in the header for protected routes.

---

## 📄 License

This is a personal project, but feel free to explore, fork, or use the code for learning purposes. Attribution is appreciated.










