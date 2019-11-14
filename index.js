require("dotenv").config();

console.log(process.env.MSG);

const server = require("./server");

const port = process.env.PORT;

server.listen(port, () => console.log(`server listening on port ${port}`));
