import http from 'http';
import moment from 'moment';
const port = 4000;

const hostname = '127.0.0.1';
const server = http.createServer((req, res, next) => {
	res.statusCode = 200;

	res.setHeader('Content-Type', 'text/plain');

	res.end('Hello World');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});
