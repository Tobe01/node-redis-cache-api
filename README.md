# Node.js REST API with Redis Caching

A simple REST API built with **Node.js**, **Express**, and **Redis** to demonstrate how caching can improve API performance.

---

## 🚀 Live Demo
Coming soon (can be deployed on Render for backend)

---

## 📂 Project Structure
```bash
node-redis-cache-api/
│ package.json
│ server.js
│ README.md
└── routes/
└── users.js
```
## 📌 Features
- Fetch user by ID
- Responses cached with Redis for 30 seconds
- Clear JSON response format
- Demonstrates performance optimization with caching

---

## 🛠 Installation & Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/tobe01/node-redis-cache-api.git
   cd node-redis-cache-api
   ```
## Install dependencies:
```bash
npm install
```

## Start Redis server (required):

Install Redis (https://redis.io/docs/getting-started/)

Run redis-server in a separate terminal

## Start the API server:
```bash
node server.js
```
API runs at http://localhost:3000

## 📡 API Endpoints
Method	        Endpoint	            Description
GET	            /users/1	            Fetch user by ID (cached)

## 🧪 Testing the API
First request → Fetches from DB

Second request → Fetches from Redis cache (faster)

## 📄 License
MIT License

## ✍ Author
*Tobechi Duru*
*GitHub: @Tobe01*
*Hashnode: [https://hashnode.com/@tobechiduru*
*LinkedIn: [https://linkedin.com/in/tobechiduru]*

