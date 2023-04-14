const PostController = require('../controllers/postit.controller')
const {authenticate} = require('../config/jwt.config')

module.exports = (app) => {
    app.post("/api/posts/create-post", authenticate, PostController.createPost)
    app.get("/api/posts/view-all-posts",authenticate, PostController.getAllPosts)
    app.get("/api/posts/:username/get-all", authenticate, PostController.findAllPostsByUser)
    app.get("/api/posts/view/:id",authenticate, PostController.getOnePost)
    app.put("/api/posts/update/:id", authenticate,PostController.updatePost)
    app.delete("/api/posts/delete/:id",authenticate, PostController.deletePost)
}

