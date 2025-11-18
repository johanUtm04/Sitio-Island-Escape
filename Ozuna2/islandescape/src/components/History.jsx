import { Link } from "react-router-dom";
import '../css/History.css';

function History() {

    const historyData = [
        { type: 'ID EXPEDIENTE', value: 'HNT-OPS-021X' },
        { type: 'CLASIFICACIÓN', value: 'ULTRA SECRETO' },
        { type: 'FECHA DE ACTIVACIÓN', value: '03 FEB 2025' },
        { type: 'OPERATIVO ASIGNADO', value: 'SOLDADO HUNTER' },
        { type: 'UBICACIÓN', value: 'ISLA SIN NOMBRE / MAR ÍNDICO' },
    ];

    const storyParagraphs = [
        {
            key: 1,
            text:
                'El Soldado Hunter fue enviado a una pequeña isla del Mar Índico tras confirmarse el descubrimiento del Núcleo Epsilon, un nuevo tipo de material energético capaz de generar enormes cantidades de potencia estable. La misión inicial consistía en evaluar y asegurar el prototipo.'
        },
        {
            key: 2,
            text:
                'Sin embargo, al llegar, Hunter descubrió que la isla había sido ocupada por el Equipo Cobra, una organización paramilitar conocida por su brutalidad y por el desarrollo de armamento ilegal. Cobra capturó el prototipo y comenzó a usarlo para construir armas experimentales.'
        },
        {
            key: 3,
            text:
                'Con las comunicaciones bloqueadas y sin refuerzos disponibles, Hunter quedó solo detrás de las líneas enemigas. Su misión ahora es recuperar el Núcleo Epsilon, neutralizar a las unidades de Cobra y evitar que el prototipo sea activado como arma definitiva.'
        },
        {
            key: 4,
            text:
                'La isla, convertida en un complejo militar improvisado, está llena de puestos de vigilancia, patrullas armadas y zonas de investigación clandestinas. Cada paso pone a Hunter más cerca del laboratorio central… y del plan final de Cobra.'
        },
        {
            key: 5,
            text:
                'El destino del Núcleo Epsilon, y quizá del equilibrio mundial, depende del éxito de la Operación Omega-021X.'
        },
    ];

    return (
        <section className="history-section" id="seccion-historia">
            <h2 className="section-title">Expediente Clasificado: Orígenes</h2>

            <div className="dossier-container">
                
                <div className="terminal-log-box">
                    <h3 className="log-title">ESTADO: OPERACIÓN EN CURSO</h3>

                    {historyData.map((item, index) => (
                        <div key={index} className="log-entry">
                            <span className="log-type">{item.type}:</span>
                            <span className="log-value">{item.value}</span>
                        </div>
                    ))}

                    <Link to="/descargar">
                        <button className="download-dossier-button">
                            DESCARGAR ARCHIVO COMPLETO
                        </button>
                    </Link>
                </div>

                <div className="narrative-box">
                    <h3 className="narrative-title">REGISTRO DE MISIÓN OMEGA-021X</h3>
                    <div className="narrative-text">
                        {storyParagraphs.map((p) => (
                            <p key={p.key}>{p.text}</p>
                        ))}

                        <div className="signature-line">
                            <span className="signature-text">
                                OPERATIVO HUNTER / ÚLTIMO REPORTE
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default History;
