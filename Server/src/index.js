var fs = require("fs");
var http = require("http");
const PORT = 3001;
var characters = require("./utils/data.js");

http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`);
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  const { url } = req;

  if (url.includes("/rickandmorty/character")) {
    const lastSlashIndex = url.lastIndexOf('/');
    let id = Number(url.slice(lastSlashIndex + 1));
    let myChar = characters.filter((char) => char.id === id);
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(myChar));
  };

  res.writeHead(404, { "Content-Type": "text/plain" });
  return res.end("Route not found");

}).listen(PORT, "localhost");