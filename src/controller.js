const User = require('./model')

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

    async userPost(req, res){

        const user = new User({
            name: req.body.name,
            email: req.body.email
        })
        try{
            const saved = await user.save()
                res.json(saved)
        }
        catch(error){
            res.json({"message": "error"})
        }
    }

    async userGet(req, res){

    }
}

module.exports = new Controller()