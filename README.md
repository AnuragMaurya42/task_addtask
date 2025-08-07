<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/73a12c86-50dc-4157-bda2-d00e690be2ae" />


# 📝 MERN Stack Task Manager

A full-stack task management application built with **MongoDB**, **Express**, **React**, and **Node.js**.  
The application allows users to **create**, **view**, **update**, and **delete** tasks through a clean and responsive user interface.

---

## 🚀 Tech Stack

**Frontend:** React, Vite, Axios  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (with Mongoose)  
**Styling:** Custom CSS

---

## ✨ Features

- ✅ **Full CRUD Functionality:** Create, Read, Update, and Delete tasks  
- 🔁 **Status Management:** Cycle task status from `pending` → `in-progress` → `completed`  
- 🌐 **RESTful API:** Well-structured backend API for managing tasks  
- 📱 **Responsive UI:** Works well on different screen sizes  
- ⚠️ **Error Handling:** Implemented on both client and server  

---

## ⚙️ Getting Started

### ✅ Prerequisites

- Node.js (v18 or higher recommended)  
- npm or yarn  
- MongoDB (local instance or MongoDB Atlas)  

---

## 🛠️ Installation & Setup

This is a **monorepo** with separate `frontend` and `backend` directories. You will need to run setup commands in both.

### 1. Clone the repository

```bash
git clone <your-repository-link>
cd <your-project-folder>
```

### 2. Setup the Backend

```bash
cd backend

# Install backend dependencies
npm install

# Create a .env file
touch .env
```

#### Example `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3. Setup the Frontend

```bash
cd ../frontend

# Install frontend dependencies
npm install
```

---

## ▶️ Running the Application

Open **two terminals**:

### Terminal 1 - Start Backend

```bash
cd backend
npm run dev
```


## 📡 API Endpoints

All endpoints are prefixed with: `/api/tasks`

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| GET    | `/`              | Get all tasks                |
| POST   | `/`              | Create a new task            |
| PUT    | `/:id/status`    | Update a task's status       |
| DELETE | `/:id`           | Delete a task by its ID      |

---

## 📸 Screenshots

<!-- Add screenshot image tags here -->
> You can add images like:  
> `![Screenshot](./screenshots/homepage.png)`

---

