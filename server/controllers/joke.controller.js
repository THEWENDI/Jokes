const { Joke } = require("./../models/joke.model")

// get all
module.exports.allJokes = (req, res) => {
    Joke.find()
        .then(jokes => res.json(jokes))// successful response
        .catch(err => res.json(err)) // unsuccessful response
}

// get one
module.exports.oneJoke = (req, res) => {
    const id = req.params.id
    Joke.findOne({ _id: id })
        .then(joke => res.json(joke))
        .catch(err => res.json(err))
}

// create 

// option1
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// option 2
module.exports.createJoke2 = (req, res) => {
    const newJoke = new Joke(req.body)
    newJoke.save()
        .then(response => res.json(response))
        .catch(err => res.json(err))
}


// update - getOne + create
module.exports.updateJoke = (req, res) => {
    const id = req.params.id
    Joke.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))

}

// delete
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}