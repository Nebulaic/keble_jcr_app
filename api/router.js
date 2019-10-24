import express from 'express'
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send({message: 'Get success!'})
    })
    .put((req, res) => {
        res.send({message: 'Put success!'})
    })

export default router