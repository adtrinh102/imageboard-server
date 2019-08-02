const { Router } = require('express')
const Image = require('./model')
const router = new Router()

router.get('/image', (req, res, next) => {
    Image.findAll()
        .then(images => res.json(images))
        .catch(next)
})

router.post('/image', (req, res, next) => {
    if (!req.body.url || !req.body.title) {
        res.status(403).end()
        res.send("You should put in the url and title")
    }
    Image.create(req.body)
        .then(image => res.json(image))
        .catch(next)
})

module.exports = router 