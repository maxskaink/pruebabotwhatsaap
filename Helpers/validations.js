
const isLaboralTime = () => {
    const horaInicioLaboral = 7;
    const horaFinLaboral = 18;
  
    const horaActual = new Date().getHours();

    if (horaActual >= horaInicioLaboral && horaActual < horaFinLaboral) 
      return false;
     else 
      return true;
}


module.exports = { isLaboralTime }