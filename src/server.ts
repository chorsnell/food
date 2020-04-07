// Must be at top
import 'reflect-metadata';

import app from "./app";
import {createConnection} from "typeorm";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

    // start server
    const server = app.listen(app.get("port"), () => {
        console.log("running at http://localhost:%d in %s mode",
            app.get("port"),
            app.get("env")
        );
    });

}).catch(error => console.log("Error: ", error));