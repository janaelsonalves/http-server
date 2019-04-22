var http = require("http");

var app = require("./src/app").default;

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.on("error", err => console.log(err.stack));

server.listen(port, () => {
  console.log("Server listening on port ", port);
});
