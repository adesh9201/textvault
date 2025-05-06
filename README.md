# 🚀 TextVault — Secure Text Sharing App Using MERN Stack 🛡️


![TextVault Banner](https://github.com/adesh9201/textvault/blob/main/TextVault-frontend/public/text%20vault.png)

## A secure, minimalist text-sharing platform built with the MERN stack

[![Deployed on Vercel](https://github.com/adesh9201/textvault/blob/main/TextVault-frontend/public/favicon.ico)](https://adeshmishra-textvault.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue.svg)](https://github.com/adesh9201/textvault)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📝 Overview

TextVault is a secure platform for sharing temporary text messages with password protection. Unlike traditional note apps, TextVault focuses on simplicity and security for quick, ephemeral communication needs.

**[Live Demo](https://adeshmishra-textvault.vercel.app/)**

## ✨ Key Features

- 🔒 Post text with password protection
- 📋 View all posted messages with timestamps
- 🗑️ Delete posts with confirmation dialog
- 📱 Responsive design that works on all devices
- 🔔 Toast notifications for user feedback
- ⚡ Fast and minimal UI with smooth animations

## 🧰 Technology Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Styling
- **Axios** - API requests
- **React Toastify** - User notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling

### Deployment
- **Render** - Backend hosting
- **Vercel** - Frontend hosting

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local instance or MongoDB Atlas)
- Git

### Installation

1. Clone the repository
```bash
git clone https://github.com/adesh9201/textvault.git
cd textvault
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Configure environment variables
Create a `.env` file in the server directory:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

4. Install frontend dependencies
```bash
cd ../client
npm install
```

5. Configure frontend environment
Create a `.env` file in the client directory:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### Running the Application

1. Start the backend server
```bash
cd server
npm start
```

2. Start the frontend development server
```bash
cd client
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## 📊 API Endpoints

### Post Text
- **URL**: `/api/posts`
- **Method**: `POST`
- **Body**:
  ```json
  {
    "text": "Your message here",
    "password": "your_password"
  }
  ```
- **Response**: Created post object

### Get All Posts
- **URL**: `/api/posts`
- **Method**: `GET`
- **Response**: Array of all posts

### Delete Post
- **URL**: `/api/posts/:id`
- **Method**: `DELETE`
- **Headers**: `password: your_password`
- **Response**: Success message

## 🎨 Project Structure

```
textvault/
├── client/                 # Frontend
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # UI components
│   │   ├── App.js          # Main application component
│   │   ├── index.js        # Entry point
│   │   └── ...
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
```

## 🔒 Security Features

TextVault implements basic security measures:
- Password-protected posts
- Secure password handling
- Input validation and sanitization
- CORS protection

## 🛣️ Roadmap

- [ ] User authentication system (JWT/OAuth)
- [ ] Timed post expiry (auto-delete)
- [ ] Edit functionality for posts
- [ ] Markdown support for rich-text formatting
- [ ] End-to-end encryption
- [ ] Share options (private links)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Acknowledgements

- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📧 Contact

Adesh Mishra - [LinkedIn](https://www.linkedin.com/in/adesh-mishra-221816297/)

Project Link: [https://github.com/adesh9201/textvault](https://github.com/adesh9201/textvault)

---

Made with ❤️ by [Adesh Mishra](https://github.com/adesh9201)