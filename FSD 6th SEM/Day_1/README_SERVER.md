# 📁 File System Server API

A RESTful API server for file system operations built with Node.js and Express.

## 🚀 Setup

### 1. Install Dependencies
```bash
npm install express axios
```

### 2. Start the Server
```bash
node server.js
```

Or with auto-reload (requires nodemon):
```bash
npm install -g nodemon
npm run dev
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000
```

### Endpoints

#### 1️⃣ **Create File**
```http
POST /api/files/create
Content-Type: application/json

{
  "filename": "test.txt",
  "content": "File content here"
}
```

#### 2️⃣ **Read File**
```http
GET /api/files/read/:filename
```

#### 3️⃣ **Write/Overwrite File**
```http
POST /api/files/write
Content-Type: application/json

{
  "filename": "test.txt",
  "content": "New content"
}
```

#### 4️⃣ **Append to File**
```http
POST /api/files/append
Content-Type: application/json

{
  "filename": "test.txt",
  "content": "\nAppended content"
}
```

#### 5️⃣ **Delete File**
```http
DELETE /api/files/delete/:filename
```

#### 6️⃣ **Rename File**
```http
PUT /api/files/rename
Content-Type: application/json

{
  "oldname": "old.txt",
  "newname": "new.txt"
}
```

#### 7️⃣ **Move File**
```http
PUT /api/files/move
Content-Type: application/json

{
  "source": "file.txt",
  "destination": "folder/file.txt"
}
```

#### 8️⃣ **Copy File**
```http
POST /api/files/copy
Content-Type: application/json

{
  "source": "original.txt",
  "destination": "copy.txt"
}
```

#### 9️⃣ **Change Permissions**
```http
PUT /api/files/permissions
Content-Type: application/json

{
  "filename": "test.txt",
  "mode": "644"
}
```

#### 🔟 **Check File Exists**
```http
GET /api/files/exists/:filename
```

#### 1️⃣1️⃣ **Get File Info**
```http
GET /api/files/info/:filename
```

#### 1️⃣2️⃣ **List All Files**
```http
GET /api/files/list
```

## 🧪 Testing

### Using the Test Client
```bash
node client-example.js
```

### Using curl
```bash
# Create a file
curl -X POST http://localhost:3000/api/files/create \
  -H "Content-Type: application/json" \
  -d '{"filename":"test.txt","content":"Hello World"}'

# Read a file
curl http://localhost:3000/api/files/read/test.txt

# List files
curl http://localhost:3000/api/files/list
```

### Using PowerShell
```powershell
# Create a file
Invoke-RestMethod -Uri "http://localhost:3000/api/files/create" `
  -Method POST `
  -ContentType "application/json" `
  -Body '{"filename":"test.txt","content":"Hello World"}'

# Read a file
Invoke-RestMethod -Uri "http://localhost:3000/api/files/read/test.txt"

# List files
Invoke-RestMethod -Uri "http://localhost:3000/api/files/list"
```

## 📁 File Storage

All files are stored in the `files` directory relative to the server location.

## 🔒 Security Note

This is a demo server. In production:
- Add authentication
- Implement file size limits
- Validate file paths
- Use HTTPS
- Add rate limiting
- Sanitize inputs

## 📝 Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {...}
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

## 🛠️ Built With

- **Node.js** - Runtime
- **Express** - Web framework
- **fs** - File system operations

## 📄 License

ISC
