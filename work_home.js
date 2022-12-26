/** @format */

const http = require("http");
let todoList = [
    { content: "test1", complete: false },
    { content: "test2", complete: true },
    { content: "test3", complete: false },
    { content: "test4", complete: false },
];

const server = http.createServer((req, res) => {
    const myUrl = new URL("http://127.0.0.1:3000" + req.url);
    if (myUrl.pathname == "/todolist") {
        res.end(JSON.stringify(todoList));
    } else if (myUrl.pathname == "/todo") {
    }
});
server.listen(3000, () => {
    console.log("server running http://127.0.0.1:3000");
});
