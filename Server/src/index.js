const express = require("express");
const morgan = require("morgan");
const server = express();
const PORT = 3001;
const router = require("./routes/index");

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});
server.use(express.json());
server.use(morgan("dev"));

server.use("/rickandmorty", router);

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});

/* http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { url } = req;

  if (url.includes("/rickandmorty/character")) {
    const id = Number(url.split("/").pop());
    getCharById(res, id);
  }
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("Route not found");
  }
}).listen(PORT, "127.0.0.1"); */