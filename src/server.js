const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

//definindo template engine
app.set('view engine', 'ejs')
//Define dir da pasta views
app.set('views', path.join(__dirname,'views'))

//Definindo arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))


//Definindo server para receber dados via método post
app.use(express.urlencoded({ extended: true }))


//rotas
app.get('/', routes)

//404 error: not found
app.use((req, res) => { //middleware
  res.send('Página não encontrada')
})


//executando servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log('listening on port ' + port))
