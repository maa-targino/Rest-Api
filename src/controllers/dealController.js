require('dotenv')
const Deal = require('../models/Deal')
// const request = require('request')
const axios = require('axios')
const PIPE_URL = process.env.PIPE_URL
const PIPE_TOKEN = process.env.PIPE_TOKEN

class dealController {

    //IT VERIFIES IF THE API IS RUNNING
    async status(_, res){
        try {
            res.status(200).send('API running successfully.')

        } catch (error) {
            res.status(503).json(error)
        }
    }

    async postNewDealPipedrive(){

    }

    // SALVA UM POST REQUEST DE UM DEAL EM JSON NO DATABASE
    async savePostMongoDb(req, res){

        const deal = new Deal(req.body)
        try{
            const dealSaved = await deal.save()
                return res.status(201).json(dealSaved)
        }
        catch(error){
            return res.status(400).res.json({message:"Registration failed"})
        }
    }

    // IT RETURNS A JSON WITH ALL WON DEALS
    async getAllDealsWon(_, res){
        try {
            const response = await axios.get(`${PIPE_URL}?status=Won&api_token=${PIPE_TOKEN}`)
            const deals = res.json(response.data)
            return deals
        }
        catch (err) {
            console.log(err)
        }
    }

}

module.exports = new dealController()


/** 

try {
    const response = await axios.get(`${PIPE_URL}status=Won&api_token=${PIPE_TOKEN}`)
    console.log(response.data.body.status)
}
catch (err) {
    console.log(err)
}


// AXIOS GET REQUEST //

const data = ''
    const config = {
    method: 'get',
    url: `${PIPE_URL}?api_token=${PIPE_TOKEN}`,
    headers: { },
    data : data
    }

    axios(config)
    .then(function (response) {
    res.json(response.data)
    })
    .catch(function (error) {
    console.log(error)
})


// AXIOS POST REQUEST //

axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

// AXIOS GET ASYNC AWAIT TRY-CATCH //

try {
    const response = await axios.get(`${PIPE_URL}?api_token=${PIPE_TOKEN}`)
    const deals = res.json(response.data)
    return deals
}
catch (err) {
    console.log(err)
}



try {
    let response = await axios.get(`${PIPE_URL}?api_token=${PIPE_TOKEN}`)
    let deals = res.json(response.data.body.status)
    return deals
}
catch (err) {
    console.log(err)
}

// GET REQUEST WITH NODE-REQUEST //

try {
    await request(`${PIPE_URL}${PIPE_TOKEN}`, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var allDealsPipedrive = res.status(200).json(body)
            return allDealsPipedrive
        }
    })

} catch (error) {
        return res.status(400).json({"Error":error})
}



    try {
        const response = await axios.get(`https://kapi.pipedrive.com/api/v1/deals?api_token=${PIPE_TOKEN}`, 
        {params: {deal: deal.body}}
        ) 
        return res.status(200).json(response)
    } 
    catch (error) {
        return res.status(400).json({"message":error})
    }



// GET ALL DEALS //

curl --location --request GET `http://localhost:${PORT}/V1/deals` \
--data-raw ''


// GET ALL DEALS WON //

curl --location --request GET `http://localhost:${PORT}/V1/deals/won` \
--data-raw ''


// GET ORDERS //

curl --location --request GET `http://localhost:${PORT}/V1/orders`


// POST ORDERS //

curl --location --request POST `http://localhost:${PORT}/V1/orders`



// AUTENTICAÇÃO //

async authenticate(req, res){

    const deal = Deal(req.body)

    const deal = await Deal.findOne({id}).select()

    if(!deal)
    return res.status(400).send({"Error":"Not found"})
}



// POST REQUEST NO HUBSPOT: //

var request = require("request");

var options = { method: 'POST',
  url: 'https://api.hubapi.com/contacts/v1/contact/createOrUpdate/email/testingapis@hubspot.com/',
  qs: { hapikey: 'demo' },
  headers: 
   {  'Content-Type': 'application/json' },
  body: 
   { properties: 
      [ { property: 'firstname', value: 'HubSpot' },
        { property: 'lastname', value: 'Test' },
        { property: 'website', value: 'http://hubspot.com' },
        { property: 'company', value: 'HubSpot' },
        { property: 'phone', value: '555-122-2323' },
        { property: 'address', value: '25 First Street' },
        { property: 'city', value: 'Cambridge' },
        { property: 'state', value: 'MA' },
        { property: 'zip', value: '02139' } ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});


// POST REQUEST NO PIPEDRIVE COM AXIOS: //

axios.post('https://api.pipedrive.com/v1', 
    { 
        org_id: 0,
        stage_id: 0,
        status: 'won',
        exprected_close_date: Date(),
        probability: 0,
        lost_reason: '',
        visible_to: 'me',
        add_time: 'today'
    },
    { Authorization: token }
)




// POST REQUEST NO BLING: //

curl -X POST "https://bling.com.br/Api/v2/pedido/json/"
     -d "apikey={apikey}"
     -d "xml={xml_do_pedido}" 



// CONVERSOR: //

async jsonToXml(){
    return (
        `<?xml version="1.0" encoding="UTF-8"?>
            <pedido>
                <cliente>
                    <id>${body.id}</id>
                    <nome>${body.person_name}</nome>
                </cliente>
                <itens>
                    <item>
                        <codigo>${body.user_id}</codigo>
                        <descricao>${body.status}</descricao>
                        <qtde>1</qtde>
                        <vlr_unit>${body.value}</vlr_unit>
                    </item>
                </itens>
            </pedido>`
    )
}







        
*/
