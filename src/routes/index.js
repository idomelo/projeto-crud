const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//index(principal)
router.get('/', IndexController.index)

//register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//lister
router.get('/listUsers', CustomersController.listUsers)

module.exports = router