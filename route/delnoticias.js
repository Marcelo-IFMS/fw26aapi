const { ObjectId } = require("mongodb")
module.exports = (app) => {
    app.delete('/delnoticias', async (req, res) => {
        try {
            const id = ObjectId.createFromHexString(req.body._id)
            console.log("aqui"+id)
            await app.DBClient.connect();
            const resultado = await app.DBClient.db('portalnoticias')
                .collection('noticias')
                .deleteOne({ _id: id })
                console.log(resultado)
            res.status(200).json({ status: 1})
        } catch (error) {
            res.status(400).json({ status: 0})
        }
    })
}