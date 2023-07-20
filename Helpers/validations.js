
const isLaboralTime = () => {
    const HORA_INICIO = parseInt(process.env.HORA_INICIO)
    const HORA_FINAL = parseInt(process.env.HORA_FINAL)
    const CORRECCION_FORMATO_HORA =  parseInt(process.env.CORRECCION_FORMATO_HORA)

    const horaInicioLaboral = HORA_INICIO - CORRECCION_FORMATO_HORA;
    const horaFinLaboral = HORA_FINAL - CORRECCION_FORMATO_HORA;
  
    const horaActual = new Date().getHours();


    if (horaActual >= horaInicioLaboral && horaActual < horaFinLaboral) 
      return false;
     else 
      return true;
}


module.exports = { isLaboralTime }