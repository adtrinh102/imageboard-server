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

router.put('/image/:id', (req, res, next) => {
    Image.findByPk(req.params.id)
        .then(image => image.update(req.body))
        .then(image => res.json(image))
        .catch(next)
})

router.delete('/image/:id', (req, res, next) => {
    Image.destroy({ where: { id: req.params.id } })
        .then(numDeleted => {
            if (numDeleted) {
                res.status(204).end()
                res.send(numDeleted)
            }
            else {
                return res.status(404).end()
            }
        })
        .catch(next)
})

module.exports = router 