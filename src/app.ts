import express from "express";
import cors from "cors";
import path from "path";
// services
import routes from "./services";

// express
const app = express();

// config
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));
app.set("port", process.env.PORT || 3000);
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// loop through app routes
for (const route of routes) {
    const { method, path, handler } = route;
    // add routes to express
    (app as any)[method](path, handler);
}

export default app;