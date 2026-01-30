const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static HTML interface
app.use(express.static(__dirname));

// Base directory for file operations (for security)
const BASE_DIR = path.join(__dirname, 'files');

// Ensure base directory exists
if (!fs.existsSync(BASE_DIR)) {
    fs.mkdirSync(BASE_DIR, { recursive: true });
}

// Helper function to get safe file path
function getSafePath(filePath) {
    return path.join(BASE_DIR, filePath);
}

// ========================
// 1. READ FILE
// ========================
app.get('/api/files/read/:filename', (req, res) => {
    try {
        const filePath = getSafePath(req.params.filename);
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'File not found' 
            });
        }
        
        const data = fs.readFileSync(filePath, 'utf8');
        res.json({ 
            success: true, 
            filename: req.params.filename,
            content: data 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 2. WRITE/CREATE FILE
// ========================
app.post('/api/files/write', (req, res) => {
    try {
        const { filename, content } = req.body;
        
        if (!filename) {
            return res.status(400).json({ 
                success: false, 
                message: 'Filename is required' 
            });
        }
        
        const filePath = getSafePath(filename);
        fs.writeFileSync(filePath, content || '', 'utf8');
        
        res.json({ 
            success: true, 
            message: 'File written successfully',
            filename: filename
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 3. CREATE FILE (only if doesn't exist)
// ========================
app.post('/api/files/create', (req, res) => {
    try {
        const { filename, content } = req.body;
        
        if (!filename) {
            return res.status(400).json({ 
                success: false, 
                message: 'Filename is required' 
            });
        }
        
        const filePath = getSafePath(filename);
        
        if (fs.existsSync(filePath)) {
            return res.status(409).json({ 
                success: false, 
                message: 'File already exists' 
            });
        }
        
        fs.writeFileSync(filePath, content || '', 'utf8');
        
        res.json({ 
            success: true, 
            message: 'File created successfully',
            filename: filename
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 4. DELETE FILE
// ========================
app.delete('/api/files/delete/:filename', (req, res) => {
    try {
        const filePath = getSafePath(req.params.filename);
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'File not found' 
            });
        }
        
        fs.unlinkSync(filePath);
        
        res.json({ 
            success: true, 
            message: 'File deleted successfully',
            filename: req.params.filename
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 5. APPEND TO FILE
// ========================
app.post('/api/files/append', (req, res) => {
    try {
        const { filename, content } = req.body;
        
        if (!filename) {
            return res.status(400).json({ 
                success: false, 
                message: 'Filename is required' 
            });
        }
        
        const filePath = getSafePath(filename);
        fs.appendFileSync(filePath, content || '', 'utf8');
        
        res.json({ 
            success: true, 
            message: 'Content appended successfully',
            filename: filename
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 6. RENAME FILE
// ========================
app.put('/api/files/rename', (req, res) => {
    try {
        const { oldname, newname } = req.body;
        
        if (!oldname || !newname) {
            return res.status(400).json({ 
                success: false, 
                message: 'Both oldname and newname are required' 
            });
        }
        
        const oldPath = getSafePath(oldname);
        const newPath = getSafePath(newname);
        
        if (!fs.existsSync(oldPath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'File not found' 
            });
        }
        
        fs.renameSync(oldPath, newPath);
        
        res.json({ 
            success: true, 
            message: 'File renamed successfully',
            oldname: oldname,
            newname: newname
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 7. MOVE FILE
// ========================
app.put('/api/files/move', (req, res) => {
    try {
        const { source, destination } = req.body;
        
        if (!source || !destination) {
            return res.status(400).json({ 
                success: false, 
                message: 'Both source and destination are required' 
            });
        }
        
        const sourcePath = getSafePath(source);
        const destPath = getSafePath(destination);
        
        if (!fs.existsSync(sourcePath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'Source file not found' 
            });
        }
        
        // Create destination directory if doesn't exist
        const destDir = path.dirname(destPath);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        
        fs.renameSync(sourcePath, destPath);
        
        res.json({ 
            success: true, 
            message: 'File moved successfully',
            source: source,
            destination: destination
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 8. CHANGE FILE PERMISSIONS
// ========================
app.put('/api/files/permissions', (req, res) => {
    try {
        const { filename, mode } = req.body;
        
        if (!filename || !mode) {
            return res.status(400).json({ 
                success: false, 
                message: 'Filename and mode are required' 
            });
        }
        
        const filePath = getSafePath(filename);
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'File not found' 
            });
        }
        
        // Convert mode to octal if it's a string
        const octalMode = typeof mode === 'string' ? parseInt(mode, 8) : mode;
        fs.chmodSync(filePath, octalMode);
        
        res.json({ 
            success: true, 
            message: 'File permissions changed successfully',
            filename: filename,
            mode: octalMode.toString(8)
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 9. CHECK IF FILE EXISTS
// ========================
app.get('/api/files/exists/:filename', (req, res) => {
    try {
        const filePath = getSafePath(req.params.filename);
        const exists = fs.existsSync(filePath);
        
        res.json({ 
            success: true,
            filename: req.params.filename,
            exists: exists
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 10. GET FILE INFO
// ========================
app.get('/api/files/info/:filename', (req, res) => {
    try {
        const filePath = getSafePath(req.params.filename);
        
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'File not found' 
            });
        }
        
        const stats = fs.statSync(filePath);
        
        res.json({ 
            success: true,
            filename: req.params.filename,
            info: {
                size: stats.size,
                sizeKB: (stats.size / 1024).toFixed(2),
                created: stats.birthtime,
                modified: stats.mtime,
                accessed: stats.atime,
                isDirectory: stats.isDirectory(),
                isFile: stats.isFile(),
                permissions: (stats.mode & parseInt('777', 8)).toString(8)
            }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 11. COPY FILE
// ========================
app.post('/api/files/copy', (req, res) => {
    try {
        const { source, destination } = req.body;
        
        if (!source || !destination) {
            return res.status(400).json({ 
                success: false, 
                message: 'Both source and destination are required' 
            });
        }
        
        const sourcePath = getSafePath(source);
        const destPath = getSafePath(destination);
        
        if (!fs.existsSync(sourcePath)) {
            return res.status(404).json({ 
                success: false, 
                message: 'Source file not found' 
            });
        }
        
        fs.copyFileSync(sourcePath, destPath);
        
        res.json({ 
            success: true, 
            message: 'File copied successfully',
            source: source,
            destination: destination
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// 12. LIST ALL FILES
// ========================
app.get('/api/files/list', (req, res) => {
    try {
        const files = fs.readdirSync(BASE_DIR);
        const fileList = files.map(file => {
            const filePath = path.join(BASE_DIR, file);
            const stats = fs.statSync(filePath);
            return {
                name: file,
                size: stats.size,
                isDirectory: stats.isDirectory(),
                modified: stats.mtime
            };
        });
        
        res.json({ 
            success: true,
            count: fileList.length,
            files: fileList
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

// ========================
// HOME ROUTE - Serves the HTML interface
// ========================
// (No route needed - express.static middleware serves index.html automatically)

// API Documentation endpoint
app.get('/api', (req, res) => {
    res.json({
        message: '📁 File System Server API',
        version: '1.0.0',
        endpoints: {
            'GET /api/files/read/:filename': 'Read file content',
            'POST /api/files/write': 'Write/overwrite file (body: {filename, content})',
            'POST /api/files/create': 'Create new file (body: {filename, content})',
            'DELETE /api/files/delete/:filename': 'Delete file',
            'POST /api/files/append': 'Append to file (body: {filename, content})',
            'PUT /api/files/rename': 'Rename file (body: {oldname, newname})',
            'PUT /api/files/move': 'Move file (body: {source, destination})',
            'PUT /api/files/permissions': 'Change permissions (body: {filename, mode})',
            'GET /api/files/exists/:filename': 'Check if file exists',
            'GET /api/files/info/:filename': 'Get file information',
            'POST /api/files/copy': 'Copy file (body: {source, destination})',
            'GET /api/files/list': 'List all files'
        },
        note: 'All file operations are performed in the "files" directory'
    });
});

// Start server
app.listen(PORT, () => {
    console.log('\n🚀 File System Server started!');
    console.log('=' .repeat(50));
    console.log(`📍 Server running on: http://localhost:${PORT}`);
    console.log(`📁 Files directory: ${BASE_DIR}`);
    console.log('=' .repeat(50));
    console.log('\n✨ Available Endpoints:');
    console.log('   GET    /                          - API Documentation');
    console.log('   GET    /api/files/list            - List all files');
    console.log('   GET    /api/files/read/:filename  - Read file');
    console.log('   POST   /api/files/create          - Create file');
    console.log('   POST   /api/files/write           - Write file');
    console.log('   POST   /api/files/append          - Append to file');
    console.log('   DELETE /api/files/delete/:filename- Delete file');
    console.log('   PUT    /api/files/rename          - Rename file');
    console.log('   PUT    /api/files/move            - Move file');
    console.log('   GET    /api/files/exists/:filename- Check exists');
    console.log('   GET    /api/files/info/:filename  - File info');
    console.log('\n💡 Tip: Visit http://localhost:3000 for full API docs\n');
});