function Evento({numero}){

    function meuEvento(){
        alert(`Opa! Fui ativado ${numero}`);
        console.log(`Opa! Fui ativado novamente ${numero}`)
    }

    return(
        <div>
            <h1>Testando Eventos</h1>
            <p>Click para disparar um evento</p>
            <button onClick={meuEvento}>Disparar</button>
        </div>
    )
}

export default Evento