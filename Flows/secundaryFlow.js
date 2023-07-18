const { addKeyword } = require('@bot-whatsapp/bot')

const serviciosFlow = addKeyword(['servicios', '1'])
    .addAnswer(['*Esto son algunos de los servicios que ofrecemos: 😎😎*',
                 '➡️ Mantenimiento de tu equipo de computo.',
                 '➡️ Cotizacion y compra de partes y nuevos equipos',
                 '➡️ Arreglo de portatiles, computadores, etc',
                 '➡️ descarga de diferentes software de ofimatica',
                ])
    .addAnswer( 'Pero tambien podemos acesorate en demas cosas, solo tienes que llamarnos....' )

const llamarFlow = addKeyword(['Llamame', '2'])
    .addAnswer(['En los mas breve posbile posible te llamaremos 😎😎',
                 '➡️ Si deseas que te llamemos a otro numero, escribelo por aqui: ',
                ])
const ayudaFlow = addKeyword(['Ayuda', '3'])
                .addAnswer(['En los mas breve posbile posible te atenderemos por este chat 😎😎'])
            
module.exports = { serviciosFlow, llamarFlow , ayudaFlow}