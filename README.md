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
