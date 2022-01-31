const router = require('express').Router()
const CustomersController = require('../controllers/customers')

//rotas
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Título teste'
  })
})

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Cadastro de Clientes'
  })
})

router.post('/register/add', CustomersController.add)

module.exports = router