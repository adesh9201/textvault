# 🚀 TextVault — Secure Text Sharing App Using MERN Stack 🛡️

TextVault is a secure, minimal, and beautifully designed text-sharing application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It allows users to post short messages with password protection and delete them anytime. Ideal for quick and temporary communication!

---

## ✨ Features

- ✅ Post text with password-based access
- 🔐 Fetch all posts securely
- 🗑️ Delete posts with confirmation
- 🎨 Responsive UI built with Tailwind CSS
- 🔔 Toast notifications for user feedback

---

## 🧰 Tech Stack

**Frontend**
- React.js
- Tailwind CSS
- Axios
- React Toastify

**Backend**
- Node.js
- Express.js
- MongoDB

**Deployment**
- 🔧 Render (Backend)
- 🌐 Vercel (Frontend)

---

## 💻 Demo

🌍 **Live App**: [TextVault on Vercel](https://adeshmishra-textvault.vercel.app/)  
📂 **Source Code**: [GitHub Repository](https://github.com/adesh9201/textvault)

---

## ⚙️ API Endpoints

### 1. `POST /api/posts` — Create Post

**Request Body:**
```json
{
  "text": "Hello world!",
  "password": "secret123"
}


