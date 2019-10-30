import express from 'express'
const router = express.Router();

// Root
router.route('/')
    .get((req, res) => {
        res.send({message: 'Get success!'})
    })
    .put((req, res) => {
        res.send({message: 'Put success!'})
    })

// API
router.route('/api')
    .get()
    .put()
    .post()
    .delete()

export default router