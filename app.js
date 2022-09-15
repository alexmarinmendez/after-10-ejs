const express = require('express')
const productsRouter = require('./routes/products')
const app = express()

const server = app.listen(8080, () => console.log('Server Up'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('create-product')
})

app.use('/products', productsRouter)