import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  const [text, setText] = useState('');
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [deleteTargetId, setDeleteTargetId] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  // Removed the useEffect hook that was automatically fetching posts

  const handlePost = () => {
    if (!text.trim()) {
      toast.warning("⚠️ Please enter some text first.");
      return;
    }
    setShowModal(true);
  };

  const handlePasswordSubmit = async () => {
    if (!password) {
      toast.warning("⚠️ Password is required.");
      return;
    }

    try {
      const res = await axios.post('http://localhost:8080/api/posts', {
        text,
        password,
      });

      setText('');
      toast.success("✅ Post created successfully!");
      setShowModal(false);
      
      // Update posts only if data was previously fetched
      if (dataFetched) {
        handleGet();
      }
    } catch (err) {
      if (err.response?.status === 401) {
        toast.error("❌ Incorrect password");
      } else if (err.response?.status === 400) {
        toast.error("❌ Password is required");
      } else {
        toast.error("❌ Failed to post text");
      }
    } finally {
      setPassword('');
    }
  };

  const handleGet = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/posts');
      setPosts(res.data);
      setDataFetched(true);
      toast.info("📋 Posts fetched successfully");
    } catch (err) {
      toast.error("❌ Failed to fetch posts");
    }
  };

  const confirmDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${id}`);
      setPosts(prev => prev.filter(p => p._id !== id));
      toast.success("✅ Post deleted successfully");
    } catch (err) {
      toast.error("❌ Failed to delete post");
    } finally {
      setDeleteTargetId(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-3xl p-8 border border-green-200 transition-all duration-300">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-green-800 tracking-wide">🌿 TextVault</h2>

        <textarea
          rows="5"
          className="w-full border border-green-300 rounded-xl p-4 text-base shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
          placeholder="Type your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex justify-center gap-6 mt-6">
          <button
            className="bg-green-600 text-white px-6 py-2.5 rounded-xl hover:bg-green-700 hover:scale-105 transform transition-all duration-300 shadow-md"
            onClick={handlePost}
          >
            🚀 Post
          </button>
          <button
            className="bg-emerald-500 text-white px-6 py-2.5 rounded-xl hover:bg-emerald-600 hover:scale-105 transform transition-all duration-300 shadow-md"
            onClick={handleGet}
          >
            📥 Fetch
          </button>
        </div>

        {dataFetched && (
          <div className="mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-green-800 border-b-2 border-green-300 pb-2">📄 All Posts:</h3>
            {posts.length > 0 ? (
              <div className="space-y-4">
                {posts.map(post => (
                  <div key={post._id} className="relative group">
                    {deleteTargetId === post._id && (
                      <div className="absolute -top-20 right-0 bg-white border border-red-400 shadow-lg rounded-lg p-3 z-10 w-64">
                        <p className="text-sm text-gray-800 mb-3">Are you sure you want to delete this post?</p>
                        <div className="flex justify-end gap-2">
                          <button
                            className="bg-gray-300 text-sm px-3 py-1 rounded"
                            onClick={() => setDeleteTargetId(null)}
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-red-600 text-white text-sm px-3 py-1 rounded"
                            onClick={() => confirmDelete(post._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="bg-green-50 p-4 rounded-lg shadow hover:shadow-lg border border-green-200 transition relative">
                      <p className="text-gray-800 text-base">{post.text}</p>
                      <small className="text-gray-500 block mt-2">{new Date(post.createdAt).toLocaleString()}</small>
                      <button
                        onClick={() => setDeleteTargetId(post._id)}
                        className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg"
                        title="Delete Post"
                      >
                        ❌
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic text-center">No posts available. Start by posting something.</p>
            )}
          </div>
        )}

        {!dataFetched && (
          <div className="mt-10 text-center p-8 border-2 border-dashed border-green-300 rounded-xl">
            <h3 className="text-xl font-medium text-green-700 mb-2">💡 Click "Fetch" to load posts</h3>
            <p className="text-gray-600">Posts will appear here after you click the fetch button</p>
          </div>
        )}

        {/* Password Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 shadow-xl">
              <h2 className="text-xl font-semibold mb-4 text-green-800">🔒 Enter Password to Post</h2>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded w-full mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your secret password"
                autoFocus
              />
              <div className="flex justify-end gap-2">
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  onClick={handlePasswordSubmit}
                >
                  Submit
                </button>
                <button
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  onClick={() => {
                    setPassword('');
                    setShowModal(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

export default App;