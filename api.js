const axios = require('axios');
const API_URL = process.env.API_URL;
 
async function exchangeInfo() {
    const response = await axios.get(API_URL + "/v3/exchangeInfo");
    return response.data.symbols.filter(s => s.status === 'TRADING').map(s => {
        return {
            symbol: s.symbol,
            base: s.baseAsset,
            quote: s.quoteAsset
        }
    });
}
 
module.exports = { exchangeInfo }