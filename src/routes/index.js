const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const IndexController = require('../controllers/index')

//index(principal)
router.get('/', IndexController.index)

//register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

//lister
router.get('/list', CustomersController.list)

//edit
router.get('/edit', CustomersController.formEdit)
router.post('/edit/:id', CustomersController.edit)

module.exports = router