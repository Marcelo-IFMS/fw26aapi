const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.dbconn

module.exports = async (app) => {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    })
    app.DBClient = client
}