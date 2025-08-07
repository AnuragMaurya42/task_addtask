# Task Management App (MERN Stack)

#Image
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/bd5eb4a1-2fc1-454d-a309-38f3126a1b45" />



This is a full-stack task management application built using **React.js**, **Node.js**, **Express.js**, and **MongoDB**.

## 🔧 Project Structure


## 📦 Features

### Backend:
- REST API with the following endpoints:
  - `POST /api/tasks` - Create a task
  - `GET /api/tasks` - Get all tasks
  - `PUT /api/tasks/:id` - Update task status
  - `DELETE /api/tasks/:id` - Delete task
- MongoDB schema with:
  - `title` (required)
  - `description` (optional)
  - `status` (default: "pending")
  - `createdAt`
- CORS and error handling configured

### Frontend:
- Add Task form with validation
- Task list with status and delete buttons
- Status cycling: pending → in-progress → completed
- Clean UI using basic CSS (no Tailwind)


cd Anurag_assignment/backend
npm install
# Create .env file with:
# MONGO_URI = your MongoDB connection string
# PORT = 5000
npm run server



frontend
npm install
npm run dev
