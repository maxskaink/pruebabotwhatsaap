const { addKeyword } = require('@bot-whatsapp/bot')
const {isLaboralTime} = require('../Helpers/validations')

const serviciosFlow = addKeyword(['servicios', '1'])
    .addAnswer(['*Esto son algunos de los servicios que ofrecemos: 😎😎*',
                 '➡️ Mantenimiento de tu equipo de computo.',
                 '➡️ Cotizacion y compra de partes y nuevos equipos',
                 '➡️ Arreglo de portatiles, computadores, etc',
                 '➡️ descarga de diferentes software de ofimatica',
                ])
    .addAnswer( 'Pero tambien podemos acesorate en demas cosas, solo tienes que llamarnos....' )

const llamarFlow = addKeyword(['Llamame', '2'])
    .addAnswer(['Estamos trabajando para ayudarte... 😎😎'],
                 null, 
                (ctx, {endFlow} ) => {
                        if(isLaboralTime()) 
                            endFlow({ body: ' Lo sentimos pero en este momento no estamos trabajando, por favor contactanos en nuestro horario habitual'})
                        else {
                            global.myUsers.addUser({
                                nombre: ctx.pushName,
                                contacto: ctx.from,
                                metodoContacto: 'llamada'
                            })
                            endFlow({ body: 'En lo mas pronto posible te estaremos llamando a este numero de whatsaap'})
                        }
                    })

const ayudaFlow = addKeyword(['Ayuda', '3'])
                .addAnswer(['Estamos trabajando para ayudarte 😎😎'],
                null,
                (ctx, {endFlow} ) => {
                    if(isLaboralTime()) 
                        endFlow({ body: ' Lo sentimos pero en este momento no estamos trabajando, por favor contactanos en nuestro horario habitual'})
                    else {
                        global.myUsers.addUser({
                            nombre: ctx.pushName,
                            contacto: ctx.from,
                            metodoContacto: 'Mensaje'
                        })
                        endFlow({ body: 'En lo mas pronto posible te estaremos escribiendo por este chat'})
                    }
                })
            


module.exports = { serviciosFlow, llamarFlow , ayudaFlow}