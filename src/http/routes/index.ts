import type { FastifyInstance } from "fastify"
import { createUsers } from "./controllers/create-users"
import { createPosts } from "./controllers/create-posts"
import { getUsers } from "./controllers/get-users"
import { getPosts } from "./controllers/get-posts"
import { updatePosts } from "./controllers/update-post"
import { updateUsers } from "./controllers/update-users"
import { deleteUsers } from "./controllers/delete-users"
import { deletePosts } from "./controllers/delete-posts"

export function appRoutes(app: FastifyInstance) {
  app.post("/users", createUsers)
  app.post("/post", createPosts)

  app.get("/users", getUsers)
  app.get("/posts", getPosts)

  app.put("/posts/:id", updatePosts)
  app.put("/users/:id", updateUsers)

  app.delete("/users/:id", deleteUsers)
  app.delete("/posts/:id", deletePosts)
}
