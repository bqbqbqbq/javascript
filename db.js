const mongodb = require('mongodb')

const connectionString = 'mongo "mongodb+srv://cluster0.1egfu.mongodb.net/ComplexApp?rewrite=true'

mongodb.connect(connectionString, {userNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})