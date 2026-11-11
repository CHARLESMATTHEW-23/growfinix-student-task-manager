# Growfinix Student Task Manager

A responsive Student Task Manager built using HTML, CSS, JavaScript and Bootstrap as part of the Growfinix Full Stack Web Development Internship.

## Task 1 – Frontend Development

- Responsive dashboard
- Create and manage tasks
- Search tasks
- Mark tasks as completed
- Delete tasks
- Local Storage support

## Task 2 – Backend API Development

### Technologies
- Node.js
- Express.js
- CORS
- REST APIs
- Postman

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/tasks` | Create a task |
| GET | `/api/tasks` | Retrieve all tasks |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |
| GET | `/api/health` | Check server status |

### Run the Backend

```bash
cd backend
npm install
node server.js
```

Backend URL: `http://localhost:5001`

### API Testing

All four CRUD operations were successfully tested using Postman.

**Note:** Task data is currently stored temporarily in a JavaScript array. MongoDB integration will be implemented in Task 3.
## Task 3: MongoDB Database Integration

### Technologies Used
- MongoDB Atlas
- MongoDB Compass
- Mongoose
- Node.js
- Express.js

### Implementation
- Connected the Node.js backend to MongoDB Atlas.
- Created a Task model using Mongoose.
- Stored task information in MongoDB.
- Implemented CRUD operations using database queries.

### API Endpoints Tested

| Method | Endpoint | Operation |
|---|---|---|
| POST | /api/tasks | Create a task |
| GET | /api/tasks | Retrieve all tasks |
| PUT | /api/tasks/:id | Update a task |
| DELETE | /api/tasks/:id | Delete a task |

### Database Verification
Successfully tested Create, Read, Update, and Delete operations using Postman.

Verified that deleted tasks no longer appear in the database.

### How to Run the Backend

1. Open the backend folder.
2. Install dependencies:

   npm install

3. Configure the MongoDB connection string in the .env file.
4. Start the backend:

   node server.js

Backend URL: http://localhost:5001
## Task 4 – Authentication and Smart Features

### Features Implemented

1. **User Registration**
   - Users can register with their name, email, and password.
   - Passwords are securely hashed using bcrypt.

2. **User Login**
   - Users can log in using their email and password.
   - JWT tokens are generated after successful login.

3. **JWT Authentication Middleware**
   - Verifies JWT tokens.
   - Protects task APIs from unauthorized access.

4. **Protected Task APIs**
   - Create tasks.
   - View tasks.
   - Update tasks.
   - Delete tasks.

5. **Smart Search and Filtering**
   - Search tasks by title or description.
   - Filter completed tasks.
   - Filter pending tasks.

### Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- Postman

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register user |
| POST | `/api/auth/login` | Login user |
| POST | `/api/tasks` | Create task |
| GET | `/api/tasks` | Get all tasks |
| PUT | `/api/tasks/:id` | Update task |
| DELETE | `/api/tasks/:id` | Delete task |

### Search and Filter Examples

- `/api/tasks?search=React`
- `/api/tasks?status=completed`
- `/api/tasks?status=pending`
## Task 5 – Testing and Deployment

### 1. Testing with Postman

The application backend APIs were tested using Postman to verify their functionality.

The following operations were tested successfully:

- User Registration
- User Login
- JWT Authentication
- Create a Task
- Get All Tasks
- Update a Task
- Delete a Task
- Search Tasks
- Filter Tasks by Status (Pending and Completed)
- Access protection using JWT tokens

### 2. Bug Fixing and Debugging

- Fixed API routing issues.
- Corrected backend file paths and imports.
- Improved task management API functionality.
- Added JWT authentication middleware.
- Implemented user-specific task access.
- Verified API responses and error handling.

### 3. Database Deployment

- Integrated MongoDB Atlas as the cloud database.
- Connected the backend application to MongoDB Atlas.
- Verified database connectivity and task storage.

### 4. Backend Deployment Using Render

The Node.js and Express backend was successfully deployed using Render.

**Live Backend URL:**

https://growfinix-student-task-manager.onrender.com

**GitHub Repository:**

https://github.com/CHARLESMATTHEW-23/growfinix-student-task-manager

### 5. Version Control Using Git and GitHub

- Uploaded the project source code to GitHub.
- Updated project files and documentation.
- Used Git for version control.
- Enabled automatic deployment through GitHub integration with Render.

### 6. Conclusion

Successfully completed the testing and backend deployment process for the Student Task Management application. The backend APIs were tested using Postman, MongoDB Atlas was integrated, and the backend was deployed successfully on Render.
