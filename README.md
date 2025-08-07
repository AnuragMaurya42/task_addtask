# Task Management App (MERN Stack)

#Image
<img width="960" height="902" alt="image" src="https://github.com/user-attachments/assets/b1ab6afa-c521-41cb-be51-4a07ccace406" />



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
