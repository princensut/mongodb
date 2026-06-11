<div style="font-family: 'Poppins', sans-serif;">

# JWT Authentication Web App

A full-stack web application that implements secure JWT (JSON Web Token) authentication with modern frontend notifications and CORS-enabled API communication.

---

## Features

* User Registration & Login
* JWT-based Authentication
* Protected Routes
* Password Hashing & Security
* CORS Configuration for Cross-Origin Requests
* Toast Notifications using Toastify-style Libraries
* Session Persistence with Tokens
* Error Handling & Validation
* Responsive UI

---

## Tech Stack

### Frontend

* HTML5 / CSS3 / JavaScript
* Toastify (or similar notification library)
* Axios / Fetch API

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js
* CORS Middleware

### Database

* MongoDB / MySQL / PostgreSQL *(update according to your project)*

---

## Project Structure

```bash
project-root/
│
├── client/                 # Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/                 # Backend
│   ├── routes/
│   ├── middleware/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   └── server.js
│
├── .env
├── package.json
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 2. Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder and add:

```env
PORT=5000
MONGO_URI=your_database_connection
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:3000
```

---

## Running the Application

### Start Backend Server

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm start
```

---

## Authentication Flow

1. User registers with email and password.
2. Password is hashed using bcrypt.
3. User logs in with valid credentials.
4. Server generates a JWT token.
5. Token is stored on the client side.
6. Protected routes verify JWT before access.
7. Toast notifications display login/logout success or error messages.

---

## CORS Configuration

CORS is enabled to allow secure communication between frontend and backend.

Example:

```javascript
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
```

---

## Toast Notifications

The application uses Toastify-like libraries for clean and responsive notifications.

Example:

```javascript
Toastify({
  text: 'Login Successful!',
  duration: 3000,
  gravity: 'top',
  position: 'right',
  backgroundColor: '#4CAF50'
}).showToast();
```

---

## API Endpoints

### Authentication Routes

| Method | Endpoint      | Description       |
| ------ | ------------- | ----------------- |
| POST   | /api/register | Register new user |
| POST   | /api/login    | Login user        |
| GET    | /api/profile  | Get user profile  |
| POST   | /api/logout   | Logout user       |

---

## Example JWT Middleware

```javascript
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
```

---

## Screenshots

Add screenshots of:

* Login Page
* Register Page
* Dashboard
* Toast Notifications

---

## Security Practices

* Password hashing using bcrypt
* JWT token validation
* Protected API routes
* Environment variables for secrets
* CORS restriction setup

---

## Future Improvements

* Refresh Token Authentication
* Role-Based Access Control
* Email Verification
* OAuth Login (Google/GitHub)
* Rate Limiting & API Security

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Author

Developed by **Prince Kumar**

</div>
