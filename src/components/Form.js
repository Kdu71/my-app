function Form(){

    function cadastrarUsuario(e){
        e.preventDefault() //Metodo para pausar a execução afim de mostrar no console.
        console.log('Cadastrou o usuário!!')
    }

    return(
        <div>
            <h1>Meu Cadastro Com Evento</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form