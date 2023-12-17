import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "application/json");

  const jsonResponseBody = JSON.stringify({ location: "Mars" });

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});

/* 
Our HTTP server now sends a JSON response body.
Change the location in the response to "Mars".
Run the server and make a request to it with
curl using the --verbose flag.
What is the value of the Content-Length response header? 
*/

// il valore è 19.
