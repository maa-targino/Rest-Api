const Deal = require('./model')

class Controller {

    async home(req, res) {
        res.send('Home page')
    }

    async status(req, res){
        try {
            res.status(200).json({"Status":"API running successfully"})

        } catch (error) {
            console.log(error)
            res.status(503)
            res.json({"Error":"Service unavailable."})
        }
    }

    async dealPost(req, res){

        const deal = new Deal({
            price: req.body.price,
            quantity: req.body.quantity,
            amount: req.body.amount
        })
        try{
            const saved = await deal.save()
                res.json(saved)
        }
        catch(error){
            res.json({"message": "error"})
        }
    }

    async dealGet(req, res){

    }
}

module.exports = new Controller()