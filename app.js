//Dependencies
const { createBot, createProvider, createFlow } = require('@bot-whatsapp/bot')

//Setup
const WebWhatsappProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

//Principal Flows
const { principalFlow } = require('./Flows/principalFlow')


//Main function
const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([principalFlow])
    const adapterProvider = createProvider(WebWhatsappProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
}

main()