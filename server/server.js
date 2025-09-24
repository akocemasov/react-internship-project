require('dotenv').config()
const express = require('express')
const cors = require('cors')
const dbConfig = require('./app/config/db.config')
const db = require('./app/models')
const {
    createRolesTable,
    createLogosTable,
    createContactsTable,
    createPartnersTable,
    createNavlistTable,
    createTopsliderTable,
    createProductsTable,
    createFooterTable,
} = require('./app/createBaseCollections')

const app = express()

let corsOptions = {
    origin: 'http://localhost:3000', // allow fetching information from another origin domain
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.mongoose.set('strictQuery', false);
db.mongoose
    .connect(
        `mongodb+srv://${dbConfig.HOST}:${dbConfig.PASSW}@cluster0.t6ksxtp.mongodb.net/${dbConfig.DBNAME}?retryWrites=true&w=majority&appName=Cluster0`,
    )
    .then(() => {
        console.log('Successfully connect to MongoDB.')
        initial()
    })
    .catch((err) => {
        console.error('Connection error', err)
        process.exit()
    })

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Andys-clone application.' })
})

// routes
require('./app/routes/auth.routes')(app)
require('./app/routes/user.routes')(app)
require('./app/routes/logo.routes')(app)
require('./app/routes/contacts.routes')(app)
require('./app/routes/partners.routes')(app)
require('./app/routes/navlist.routes')(app)
require('./app/routes/topslider.routes')(app)
require('./app/routes/products.routes')(app)
require('./app/routes/footer.routes')(app)
require('./app/routes/cart.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})

function initial() {
    createRolesTable()
    createLogosTable()
    createContactsTable()
    createPartnersTable()
    createNavlistTable()
    createTopsliderTable()
    createProductsTable()
    createFooterTable()
}
