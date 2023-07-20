//Dependencies
const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')
const {userManager} = require('./Helpers/tempDB')
require('dotenv').config();

//Setup
const WebWhatsappProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')
const QRPortal = require('@bot-whatsapp/portal')
global.myUsers = new userManager('./myUsers.json');

//Principal Flows
const { principalFlow, getUserFlow, deleteFirstUserFlow, menuFLow} = require('./Flows/principalFlow')


//Main function
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([principalFlow, getUserFlow, deleteFirstUserFlow, menuFLow])
    const adapterProvider = createProvider(WebWhatsappProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}

QRPortal()

main()
