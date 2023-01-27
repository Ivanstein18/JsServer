const Router = require('express')
const brandRouter = require('./brandRouter')
const deviseRouter = require('./deviseRouter')
const typeRouter = require('./typeRouter')
const userRouter = require('./userRouter')



const router = new Router()


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/devise', deviseRouter)
router.use('/brand', brandRouter)


module.exports = router