require('dotenv')
const axios = require('axios')
const BLING_URL = process.env.BLING_URL
const BLING_TOKEN = process.env.BLING_TOKEN

class orderController{

    async postOrder(req, res){

        try {
            
            const xml = `
            <?xml version="1.0" encoding="UTF-8"?>
            <pedido>
                <cliente>
                    <nome>"name test"</nome>
                </cliente>
                <transporte>
                    <volumes>
                        <volume>
                            <servico>
                            </servico>
                        </volume>
                    </volumes>
                </transporte>
                <itens>
                    <item>
                        <descricao>description</descricao>
                        <qtde>1</qtde>
                        <vlr_unit>10</vlr_unit>
                    </item>
                </itens>
            </pedido>
            `

            const options = {
                headers: {'Content-Type': 'text/xml'}
            }
                
            await axios.post(`${BLING_URL}?apikey=${BLING_TOKEN}`, xml, options)
            return res.status(201)

        } catch (error) {
            console.log(error)
            return res.status(400).json
        }    
    }
}

module.exports = new orderController()