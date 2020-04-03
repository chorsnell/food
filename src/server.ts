import app from "./app";

// start server
const server = app.listen(app.get("port"), () => {
    console.log("running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
});

export default server;