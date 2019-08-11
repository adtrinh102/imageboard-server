const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')
const router = new Router()

router.post('/user', (req, res, next) => {
    const user = {
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    }

    User.create(user)
        .then(userAccount => res.json(userAccount))
        .catch(next)
})

router.get('/user', (req, res, next) => {
    User.findAll()
        .then(users => res.json(users))
        .catch(next)
})

router.get('/user/:id/', (req, res, next) => {
    User
        .findByPk(req.params.id)
        .then(user => res.json(user))
        .catch(next)
})

router.put('/user/:id', (req, res, next) => {
    User.findByPk(req.params.id)
        .then(user => user.update(req.body))
        .then(user => res.json(user))
        .catch(next)
})

router.delete('/user/:id', (req, res, next) => {
    User.destroy({ where: { id: req.params.id } })
        .then(numDeleted => {
            if (numDeleted) {
                return res.status(204).end()
            }
            else {
                return res.status(404).end()
            }
        })
        .catch(next)
})

module.exports = router