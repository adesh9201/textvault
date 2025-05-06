🚀 Build a Secure Text Sharing App Using MERN Stack — TextVault 🛡️



✨ Introduction

Hey everyone! I’m excited to share my latest project — TextVault, a secure, minimal text-sharing platform built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

Unlike typical note apps, TextVault lets users post short messages with password protection and delete them anytime, making it ideal for quick, temporary communication.  


🧩 Tech Stack
•	Frontend: React.js, Tailwind CSS, Axios, React Toastify
•	Backend: Node.js, Express.js, MongoDB
•	Deployment: Render (Backend) & Vercel/Netlify (Frontend)


🔐 Key Features
•	Post text with password-based access
•	Fetch all posts securely
•	Delete posts with a confirmation dialog
•	Beautiful, responsive UI with smooth animations
•	Toast notifications for user feedback


💻 Demo

🔗 https://adeshmishra-textvault.vercel.app/
💾 https://github.com/adesh9201/textvault


⚙️ Backend API Overview (Node + Express)
1. Post Text
POST /api/posts
Body: {
  "text": "Hello world!",
  "password": "secret123"
}
Validates the password, stores the text securely in MongoDB.

2. Get All Posts
GET /api/posts
Returns all posted texts with timestamps.

3. Delete Post
DELETE /api/posts/:id
Deletes the post by ID (secured with a backend check).


🎨 Frontend Overview (React + Tailwind CSS)
•	App.js handles UI logic, fetches, and posts data.
•	React Toastify is used for real-time user feedback.
•	Password modal appears on posting to verify credentials.
•	Posts are shown in a neat clean with delete confirmation.

Sample Component (Post Button)
<button
  className="bg-green-600 text-white px-6 py-2.5 rounded-xl hover:bg-green-700 transition"
  onClick={handlePost}
>
  🚀 Post
</button>


🌍 Deployment Notes
•	Backend deployed using Render
•	Frontend deployed on Vercel
•	.env is used to separate API URLs


🔒 Why Password-Protected Posts?

This adds a basic layer of security without full authentication. Ideal for:
•	Sharing a message with a known group
•	Avoiding spam and unwanted posting
•	Lightweight alternative to logins


📘 What I Learned
•	Structuring MERN stack apps for modularity
•	Handling frontend modal interactions cleanly
•	Giving better user feedback with toast messages
•	Deploying full-stack apps with CI/CD tools


🛠 Future Improvements
•	Full authentication system (JWT or OAuth)
•	Post expiry timer (auto-delete)
•	Edit post feature
•	Markdown support for rich-text formatting


🙌 Final Thoughts

Building TextVault was an incredible learning experience. If you found this helpful or want to collaborate on something, drop a comment or connect with me on GitHub or LinkedIn.

Let’s keep building! 💪


🔗 Connect With Me
•	GitHub: https://github.com/adesh9201
•	LinkedIn: https://www.linkedin.com/in/adesh-mishra-221816297/