const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const pregunta1 = document.querySelector('.opcion1:checked').value;
    const pregunta2 = document.querySelector('.opcion2:checked').value;
    const pregunta3 = document.querySelector('.opcion3:checked').value;
    const pregunta4 = document.querySelector('.opcion4:checked').value;
    let definicion = ""
    let cantidadSOC = 0;
    let cantidadPentesting = 0;
    let cantidadInfraestructura = 0;
    let cantidadForense = 0;
    let cantidadGRC = 0;
    let respuestaFinal = "";

    function determinarCarrera(respuesta) {
        switch (respuesta) {
            case "SOC":
                cantidadSOC++;
                break;
            case "Pentesting":
                cantidadPentesting++;
                break;
            case "Infraestructura":
                cantidadInfraestructura++;
                break;
            case "Forense":
                cantidadForense++;
                break;
            case "GRC":
                cantidadGRC++;
                break;
        }
    }

    determinarCarrera(pregunta1);
    determinarCarrera(pregunta2);
    determinarCarrera(pregunta3);
    determinarCarrera(pregunta4);

    switch (true) {
        case cantidadSOC >= 2:
            respuestaFinal = "SOC"
            
            ;
            break;
        case cantidadPentesting >= 2:
            respuestaFinal = "Pentesting"
            definicion = "es una simulación controlada y autorizada de un ciberataque contra un sistema informático, red, aplicación o infraestructura"
            ;
            break;
        case cantidadInfraestructura >= 2:
            respuestaFinal = "Infraestructura"
            definicion = "conjunto integrado de recursos físicos, digitales, humanos y normativos diseñados para proteger los sistemas informáticos, las redes, los datos y las operaciones frente a amenazas, accesos no autorizados o desastres."
            ;
            break;
        case cantidadForense >= 2:
            respuestaFinal = "Forense"
            definicion = "es la disciplina que se encarga de identificar, preservar, extraer, analizar y documentar evidencias digitales después de que ocurre un incidente de seguridad o un delito informático."
            ;
            break;
        case cantidadGRC >= 2:
            respuestaFinal = "GRC"
            definicion = "es un enfoque estratégico que integra Gobernanza, Gestión de Riesgos y Cumplimiento normativo para alinear la seguridad de la información con los objetivos de negocio de una organización."
            ;
            break;
        default:
            respuestaFinal = "No se puede determinar una carrera específica.";
    }
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `${respuestaFinal}: ${definicion}`;
});