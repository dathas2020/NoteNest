# 📚 NoteNest

> A modern collaborative platform where students can upload, discover, and manage study resources.

![Status](https://img.shields.io/badge/Status-Active%20Development-violet)
![MERN](https://img.shields.io/badge/Stack-MERN-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 🌟 Overview

NoteNest is a full-stack web application built using the **MERN Stack** that helps students share and organize study materials in one place.

Instead of searching through chats or scattered cloud storage, students can upload PDF notes, browse community resources, and maintain their own personal vault.

---

## ✨ Features

### 📚 Community Library

- Browse study resources uploaded by students
- Search by title, subject, or topic
- View PDFs directly in the browser
- Download study resources

---

### 👤 Personal Dashboard

- Personal workspace
- View your uploaded notes
- Edit note information
- Delete notes
- Search within your own uploads

---

### ⬆ Upload Resources

- Upload PDF files
- Add title
- Description
- Subject
- Topic

Automatically extracts:

- Number of pages
- File size
- Upload date

---

### 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes

---

## 🖼 Screens

- Landing Page
- Browse Notes
- Dashboard
- Upload Resource
- Edit Resource

*(Screenshots will be added after deployment.)*

---

# 🛠 Tech Stack

## Frontend

- React
- React Router
- Tailwind CSS
- Axios
- React Hot Toast
- Lucide React

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- PDF-Lib

---

## Database

MongoDB stores:

- User accounts
- Note metadata
- File information
- Ownership
- Timestamps

Uploaded PDFs are stored locally in the `uploads/` directory.

---

# 📂 Project Structure

```
client/
│
├── components/
├── pages/
├── services/
└── App.jsx

server/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
└── server.js
```

---

# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/yourusername/NoteNest.git
```

---

## Backend

```bash
cd server
npm install
npm run dev
```

---

## Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the server.

Example:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📌 Current Status

Current development includes:

- ✅ Authentication
- ✅ CRUD Operations
- ✅ Dashboard
- ✅ Landing Page
- ✅ Browse Notes
- ✅ Download Endpoint
- ✅ PDF Metadata Extraction

The project is currently under active development.

---

# 🛣 Roadmap

### Near Future

- Pagination
- Server-side Search
- Search Filters
- Strong Password Validation
- Email Validation

---

### Future

- Favorites
- Download Analytics
- User Profiles
- Ratings & Reviews
- AI-powered Note Summaries
- OCR Search

---

# 🤝 Contributing

Contributions, suggestions and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Authors

**Nemallipuri Datha Sai**
**Vutukuri Lakshmi Sai Reshmi**

Built as a full-stack portfolio project to demonstrate modern web development using the MERN stack.

If you found this project useful, consider giving it a ⭐ on GitHub.