import EventoBotaoMetodoNaProps from "./EventoBotaoMetodoNaProps";

function EventoMetodoNaProps({numero}){

    function meuEvento(){
        console.log(`Opa! Fui ativado novamente ${numero}`)
    }

    return(
        <div>
            <h1>Testando Eventos De Um Método Vindo Pela Props</h1>
            <p>Click para disparar um evento</p>
            <EventoBotaoMetodoNaProps event={meuEvento} text="Primeiro Evento"/>
            {/* <button onClick={meuEvento}>Ativar</button> */}
        </div>
    )
}

export default EventoMetodoNaProps