const JokeController = require('../controllers/joke.controller')

module.exports = app =>{
    app.get("/api/jokes", JokeController.allJokes)
    app.get("/api/jokes/:id", JokeController.oneJoke)
    app.post("/api/jokes", JokeController.createJoke)
    app.put("/api/jokes/:id", JokeController.updateJoke)
    app.delete("/api/jokes/:id", JokeController.deleteJoke)
}