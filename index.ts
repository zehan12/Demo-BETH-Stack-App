import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

const app = new Elysia()
  .use(html())
  .get("/", ({ html }) => html(HTML))
  .listen(8080);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
console.log("Hello via Bun!");

const HTML = `<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>🦊</title>
    </head>
    <body>
        <h1>Hello Elysia </h1>
    </body>
</html>`;
