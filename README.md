# 🧾 Inventory Management System

A simple inventory management system built with the **PERN stack** (PostgreSQL, Express, React, Node.js) that allows users to manage products, categories, and stock levels.

---

## 🚀 Features

- Add, update, and delete products
- Manage inventory by category
- PostgreSQL as the database
- RESTful API using Express
- Styled with Tailwind CSS and React
- Responsive UI
- Environment configuration via `.env`

---

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Other**: Axios, Lucide-react, dotenv

---

## 📁 Project Structure
inventory-system/
├── backend/
│ ├── db/
│ ├── routes/
│ ├── controllers/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── App.js
│ │ └── index.js
│ └── .env (optional)
└── README.md


---

## ⚙️ Requirements

- Node.js (v18 or later)
- npm or yarn
- PostgreSQL (v13 or later)

---

## 📦 How to Run Locally

### 1️⃣ Clone the repository


git clone https://github.com/your-username/inventory-system.git
cd inventory-system

### 2️⃣ Configure PostgreSQL
Open pgAdmin or your preferred PostgreSQL tool.
Create a new database (e.g. inventory_db).
Run the following SQL to create a basic items table:
Copy code
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  category VARCHAR(100),
  quantity INT
);

### 3️⃣ Set up backend

cd backend
npm install


Create a .env file in /backend and add:

PORT=5000
PG_HOST=localhost
PG_PORT=5432
PG_USER=your_pg_user
PG_PASSWORD=your_pg_password
PG_DATABASE=inventory_db


🔐 You can change these according to your PostgreSQL settings.

Run the server:
npm start
Backend will run at http://localhost:5000

### 4️⃣ Set up frontend
Open a new terminal and run:

cd frontend
npm install


Optional: Create a .env file in /frontend and add:
REACT_APP_API_URL=http://localhost:5000
If omitted, it defaults to http://localhost:5000

Run the frontend:
npm start
Frontend will run at http://localhost:3000

🧪 API Endpoints (Sample)
Method	Endpoint	Description
GET	/items	Get all items
POST	/items	Add a new item
PUT	/items/:id	Update an item
DELETE	/items/:id	Delete an item
