// Require the Fastify framework and instantiate it
const fastify = require("fastify")();
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/", (request, reply) => {

  reply
    .code(200)
    .header("Content-Type", "text/HTML; charset=utf-8")
    .send("<h1>Hello from Lab 4!</h1>");
});
// Start server and listen to requests using Fastify
fastify.get("/name", (request, reply) => {
  // /name is what you add to the url for a different route.
const {first,last} = request.query;
  reply
      .code(200)
      .header("Content-Type", "text/HTML; charset=utf-8")
      .send(
        first && last
        ? `<h1> Hello, ${first} ${last}!<h1/>`
        : "<h1> Hello Guest </h1>"
      );
});
//for the query you use a question mark ? ansd then follow it with your code.
//for this example: http://[::1]:8080/name?first=olivia&last=butler
// && is logical 'and' operator for booleans.

const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

// // Require the Fastify framework and instantiate it
// const fastify = require("fastify")();
// // Handle GET verb for / route using Fastify
// // Note use of "chain" dot notation syntax
// fastify.get("/", (request, reply) => {
//   reply
//     .code(200)
//     .header("Content-Type", "text/HTML; charset=utf-8")
//     .send("<h1>Hello from Lab 4!</h1>");
// });
// // Start server and listen to requests using Fastify
// const listenIP = "localhost";
// const listenPort = 8080;
// fastify.listen(listenPort, listenIP, (err, address) => {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }
//   http://127.0.0.1:8080/name?first=Olivia&last=Butler
//   console.log(`Server listening on ${address}`);
// });

//npm install -g nodemon
//http://127.0.0.1:8080