import express from "express";
import path from "path";
// services
import routes from "./services";

// express
const app = express();

// config
app.use(express.static(path.join(__dirname, "public")));
app.set("port", process.env.PORT || 3000);

// loop through app routes
for (const route of routes) {
    const { method, path, handler } = route;
    (app as any)[method](path, handler);
}

export default app;