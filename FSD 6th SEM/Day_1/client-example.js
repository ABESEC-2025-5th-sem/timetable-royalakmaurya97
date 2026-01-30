// Example client code to interact with the File System Server API
// Run this after starting the server with: node server.js

const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api/files';

// Helper function to make requests
async function makeRequest(method, url, data = null) {
    try {
        const config = { method, url: `${BASE_URL}${url}` };
        if (data) config.data = data;
        
        const response = await axios(config);
        console.log('✅ Success:', response.data);
        return response.data;
    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
        throw error;
    }
}

// Main function to demonstrate API usage
async function demonstrateAPI() {
    console.log('\n🚀 File System Server API Client Demo\n');
    console.log('='.repeat(50));

    try {
        // 1. Create a file
        console.log('\n1️⃣  Creating a file...');
        await makeRequest('POST', '/create', {
            filename: 'demo.txt',
            content: 'Hello from API client!\nThis is line 2.'
        });

        // Wait a bit between operations
        await new Promise(resolve => setTimeout(resolve, 500));

        // 2. Read the file
        console.log('\n2️⃣  Reading the file...');
        await makeRequest('GET', '/read/demo.txt');

        // 3. Append to file
        console.log('\n3️⃣  Appending to the file...');
        await makeRequest('POST', '/append', {
            filename: 'demo.txt',
            content: '\nThis line was appended!'
        });

        // 4. Get file info
        console.log('\n4️⃣  Getting file information...');
        await makeRequest('GET', '/info/demo.txt');

        // 5. Copy file
        console.log('\n5️⃣  Copying the file...');
        await makeRequest('POST', '/copy', {
            source: 'demo.txt',
            destination: 'demo_backup.txt'
        });

        // 6. List all files
        console.log('\n6️⃣  Listing all files...');
        await makeRequest('GET', '/list');

        // 7. Rename file
        console.log('\n7️⃣  Renaming the backup file...');
        await makeRequest('PUT', '/rename', {
            oldname: 'demo_backup.txt',
            newname: 'demo_renamed.txt'
        });

        // 8. Check if file exists
        console.log('\n8️⃣  Checking if file exists...');
        await makeRequest('GET', '/exists/demo.txt');

        // 9. Delete files
        console.log('\n9️⃣  Deleting files...');
        await makeRequest('DELETE', '/delete/demo.txt');
        await makeRequest('DELETE', '/delete/demo_renamed.txt');

        console.log('\n✨ Demo completed successfully!\n');
        
    } catch (error) {
        console.error('\n💥 Demo failed:', error.message);
    }
}

// Run the demo
if (require.main === module) {
    demonstrateAPI();
}

// Export functions for use in other modules
module.exports = {
    createFile: (filename, content) => makeRequest('POST', '/create', { filename, content }),
    readFile: (filename) => makeRequest('GET', `/read/${filename}`),
    writeFile: (filename, content) => makeRequest('POST', '/write', { filename, content }),
    appendFile: (filename, content) => makeRequest('POST', '/append', { filename, content }),
    deleteFile: (filename) => makeRequest('DELETE', `/delete/${filename}`),
    renameFile: (oldname, newname) => makeRequest('PUT', '/rename', { oldname, newname }),
    moveFile: (source, destination) => makeRequest('PUT', '/move', { source, destination }),
    copyFile: (source, destination) => makeRequest('POST', '/copy', { source, destination }),
    fileExists: (filename) => makeRequest('GET', `/exists/${filename}`),
    getFileInfo: (filename) => makeRequest('GET', `/info/${filename}`),
    listFiles: () => makeRequest('GET', '/list'),
    changePermissions: (filename, mode) => makeRequest('PUT', '/permissions', { filename, mode })
};
