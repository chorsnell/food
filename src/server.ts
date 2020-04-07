// Must be at top
import 'reflect-metadata';

import app from "./app";


import {createConnection} from "typeorm";
import {Post} from "./entity/Post";
import {Category} from "./entity/Category";

// connection settings are in the "ormconfig.json" file
createConnection().then(async connection => {

/*     const category1 = new Category();
    category1.name = "TypeScript";
    await connection.manager.save(category1);

    const category2 = new Category();
    category2.name = "Programming";
    await connection.manager.save(category2);

    const post = new Post();
    post.title = "Control flow based type analysis";
    post.text = `TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.`;
    post.categories = [category1, category2];

    await connection.manager.save(post);

    console.log("Post has been saved: ", post); */

    let postRepository = connection.getRepository(Post);
    let savedPosts = await postRepository.find();
    console.log("All posts from the db: ", savedPosts);

}).catch(error => console.log("Error: ", error));

// start server
const server = app.listen(app.get("port"), () => {
    console.log("running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
});

export default server;