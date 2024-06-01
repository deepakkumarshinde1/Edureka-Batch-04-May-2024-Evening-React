const express = require("express");
const cors = require("cors");
const server = express();
const graphQLServiceHandler = require("express-graphql");
const schema = require("./schema");

server.use(cors()); //  enables cors policy
// redirect to graphql
server.get("/", (req, response) => {
  response.redirect("/graphql");
});

// basic routing
server.use(
  "/graphql",
  graphQLServiceHandler({
    schema,
    graphiql: true,
  })
);

server.listen(3004, () => {
  console.log("server is running on port 3004");
});
