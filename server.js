const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.get('*', (request, response) => {
        return handle(request, response);
    })

    server.listen(port, error => {
        if (error) {
            throw error;
        }
        console.log(`Listening on port ${port}`);
    })
})