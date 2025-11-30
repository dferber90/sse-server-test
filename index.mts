import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
	const currentTime = new Date().toISOString();

	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end(`hello world\nCurrent time: ${currentTime}`);
});

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
