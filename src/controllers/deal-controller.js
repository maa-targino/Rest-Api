require('dotenv')
const dealSchema = require('../model/deal-schema')
const axios = require('axios')
const PIPE_URL = process.env.PIPE_URL
const PIPE_TOKEN = process.env.PIPE_TOKEN

class dealController {

    //IT VERIFIES IF THE API IS RUNNING
    async status(_, res) {
        try {
            res.status(200).send("<h1>API running successfully.</h1>")

        } catch (error) {
            res.status(503).json(error)
        }
    }

    // IT POSTS A NEW DEAL IN PIPEDRIVE
    async postNewDeal(_, res) {
        
        const options = {
            headers: {'content-type': 'application/json'}
          }

        const deal = {
            "title": "Deal Title",
            "status":"won",
            "value": "84.49",
            "currency": "BRL",
            "add_time": "2021-11-16 09:00:00"
        }

        try {
            
            await axios.post(
                `${PIPE_URL}?api_token=${PIPE_TOKEN}`,
                deal,
                options
              )
            
            return res.status(201).json(deal)

        } catch (error) {
            return res.status(400).json(error)
        }
    }

    // IT SAVES A DEAL IN THE DATABASE
    async saveDealMongoDb(req, res) {

        const deal = new dealSchema(req.body)
        try {
            const dealSaved = await deal.save()
            return res.status(201).json(dealSaved) //It returns the 
        }
        catch(error){
            return res.status(400).json(error)
        }
    }


    // IT RETURNS A JSON WITH ALL DEALS 
    async getAllDeals(_, res) {
        try {
            const response = await axios.get(`${PIPE_URL}?&api_token=${PIPE_TOKEN}`)
            return res.json(response.data)
        }
        catch (error) {
            return res.status(400).json(error)
        }
    }


    // IT RETURNS A JSON WITH ALL WON DEALS
    async getAllDealsWon(_, res) {
        try {
            const response = await axios.get(`${PIPE_URL}?status=Won&api_token=${PIPE_TOKEN}`)
            return res.json(response.data)
        }
        catch (error) {
            return res.status(400).json(error)
        }
    }

}

module.exports = new dealController()