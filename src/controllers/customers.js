const CustomersModel = require('../models/customers')
const { crypto } = require('../helpers/password')

async function add(req, res) {
  const {
    name,
    age,
    email,
    password,
  } = req.body

  const passwordCrypto = await crypto(password)

  const register = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto,
  })

  register.save()
  res.send('cadastro realizado!')
}

module.exports = {
  add
}