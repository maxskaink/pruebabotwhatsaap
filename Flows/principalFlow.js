const { addKeyword } = require('@bot-whatsapp/bot')
const { serviciosFlow, ayudaFlow, llamarFlow } = require('./secundaryFlow')

const shapesHi = [
    'hola',
    'Menu',
    'menu',
    'Hola',
    'HOLA',
    'Holá',
    'HOLA!',
    '¡Hola!',
    'Holà',
    'hôla',
    'Hóla',
    'hólá',
    'HÒLÃ',
    'HOLA!!',
    'hola 😊',
    'HOLA 😎',
    'Hõlã',
    'Hôlà',
    'HÓLÃ',
    'HËLLO',
    '¡HØLÅ!',
    'Hêllø',
    'HOLA Mundo',
    'H0l4',
    'H~O~L~A',
    'Hooolaaaa',
    'H♥O♥L♥A'
  ]

const principalFlow = addKeyword( shapesHi , {sensitive:true})
    .addAnswer(['Hola, bienvenido a StrangeTech ','🧑‍💻💻😎⏯️'], {
        media: 'https://scontent.fppn1-1.fna.fbcdn.net/v/t39.30808-6/336168138_585016350312800_8585218494486259983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFgXJayMK_FHeZr7b-F8l1czvUm-CCaFynO9Sb4IJoXKRfvXHmsBIIwrnGmVzf52fsxUokWX30cOASec0xXk-OT&_nc_ohc=5S3eKCv-5yUAX-l41UK&_nc_ht=scontent.fppn1-1.fna&oh=00_AfA4s81ePq0xPFx1pbi8NJfSbU8ovQfCd2zslU3LWRtNNw&oe=64BB0F16'
    })
    .addAnswer(['Escribe alguna de las opciones para ayudarte: (Tabien puedes escribir Menu para regresar en cualquier momento) '])
    .addAnswer(['1️⃣ *Servicios* 🎞️🛒🎮🎧', 'Si deseas conocer que servicios podesmos ofrecerte.',
                '2️⃣ *Llamame* 📲📞📳','Si deseas que te contactemos de la forma mas pronta posible.',
                '3️⃣ *Ayuda* 🧑‍💼🏃‍♂️🛠️','En breves te atenderemos por este medio'],
        {capture:true},
        (ctx, {fallBack}) => {
            if(ctx.body.includes('Servicios') || ctx.body.includes('1') ) return 
            if(ctx.body.includes('Llamame') || ctx.body.includes('2') ) return 
            if(ctx.body.includes('Ayuda') || ctx.body.includes('3') ) return 
            return fallBack
        }, 
        [serviciosFlow, ayudaFlow, llamarFlow])

module.exports = { principalFlow}