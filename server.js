const http = require('http');
const host = 'http://localhost';
const port = 3000;
const stats = require('./UsageRAM');

http.createServer((req, res) => {
    let url = req.url

    if(url === '/'){
    res.end(JSON.stringify(stats, null, 2))
    }
    
}).listen(port, () => console.log(`Server is running in ${host}:${port}`))