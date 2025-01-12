import { createServer } from 'http';
import { readFile } from 'fs';

createServer((req, res) => {
    let filename;
    switch (req.url) {
        case '/':{
            filename = "index.html";
            break;
        }
        case '/contact-me': {
            filename = "contact-me.html";
            break;
        }
        case '/about': {
            filename = "about.html";
            break;
        }
        default:{
            filename = "404.html";
            break;
        }
    }

    readFile(filename, (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);